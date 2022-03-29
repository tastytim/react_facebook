import {sendMessageCreator,updateNewMessageBodyCreator,} 
from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from 'react-redux';


let mapStateToProps = (state)=>{
    return {
        dialogs : state.dialogsPage.dialogsData,
        messages : state.dialogsPage.messageData,
        newMessageBody : state.dialogsPage.newMessageBody,
    }
}
let mapDispatchProps = (dispatch)=>{
  return {
    onSendMessageClick : ()=>{dispatch(sendMessageCreator())},
    onNewMessageChange : (text)=>{dispatch(updateNewMessageBodyCreator(text))},
      
    }
}
const DialogsContainer = connect(mapStateToProps,mapDispatchProps)(Dialogs);
export default DialogsContainer;
