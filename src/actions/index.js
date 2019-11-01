import logisticsLogin from '../api/logistics'
import { AUTHENTICATED, AUTHENTICATION_ERROR, UNAUTHENTICATED } from './types'

export function loginAction({ identifer, password }, history) { // destructuring username as identifer and password from form values
    return async dispatch => {
      try {
        const response = await logisticsLogin.post("/auth/local", { identifer, password })
        dispatch({ type: AUTHENTICATED })
        localStorage.setItem('authUser', response.data.token)
        history.push('/')
      } catch(error) {
        dispatch({
          type: AUTHENTICATION_ERROR,
          payload: 'Invalid username or password'
        })
      }
    }
  }


  export function registrationAction({ identifier:username, password, email, phone }, history) { // destructuring username as identifer and password from form values
    console.log("called", username, phone, password, email)
    return async dispatch => {
      try {
        const response = await logisticsLogin.post("/auth/local/register", { username, email, password, phone })
        dispatch({ type: AUTHENTICATED })
        localStorage.setItem('authUser', response.data.jwt)
        console.log(localStorage.getItem('authUser'), "my token")
        console.log(response, "the response")
        history.push('/')
      } catch(error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
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
          payload: 'Invalid username or password'
        })
      }
    }
  }