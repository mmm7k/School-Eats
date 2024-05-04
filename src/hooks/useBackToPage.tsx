import { useRouter } from 'next/router';

export const useBackToPage = () => {
  const router = useRouter();

  const onClickBackToPage = () => {
    router.back();
  };
  return {
    onClickBackToPage,
  };
};
