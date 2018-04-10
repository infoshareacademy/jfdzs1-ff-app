import { SHOW_ERROR, HIDE_ERROR } from '../signIn.actions/signIn.types';

const error = (state = null, action) => {
    switch(action.type) {
        case(SHOW_ERROR):
            return action.error; // action.error = 'Unable to authenticate'
        case(HIDE_ERROR):
            return null;
        default:
            return state;
    }
};

export default error;