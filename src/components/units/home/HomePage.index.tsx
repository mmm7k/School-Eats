import styled from '@emotion/styled';
import Banner from './banner/Banner.index';
import Card from './card/Card.index';
import FoodQuration from './foodquration/FoodQurationindex';
import CommunityCard from './communitycard/CommunityCard.index';
import MapButton from './mapbutton/MapButton.index copy';

export default function HomePage(): JSX.Element {
  const Wrapper = styled.div`
    display: flex;
    justify-content: center;
  `;
  return (
    <>
      <Banner />
      <Card />
      <FoodQuration />
      <MapButton />
      <CommunityCard />
    </>
  );
}
