import { SIGNUP } from '@src/actions/types';

const signupReducer = (state = {}, action: any): any => {
  switch (action.type) {
    case SIGNUP:
      return { ...state, signupSuccess: action.payload };
    default:
      return state;
  }
};

export { signupReducer };
