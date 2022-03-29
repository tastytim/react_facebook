import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let onSendMessageClick = () => {
    props.onSendMessageClick();
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.onNewMessageChange(body);
  };

  let DialogsElement = props.dialogs.map((e) => (
    <DialogItem name={e.name} id={e.id} key={e.id} />
  ));

  let MessageElement = props.messages.map((e) => (
    <Message message={e.message} key={e.id} id={e.id}/>
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
              value={props.newMessageBody}
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
