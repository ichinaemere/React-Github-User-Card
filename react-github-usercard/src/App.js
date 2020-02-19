import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import UserFollowers from './components/UserFollowers';

class App extends React.Component{
  constructor(){
    super();

    this.state = {
      userData: [],
      userFollowers: []
    };
  }

  componentDidMount() {
    axios
    .get('https://api.github.com/users/ichinaemere')
    .then(response => {
      console.log(response)
      this.setState({
        userData: response.data
      });
    })

    .catch(err => console.log(err));

    axios
    .get('https://api.github.com/users/ichinaemere/followers')
    .then(res => {
      console.log(res)
      this.setState({
        userFollowers: res.data 
      });
    })
  }

  render(){
    return (
      <div>
        <h1>React GitHub Usercard</h1>
        <UserCard userData={this.state.userData}/>
        <UserFollowers userFollowers={this.state.userFollowers}/>
      </div>
    )
  }
}




export default App;
