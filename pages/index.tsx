import Banner from '../src/components/home/banner/Banner.index';
import CommunityCard from '../src/components/home/communitycard/CommunityCard.index';
import FoodQuration from '../src/components/home/foodquration/FoodQuration.index';
import MapButton from '../src/components/home/mapbutton/MapButton.index';
import YoutubeBanner from '../src/components/home/youtubebanner/YoutubeBanner.index';

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
