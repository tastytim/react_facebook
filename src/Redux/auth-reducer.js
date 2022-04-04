import { AuthApi } from "../components/api/api";

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
    AuthApi.loginUser().then((resp) => {
      if (resp.resultCode === 0) {
        let { id, email, login } = resp.data;
        dispatch(setAuthMeUserData(id, email, login));
      }
    });
  };
};

export const signInThunkCreator = (data) => {
  return (dispatch) => {
    AuthApi.signIn(data).then((resp) => {
      if (resp.data.resultCode === 0) {
        console.log("Signed in");
      } else if (resp.data.resultCode === 10) {
        AuthApi.getCaptcha().then((resp) => {
          return resp;
        });
      } else if (resp.data.resultCode === 1) {
        console.log("Request invalid");
      }
    });
  };
};
export const logOutThunkCreator = () => {
  return (dispatch) => {
    AuthApi.logOut().then((resp) => {
      return resp;
    });
  };
};

export default authReducer;
