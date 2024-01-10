import { useEffect } from 'react';

import { useRouter } from 'next/router';

export default function useKoreanMap(): JSX.Element {
  const router = useRouter();
  useEffect(() => {
    // 맵 만들기 ===================================
    //@ts-ignore
    if (window.kakao && window.kakao.maps) {
      //@ts-ignore
      kakao.maps.load(() => {
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div
          mapOption = {
            //@ts-ignore
            center: new kakao.maps.LatLng(35.146777765504034, 126.9252125104924), // 지도의 중심좌표
            level: 4, // 지도의 확대 레벨
          };
        //@ts-ignore
        var map = new kakao.maps.Map(mapContainer, mapOption);

        const locations = [
          //한식
          {
            name: '미미원',
            imageSrc: '/logo.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(35.146898076214555, 126.92665273360377),
            route: '/asdasd',
          },
          {
            name: '고기오닭갈비',
            imageSrc: '/logo.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(35.14449078311788, 126.92933794935098),
            route: '/asdasd',
          },
          {
            name: '길목식당',
            imageSrc: '/logo.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(35.14515740629279, 126.92868169258986),
            route: '/asdasd',
          },
          {
            name: '무진장떡볶이',
            imageSrc: '/logo.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(35.14441879083262, 126.9295382804047),
            route: '/asdasd',
          },
        ];
        locations.map((location, index) => {
          //@ts-ignore
          const markerImage = new kakao.maps.MarkerImage(location.imageSrc, new kakao.maps.Size(30, 30), {
            //@ts-ignore
            offset: new kakao.maps.Point(14, 0),
          });

          //@ts-ignore
          const marker = new kakao.maps.Marker({
            position: location.position,
            image: markerImage,
          });

          marker.setMap(map);

          const content =
            '<div class="customoverlay">' +
            `  <a href="#" id="navigateLink${index}"  style="display: block; background: #50627F; color: #fff; text-align: center; height: 20px; line-height: 22px; border-radius: 4px; padding: 0px 10px; font-size:12px; text-decoration:none;">` +
            `    <span class="title">${location.name}</span>` +
            '  </a>' +
            '</div>';

          const position = location.position;
          //@ts-ignore
          const customOverlay = new kakao.maps.CustomOverlay({
            map: map,
            position: position,
            content: content,
            yAnchor: 1,
          });
          const navigateLink = document.getElementById(`navigateLink${index}`);
          if (navigateLink) {
            navigateLink.addEventListener('click', function (e) {
              e.preventDefault();
              router.push(location.route);
            });
          }
          kakao.maps.event.addListener(marker, 'click', function () {
            // HTML 콘텐츠를 생성하고 스타일을 적용합니다
            router.push(location.route);
          });
        });
      });
    }
  }, []);

  return <></>;
}
