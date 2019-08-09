import React from 'react';
import './App.css';
import FormicRegistrationForm from './components/RegistrationForm'

class App extends React.Component {
  constructor() {
    super()

  }

  render() {
    return (
      <div className="App">
        <h1>hello!</h1>
        <FormicRegistrationForm />
      </div>
    );
  }
  
}

export default App;
