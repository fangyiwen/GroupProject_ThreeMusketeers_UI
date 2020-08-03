import React from 'react';
import {useForm} from "../components/form-hook";
import {VALIDATOR_EMAIL, VALIDATOR_MINLENGTH} from "../util/validators";
import Input from "../components/FormElements/Input";
import Button from "../components/FormElements/Button";
import Card from "../components/Card";
import './Auth.css'
import GoogleBtn from "../components/GoogleBtn";

const Auth = () => {

    const [formState, inputHandler] = useForm({
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

    return <Card className="authentication">
        <h2>Log in</h2>
        <hr/>
        <form onSubmit={authSubmitHandler}>
            <Input element="input" id="email" type="email" label="E-Mail"
                   validators={[VALIDATOR_EMAIL()]}
                   errorText="Please enter a validate email"
                   onInput={inputHandler}
            />
            <Input element="input" id="password" type="password" label="Password"
                   validators={[VALIDATOR_MINLENGTH(6)]}
                   errorText="Please enter a PASSWORD at least 6 characters"
                   onInput={inputHandler}
            />
            <div className="buttons">
               <div className="logInButton"><Button  type="submit" disabled={!formState.isValid}>Log In</Button></div>
                <div className="logInButton"><GoogleBtn /></div>
            </div>

        </form>
    </Card>;
};


export default Auth;