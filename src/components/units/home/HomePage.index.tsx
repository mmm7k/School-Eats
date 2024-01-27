import styled from '@emotion/styled';
import Banner from './banner/Banner.index';
import Card from './card/Card.index';
import FoodQuration from './foodquration/FoodQurationindex';
import CommunityCard from './communitycard/CommunityCard.index';
import MapButton from './mapbutton/MapButton.index';
import YoutubeBanner from './youtubebanner/YoutubeBanner.index';

export default function HomePage(): JSX.Element {
  const Wrapper = styled.div`
    display: flex;
    justify-content: center;
  `;
  return (
    <>
      <Banner />
      {/* <Card /> */}
      <YoutubeBanner />
      <FoodQuration />
      <MapButton />
      <CommunityCard />
    </>
  );
}
