import React from 'react';
import './App.css';
import Axios from 'axios'

import FormicRegistrationForm from './components/RegistrationForm'
import GetCard from './components/GetCard'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      apiData: []
    }
  }

  componentDidMount() {
    this.getRegistrationData()
  }

  getRegistrationData = () => {
    Axios.get("http://localhost:5000/api/restricted/data")
      .then(response => {
        console.log("response.data", response.data)
        const food = response.data
        this.setState({ apiData: food })
        console.log("this.state.apiData", this.state.apiData)
      })
      .catch(err => {
        console.log(err)
      })

  }

  render() {
    return (
      <div className="App">
        <h1>Registration Form</h1>
        <FormicRegistrationForm click={click}/>
        <GetCard apiData={this.state.apiData} />
      </div>
    );
  }
  
}

export default App;
