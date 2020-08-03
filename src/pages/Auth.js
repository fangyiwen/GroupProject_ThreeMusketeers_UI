import React, { useState }from 'react';
import {useForm} from "../components/form-hook";
import {VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from "../util/validators";
import Input from "../components/FormElements/Input";
import Button from "../components/FormElements/Button";
import Card from "../components/Card";
import './Auth.css'
import GoogleBtn from "../components/GoogleBtn";

const Auth = () => {
    const [isLogin, setLogin] = useState(true);

    const [formState, inputHandler, setFormData] = useForm({
        email:{
            value: "",
            isValid: false
        },
        password:{
            value:'',
            isValid: false
        }
    }, false);

    const authSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs);
    };

    const switchModeHandler = () =>{
        if (!isLogin) {
            setFormData(
                {
                    ...formState.inputs,
                    name: undefined
                },
                formState.inputs.email.isValid && formState.inputs.password.isValid
            );
        } else {
            setFormData(
                {
                    ...formState.inputs,
                    name: {
                        value: '',
                        isValid: false
                    }
                },
                false
            );
        }
        setLogin(prevMode => !prevMode)
    };

    return <Card className="authentication">
        <h2>Log in</h2>
        <hr/>
        <form onSubmit={authSubmitHandler}>
            {!isLogin && (
                <Input
                    element="input"
                    id="name"
                    type="text"
                    label="Your Name"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a name."
                    onInput={inputHandler}
                />
            )}
            <Input
                element="input"
                id="email"
                type="email"
                label="E-Mail"
                validators={[VALIDATOR_EMAIL()]}
                errorText="Please enter a validate email"
                onInput={inputHandler}
            />
            <Input
                element="input"
                id="password"
                type="password"
                label="Password"
                validators={[VALIDATOR_MINLENGTH(6)]}
                errorText="Please enter a PASSWORD at least 6 characters"
                onInput={inputHandler}
            />
            <div className="buttons">
               <div className="logInButton">
                   <Button  type="submit" disabled={!formState.isValid}>
                       {isLogin?'LOGIN':'SIGNUP'}
                   </Button></div>
                <div className="logInButton" ><GoogleBtn type="submit" /></div>
            </div>
        </form>
        <Button inverse onClick={switchModeHandler}>Switch to {isLogin?'SIGNUP':'LOGIN'}</Button>
    </Card>;
};


export default Auth;