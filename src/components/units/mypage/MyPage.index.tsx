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
  FireOutlined,
  FormOutlined,
  InfoCircleOutlined,
  MoreOutlined,
  NotificationOutlined,
  QuestionOutlined,
  SmileOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar } from 'antd';
import { useMoveToPage } from '../../hooks/useMoveToPage';

export default function MyPage(): JSX.Element {
  const user = useRecoilValue(layoutEmail);
  const kakaoLogin = useRecoilValue(KakaoLoggedIn);
  const { kakaoLogout } = useKakaoLogin();
  const { onClickLogout } = useLogin();
  const { onClickMoveToPage } = useMoveToPage();
  const router = useRouter();
  const goBack = () => {
    router.back();
  };

  const logout = () => {
    if (kakaoLogin) {
      kakaoLogout();
    } else {
      onClickLogout();
    }
    localStorage.removeItem('sessionExpiry');
    localStorage.removeItem('recoil-persist');
    window.location.href = '/';
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
              size="small"
              shape="square"
              style={{ backgroundColor: '#f6786f', marginRight: '3%' }}
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
          <S.Contents onClick={onClickMoveToPage('/mypage/bookmark')}>
            <S.TextWrapper>
              <S.BookmarkIcon />
              <S.ContentsText>찜한 맛집</S.ContentsText>
            </S.TextWrapper>
            &rarr;
          </S.Contents>
          <S.Contents onClick={onClickMoveToPage('/mypage/myreview')}>
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
          <S.Contents onClick={onClickMoveToPage('/mypage/question')}>
            <S.TextWrapper>
              <EditOutlined style={{ marginLeft: '1%', marginRight: '4%' }} rev={undefined} />
              <S.ContentsText>1:1 문의</S.ContentsText>
            </S.TextWrapper>
            &rarr;
          </S.Contents>
          <S.Contents onClick={onClickMoveToPage('/mypage/request')}>
            <S.TextWrapper>
              <SmileOutlined style={{ marginLeft: '1%', marginRight: '4%' }} rev={undefined} />
              <S.ContentsText>맛집 추가 요청</S.ContentsText>
            </S.TextWrapper>
            &rarr;
          </S.Contents>

          <S.Contents onClick={onClickMoveToPage('/mypage/feedback')}>
            <S.TextWrapper>
              <FireOutlined style={{ marginLeft: '1%', marginRight: '4%' }} rev={undefined} />
              <S.ContentsText>개선 사항 요청</S.ContentsText>
            </S.TextWrapper>
            &rarr;
          </S.Contents>

          <S.Contents onClick={onClickMoveToPage('/notice')}>
            <S.TextWrapper>
              <NotificationOutlined style={{ marginLeft: '1%', marginRight: '4%' }} rev={undefined} />
              <S.ContentsText>공지사항</S.ContentsText>
            </S.TextWrapper>
            &rarr;
          </S.Contents>
          <S.Contents onClick={onClickMoveToPage('/guide')}>
            <S.TextWrapper>
              <InfoCircleOutlined style={{ marginLeft: '1%', marginRight: '4%' }} rev={undefined} />
              <S.ContentsText>이용안내</S.ContentsText>
            </S.TextWrapper>
            &rarr;
          </S.Contents>
        </S.ContentsWrapper>
      </S.Wrapper>
    </>
  );
}
