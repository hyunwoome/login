# 🔑 Login

<p>
    <img alt="Typescript" src="https://img.shields.io/badge/-Typescript-blue?logo=Typescript&logoColor=white"/>
    <img alt="React" src="https://img.shields.io/badge/-React-45b8d8?logo=react&logoColor=white"/>
    <img alt="Express" src="https://img.shields.io/badge/-Express-white?logo=Express&logoColor=black"/>
    <img alt="MongoDB" src="https://img.shields.io/badge/-MongoDB-%234ea94b?logo=MongoDB&logoColor=white"/>
</p>

[데모 보기](http://3.34.193.234/) · [위키 보기](https://github.com/hyunwoome/Login/wiki)

[![Screen Shot 2021-10-26 at 11 17 06 PM](https://user-images.githubusercontent.com/76833697/138897880-4b6eba53-cf29-403d-8eb0-b15c4745afd1.png)](http://3.34.193.234/)

## "Login"은 어떤 프로젝트인가?
어떤 서비스던간에 **인증과 인가**는 필수 기능입니다.  
그래서 인증과 인가만큼은 정확히, 깊이있게 알고 싶어서 로그인과 회원가입 기능에만 집중한 "Login" 프로젝트를 만들게 되었습니다.  
프론트엔드는 React로, 백엔드는 Node.js, Express를 사용했으며,   사용자 정보와 세션 정보는 MongoDB를, 인가는 쿠키와 세션을 이용하여 라우팅처리 하였습니다.
배포는 AWS EC2에 배포하였으며, Nginx가 서브하고 PM2로 노드 프로세스를 관리합니다.

주요 기능:
- 회원 가입
- 로그인
- 사용자 정보 수정
- 로그아웃
- 회원 탈퇴

프로젝트를 진행하면서 Express에서 **비동기 에러 핸들링과 요청 바디 대한 유효성 검사에 집중**하였고,  
React에선 **쿠키에 저장된 세션을 통해 로그인의 여부를 확인하고 그에 맞는 라우팅 처리**를 하였습니다.  
또한 클라이언트에서 각 Input에 대한 **유효성 검사**를 통해서 서버의 부담을 줄였습니다.

## 기술 스택