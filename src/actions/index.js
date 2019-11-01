import logisticsLogin from '../api/logistics'
import { AUTHENTICATED, AUTHENTICATION_ERROR, UNAUTHENTICATED } from './types'

export function loginAction({ username: identifer, password }, history) { // destructuring username as identifer and password from form values
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