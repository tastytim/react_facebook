const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

let initialState = {
  posts: [
    { id: 1, message: "Hi", likesCount: 10 },
    { id: 2, message: "Hello", likesCount: 5 },
    { id: 3, message: "How are you", likesCount: 15 },
    { id: 4, message: "tim", likesCount: 77 },
  ],
  newPostText: "",
  id: 4,
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
        newPostText: '' 
      };

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
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

export default profileReducer;
