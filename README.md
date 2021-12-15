# login

<p>
    <img alt="Typescript" src="https://img.shields.io/badge/-Typescript-blue?logo=Typescript&logoColor=white"/>
    <img alt="React" src="https://img.shields.io/badge/-React-45b8d8?logo=react&logoColor=white"/>
    <img alt="Express" src="https://img.shields.io/badge/-Express-white?logo=Express&logoColor=black"/>
    <img alt="MongoDB" src="https://img.shields.io/badge/-MongoDB-%234ea94b?logo=MongoDB&logoColor=white"/>
</p>

[프로젝트 데모](http://3.34.193.234/) · [위키 보기](https://github.com/hyunwoome/Login/wiki)

[![Screen Shot 2021-10-26 at 11 17 06 PM](https://user-images.githubusercontent.com/76833697/138897880-4b6eba53-cf29-403d-8eb0-b15c4745afd1.png)](http://3.34.193.234/)

## 개요

- 세션을 사용한 사용자 인증과 인가를 위한 로그인 기능 구현
- 클라이언트와 서버간의 REST API 통신 구현

## 기간

- 2021.08.3 ~ 진행중 (배포완료)

## 프로젝트 종류

- 개인 프로젝트

## 주요 사용 기술

#### Frontend

- TypeScript
- React
- react-router-dom
- styled-components
- axios

#### Backend

- TypeScript
- Node.js
- Express
- MongoDB
- Nodemon

#### Deploy

- AWS EC2
- Nginx
- PM2
- MongoDB Atlas

## 주요 업무

- React에서 간소화시킨 [Atomic Design Pattern](https://github.com/hyunwoome/Login/wiki/Design-Pattern)을 사용해 컴포넌트 재사용성 증가
- 각 기능별로 [모듈화](https://github.com/hyunwoome/Login/wiki/Directory)하여 유지보수 효율 증대
- Express에서 오류를 한 곳에서 관리할 수 있도록 커스텀 에러 핸들링 미들웨어 구현
- Express에서 비동기 에러 핸들링 구현
- 서버의 부담을 줄이기 위한 클라이언트 인풋 [유효성](https://github.com/hyunwoome/Login/wiki/%EC%9C%A0%ED%9A%A8%EC%84%B1-%EA%B2%80%EC%82%AC-%EB%A6%AC%EC%8A%A4%ED%8A%B8) 검사 실시
- 외부의 API 도구를 사용해 서버로 접근하는 경우를 막기 위한 서버 [유효성](https://github.com/hyunwoome/Login/wiki/%EC%9C%A0%ED%9A%A8%EC%84%B1-%EA%B2%80%EC%82%AC-%EB%A6%AC%EC%8A%A4%ED%8A%B8) 검사 실시
- MongoDB Atlas를 이용해 클라우드 상에서 사용자 데이터 및 세션 관리

## 주요 기능

- 회원 등록
- 로그인 (세션을 이용해 하루동안 로그인 유지)
- 로그아웃
- 회원 정보 수정
- 회원 탈퇴

## 배운점

- 프론트에서 axios를 기반으로 한 비동기 작업 처리 방법 (async/await)
- 리액트 라이프 사이클
- 세션을 다루는 방법
- 인증과 인가의 워크플로우
- REST API 설계 방법
- 다양한 케이스 유효성 검사

## 문제점 및 개선 방법

- 비효율적인 배포방식 (EC2 배포 자동화 고려)

## 추가 기능 예정

- [ ] UI 수정
- [ ] 서드파티 로그인 구현 (네이버, 카카오, 구글 등)
- [ ] HTTPS 설정
- [ ] 도메인 설정
- [ ] 클라이언트 알림 팝업창 구현
