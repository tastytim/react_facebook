const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
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
  messageId: 4,
};

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      state.messageId++;
      return {
        ...state,
        messageData: [
          ...state.messageData,
          { id: state.messageId, message: action.data.messageDialog },
        ],
      };
    default:
      return state;
  }
};

export let sendMessageCreator = (data) => ({ type: SEND_MESSAGE , data});

export let addNewDialogThunk = (data) =>{
      return (dispatch)=>{
        dispatch(sendMessageCreator(data));
      }
}


export default dialogsReducer;
