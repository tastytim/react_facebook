const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
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
  newMessageBody: "",
  messageId: 6,
}

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.messageBody;
      return state;
    case SEND_MESSAGE:
      let messageBody = state.newMessageBody;
      let messageId = state.messageId;
      state.messageData.push({ id: messageId, message: messageBody });
      state.messageId++;
      state.newMessageBody = "";
      return state;
    default:
      return state;
  }
};
export let updateNewMessageBodyCreator = (text) => ({
   type: UPDATE_NEW_MESSAGE_BODY,
   messageBody: text,
 });
 export let sendMessageCreator = () => ({ type: SEND_MESSAGE });

export default dialogsReducer;
