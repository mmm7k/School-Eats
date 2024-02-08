import { useEffect, useState } from 'react';
import * as S from './WriteButton.styled';
import { EditOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import { isLoggedIn } from '../../../../commons/globalstate/globalstate';
import { Modal } from 'antd';

export default function WriteButton(): JSX.Element {
  const [isScrolled, setIsScrolled] = useState(false);
  const loggedIn = useRecoilValue(isLoggedIn);

  const loginError = () => {
    Modal.error({
      title: '로그인이 필요합니다!',
    });
  };

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
        {/* <Link href="/boards/write">
          <S.Button>
            <EditOutlined style={{ color: 'white' }} rev={undefined} />
          </S.Button>
        </Link> */}
        {loggedIn ? (
          <Link href="/boards/write">
            <S.Button>
              <EditOutlined style={{ color: 'white' }} rev={undefined} />
            </S.Button>
          </Link>
        ) : (
          <S.Button onClick={loginError}>
            <EditOutlined style={{ color: 'white' }} rev={undefined} />
          </S.Button>
        )}
      </S.Wrapper>
    </>
  );
}
