import Link from 'next/link';
import * as S from './LayoutFooter.styles';

export default function LayoutFooter(): JSX.Element {
  return (
    <>
      <S.Wrapper>
        <Link href="notice">
          <S.Request>공지사항</S.Request>
        </Link>
        &nbsp;&nbsp;&nbsp;|&nbsp; &nbsp;&nbsp;
        <Link href="guide">
          <S.Request>이용안내</S.Request>
        </Link>
        &nbsp;&nbsp;&nbsp;|&nbsp; &nbsp;&nbsp;
        <Link href="feedback">
          <S.Request>문의</S.Request>
        </Link>
        <S.Header>(주)School Eats</S.Header>
        <S.Infor>
          대표자: 김민수
          <br />
          사업자 등록번호:-
          <br />
          통신판매업신고번호:-
          <br />
          개인정보관리책임 : 김민수
          <br />
          주소: -
          <br />
          이메일: computerking0646@gmail.com
          <br />
          SchoolEats All right reserved.
          <br />
          고객 센터 회사소개 인재채용 제휴제안 이용약관
          <br />
          개인정보처리방침 ⓒ SCHOOL EATS Corp.
        </S.Infor>
      </S.Wrapper>
    </>
  );
}
