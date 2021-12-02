import React, { Component } from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

//redux
import {Provider} from 'react-redux'
import store from './redux/store'

import home from './pages/home'
import login from './pages/login'
import signup from './pages/signup'
import companyLogin from './pages/companyLogin'
import companySignup from './pages/companySignup'
import products from './pages/products'
import customer from './pages/customer'
import userKeys from './pages/userKeys'
import companyKeys from './pages/companyKeys'

import NavigationBar from './components/NavigationBar'

class App extends Component{
  render(){
    return (
      <Provider store={store}>
        <Router>
          <div>
            <NavigationBar/>
            <Switch>
              <Route exact path="/" component={home} />
              <Route exact path="/login" component={login} />
              <Route exact path="/signup" component={signup} />
              <Route exact path="/companyLogin" component={companyLogin} />
              <Route exact path="/companySignup" component={companySignup} />
              <Route exact path="/products/:username" component={products} />
              <Route exact path="/customer/:username" component={customer} />
              <Route exact path="/customer/:username/keys" component={userKeys} />
              <Route exact path="/company/:username/keys" component={companyKeys} />

            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App