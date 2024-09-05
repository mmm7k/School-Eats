import { useEffect, useState } from 'react';
import * as S from './ScrollButton.styled';

export default function ScrollButton(): JSX.Element {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const checkScrollTop = () => {
      if (!showButton && window.pageYOffset > 250) {
        setShowButton(true);
      } else if (showButton && window.pageYOffset <= 250) {
        setShowButton(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);

    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showButton]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <S.Wrapper>{showButton && <S.Button onClick={scrollToTop}>↑</S.Button>}</S.Wrapper>
    </>
  );
}
