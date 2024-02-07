# School Eats

> **조선대학교 맛집 정보 및 공유 웹** <br/> **개발기간: 2024.01 ~ 2024.02** <br/> **1인 개발** <br/> **데이터베이스: 파이어베이스** <br/> **배포: Vercel**

## 배포 주소

> **개발 버전** : [https://schooleats.vercel.app/](https://schooleats.vercel.app/)

## 프로젝트 소개

School Eats는 매일 점심을 고민하는 대학생들을 위한 커뮤니티 웹입니다.<br/>
모바일 환경을 주로 사용하는 학생들을 고려하여 모바일 퍼스트로 구현하였으며 PWA를 적용하였습니다.

## 주요 기능 📦

### ⭐️ SCROll TOP BUTTON

- 모바일 사용자를 위해 일정 스크롤을 내릴 시 scroll top button 이 디스플레이 되어 버튼 클릭시 화면 상단으로 바로 이동합니다.

<img src="https://github.com/computerkingminsu/School-Eats/assets/129649787/435ef711-197a-4faa-99dd-f8f62c4df662" width="25%" height="25%"/>


### ⭐️ SEARCH

- 맛집의 이름 또는 메뉴로 맛집을 검색 할 수 있습니다. 검색한 맛집을 클릭시 해당 맛집의 상세페이지로 이동합니다.

<img src="https://github.com/computerkingminsu/School-Eats/assets/129649787/7b6b2fe0-b368-417a-8ed7-bb5797f2d33e" width="25%" height="25%"/>


### ⭐️ BOOKMARK

- 맛집 상세페이지에서 북마크 버튼을 누르면 마이페이지 또는 상단의 북마크 버튼을 통해 북마크한 맛집들을 한눈에 볼 수 있습니다.

<img src="https://github.com/computerkingminsu/School-Eats/assets/129649787/dfb39a08-c9f0-40e8-b153-06ef6197d234" width="25%" height="25%"/>


### ⭐️ 맛집 지도

- 카카오 맵 API를 통해 맛집들의 위치를 지도상의 마커로 카테고리별로 구현하였습니다. 마커 클릭 시 해당 맛집의 상세 페이지로 이동합니다.

<img src="https://github.com/computerkingminsu/School-Eats/assets/129649787/02809496-5be6-46eb-9528-44e3a6c2f65f" width="25%" height="25%"/>


### ⭐️ 맛집 투어

- 맛집들을 한눈에 볼 수 있으며 필터 기능을 통해 리뷰많은순, 별점높은순으로 맛집들을 확인 할 수 있으며 <br/>
카테고리를 통해 맛집들을 상세 분류 하였습니다.

<img src="https://github.com/computerkingminsu/School-Eats/assets/129649787/e18a6f3c-7297-4b01-9376-1d20bf04194f" width="25%" height="25%"/>

### ⭐️ 맛집 상세 페이지

- 맛집들의 상세정보를 확인 할 수 있습니다. 로그인 한 유저는 북마크 기능을 이용 할 수 있으며 별점과 리뷰를 남길 수 있습니다.<br/>
사용자가 남긴 리뷰는 실시간으로 별점에 반영됩니다.

 <img src="https://github.com/computerkingminsu/School-Eats/assets/129649787/76408f68-f7e3-41b1-bc1d-e198516d8c43" width="25%" height="25%"/>


### ⭐️ 커뮤니티 CRUD

- CRUD, 좋아요, 스크랩 기능을 제공합니다. 

<img src="https://github.com/computerkingminsu/School-Eats/assets/129649787/c6c36dcf-464a-43e5-9fb6-2a9b10739f16" width="25%" height="25%"/>


 
### ⭐️ 마이페이지

- 사용자의 활동 기록을 한눈에 확인 할 수 있으며 고객센터를 이용 할 수 있습니다.

<img src="https://github.com/computerkingminsu/School-Eats/assets/129649787/bee29c6e-a3c3-4624-8632-79d106241567" width="25%" height="25%"/>


---

## 화면 구성 📺

###  메인페이지

![24deb949-d1c5-410d-831d-32f0b4b010dc-ezgif com-video-to-gif-converter](https://github.com/computerkingminsu/School-Eats/assets/129649787/60909f83-1139-4721-b2d6-7845c7abc59e) 


---

## 시작 가이드

### Requirements

For building and running the application you need:

- [Node.js]
- [yarn]

### Installation

```bash
$ git clone https://github.com/computerkingminsu/imcoach.git
$ yarn install
$ yarn dev
```

### 게시판 글쓰기와 결제기능 사용을 위한 샘플계정 ID/PW

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

- JavaScript
- React
- Next.js 12
- react-slick
- antd design
- recoil
- emotion/styled

---
