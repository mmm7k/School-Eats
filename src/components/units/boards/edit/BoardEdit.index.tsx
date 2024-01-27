import React, { useState } from 'react';
import * as S from './BoardEdit.styles';
import { useRouter } from 'next/router';
import { useEditBoardPost } from '../../../hooks/useEditBoardPost';

export default function BoardEdit() {
  const [selectedFile, setSelectedFile] = useState('');
  const router = useRouter();
  const data = JSON.stringify(router.query);
  const jsonObject = JSON.parse(data);
  const postId = jsonObject.boardid;
  const { register, handleSubmit, errors, onSubmit, onImageChange } = useEditBoardPost(postId);
  console.log(postId);
  const goBack = () => {
    router.back();
  };

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file.name);
    } else {
      setSelectedFile('');
    }
    onImageChange(event); // 이미지 변경 처리
  };

  return (
    <>
      <S.TitleWrapper>
        <S.IconWrapper>
          <S.BackButton onClick={goBack} />
        </S.IconWrapper>
        <S.TitleText>수정하기</S.TitleText>
      </S.TitleWrapper>
      <S.Wrapper>
        <S.Title>숨겨진 맛집을 공유해주세요!</S.Title>
        <S.SubTitle>여러분만의 맛집을 함께 나눠요!</S.SubTitle>
        <S.form onSubmit={handleSubmit(onSubmit)}>
          <S.InputTitle>제목</S.InputTitle>
          <S.Input {...register('title')} placeholder="제목을 입력해주세요." />
          {errors.title && <p>{errors.title.message}</p>}
          <S.InputTitle>내용</S.InputTitle>
          <S.ContentsInput {...register('contents')} placeholder="내용을 입력해주세요." />
          {errors.contents && <p>{errors.contents.message}</p>}

          <S.UploadLabel htmlFor="file-upload">{selectedFile || '사진 선택'}</S.UploadLabel>
          <S.HiddenFileInput id="file-upload" type="file" accept=".jpg,.png" onChange={handleFileChange} />
          <S.SubmitButton type="submit">등록하기</S.SubmitButton>
        </S.form>
      </S.Wrapper>
    </>
  );
}
