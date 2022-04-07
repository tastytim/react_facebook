import { stopSubmit } from "redux-form";
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
        isAuth: action.data.isAuth,
      };
    default:
      return state;
  }
};

export const setAuthMeUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  data: { userId, email, login , isAuth},
});



export const getUserDataThunk = () => {
  return (dispatch) => {
    AuthApi.me().then((resp) => {
      if (resp.resultCode === 0) {
        let { id, email, login } = resp.data;
        dispatch(setAuthMeUserData(id, email, login, true));
      }
    });
  };
};

export const loginThunk = (data) => {
  return (dispatch) => {
    AuthApi.login(data).then((resp) => {
      if (resp.data.resultCode === 0) {
        dispatch(getUserDataThunk());
      } else {
        let message = resp.data.messages.length > 0 ? resp.data.messages[0] : 'Error' ;
         dispatch(stopSubmit("login", {_error : message}));
      }
    });
  };
};
export const logoutThunk = () => {
  return (dispatch) => {
    AuthApi.logout().then((resp) => {
      if(resp.data.resultCode === 0){
        dispatch(setAuthMeUserData(null, null, null, false));
        dispatch(getUserDataThunk());
      }
    });
  };
};

export default authReducer;
