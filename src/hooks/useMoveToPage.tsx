import { useRouter } from 'next/router';

export const useMoveToPage = () => {
  const router = useRouter();

  const onClickMoveToPage = (path: string) => () => {
    router.push(path);
  };

  return {
    onClickMoveToPage,
  };
};
