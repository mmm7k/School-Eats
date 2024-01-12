// import Link from 'next/link';
// import * as S from './Bookmark.styles';
// import { useBookmark } from '../../hooks/useBookmark';
// import { useRouter } from 'next/router';
// import { useRecoilValue } from 'recoil';
// import { userEmail } from '../../../commons/globalstate/globalstate';
// import { useEffect, useState } from 'react';
// import { collection, getDocs, query, where } from 'firebase/firestore';
// import { db } from '../../../../pages/_app';
// interface Bookmark {
//   id: string;
//   placeId?: string;
//   email?: string;
// }

// export default function Bookmark() {
//   const router = useRouter();
//   const data = JSON.stringify(router.query);
//   const jsonObject = JSON.parse(data);
//   const postId = jsonObject.placeid;
//   const email = useRecoilValue(userEmail);
//   const [bookmark, setBookmark] = useState<Bookmark[]>([]);

//   const getBookmark = async () => {
//     let q;

//     q = query(collection(db, 'bookmark'), where('email', '==', email));
//     const snapshot = await getDocs(q);
//     const bookmarkArr = snapshot.docs.map((doc: any) => ({
//       ...doc.data(),
//       id: doc.id,
//     }));

//     setBookmark(bookmarkArr);
//   };
//   useEffect(() => {
//     getBookmark();
//   }, []);

//   console.log(bookmark);
//   console.log(email);
//   return (
//     <>
//       <S.TitleWrapper>
//         <S.IconWrapper>
//           <Link href="/">
//             <S.BackButton />
//           </Link>
//         </S.IconWrapper>
//         <S.Title>찜한 맛집</S.Title>
//       </S.TitleWrapper>
//       <S.Wrapper>
//         {bookmark.map((place) => (
//           <div key={place.id}>
//             {place.placeId} {/* 식당 이름 또는 placeId를 표시 */}
//           </div>
//         ))}
//       </S.Wrapper>
//     </>
//   );
// }

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import * as S from './Bookmark.styles';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { userEmail } from '../../../commons/globalstate/globalstate';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../../../pages/_app';

interface Bookmark {
  id: string;
  placeId?: string;
  email?: string;
}

interface Restaurant {
  id: string;
  title: string;
  rate?: number;
  time?: string;
  breaktime?: string;
  titlemenu?: string;
  // 다른 필요한 필드들...
}

export default function Bookmark() {
  const email = useRecoilValue(userEmail);
  const [bookmark, setBookmark] = useState<Bookmark[]>([]);
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  const getBookmark = async () => {
    const q = query(collection(db, 'bookmark'), where('email', '==', email));
    const snapshot = await getDocs(q);
    const bookmarkArr = snapshot.docs.map((doc: any) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setBookmark(bookmarkArr);
  };

  const getRestaurants = async () => {
    const restaurantsArr: any = [];
    for (const bm of bookmark) {
      const q = query(collection(db, 'all'), where('title', '==', bm.placeId));
      const snapshot = await getDocs(q);
      snapshot.forEach((doc) => {
        restaurantsArr.push({ id: doc.id, ...doc.data() });
      });
    }
    setRestaurants(restaurantsArr);
  };

  useEffect(() => {
    getBookmark();
  }, [email]);

  useEffect(() => {
    if (bookmark.length > 0) {
      getRestaurants();
    }
  }, [bookmark]);

  return (
    <>
      <S.TitleWrapper>
        <S.IconWrapper>
          <Link href="/">
            <S.BackButton />
          </Link>
        </S.IconWrapper>
        <S.Title>찜한 맛집</S.Title>
      </S.TitleWrapper>
      <S.Wrapper>
        {restaurants.map((restaurant) => (
          <div key={restaurant.id}>
            {restaurant.title} {/* 식당의 이름을 표시 */}
            {restaurant.time}
          </div>
        ))}
      </S.Wrapper>
    </>
  );
}
