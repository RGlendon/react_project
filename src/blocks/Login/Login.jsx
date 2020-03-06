import React from "react";
import {Field, reduxForm} from "redux-form";

let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'input'} type="text" name="login" placeholder={'your login'}/>
            </div>
            <div>
                <Field component={'input'} type="password" name="enter password" placeholder={'password'}/>
            </div>
            <div>
                <Field component={'input'} type="checkbox" name="rememberMe"/> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

LoginForm = reduxForm({form: 'loginForm'})(LoginForm);

const Login = (props) => {
    const onSubmit= (formData) => {
        console.log(formData);
    };

    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    );
}

export default Login;