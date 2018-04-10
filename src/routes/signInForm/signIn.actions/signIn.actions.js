import { SING_IN, SIGN_OUT, SIGNIN_ERROR, SIGN_IN } from './signIn.types';
import { presentError } from './error.actions'

const signIn = (user) => {
    console.log(user);
    return {
        type: SIGN_IN,
        user
    }
};

const signOut = () => {
    return {
        type: SIGN_OUT,
        user
    }
};

export const openGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    return (dispatch) => {
        firebase.auth().signInWithPopup(provider)
            .then(result => dispatch(signIn(result.user)))
            .catch(error => dispatch(presentError('Unable to authorize with Google')));
    }
};