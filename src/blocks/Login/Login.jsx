import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../utils/validators";
import {renderInput} from "../common/ValidatorForms/ValidatorForms";


const maxLength30 = maxLength(30);
const maxLength15 = maxLength(15);

let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={renderInput} type="text" name="email" placeholder={'your login'} validate={[required, maxLength30]}/>
            </div>
            <div>
                <Field component={renderInput} type="password" name="password" placeholder={'enter password'} validate={[required, maxLength15]}/>
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
        let {email, password, rememberMe = false} = formData;
        props.login(email, password, rememberMe);
    };

    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    );
}

export default Login;