import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { ButtonWrapper, CancelButton, SubmitButton, Title, Wrapper } from '../write/BoardWrite.styles';
import { useRouter } from 'next/router';
import { useEditPost } from '../../../hooks/useEditPost';
import { Modal } from 'antd';

const ReactQuill = dynamic(async () => await import('react-quill'), {
  ssr: false,
});

export default function BoardEdit(): JSX.Element  {
  const router = useRouter();
  const { onChangeContents, onChangeTitle, onClickSubmit } = useEditPost();

  const onClickBack = () => {
    router.back();
  };

  const success = () => {
    Modal.success({
      content: '게시물 수정에 성공하였습니다!',
    });
    onClickSubmit();
  };

  return (
    <Wrapper>
      <Title placeholder="제목을 입력하세요." onChange={onChangeTitle} />
      <ReactQuill onChange={onChangeContents} style={{ height: 200 }} />
      <ButtonWrapper>
        <CancelButton onClick={onClickBack}>취소</CancelButton>
        {/* <SubmitButton onClick={onClickSubmit}>등록</SubmitButton> */}
        <SubmitButton onClick={success}>등록</SubmitButton>
      </ButtonWrapper>
    </Wrapper>
  );
}
