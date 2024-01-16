import { useEffect, useState } from 'react';
import * as S from './WriteButton.styled';
import { EditOutlined } from '@ant-design/icons';
import Link from 'next/link';

export default function WriteButton(): JSX.Element {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 250) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <S.Wrapper isScrolled={isScrolled}>
        <Link href="/boards/write">
          <S.Button>
            <EditOutlined style={{ color: 'white' }} rev={undefined} />
          </S.Button>
        </Link>
      </S.Wrapper>
    </>
  );
}
