import { LOGIN } from '@src/actions/types';

const loginReducer = (state = {}, action: any): any => {
  switch (action.type) {
    case LOGIN:
      return { ...state, loginSuccess: action.payload };
    default:
      return state;
  }
};

export { loginReducer };
