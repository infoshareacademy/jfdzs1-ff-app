import React from 'react';

const SignInForm = (user, openGoogleSignIn) => (
    <div>
        <label><b>Username {user.displayName}</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required/>

        <label><b>Email</b></label>
        <input type="email" placeholder="Enter Email" name="email" required/>

        <button type="submit" onClick={openGoogleSignIn}>Sign in</button>
    </div>

);


export default SignInForm;
