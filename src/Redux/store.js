let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi", likesCount: 10 },
        { id: 2, message: "Hello", likesCount: 5 },
        { id: 3, message: "How are you", likesCount: 15 },
        { id: 4, message: "tim", likesCount: 77 },
      ],
      newPostText: "",
      id: 5,
    },
    dialogsPage: {
      dialogsData: [
        { id: 1, name: "Tim" },
        { id: 2, name: "Tom" },
        { id: 3, name: "Alex" },
        { id: 4, name: "Max" },
        { id: 5, name: "Victory" },
      ],
      messageData: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Hello" },
        { id: 3, message: "How are you" },
        { id: 4, message: "Good" },
      ],
    },

    sidebar: {},
  },
  _callSubscriber() {
    console.log("State changed");
  },

  addPost() {
    let newPost = {
      id: this._state.profilePage.id,
      message: this._state.profilePage.newPostText,
      likesCount: 5,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._state.profilePage.id++;
    this._callSubscriber(store);
  },

  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(store);
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === "ADD_POST") {
      let newPost = {
        id: this._state.profilePage.id,
        message: this._state.profilePage.newPostText,
        likesCount: 5,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._state.profilePage.id++;
      this._callSubscriber(store);
    } else if (action.type === "UPDATE_NEW_POST_TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(store);
    }
  },
};

export  let  addPostActionCreator = () => {
  return { type: "ADD_POST" };
};
export let updateNewPostTextActionCreator = (text) => {
  return { type: "UPDATE_NEW_POST_TEXT", newText: text };
};

export default store;
