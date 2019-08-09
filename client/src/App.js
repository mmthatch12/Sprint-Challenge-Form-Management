import React from 'react';
import './App.css';
import Axios from 'axios'

import FormicRegistrationForm from './components/RegistrationForm'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      apiData: {}
    }
  }

  componentDidMount() {
    this.getRegistrationData()
  }

  getRegistrationData = () => {
    Axios.get("http://localhost:5000/api/restricted/data")
      .then(response => {
        console.log(response.data)
      })
      .catch(err => {
        console.log(err)
      })

  }

  render() {
    return (
      <div className="App">
        <FormicRegistrationForm />
      </div>
    );
  }
  
}

export default App;
