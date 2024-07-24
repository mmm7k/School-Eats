# School Eats

> **조선대학교 맛집 정보 및 공유 웹** <br/> **개발기간: 2024.01 ~ 2024.02** <br/> **1인 개발** <br/> **데이터베이스: 파이어베이스** <br/> **배포: Vercel**

## 배포 주소

> [https://schooleats.vercel.app/](https://schooleats.vercel.app/)

## 프로젝트 소개

School Eats는 매일 점심을 고민하는 대학생들을 위한 커뮤니티 웹입니다.<br/>
모바일 환경을 주로 사용하는 학생들을 고려하여 모바일 퍼스트로 구현하였으며 PWA를 적용하였습니다.<br/>
배포 첫날 일일 사용자 약 870명을 기록하였습니다.

<img src="https://github.com/computerkingminsu/School-Eats/assets/129649787/4f2c03a9-ff9d-47a1-8030-bda52e75174f" width="50%" height="40%"/>

## 주요 기능 📦

### ⭐️ SCROll TOP BUTTON

- 모바일 사용자를 위해 일정 스크롤을 내릴 시 scroll top button 이 디스플레이 되어 버튼 클릭시 화면 상단으로 바로 이동합니다.
  <br/>[코드 바로가기](https://velog.io/@reactmonster/school-eats-scroll-top-button)

<img src="https://github.com/computerkingminsu/School-Eats/assets/129649787/435ef711-197a-4faa-99dd-f8f62c4df662" width="25%" height="25%"/>

### ⭐️ SEARCH

- 맛집의 이름 또는 메뉴로 맛집을 검색 할 수 있습니다. 검색한 맛집을 클릭시 해당 맛집의 상세페이지로 이동합니다.
  <br/>[코드 바로가기](https://velog.io/@reactmonster/school-eats-search-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84)

<img src="https://github.com/computerkingminsu/School-Eats/assets/129649787/7b6b2fe0-b368-417a-8ed7-bb5797f2d33e" width="25%" height="25%"/>

### ⭐️ BOOKMARK

- 맛집 상세페이지에서 북마크 버튼을 누르면 마이페이지 또는 상단의 북마크 버튼을 통해 북마크한 맛집들을 한눈에 볼 수 있습니다.
  <br/>[코드 바로가기](https://velog.io/@reactmonster/school-eats-Bookmark-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84)

<img src="https://github.com/computerkingminsu/School-Eats/assets/129649787/dfb39a08-c9f0-40e8-b153-06ef6197d234" width="25%" height="25%"/>

### ⭐️ 맛집 지도

- 카카오 맵 API를 통해 맛집들의 위치를 지도상의 마커로 카테고리별로 구현하였습니다. 마커 클릭 시 해당 맛집의 상세 페이지로 이동합니다.
  <br/>[코드 바로가기](https://velog.io/@reactmonster/school-eats-%EC%B9%B4%EC%B9%B4%EC%98%A4-%EB%A7%B5-%EB%A7%9B%EC%A7%91-%EB%A7%88%EC%BB%A4)

<img src="https://github.com/computerkingminsu/School-Eats/assets/129649787/02809496-5be6-46eb-9528-44e3a6c2f65f" width="25%" height="25%"/>

### ⭐️ 맛집 투어

- 맛집들을 한눈에 볼 수 있으며 필터 기능을 통해 리뷰많은순, 별점높은순으로 맛집들을 확인 할 수 있으며 <br/>
  카테고리를 통해 맛집들을 상세 분류 하였습니다.
- 데이터를 캐싱하고, 효율적으로 재사용하기 위해 react-query를 사용하였습니다.
  <br/>[코드 바로가기](https://velog.io/@reactmonster/school-eats-%EB%A7%9B%EC%A7%91-%EB%A6%AC%EC%8A%A4%ED%8A%B8-%EB%B0%8F-%ED%95%84%ED%84%B0)

<img src="https://github.com/computerkingminsu/School-Eats/assets/129649787/b2bc1cf4-1d86-42fb-a20c-9e17b24562b0" width="25%" height="25%"/>

### ⭐️ 맛집 상세 페이지

- 맛집들의 상세정보를 확인 할 수 있습니다. 로그인 한 유저는 북마크 기능을 이용 할 수 있으며 별점과 리뷰를 남길 수 있습니다.<br/>
  사용자가 남긴 리뷰는 실시간으로 별점에 반영됩니다.
  <br/>[코드 바로가기](https://velog.io/@reactmonster/school-eats-%EB%A7%9B%EC%A7%91-%EC%83%81%EC%84%B8-%ED%8E%98%EC%9D%B4%EC%A7%80-%EB%B3%84%EC%A0%90-%EB%B0%8F-%EB%8C%93%EA%B8%80-crud)

<img src="https://github.com/computerkingminsu/School-Eats/assets/129649787/11c0de61-42a0-428f-b912-1c8ff68d104f" width="25%" height="25%"/>

### ⭐️ 커뮤니티 CRUD 및 좋아요,스크랩

- CRUD, 데이터를 캐싱하고, 효율적으로 재사용하기 위해 react-query를 사용하였습니다.
- 좋아요, 스크랩 기능을 제공합니다.
  <br/>[코드 바로가기(CRUD)](https://velog.io/@reactmonster/school-eats-%EC%BB%A4%EB%AE%A4%EB%8B%88%ED%8B%B0-CRUD)
  <br/>[코드 바로가기(좋아요 및 스크랩)](https://velog.io/@reactmonster/school-eats-%EC%BB%A4%EB%AE%A4%EB%8B%88%ED%8B%B0-CRUD-ls41626g)

<img src="https://github.com/computerkingminsu/School-Eats/assets/129649787/c6c36dcf-464a-43e5-9fb6-2a9b10739f16" width="25%" height="25%"/>

### ⭐️ 마이페이지

- 사용자의 활동 기록을 한눈에 확인 할 수 있으며 고객센터를 이용 할 수 있습니다.
  <br/>[코드 바로가기](https://velog.io/@reactmonster/school-eats-%EB%A7%88%EC%9D%B4%ED%8E%98%EC%9D%B4%EC%A7%80-%EB%B6%81%EB%A7%88%ED%81%AC%ED%95%9C-%EA%B2%8C%EC%8B%9C%EB%AC%BC)

<img src="https://github.com/computerkingminsu/School-Eats/assets/129649787/bee29c6e-a3c3-4624-8632-79d106241567" width="25%" height="25%"/>

### ⭐️ 이메일 로그인 및 카카오 로그인

- 이메일 로그인과 카카오 로그인을 지원합니다. <br/>
  recoil을 이용해 로그인 상태관리를 하였습니다.
  <br/>[코드 바로가기](https://velog.io/@reactmonster/school-eats-%EC%9D%B4%EB%A9%94%EC%9D%BC-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EB%B0%8F-%EC%B9%B4%EC%B9%B4%EC%98%A4-%EB%A1%9C%EA%B7%B8%EC%9D%B8-with.-recoil-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EC%83%81%ED%83%9C%EA%B4%80%EB%A6%AC)

<img src="https://github.com/computerkingminsu/School-Eats/assets/129649787/2f4bfdc0-2217-4bc6-8fe8-fac16b0cc522" width="25%" height="25%"/>

### ⭐️ PWA

- 안드로이드 설치 : https://schooleats.vercel.app 링크 복사 > 구글 크롬 검색창에 입력 > 페이지 접속 > 우측 상단 공유하기 아이콘(점3개) 클릭 > "앱 설치" 버튼 클릭을 하면 홈 화면에 추가됩니다.
- 아이폰 설치 : https://schooleats.vercel.app 링크 복사 > 구글 크롬 검색창에 입력 > 페이지 접속 > 우측 상단 공유하기 아이콘 클릭 > "홈 화면에 추가" 클릭> "추가" 버튼을 클릭하면 홈 화면에 추가됩니다.

---

## 화면 구성 📺

### 데스크톱 뷰

<img src="https://github.com/computerkingminsu/School-Eats/assets/129649787/60909f83-1139-4721-b2d6-7845c7abc59e" width="40%" height="40%"/>

### 모바일 뷰

<img src="https://github.com/computerkingminsu/School-Eats/assets/129649787/918466d9-2ac3-4fce-a1cf-f451a9b64cc1" width="25%" height="25%"/>

---

## 트러블 슈팅 💡

### 문제 배경
- 맛집 투어 페이지에서 다수의 식당 이미지와 데이터를 불러오는 과정에서 렌더링 속도가 느려지는 문제가 있었습니다. 특히 클라이언트 사이드 렌더링(CSR) 방식으로 인해, 사용자가 페이지를 완전히 로드하기까지 시간이 오래 걸렸습니다. 이는 사용자 경험에 부정적인 영향을 미쳤습니다.

### 해결 방법
- 서버 사이드 렌더링(SSR)을 도입하여 문제를 해결했습니다. SSR을 통해 서버에서 초기 HTML을 생성하고, 클라이언트 측에서 최소한의 자바스크립트 작업만으로 페이지를 렌더링할 수 있도록 했습니다. 이를 통해 초기 페이지 로딩 시간이 대폭 단축되었습니다.

### 이전 코드와 비교
![ssr 적용 전](https://github.com/user-attachments/assets/965ac0c9-259c-40d3-8f53-7d8b76e637da)

- 이전 코드 (CSR): 클라이언트에서 모든 렌더링 작업이 이루어졌고, 페이지 로딩 시간은 평균 9.649초였습니다.
![ssr 적용 후](https://github.com/user-attachments/assets/74ac6d88-f0ef-42d4-a21b-c7797a97de83)

- SSR 도입 후: 서버에서 HTML을 미리 렌더링해 클라이언트에 전달하여 로딩 시간을 2.319초로 줄였습니다.

### 배우게 된 점
SSR 도입을 통해 다수의 이미지와 데이터를 효율적으로 처리할 수 있음을 깨달았습니다. 이를 통해 사용자 경험이 크게 향상되었으며, SSR의 중요성을 다시 한번 확인할 수 있었습니다. 이러한 성능 최적화는 웹 애플리케이션의 전반적인 품질을 높이는 데 중요한 요소임을 배웠습니다.




## 시작 가이드

### Requirements

For building and running the application you need:

- [Node.js]
- [yarn]

### Installation

```bash
$ git clone https://github.com/computerkingminsu/School-Eats.git
$ yarn install
$ yarn dev
```

### 로그인이 필요한 기능 이용 시 샘플계정 ID/PW

- ID : sample@sample.com
- PW : 123456

## Stacks 🐈

### Environment

- [Visual Studio Code]
- [Git]
- [Github]

### Config

- [yarn]

### Development

- Next.js 12
- Typescript
- recoil
- react-query
- emotion/styled

---
