import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import registrationReducer from './registrationReducer'
import loginReducer from './loginReducer'


export default combineReducers({
    registeration: registrationReducer,
    login: loginReducer,
    form: formReducer
})