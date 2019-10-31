import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'

// Redux
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducers from './reducers/'


// styles
import './index.css'

// components
import App from './App'
import * as serviceWorker from './serviceWorker'

// Redux dev tool
const composeEnhancers = window.__REDUX_DEV_TOOLS_EXTENSION_COMPOSE_ || compose

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={ store } >
        <Router>
            <App />
        </Router>
    </Provider>, 
    document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
