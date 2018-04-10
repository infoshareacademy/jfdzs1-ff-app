import { combineReducers } from 'redux'
import error from '../routes/signInForm/signIn.reducers/error.reducer'
import user from '../routes/signInForm/signIn.reducers/user.reducer'

export default combineReducers({
    error,
    user
})