import { loginUser } from "../components/api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    default:
      return state;
  }
};

export let setAuthMeUserData = (userId, email, login) => ({
  type: SET_USER_DATA,
  data: { userId, email, login },
});

export const loginThunkCreator = () => {
  return (dispatch) => {
    loginUser().then((resp) => {
      if (resp.resultCode === 0) {
        let { id, email, login } = resp.data;
        dispatch(setAuthMeUserData(id, email, login));
      }
    });
  };
};

export default authReducer;
