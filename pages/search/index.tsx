import * as S from '../../src/styles/search/Search.styles';
import { SearchOutlined } from '@ant-design/icons';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePlaceSearch } from '../../src/services/etc/usePlaceSearch';
import { useBackToPage } from '../../src/hooks/useBackToPage';

export default function Search() {
  const { onClickBackToPage } = useBackToPage();
  const [searchTerm, setSearchTerm] = useState(''); // 사용자 입력을 추적하는 상태
  const searchResults = usePlaceSearch('all', searchTerm); // 훅 사용

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value); // 입력 변경 시 searchTerm 업데이트
  };

  return (
    <>
      <S.SearchWrapper>
        <S.IconWrapper>
          <S.BackButton onClick={onClickBackToPage} />
        </S.IconWrapper>
        <S.SearchDiv>
          <SearchOutlined style={{ color: '#848484' }} rev={undefined} />
          <S.SearchInput
            placeholder="맛집이나 찾으시는 음식을 검색해보세요!"
            value={searchTerm}
            onChange={handleSearchInputChange}
          ></S.SearchInput>
        </S.SearchDiv>
      </S.SearchWrapper>

      {searchResults.map((place) => (
        <Link href={`/place/${place.id}`}>
          <S.BookmarkWrapper key={place.id}>
            <S.BookmarkTitle>
              {place.title}&nbsp;&nbsp;&nbsp;
              <S.RateWrapper>
                <Image
                  src={'/common/rate.png'}
                  alt={place.title}
                  width={11}
                  height={11}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                />
                {place.rate?.toFixed(1)}({place.commentscount})
              </S.RateWrapper>
            </S.BookmarkTitle>
            <S.BookmarkText>
              {place.time}&nbsp;브레이크 타임:{place.breaktime}
              <br />
              {place.titlemenu}
            </S.BookmarkText>
          </S.BookmarkWrapper>
        </Link>
      ))}
    </>
  );
}
