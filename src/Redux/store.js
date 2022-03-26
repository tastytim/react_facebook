import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";



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
      newMessageBody: "",
      messageId: 6,
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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(store);
  },
};



export default store;
