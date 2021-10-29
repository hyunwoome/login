let api = '';
if (process.env.NODE_ENV === 'development') {
  api = 'http://localhost:3000'
}

export const TITLE = {
  LOGIN: '로그인',
  LOGIN_BUTTON: '로그인',
  ACCOUNT: '계정 관리',
  SIGN_UP: '회원가입',
  SIGN_UP_BUTTON: '가입하기',
  NOT_FOUND: '404 NOT FOUND',
  UNAUTHORIZED: '401 Unauthorized',
  MODIFIED: '회원정보 수정',
  LOGOUT: '로그아웃',
  DELETE: '회원탈퇴',
};

export const TEXT = {
  LOGIN: '아직 가입하지 않으셨나요?',
  SIGN_UP: '가입하기',
  OTHER_LOGIN: '다른 방식으로 로그인하기',
  NOT_FOUND: '요청한 페이지를 찾을 수 없습니다.',
  UNAUTHORIZED: '로그인 후 이용해주시기 바랍니다.',
};

export const PLACEHOLDER = {
  NAME: '홍길동',
  EMAIL: 'example@login.com',
  PASSWORD: '********',
  VERIFY_PASSWORD: '********',
  NEW_PASSWORD: '새로운 비밀번호를 입력하세요',
};

export const LABEL = {
  NAME: '이름',
  EMAIL: '이메일',
  PASSWORD: '비밀번호',
  VERIFY_PASSWORD: '비밀번호 확인',
};

export const ERROR = {
  NAME: '이름을 올바르게 입력하세요.',
  EMAIL: '이메일을 올바르게 입력하세요.',
  DUPLICATED_EMAIL: '이메일이 이미 존재합니다.',
  NOT_VALID_EMAIL: '등록된 이메일이 아닙니다.',
  PASSWORD: '비밀번호를 올바르게 입력하세요.(6글자 이상, 14글자 이하)',
  NOT_VALID_PASSWORD: '비밀번호가 다릅니다.',
  NOT_SAME_PASSWORD: '두 비밀번호가 서로 다릅니다.',
};

export const API = {
  SIGN_UP: `${api}/api/user`,
  DELETE: `${api}/api/user`,
  UPDATE: `${api}/api/user`,
  LOGIN: `${api}/api/login`,
  LOGOUT: `${api}/api/logout`,
  LOGGED: `${api}/api/logged`,
  CHECKED_EMAIL: `${api}/api/email`,
};

export const URL = {
  LOGIN: '/',
  SIGN_UP: '/signup',
  ACCOUNT: '/account',
};

export const OTHER = {
  LOCALSTORAGE_KEY: 'logged',
  LOCALSTORAGE_VALUE: 'true',
};
