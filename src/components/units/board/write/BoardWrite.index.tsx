// import { ButtonWrapper, CancelButton, SubmitButton, Title, Wrapper } from './BoardWrite.styles';
// import dynamic from 'next/dynamic';
// import 'react-quill/dist/quill.snow.css';
// import { useMoveToPage } from '../../../hooks/useMoveToPage';
// import { useWritePost } from '../../../hooks/useWritePost';
// import { Modal } from 'antd';

// const ReactQuill = dynamic(async () => await import('react-quill'), {
//   ssr: false,
// });

// export default function BoardWrite(): JSX.Element {
//   const { onChangeContents, onChangeTitle, onClickSubmit } = useWritePost();
//   const { onClickMoveToPage } = useMoveToPage();

//   return (
//     <Wrapper>
//       <Title placeholder="제목을 입력하세요." onChange={onChangeTitle} />
//       <ReactQuill onChange={onChangeContents} style={{ height: 200 }} />

//       <ButtonWrapper>
//         <CancelButton onClick={onClickMoveToPage('/boards')}>취소</CancelButton>
//         <SubmitButton onClick={onClickSubmit}>등록</SubmitButton>
//       </ButtonWrapper>
//     </Wrapper>
//   );
// }
