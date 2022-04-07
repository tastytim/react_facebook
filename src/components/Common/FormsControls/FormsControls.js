
import s from "./FormsControl.module.css"



export let FormControl = ({input, meta, ...props} ) => {

    return (
        <div >
            <div className={s.formscontrol }>
              {props.children}   
            </div>
            {meta.touched && meta.error && <span className={s.span_error}>{meta.error}</span>}
        </div>

    );
  };

export let TextArea = (props ) => {
    const {input, meta, ...restProps} = props;
  return (
       <FormControl {...props} >
                 <textarea  {...input} {...restProps}></textarea> 
      </FormControl>
  );
};


export let Input = (props) => {
    const {input, meta, ...restProps} = props;
  return (
       <FormControl {...props} >
                 <input  {...input} {...restProps} />
      </FormControl>
  );
};
