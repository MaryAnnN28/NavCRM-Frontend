import React from 'react';
import './App.css'; 


import LoginScreen from './components/LoginScreen';
import Navbar from './components/Navbar/Navbar';
import SearchContainer from './components/Search/SearchContainer';
import MainDashboardDisplay from './components/MainDashboardDisplay'; 

import CustomersPage from './components/Customers/CustomersPage';
import NewCustomerForm from './components/Customers/NewCustomerForm';
import EditCustomerForm from './components/Customers/EditCustomerForm';
import CustomerModal from './components/Customers/CustomerModal';



import TasksPage from './components/Tasks/TasksPage';
import NewTaskForm from './components/Tasks/NewTaskForm';
import EditTaskForm from './components/Tasks/EditTaskForm';
import UserComponent from './components/Users/UserComponent';


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
    currentUser: {}, 
    search: "", 
    filteredCustomer: {}
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

  // **************************************** //
  // ************ USER FUNCTIONS ************ // 
  // **************************************** //

  currentUser = (user) => {
    this.setState({
      currentUserObj: user
    })
  }


 // **************************************** //
 // ********** CUSTOMER FUNCTIONS ********** //
 // **************************************** //   

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

  viewCustomer = (customer) => {
    this.setState({
      viewedCustomer: customer
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

  searchCustomers = (input) => {
    let filterCustomers = this.state.customers.filter(customer => customer.first_name.toLowerCase().includes(input.toLowerCase()))
    this.setState({
      filteredCustomer: filterCustomers
    })
  }

// **************************************** //
// ************ TASK FUNCTIONS ************ //
// **************************************** //  
  

  handleNewTask = (event) => {
    event.preventDefault()
    let newTask = {
      title: event.target.title.value,
      task_type: event.target.task_type.value,
      description: event.target.description.value,
      due_date: event.target.due_date.value,
      time_due: event.target.time_due.value,
      notes: event.target.notes.value,
      customer_id: event.target.chosenCustomer.value,
      user_id: event.target.currentUser.value
    }
    event.target.reset()

    let reqPack = {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(newTask)
    }
    fetch(TASKS_URL, reqPack)
      .then(resp => resp.json())
      .then(newTaskData => {
        console.log(newTaskData)
        this.setState({
          tasks: [...this.state.tasks, newTaskData]
        })
      })
    }
  
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

  // taskComponentUnmounted = () => {
  //   this.setState({
  //     chosenCustomer: {}
  //   })
  // }



  handlePageChange = (arg) => {
    this.setState({
      page: arg
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
 
         
        <Route path="/welcome" render={routerProps =>
          <LoginScreen {...routerProps} /> } />
        
          
        <SearchContainer customers={this.state.customers} /> 
        
            
        <Route path='/home' render={routerProps => 
          <MainDashboardDisplay
            {...routerProps}
            users={this.state.users} 
            customers={this.state.customers}
            tasks={this.state.tasks}
          />} /> 
          

        <Route path='/userprofile' render={routerProps =>
          <UserComponent {...routerProps} users={this.state.users} />} />
      
          
        <Route path='/customers' render={routerProps =>
          <CustomersPage
            customers={this.state.customers} 
            chooseCustomer={this.chooseCustomer}
            viewCustomer={this.viewCustomer}
            deleteCustomer={this.deleteCustomer}
            search={this.state.search}
            searchCustomers={this.searchCustomers}
            {...routerProps}
          />} />
  

        <Route path="/newcustomerform" render={(routerProps) => 
          <NewCustomerForm
              handleNewCustomer={this.handleNewCustomer} 
            {...routerProps}
            />} />
            

        <Route path='/editcustomerform' render={(routerProps) =>
          <EditCustomerForm
            {...this.state.chosenCustomer}
            updateCustomer={this.updateCustomer}
            {...routerProps}
          />} />
        
        
      
      <Route path='/tasks' render={(routerProps) =>
          <TasksPage
            tasks={this.state.tasks} 
            customers={this.state.customers}
            users={this.state.users}
            handleNewTask={this.handleNewTask}
            chosenTask={this.state.chosenTask}
            chooseTask={this.chooseTask}
            chosenCustomer={this.chosenCustomer}
            currentUser={this.currentUser}
            deleteTask={this.deleteTask}
            {...routerProps}
    
          /> } /> 

          
        <Route path="/newtaskform" render={(routerProps) => 
            <NewTaskForm
              tasks={this.state.tasks}
              handleNewTask={this.handleNewTask}
              customers={this.state.customers}
              users={this.state.users}
              {...routerProps}
            />} />
            
            
        <Route path='/edittaskform' render={(routerProps) =>
          <EditTaskForm
            {...this.state.chosenTask}
              updateTask={this.updateTask}
              customers={this.state.customers}
              chosenCustomer={this.state.chosenCustomer}
              users={this.state.users}
              currentUser={this.state.currentUser}
              handlePageChange={this.handlePageChange}
            {...routerProps}
            />} />
            
      
          
      
        </div>
      </ChakraProvider>
      </Router>

    )
  }
}




export default App;
