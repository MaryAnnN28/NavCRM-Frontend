import React from 'react';
import './App.css'; 

import Navbar from './components/Navbar/Navbar';
import SearchContainer from './components/Search/SearchContainer';
import MainDashboardDisplay from './components/MainDashboardDisplay'; 
import CustomersPage from './components/Customers/CustomersPage';
import TasksPage from './components/Tasks/TasksPage';
import UserComponent from './components/Users/UserComponent';
import NewCustomerForm from './components/Customers/NewCustomerForm';
import EditCustomerForm from './components/Customers/EditCustomerForm';
import NewTaskForm from './components/Tasks/NewTaskForm';
import EditTaskForm from './components/Tasks/EditTaskForm';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import { ChakraProvider } from "@chakra-ui/react";



const USERS_URL = "http://localhost:3000/users/";
const CUSTOMERS_URL = "http://localhost:3000/customers/";
const TASKS_URL = "http://localhost:3000/tasks/";

class App extends React.Component {

  state = { 
    customers: [], 
    tasks: [],
    users: [], 
    chosenCustomer: {}, 
    chosenTask: {},
    currentUser: {}
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
  // ************ USER FUNCTIONS ************ // 

  currentUser = (user) => {
    this.setState({
      currentUserObj: user
    })
  }


  // ************ CUSTOMERS FUNCTIONS ************ // 

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
    event.target.reset()

    let reqPack = {
      headers: { "Content-Type": "application/json" }, 
      method: "POST", 
      body: JSON.stringify(newCustomer)
    }
    fetch(CUSTOMERS_URL, reqPack)
    .then(resp => resp.json())
      .then(newCustomerData => {
      console.log(newCustomerData)
      this.setState({
        customers: [...this.state.customers, newCustomerData]
      })
    })
  }

  chooseCustomer = (customer) => {
    this.setState({
      chosenCustomer: customer
    })
  }

  updateCustomer = (updatedCustomer) => {
    this.setState({
      customers: this.state.customers.map(customer => customer.id === updatedCustomer.id ? updatedCustomer : customer)
    })
  }

  deleteCustomer = (deletedCustomer) => {
    this.setState({
      customers: this.state.customers.filter(customer => customer !== deletedCustomer)
    })
  }


// ************ TASK FUNCTIONS ************ //

  addTask = (newTaskData) => {
    // this.setState({
    //   tasks: [...this.state.tasks, newTaskData]
    // })
    console.log(this.state.tasks)
  }

  // addCustomerTasks = (updatedTask) => {
  //   // this.setState({
  //   //   tasks: this.state.tasks.map(task => task.id === updatedTask.id ? updatedTask : task)
  //   // })
  //   console.log(updatedTask); 
  //   console.log(this.state.tasks); 
    
  // }

  chooseTask = (task) => {
    this.setState({
      chosenTask: task
    })
  }

  updateTask = (updatedTask) => {
    this.setState({
      tasks: this.state.tasks.map(task => task.id === updatedTask.id ? updatedTask : task)
    })
  }

  deleteTask = (deletedTask) => {
    this.setState({
      tasks: this.state.tasks.filter(task => task !== deletedTask)
    })
  }




  render() {
    return (
      <Router>
        <ChakraProvider>
          
      <div>
          <Navbar /> 
          <Switch>
            <Route path='/' />
          </Switch>
 
         
            <Route exact path="/" render={() =>
              <div><center><br /><br /><h1>Log In or Sign Up Screen</h1></center></div>} />
            
          
        <div className="search-container-main">
            <SearchContainer customers={this.state.customers} />
            </div><br />
            
            <Route path='/home' render={routerProps => 
              <MainDashboardDisplay {...routerProps} users={this.state.users} /> } /> 
          

          <Route path='/userprofile' render={routerProps =>
            <UserComponent {...routerProps} users={this.state.users} />} />
        
            
            <Route path='/customers' render={routerProps =>
              <CustomersPage
                {...routerProps}
                customers={this.state.customers} 
                chooseCustomer={this.chooseCustomer}
                deleteCustomer={this.deleteCustomer}
              />} />
    

          <Route path="/newcustomerform" render={routerProps => 
            <NewCustomerForm
              {...routerProps}
                handleNewCustomer={this.handleNewCustomer} 
              />} />
            

            <Route path='/editcustomerform' render={(routerProps) =>
              <EditCustomerForm
                {...routerProps}
                {...this.state.chosenCustomer}
                updateCustomer={this.updateCustomer}
              />} />
            

          
            <Route path='/tasks' render={routerProps =>
              <TasksPage
                {...routerProps}
                  tasks={this.state.tasks} 
                  chooseTask={this.chooseTask}
                deleteTask={this.deleteTask}
                chosenCustomer={this.state.chosenCustomer}
                currentUser={this.state.currentUser}
              />} />

          
          <Route path="/newtaskform" render={routerProps => 
              <NewTaskForm
                {...routerProps}
                addCustomerTasks={this.addCustomerTasks}
                addTask={this.addTask}
                tasks={this.state.tasks}
                customers={this.state.customers}
                chosenCustomer={this.state.chosenCustomer}
                currentUser={this.state.currentUser}
              />} />
            
            
          <Route path='/edittaskform' render={(routerProps) =>
            <EditTaskForm
              {...routerProps}
              {...this.state.chosenTask}
              updateTask={this.updateTask}
              />} />
            
      
          
      
        </div>
      </ChakraProvider>
      </Router>

    )
  }
}




export default App;
