import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignUp from './components/Signup'
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
      <BrowserRouter>
        <Switch>
          <Route path="/register" component={SignUp} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App
