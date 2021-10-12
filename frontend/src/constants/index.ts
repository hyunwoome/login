const PLACEHOLDER = {
  NAME: '홍길동',
  EMAIL: 'example@login.com',
  PASSWORD: '********',
  CHECK_PASSWORD: '********',
  NEW_PASSWORD: '새로운 비밀번호를 입력하세요',
};

const LABEL = {
  NAME: '이름',
  EMAIL: '이메일',
  PASSWORD: '비밀번호',
  CHECK_PASSWORD: '비밀번호 확인',
};

const TEXT = {
  LOGIN: '아직 가입하지 않으셨나요?',
  SIGN_UP: '가입하기',
  OTHER_LOGIN: '다른 방식으로 로그인하기',
  NOT_FOUND: '요청한 페이지를 찾을 수 없습니다.',
};

const TITLE = {
  LOGIN: '로그인',
  LOGIN_BUTTON: '로그인',
  ACCOUNT: '계정 관리',
  SIGN_UP: '회원가입',
  SIGN_UP_BUTTON: '가입하기',
  NOT_FOUND: '404 NOT FOUND',
};

const ERROR = {
  NAME: '이름을 입력하세요.',
  EMAIL: '이메일을 입력하세요.',
  PASSWORD: '비밀번호를 입력하세요.',
  CHECK_PASSWORD: '비밀번호를 입력하세요.',
};

const API = {
  SIGN_UP: 'http://localhost:3000/api/user',
  LOGIN: 'http://localhost:3000/api/auth/login',
  LOGOUT: 'http://localhost:3000/api/auth/logout'
};

const URL = {
  LOGIN: '/',
  SIGN_UP: '/signup',
  ACCOUNT: '/account',
};

const CONST = {
  PLACEHOLDER,
  LABEL,
  TEXT,
  TITLE,
  ERROR,
  API,
  URL,
};

export { CONST };
