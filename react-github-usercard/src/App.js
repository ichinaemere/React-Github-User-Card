import React from 'react';
import axios from 'axios';

class App extends React.Component{
  constructor(){
    super();

    this.state = {
      userData: []
    };
  }

  componentDidMount() {
    axios
    .get('https://api.github.com/users/ichinaemere')
    .then(response => {
      this.setState({
        userData: response.data
      });
    })
    
    .catch(err => console.log(err));
  }

  render(){
    return (
      <div>
        <h1>Hello! This is my React GitHub Usercard</h1>
      </div>
    )
  }
}




export default App;
