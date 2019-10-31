import { combineReducers } from 'redux'
import registrationReducer from './registrationReducer'
import loginReducer from './loginReducer'


export default combineReducers({
    registeration: registrationReducer,
    login: loginReducer
})