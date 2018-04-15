import React from 'react';

const SignInForm = ({user, openGoogleSignIn}) => {
    if(user) {
        return (
            <section className="user">
                <p className="user-name">{user.displayName}</p>
                <button type="button" className="sign-out">Sign out</button>
            </section>
        );
    } else {
        return (
            <section className="user">
                <button type="button" className="sign-in" onClick={openGoogleSignIn}>Sign in with Google</button>
            </section>
        )
    }
};
export default SignInForm;
