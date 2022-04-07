import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../Common/FormsControls/FormsControls";
import { required } from "../utils/validators/validators";
import { Navigate } from "react-router-dom";
import s from "./Login.module.css";
const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"login"}
          component={Input}
          name={"login"}
          type="text"
          validate={[required]}
        />
      </div>
      <div>
        <Field
          placeholder={"password"}
          component={Input}
          name={"password"}
          type="text"
          validate={[required]}
        />
      </div>
      <div>
        <Field type={"checkbox"} component={Input} name={"rememberMe"} />
        Remember Me
      </div>
      {props.error && (
        <div>
          <div className={s.errorCommon}>{props.error}</div>
        </div>
      )}

      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const ReduxLoginForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    let { login, password, rememberMe } = formData;
    props.login({ login, password, rememberMe });
  };

  if (props.state.isAuth) {
    return <Navigate to={"/profile"} />;
  }

  return (
    <div className="my-10 mx-10">
      <h1>Login</h1>
      <ReduxLoginForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
