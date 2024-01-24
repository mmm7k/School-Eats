import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRouter } from 'next/router';
import { db } from '../../../pages/_app';
import { addDoc, collection } from 'firebase/firestore';
import { Modal } from 'antd';
import { useRecoilValue } from 'recoil';
import { userEmail } from '../../commons/globalstate/globalstate';
import { useState } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const postSchema = yup
  .object({
    title: yup.string().required('제목이 필요합니다.').max(100, '제목은 100자 이하 입니다.'),
    contents: yup.string().required('내용이 필요합니다.').max(5000, '내용은 5000자 이하 입니다.'),
  })
  .required();

export const useWriteBoardPost = () => {
  const router = useRouter();
  const email = useRecoilValue(userEmail);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(postSchema),
  });

  const success = () => {
    Modal.success({
      content: '게시물 등록에 성공하였습니다.',
    });
  };

  const [image, setImage]: any = useState(null);
  const [uploading, setUploading] = useState(false);

  // const onImageChange = async (event: any) => {
  //   if (event.target.files[0]) {
  //     setImage(event.target.files[0]);
  //   }
  // };
  const onImageChange = (event: any) => {
    if (event.target.files[0]) {
      const file = event.target.files[0];
      // const fileType = file.type;

      // // PNG와 JPG 이미지만 허용
      // if (fileType === 'image/png' || fileType === 'image/jpeg') {
      setImage(file);
      // } else {
      //   alert('PNG 또는 JPG 이미지만 업로드할 수 있습니다.');
      //   // 파일 선택 초기화
      //   event.target.value = '';
      // }
    }
  };

  const uploadImage = async () => {
    if (image) {
      const storage = getStorage();

      const storageRef = ref(storage, `board/${image.name}`);
      setUploading(true);
      try {
        const snapshot = await uploadBytes(storageRef, image);
        const url = await getDownloadURL(snapshot.ref);
        setUploading(false);
        return url;
      } catch (error) {
        alert('Error uploading image: ' + error);
        setUploading(false);
        return null;
      }
    }
    return null;
  };

  const onSubmit = async (data: any) => {
    const imageUrl = await uploadImage();
    const board = collection(db, 'board');
    await addDoc(board, {
      title: data.title,
      contents: data.contents,
      timestamp: new Date(),
      email,
      img: imageUrl,
      commentscount: 0,
      likecount: 0,
    });
    success();
    router.push('/boards');
  };

  return { register, handleSubmit, errors, onSubmit, onImageChange, uploading };
};
