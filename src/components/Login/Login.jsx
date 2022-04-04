import React from "react";
import { Field, reduxForm } from "redux-form";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"login"}
          component={"input"}
          name={"login"}
          type="text"
        />
      </div>
      <div>
        <Field
          placeholder={"password"}
          component={"input"}
          name={"password"}
          type="text"
        />
      </div>
      <div>
        <Field type={"checkbox"} component={"input"} name={"rememberMe"} />
        Remember Me
      </div>
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
    props.signIn({ login, password, rememberMe });
  };
  return (
    <div className="my-10 mx-10">
      <h1>Login</h1>
      <ReduxLoginForm onSubmit={onSubmit} />
    </div>
  );
};



export default Login;
