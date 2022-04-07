import { ProfileApi } from "../components/api/api";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  posts: [
    { id: 1, message: "Hi", likesCount: 10 },
    { id: 2, message: "Hello", likesCount: 5 },
    { id: 3, message: "How are you", likesCount: 15 },
    { id: 4, message: "tim", likesCount: 77 },
  ],
  id: 4,
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      state.id++;
      let newPost = {
        id: state.id,
        message: action.data.postMessage,
        likesCount: 5,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
};
export let addPostActionCreator = (data) => ({ type: ADD_POST, data });
export let updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export let setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export let setProfileStatus = (status) => ({ type: SET_STATUS, status });

export const getProfileThunkCreator = (path) => {
  return (dispatch) => {
    ProfileApi.getProfile(path).then((resp) => {
      dispatch(setUserProfile(resp));
    });
  };
};
export const getProfileStatusThunkCreator = (userId) => {
  return (dispatch) => {
    ProfileApi.getStatus(userId).then((resp) => {
      dispatch(setProfileStatus(resp));
    });
  };
};
export const updateProfileStatusThunkCreator = (status) => {
  return (dispatch) => {
    ProfileApi.updateStatus(status).then((resp) => {
      if (resp.resultCode === 0) {
        dispatch(setProfileStatus(status));
      }
    });
  };
};
export const addPostThunkCretator = (data) => {
  return (dispatch) => {
    dispatch(addPostActionCreator(data));
  };
};

export default profileReducer;
