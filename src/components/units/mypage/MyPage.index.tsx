import Link from 'next/link';
import * as S from './MyPage.styles';
import { useRecoilValue } from 'recoil';
import { KakaoLoggedIn, layoutEmail } from '../../../commons/globalstate/globalstate';
import { useKakaoLogin } from '../../hooks/useKakoLogin';
import { useLogin } from '../../hooks/useLogin';
import { useRouter } from 'next/router';
import {
  CommentOutlined,
  CustomerServiceOutlined,
  EditOutlined,
  FormOutlined,
  InfoCircleOutlined,
  MoreOutlined,
  NotificationOutlined,
  QuestionOutlined,
  SmileOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar } from 'antd';

export default function MyPage(): JSX.Element {
  const user = useRecoilValue(layoutEmail);
  const kakaoLogin = useRecoilValue(KakaoLoggedIn);
  const { kakaoLogout } = useKakaoLogin();
  const { onClickLogout } = useLogin();
  const router = useRouter();
  const goBack = () => {
    router.back();
  };

  const logout = () => {
    console.log('a');
    if (kakaoLogin) {
      kakaoLogout();
    } else {
      onClickLogout();
    }
  };
  return (
    <>
      <S.TitleWrapper>
        <S.IconWrapper>
          <S.BackButton onClick={goBack} />
        </S.IconWrapper>
        <S.Title>마이페이지</S.Title>
        <S.IconWrapper>
          <S.SearchIcon />
          <Link href="/mypage/bookmark">
            <S.TitleBookmarkIcon />
          </Link>
        </S.IconWrapper>
      </S.TitleWrapper>
      <S.Wrapper>
        <S.UserWrapper>
          <S.User>
            <Avatar
              shape="square"
              style={{ backgroundColor: '#f6786f', marginBottom: '1px', marginRight: '3%' }}
              icon={<UserOutlined rev={undefined} />}
            />
            <S.UserEmail>{user}님, 반갑습니다!</S.UserEmail>
          </S.User>
          <S.Logout onClick={() => logout()}>로그아웃</S.Logout>
        </S.UserWrapper>
        <S.Divine />
        <CommentOutlined style={{ marginLeft: '3.5%', marginRight: '1.3%', marginTop: '6%' }} rev={undefined} />
        <S.ContentsTitle>나의 활동</S.ContentsTitle>
        <S.ContentsWrapper>
          <S.Contents>
            <S.TextWrapper>
              <S.BookmarkIcon />
              <S.ContentsText>찜한 맛집</S.ContentsText>
            </S.TextWrapper>
            &rarr;
          </S.Contents>
          <S.Contents>
            <S.TextWrapper>
              <FormOutlined style={{ marginLeft: '1%', marginRight: '4%' }} rev={undefined} />
              <S.ContentsText>나의 리뷰</S.ContentsText>
            </S.TextWrapper>
            &rarr;
          </S.Contents>
        </S.ContentsWrapper>
        <S.Divine />
        <CustomerServiceOutlined
          style={{ marginLeft: '3.5%', marginRight: '1.3%', marginTop: '10%' }}
          rev={undefined}
        />
        <S.ContentsTitle>고객 센터</S.ContentsTitle>
        <S.ContentsWrapper>
          <S.Contents>
            <S.TextWrapper>
              <EditOutlined style={{ marginLeft: '1%', marginRight: '4%' }} rev={undefined} />
              <S.ContentsText>1:1 문의</S.ContentsText>
            </S.TextWrapper>
            &rarr;
          </S.Contents>
          <S.Contents>
            <S.TextWrapper>
              <NotificationOutlined style={{ marginLeft: '1%', marginRight: '4%' }} rev={undefined} />
              <S.ContentsText>공지사항</S.ContentsText>
            </S.TextWrapper>
            &rarr;
          </S.Contents>
          <S.Contents>
            <S.TextWrapper>
              <SmileOutlined style={{ marginLeft: '1%', marginRight: '4%' }} rev={undefined} />
              <S.ContentsText>맛집추가 요청</S.ContentsText>
            </S.TextWrapper>
            &rarr;
          </S.Contents>
          <S.Contents>
            <S.TextWrapper>
              <InfoCircleOutlined style={{ marginLeft: '1%', marginRight: '4%' }} rev={undefined} />
              <S.ContentsText>이용안내</S.ContentsText>
            </S.TextWrapper>
            &rarr;
          </S.Contents>
          <S.Contents>
            <S.TextWrapper>
              <MoreOutlined style={{ marginLeft: '1%', marginRight: '4%' }} rev={undefined} />
              <S.ContentsText>기타</S.ContentsText>
            </S.TextWrapper>
            &rarr;
          </S.Contents>
        </S.ContentsWrapper>
      </S.Wrapper>
    </>
  );
}
