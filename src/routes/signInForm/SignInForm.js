import React from 'react';

const SignInForm = (props) => {
    return (
        <section className="user">
            <button type="button" className="sign-in" onClick={props.openGoogleSignIn()}>Sign in with Google</button>
        </section>
    )
};
export default SignInForm;
