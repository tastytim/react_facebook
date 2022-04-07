import { TextArea } from "../../Common/FormsControls/FormsControls"
import {Field, reduxForm} from "redux-form";
import { maxLengthThunk, required } from "../../utils/validators/validators";

let maxlength = maxLengthThunk(50);

const AddMessageForm = (props) =>{
    return (
        <form onSubmit={props.handleSubmit}>
           <div>
               <Field 
               component={TextArea}
               validate={[required, maxlength]}
               placeholder="Enter your message"
               name = "messageDialog"
               ></Field>
           </div>
           <div>
               <button className="btn btn-primary">Send</button>
           </div>
        </form>
    )
}


export default reduxForm({form : "dialog-add-message-form"})(AddMessageForm)