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
  id: 5,
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.id,
        message: state.newPostText,
        likesCount: 5,
      };
      state.posts.push(newPost);
      state.newPostText = "";
      state.id++;
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
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
