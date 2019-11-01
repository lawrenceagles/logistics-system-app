import logisticsLogin from '../api/logistics'
import { AUTHENTICATED, AUTHENTICATION_ERROR, UNAUTHENTICATED } from './types'

export function loginAction({ identifier, password }, history) { // destructuring username as identifier and password from form values
    return async dispatch => {
      try {
        const response = await logisticsLogin.post("/auth/local", { identifier, password })
        dispatch({ type: AUTHENTICATED })
        localStorage.setItem('authUser', response.data.jwt)
        history.push('/')
      } catch(error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        
        dispatch({
          type: AUTHENTICATION_ERROR,
          payload: error.response.data.message[0].messages[0].message
        })
      }
    }
  }


  export function registrationAction({ identifier:username, password, email, phone }, history) { // destructuring username as identifer and password from form values
    return async dispatch => {
      try {
        const response = await logisticsLogin.post("/auth/local/register", { username, email, password, phone })
        dispatch({ type: AUTHENTICATED })
        localStorage.setItem('authUser', response.data.jwt)
        history.push('/')
      } catch(error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
        dispatch({
          type: AUTHENTICATION_ERROR,
          payload: error.response.data.message[0].messages[0].message
        })
      }
    }
  }