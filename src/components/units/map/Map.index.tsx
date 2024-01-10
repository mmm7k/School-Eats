import { ChangeEvent, useState } from 'react';

import * as S from './Map.styled';
import { useMap } from '../../hooks/useMap';

export default function Map(): JSX.Element {
  const [school, setSchool] = useState('조선대 맛집');
  useMap(school);

  const onChangeSchool = (event: ChangeEvent<HTMLInputElement>): void => {
    setSchool(event.target.value);
  };

  return (
    <S.Wrapper>
      <S.Map id="map"></S.Map>
    </S.Wrapper>
  );
}
