import { useEffect } from 'react';

import { useRouter } from 'next/router';

export default function useMap(): JSX.Element {
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
            name: '동대문엽기떡볶이',
            imageSrc: '/logo.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(35.146016400812464, 126.92944636919275),
            route: '/place/동대문엽기떡볶이',
          },

          {
            name: '신전떡볶이',
            imageSrc: '/logo.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(35.146160415210275, 126.92909782458489),
            route: '/place/신전떡볶이',
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

          //중식
          {
            name: '백두산',
            imageSrc: '/logo.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(35.14359797325633, 126.92482585917169),
            route: '/place/백두산',
          },
          {
            name: '열도지',
            imageSrc: '/logo.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(35.14708066821672, 126.92312443151344),
            route: '/place/열도지',
          },

          {
            name: '일품',
            imageSrc: '/logo.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(35.14556586537565, 126.92969641170197),
            route: '/place/일품',
          },

          {
            name: '옌타이',
            imageSrc: '/logo.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(35.14524404050269, 126.93040998190367),
            route: '/place/옌타이',
          },

          {
            name: '피슈마라홍탕',
            imageSrc: '/logo.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(35.14700929266037, 126.9279859726431),
            route: '/place/피슈마라홍탕',
          },

          {
            name: '탕화쿵푸마라탕',
            imageSrc: '/logo.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(35.144405108979605, 126.92926120797044),
            route: '/place/탕화쿵푸마라탕',
          },

          {
            name: '마라클럽',
            imageSrc: '/logo.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(35.14647573716354, 126.92883417725054),
            route: '/place/마라클럽',
          },

          //일식
          {
            name: '달곰식당',
            imageSrc: '/logo.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(35.148389608485296, 126.92628924778579),
            route: '/place/달곰식당',
          },
          {
            name: '소보쿠',
            imageSrc: '/logo.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(35.14720714131704, 126.92723133525503),
            route: '/place/소보쿠',
          },
          {
            name: '통큰돈까스',
            imageSrc: '/logo.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(35.14523238403192, 126.92973510658162),
            route: '/place/통큰돈까스',
          },

          {
            name: '돈까스틱',
            imageSrc: '/logo.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(35.14480684564143, 126.93034999876991),
            route: '/place/돈까스틱',
          },

          {
            name: '라멘티스트',
            imageSrc: '/logo.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(35.14516003902124, 126.92932914059989),
            route: '/place/라멘티스트',
          },

          {
            name: '교다이',
            imageSrc: '/logo.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(35.14502759073875, 126.93019617867957),
            route: '/place/교다이',
          },

          //양식
          {
            name: '부엌간',
            imageSrc: '/logo.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(35.14922179431202, 126.92741610454412),
            route: '/place/부엌간',
          },
          {
            name: '행복경양식',
            imageSrc: '/logo.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(35.149083012350346, 126.92523783708435),
            route: '/place/행복경양식',
          },

          {
            name: '피렌체',
            imageSrc: '/logo.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(35.145592898249774, 126.92968267121469),
            route: '/place/피렌체',
          },
          {
            name: '헝그리브라더스',
            imageSrc: '/logo.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(35.14606589092191, 126.9293009228942),
            route: '/place/헝그리브라더스',
          },

          {
            name: '프랭크버거',
            imageSrc: '/logo.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(35.14575312478092, 126.93008856450622),
            route: '/place/프랭크버거',
          },
          {
            name: '노브랜드버거',
            imageSrc: '/logo.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(35.145176528117496, 126.93056641511407),
            route: '/place/노브랜드버거',
          },
          {
            name: '맘스터치',
            imageSrc: '/logo.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(35.145428957946486, 126.93065124744335),
            route: '/place/맘스터치',
          },

          //카페
          {
            name: '소맥베이커리',
            imageSrc: '/logo.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(35.14512088091175, 126.92067364615829),
            route: '/place/소맥베이커리',
          },
          {
            name: '솔티드머랭',
            imageSrc: '/logo.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(35.148196020756, 126.9266268771945),
            route: '/place/솔티드머랭',
          },
          {
            name: '스타벅스',
            imageSrc: '/logo.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(35.14459266339337, 126.93016088563874),
            route: '/place/스타벅스',
          },
          {
            name: '코로로9',
            imageSrc: '/logo.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(35.147688364546944, 126.92557656534944),
            route: '/place/코코로9',
          },
          {
            name: '플로리다',
            imageSrc: '/logo.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(35.14926498612606, 126.9243487535859),
            route: '/place/플로리다',
          },

          {
            name: '사보르커피',
            imageSrc: '/logo.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(35.14501647357641, 126.9304568138993),
            route: '/place/사보르커피',
          },

          {
            name: '카페도심',
            imageSrc: '/logo.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(35.14576697464869, 126.93066193452695),
            route: '/place/카페도심',
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
