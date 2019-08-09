import React from 'react';
import './App.css';
import RegistrationForm from './components/RegistrationForm'

class App extends React.Component {
  constructor() {
    super()

  }

  render() {
    return (
      <div className="App">
        <h1>hello!</h1>
        <RegistrationForm />
      </div>
    );
  }
  
}

export default App;
