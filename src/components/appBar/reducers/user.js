import { USER } from '../actions/types';
import Seba from '../../../img/Seba.jpg';

const initialState = [{
    userName: 'Sebastian Maria Drzewiecki',
    userPhoto: Seba
}];

const userReducer = (initialState, action) => {
    switch(action.type) {
        case(USER):
            return [
                ...state,
                {
                    userName: action.userName,
                    userPhoto: action.userPhoto
                }
            ];
        default:
            return state;
    }
};

export default userReducer;