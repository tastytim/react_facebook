import { addNewDialogThunk } from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogsData,
    messages: state.dialogsPage.messageData,
    newMessageBody: state.dialogsPage.newMessageBody,
  };
};

export default compose(
  connect(mapStateToProps, { addNewDialog: addNewDialogThunk }),
  withAuthRedirect
)(Dialogs);
