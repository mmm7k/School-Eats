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


Uploading 97da96d1-cc89-4c17-9a67-cc9f58f99dc9.mp4…


### ⭐️ SEARCH

- 맛집의 이름 또는 메뉴로 맛집을 검색 할 수 있습니다. 검색한 맛집을 클릭시 해당 맛집의 상세페이지로 이동합니다.

### ⭐️ BOOKMARK

- 맛집 상세페이지에서 북마크 버튼을 누르면 마이페이지 또는 상단의 북마크 버튼을 통해 북마크한 맛집들을 한눈에 볼 수 있습니다.
  
### ⭐️ 맛집 지도

- 카카오 맵 API를 통해 맛집들의 위치를 지도상의 마커로 카테고리별로 구현하였습니다. 마커 클릭 시 해당 맛집의 상세 페이지로 이동합니다.

### ⭐️ 맛집 투어

- 맛집들을 한눈에 볼 수 있으며 필터 기능을 통해 리뷰많은순, 별점높은순으로 맛집들을 확인 할 수 있으며 <br/>
카테고리를 통해 맛집들을 상세 분류 하였습니다.

### ⭐️ 맛집 상세 페이지

- 맛집들의 상세정보를 확인 할 수 있습니다. 로그인 한 유저는 북마크 기능을 이용 할 수 있으며 별점과 리뷰를 남길 수 있습니다.<br/>
사용자가 남긴 리뷰는 실시간으로 별점에 반영됩니다.
 
### ⭐️ 커뮤니티 CRUD

- CRUD, 좋아요, 스크랩 기능을 제공합니다. 

### ⭐️ 마이페이지

- 사용자의 활동 기록을 한눈에 확인 할 수 있습니다.

---

## 화면 구성 📺

|                       메인 페이지                        |                     지역별 마커 페이지                      |
| :------------------------------------------------------: | :---------------------------------------------------------: |
| <img width="329" src="https://i.ibb.co/W0WYGWw/1.png"/>  | <img width="329" src="https://i.ibb.co/jb26VNx/image.png"/> |
|                      PT 상품 페이지                      |                       커뮤니티 페이지                       |
| <img width="329" src="https://i.ibb.co/VL6JWDF/PT.png"/> | <img width="329" src="https://i.ibb.co/X8MjjfL/image.png"/> |

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
