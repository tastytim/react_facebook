import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../Redux/dialogs-reducer";

const Dialogs = (props) => {
  let store = props.store.getState().dialogsPage;

  let newMessageBody = store.newMessageBody;
  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  let DialogsElement = store.dialogsData.map((e) => (
    <DialogItem name={e.name} id={e.id} key={e.id} />
  ));

  let MessageElement = store.messageData.map((e) => (
    <Message message={e.message} key={e.id} />
  ));

  return (
    <div className={s.content}>
      <div className={s.row}>
        <div className={s.dialogs}>{DialogsElement}</div>
        <div>{MessageElement}</div>
        <div>
          <div>
            <textarea
              placeholder="Enter your message"
              name=""
              id=""
              cols="30"
              rows="3"
              value={newMessageBody}
              onChange={onNewMessageChange}
            ></textarea>
          </div>
          <div>
            <button className="btn btn-primary" onClick={onSendMessageClick}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
