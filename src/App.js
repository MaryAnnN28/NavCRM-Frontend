import React from 'react';
import MainContainer from './components/MainContainer'; 
import MenuContainer from './components/Menu/MenuContainer';

const USER_URL = "http://localhost:3000/users";
const CUSTOMERS_URL = "http://localhost:3000/customers";
const TASKS_URL = "http://localhost:3000/tasks";


// This is "Home Page"

class App extends React.Component {

  state = {
    customers: [], 
    tasks: [],
    users: []
  }



  componentDidMount() {
    fetch(CUSTOMERS_URL)
      .then(res => res.json())
      .then(customerData => this.setState({
      customers: customerData
      }))
    
    fetch(TASKS_URL)
      .then(res => res.json())
      .then(taskData => this.setState({
      tasks: taskData
      }))
    
    fetch(USER_URL)
      .then(res => res.json())
      .then(userData => this.setState({
      users: userData
    }))
  }



  render() {
    return (
      <div>
        <center>
        <h1>This is my Home Page</h1>
        </center>
        <br /> 

        <MainContainer
          customers={this.state.customers}
          tasks={this.state.tasks} 
          users={this.state.users}
        /> 
        
        <MenuContainer /> 
      </div>
  );
}
}

export default App;
