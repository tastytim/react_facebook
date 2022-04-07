import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "../Dialogs/Dialogs.module.css";
import { Navigate } from "react-router-dom";
import AddMessageForm from "./AddMessageForm/AddMessageForm";


const Dialogs = (props) => {
  let DialogsElement = props.dialogs.map((e) => (
    <DialogItem name={e.name} id={e.id} key={e.id} />
  ));

  let MessageElement = props.messages.map((e) => (
    <Message message={e.message} key={e.id} id={e.id} />
  ));

  const onSubmit = (data) => {
    props.addNewDialog(data);
  };
  if (!props.isAuth) return <Navigate to="/login" />;
  return (
    <div className={s.content}>
      <div className={s.row}>
        <div className={s.dialogs}>{DialogsElement}</div>
        <div>{MessageElement}</div>
        <div>
          <AddMessageForm onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
