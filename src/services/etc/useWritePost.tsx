import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRouter } from 'next/router';
import { addDoc, collection } from 'firebase/firestore';
import { Modal } from 'antd';
import { useRecoilValue } from 'recoil';
import { userEmail } from '../../commons/globalstate/globalstate';
import { db } from '../../../pages/_app';

interface WritePost {
  title: string;
  contents: string;
}
const postSchema = yup
  .object({
    title: yup.string().required('제목이 필요합니다.').max(100, '제목은 100자 이하 입니다.'),
    contents: yup.string().required('내용이 필요합니다.').max(5000, '내용은 5000자 이하 입니다.'),
  })
  .required();

export const useWritePost = (menu: string, modaltext: string, routerpath: string) => {
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
      content: modaltext,
    });
  };

  const onSubmit = async (data: WritePost) => {
    const board = collection(db, menu);
    await addDoc(board, {
      title: data.title,
      contents: data.contents,
      timestamp: new Date(),
      email,
    });
    success();
    router.push(routerpath);
  };

  return { register, handleSubmit, errors, onSubmit };
};
