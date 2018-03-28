import { combineReducers } from 'redux'

const temporaryReducer = (state = null) => { // I added this reducer only because CombineReducers without any arguments returned an error.
            return state;                      // First person who will add real reducer should delete temporaryReducer.
    };

export default combineReducers({
    temporaryReducer
})