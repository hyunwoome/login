# 🔑 Login

<p>
    <img alt="Typescript" src="https://img.shields.io/badge/-Typescript-blue?logo=Typescript&logoColor=white"/>
    <img alt="React" src="https://img.shields.io/badge/-React-45b8d8?logo=react&logoColor=white"/>
    <img alt="Express" src="https://img.shields.io/badge/-Express-white?logo=Express&logoColor=black"/>
    <img alt="MongoDB" src="https://img.shields.io/badge/-MongoDB-%234ea94b?logo=MongoDB&logoColor=white"/>
</p>

[데모 보기](http://3.34.193.234/) · [위키 보기](https://github.com/hyunwoome/Login/wiki)

[![Screen Shot 2021-10-26 at 11 17 06 PM](https://user-images.githubusercontent.com/76833697/138897880-4b6eba53-cf29-403d-8eb0-b15c4745afd1.png)](http://3.34.193.234/)

## 개요
- 사용자 인증과 인가를 위한 로그인 기능 애플리케이션
- 세션 방식을 사용하여 구현한 인증 및 인가
- 리액트와 익스프레스 사이의 REST API 통신 ?

## 기간
- 2021.08.3 ~ 진행중 (V1 배포완료)

## 프로젝트 종류
- 개인 토이 프로젝트

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

## 배운점
- 프론트에서 axios를 기반으로 한 비동기 작업 처리 방법 (async/await)
- 리액트 라이프 사이클
- 세션을 다루는 방법
- 인증과 인가의 워크플로우 파악
- REST API 설계 방법
- 다양한 유효성 검사

## 문제점 및 개선 방법
