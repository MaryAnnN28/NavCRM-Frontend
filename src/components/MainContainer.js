import React from 'react'; 
import './Main.css'; 
import SearchContainer from './Search/SearchContainer';
import CustomerComponent from './Customers/CustomerComponent';
import TaskComponent from './Tasks/TaskComponent';
import UserComponent from './Users/UserComponent';
import NewCustomerForm from './Customers/NewCustomerForm';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const USERS_URL = "http://localhost:3000/users";
const CUSTOMERS_URL = "http://localhost:3000/customers";
const TASKS_URL = "http://localhost:3000/tasks";

class MainContainer extends React.Component {

  state = {
    customers: [], 
    tasks: [],
    users: [], 
    
  }

  componentDidMount() {
    fetch(CUSTOMERS_URL)
      .then(resp => resp.json())
      .then(customerData => this.setState({
      customers: customerData
      }))
    
    fetch(TASKS_URL)
      .then(resp => resp.json())
      .then(taskData => this.setState({
      tasks: taskData
      }))
    
    fetch(USERS_URL)
      .then(resp => resp.json())
      .then(userData => this.setState({
      users: userData
    }))
  }

  // --------- New Customer Form --------- // 

  handleNewCustomer = (event) => {
    event.preventDefault()
    let newCustomer = {
      first_name: event.target.first_name.value, 
      last_name: event.target.last_name.value,  
      company: event.target.company.value, 
      job_title: event.target.job_title.value, 
      industry: event.target.industry.value, 
      email: event.target.email.value, 
      phone: event.target.phone.value, 
      notes: event.target.notes.value
    }
    
    let reqPack = {
      headers: { "Content-Type": "application/json" }, 
      method: "POST", 
      body: JSON.stringify(newCustomer)
    }
    
    fetch(CUSTOMERS_URL, reqPack)
    .then(resp => resp.json())
    .then((newCustomerData) => {
      this.setState({
        customers: [...this.state.customers, newCustomerData]
      })
      event.target.reset()
    })
  }


  
  render() {
    return (
      <Router>    
        <div>
          <Route exact path="/users" render={(routerProps) =>
            <UserComponent
              users={this.props.users}
              {...routerProps}
            />} 
          />
       

        <div className="search-container-main">
            <SearchContainer
              customers={this.state.customers} />
        </div>

        <br />
        
        <div className="customer-container-main">
            <CustomerComponent
              customers={this.state.customers}
              
          />
        </div>
          
          <br />
            
        <div className="task-container-main">
            <TaskComponent
              tasks={this.state.tasks} /> 
          </div>

        <br />
   
          <NewCustomerForm
            handleNewCustomer={this.handleNewCustomer} />
      

      </div>
      </Router>
    )
  }
}

export default MainContainer; 