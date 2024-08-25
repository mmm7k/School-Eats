import React, { useEffect, useState } from 'react';
import * as S from '../../../../src/styles/board/BoardEdit.styles';
import { useRouter } from 'next/router';
import { useEditBoardPost } from '../../../../src/services/board/useEditBoardPost';
import { useGetDetailBoardPost } from '../../../../src/services/board/useGetDetailBoardPost';
import { useBackToPage } from '../../../../src/hooks/useBackToPage';

export default function BoardEdit() {
  const [selectedFile, setSelectedFile] = useState('');
  const router = useRouter();
  const data = JSON.stringify(router.query);
  const jsonObject = JSON.parse(data);
  const postId = jsonObject.boardid;
  const { register, handleSubmit, errors, onSubmit, onImageChange, isSubmitting } = useEditBoardPost(postId);
  const { data: post } = useGetDetailBoardPost(postId);
  const { onClickBackToPage } = useBackToPage();

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file.name);
    } else {
      setSelectedFile('');
    }
    onImageChange(event); // 이미지 변경 처리
  };

  const extractFileNameFromURL = (url: string) => {
    const parts = url.split('/o/');
    if (parts.length > 1) {
      const filenamePart = parts[1].split('?')[0];
      const decodedFilename = decodeURIComponent(filenamePart);

      // 'board/' 부분을 찾아서 제거합니다.
      const boardPathIndex = decodedFilename.indexOf('board/');
      if (boardPathIndex !== -1) {
        // 'board/' 이후의 문자열을 반환합니다.
        return decodedFilename.substring(boardPathIndex + 'board/'.length);
      }
      return decodedFilename;
    }
    return null;
  };

  useEffect(() => {
    // 컴포넌트 마운트 시 기존 이미지 URL에서 파일 이름을 추출하여 설정
    if (post?.img) {
      const initialFileName = extractFileNameFromURL(post.img);
      //@ts-ignore
      setSelectedFile(initialFileName);
    }
  }, [post]);

  return (
    <>
      <S.TitleWrapper>
        <S.IconWrapper>
          <S.BackButton onClick={onClickBackToPage} />
        </S.IconWrapper>
        <S.TitleText>수정하기</S.TitleText>
      </S.TitleWrapper>
      <S.Wrapper>
        <S.Title>숨겨진 맛집을 공유해주세요!</S.Title>
        <S.SubTitle>여러분만의 맛집을 함께 나눠요!</S.SubTitle>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.InputTitle>제목</S.InputTitle>
          <S.Input {...register('title')} defaultValue={post?.title} placeholder="제목을 입력해주세요." />
          {errors.title && <p>{errors.title.message}</p>}
          <S.InputTitle>내용</S.InputTitle>
          <S.ContentsInput {...register('contents')} defaultValue={post?.contents} placeholder="내용을 입력해주세요." />
          {errors.contents && <p>{errors.contents.message}</p>}
          <S.UploadLabel htmlFor="file-upload">{selectedFile || '사진 선택'}</S.UploadLabel>
          <S.HiddenFileInput id="file-upload" type="file" accept=".jpg,.png" onChange={handleFileChange} />
          <S.SubmitButton type="submit" disabled={isSubmitting}>
            등록하기
          </S.SubmitButton>
        </S.Form>
      </S.Wrapper>
    </>
  );
}
