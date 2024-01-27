import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRouter } from 'next/router';
import { db } from '../../../pages/_app';
import { doc, updateDoc } from 'firebase/firestore';
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

export const useEditBoardPost = (postId: string) => {
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
      content: '게시물 수정에 성공하였습니다.',
    });
  };

  const [image, setImage]: any = useState(null);
  const [uploading, setUploading] = useState(false);

  const onImageChange = (event: any) => {
    if (event.target.files[0]) {
      setImage(event.target.files[0]);
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
        console.error('Error uploading image: ', error);
        setUploading(false);
        return null;
      }
    }
    return null;
  };

  const onSubmit = async (data: any) => {
    const imageUrl = await uploadImage();
    const boardDoc = doc(db, 'board', postId);

    await updateDoc(boardDoc, {
      title: data.title,
      contents: data.contents,
      timestamp: new Date(),
      email,
      ...(imageUrl && { img: imageUrl }), // 새 이미지가 있으면 img 필드 업데이트
    });

    success();
    router.push('/boards');
  };

  return { register, handleSubmit, errors, onSubmit, onImageChange, uploading };
};