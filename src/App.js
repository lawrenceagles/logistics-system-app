import React from 'react'
import { Route, Switch } from 'react-router-dom'
import logo from './logo.svg'

// bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

// style
import './App.css'

// components
import Register from './components/Register'
import Login from './components/Login'
import Error from './components/Error'
import Layout from './components/Layout'

function App() {
  return (
    <>
      <Switch>
        <Layout>
          <Route exact path="login" component={ Login } />
          <Route exact path="register" component={ Register } />
          <Route component={ Error } />
        </Layout>
      </Switch>
    </>
  )
}

export default App;
