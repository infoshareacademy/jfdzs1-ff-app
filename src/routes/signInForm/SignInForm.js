import React from 'react';
import './signInForm.css';
import RaisedButtonExampleComplex from './raisedButton'
import PaperExampleRounded from '../../paper'

const SignInForm = (props) => {
    return (
        <PaperExampleRounded>
            <section className="sign_in_form">
                <h3>zaloguj się</h3>
                <div className="sign_in_with_google">
                    <RaisedButtonExampleComplex openGoogleSignIn={props.openGoogleSignIn}/>
                </div>
            </section>
        </PaperExampleRounded>
    )
};
export default SignInForm;
