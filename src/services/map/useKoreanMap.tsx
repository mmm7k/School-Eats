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
            center: new kakao.maps.LatLng(35.14637162707166, 126.92806609511922), // 지도의 중심좌표
            level: 4, // 지도의 확대 레벨
          };
        //@ts-ignore
        var map = new kakao.maps.Map(mapContainer, mapOption);

        const locations = [
          //한식

          {
            name: '고기오닭갈비',
            imageSrc: '/logo.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(35.14449078311788, 126.92933794935098),
            route: '/place/고기오닭갈비',
          },
          {
            name: '길목식당',
            imageSrc: '/logo.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(35.14515740629279, 126.92868169258986),
            route: '/place/길목식당',
          },
          {
            name: '무진장떡볶이',
            imageSrc: '/logo.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(35.14441879083262, 126.9295382804047),
            route: '/place/무진장떡볶이',
          },
          {
            name: '보해식당',
            imageSrc: '/logo.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(35.14555366799371, 126.9281107099927),
            route: '/place/보해식당',
          },

          {
            name: '마당쇠',
            imageSrc: '/logo.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(35.145157288258524, 126.92848142205447),
            route: '/place/마당쇠',
          },
          {
            name: '벼락',
            imageSrc: '/logo.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(35.144790779038544, 126.9298424795479),
            route: '/place/벼락',
          },

          {
            name: '돈웅',
            imageSrc: '/logo.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(35.14440312056813, 126.92971661543767),
            route: '/place/돈웅',
          },

          {
            name: '옴서감서',
            imageSrc: '/logo.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(35.14441011875619, 126.93012812067502),
            route: '/place/옴서감서',
          },

          {
            name: '송죽',
            imageSrc: '/logo.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(35.14463504728581, 126.92941738372326),
            route: '/place/송죽',
          },

          {
            name: '동궁찜닭',
            imageSrc: '/logo.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(35.145482896482356, 126.93040154825137),
            route: '/place/동궁찜닭',
          },

          {
            name: '이조감자탕',
            imageSrc: '/logo.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(35.14507882521611, 126.9291728352491),
            route: '/place/이조감자탕',
          },

          {
            name: '밤실골국밥',
            imageSrc: '/logo.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(35.148201575336635, 126.93229776026321),
            route: '/place/밤실골국밥',
          },
          {
            name: '박대감집',
            imageSrc: '/logo.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(35.14534900362218, 126.9287802892827),
            route: '/place/박대감집',
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
