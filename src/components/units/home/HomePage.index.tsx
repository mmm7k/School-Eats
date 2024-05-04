import Banner from './banner/Banner.index';
import FoodQuration from './foodquration/FoodQuration.index';
import CommunityCard from './communitycard/CommunityCard.index';
import MapButton from './mapbutton/MapButton.index';
import YoutubeBanner from './youtubebanner/YoutubeBanner.index';

export default function HomePage(): JSX.Element {
  return (
    <>
      <Banner />
      <YoutubeBanner />
      <FoodQuration />
      <MapButton />
      <CommunityCard />
    </>
  );
}
