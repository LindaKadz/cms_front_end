import React, { Component } from 'react';
import './App.css';
import SignUp from './components/Signup'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Sign Up to continue!</h1>
        </div>
        <SignUp />
      </div>
    );
  }
}

export default App
