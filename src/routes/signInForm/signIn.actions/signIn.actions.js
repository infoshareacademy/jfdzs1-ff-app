import { SIGN_OUT, SIGNIN_ERROR, SIGN_IN } from './signIn.types';
import { presentError } from './error.actions'
import {googleProvider, auth} from '../../../firebase'

const signIn = (user) => {
    console.log(user);
    return {
        type: SIGN_IN,
        user
    }
};

const signOut = (user) => {
    return {
        type: SIGN_OUT,
        user
    }
};

export const openGoogleSignIn = () => {
    return (dispatch) => {
        auth.signInWithPopup(googleProvider)
            .then(result => dispatch(signIn(result.user)))
            .catch(error => dispatch(presentError('Unable to authorize with Google')));
    }
};

// import { SING_IN, SIGN_OUT, SIGNIN_ERROR, SIGN_IN } from './signIn.types';
// import { presentError } from './error.actions';
// import {googleProvider, auth} from '../../firebase.js';
//
// const signIn = (user) => {
//     return {
//         type: SIGN_IN,
//         user
//     }
// };
//
// const signOut = (tutaj BRAKUJE USERA) => {
//     return {
//         type: SIGN_OUT,
//         user
//     }
// };
//
// export const openGoogleSignIn = () => {
//     return (dispatch) => {
//         auth.signInWithPopup(googleProvider)
//             .then(result => dispatch(signIn(result.user)))
//             .catch(error => dispatch(presentError('Unable to authorize with Google')));
//     }
// };