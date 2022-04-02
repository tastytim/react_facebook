import { getProfile } from "../components/api/api";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
  posts: [
    { id: 1, message: "Hi", likesCount: 10 },
    { id: 2, message: "Hello", likesCount: 5 },
    { id: 3, message: "How are you", likesCount: 15 },
    { id: 4, message: "tim", likesCount: 77 },
  ],
  newPostText: "",
  id: 4,
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      state.id++;
      let newPost = {
        id: state.id,
        message: state.newPostText,
        likesCount: 5,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };

    default:
      return state;
  }
};
export let addPostActionCreator = () => ({ type: ADD_POST });
export let updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export let setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export const getProfileThunkCreator = (path) => {
  return (dispatch) => {
    getProfile(path).then((resp) => {
      dispatch(setUserProfile(resp));
    });
  };
};
export default profileReducer;
