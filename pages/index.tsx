import Banner from '../src/components/units/home/banner/Banner.index';
import CommunityCard from '../src/components/units/home/communitycard/CommunityCard.index';
import FoodQuration from '../src/components/units/home/foodquration/FoodQuration.index';
import MapButton from '../src/components/units/home/mapbutton/MapButton.index';
import YoutubeBanner from '../src/components/units/home/youtubebanner/YoutubeBanner.index';

export default function Home() {
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
