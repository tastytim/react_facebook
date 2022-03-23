import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {


  let DialogsElement = props.state.dialogsPage.dialogsData.map((e) => (
    <DialogItem name={e.name} id={e.id} key={e.id} />
  ));

  let MessageElement = props.state.dialogsPage.messageData.map((e) => (
    <Message message={e.message} key={e.id}  />
  ));

  return (
    <div className={s.content}>
      <div className={s.row}>
        <div className={s.dialogs}>{DialogsElement}</div>
        <div>{MessageElement}</div>
      </div>
    </div>
  );
};

export default Dialogs;
