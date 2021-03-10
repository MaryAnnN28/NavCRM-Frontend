import React from 'react';
import './App.css'; 

import LoginScreen from './components/LoginScreen';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard'; 

import CustomersPage from './components/Customers/CustomersPage';
import NewCustomerForm from './components/Customers/NewCustomerForm';
import EditCustomerForm from './components/Customers/EditCustomerForm';

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
    sort: "None", 
    filter: "All",
    filterTaskType: ""
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

 
  addCustomer = (newCustomerData) => {
    this.setState({
      customers: [...this.state.customers, newCustomerData]
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



// **************************************** //
// ************ TASK FUNCTIONS ************ //
// **************************************** //  
  

  addTask = (newTaskData) => {
    this.setState({
      tasks: [...this.state.tasks, newTaskData]
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

/* ************************************************* */
/* ********** FILTER/SORT/SEARCH FUNCTIONS ********* */
/* ************************************************* */
  
  handleSort = (sort) => {
    this.setState({sort})
  }

  handleFilter = (filter) => {
    this.setState({filter})
  }

  handleSearch = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  
  displayCustomers = () => {
    let displayCustomers = this.state.customers.filter(customer =>
      customer.first_name.toLowerCase().includes(this.state.search.toLowerCase()));

    if (this.state.filter !== "All") {
      displayCustomers = displayCustomers.filter(customer => customer.first_name === this.state.filter)
    }

    switch (this.state.sort) {
      case "Alphabetical_Last":
        return displayCustomers.sort((a, b) => a.last_name > b.last_name ? 1 : -1)
      case "Alphabetical_First":
        return displayCustomers.sort((a, b) => a.first_name > b.first_name ? 1 : -1)
      case "Company":
        return displayCustomers.sort((a, b) => a.company > b.company ? 1 : -1)
      case "Newest":
        return displayCustomers.sort((a, b) => a.created_at > b.created_at ? -1 : 1)
      case "Oldest":
        return displayCustomers.sort((a, b) => a.created_at > b.created_at ? 1 : -1)
      case "None":
        return displayCustomers
    }
    return displayCustomers
  }
  
  

  sortTask = (sort) => {
    this.setState({sort})
  }

  filterTask = (filter) => {
    this.setState({filter})
  }

  searchTask = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  handleFilterType = (event) => {
    this.setState({
      filterTaskType: event.target.value 
    })
  }


  displayTasks = () => {
    let displayTasks = this.state.tasks.filter(task =>
      task.title.toLowerCase().includes(this.state.search.toLowerCase()));

    if (this.state.filter !== "All") {
      displayTasks = displayTasks.filter(task => task.task_type === this.state.filter)
    };

    if (this.state.filterTaskType !== "") {
      displayTasks = displayTasks.filter(task => task.task_type === this.state.filterTaskType)
    };

    switch (this.state.sort) {
      case "Due_Date":
        return displayTasks.sort((a, b) => a.due_date > b.due_date ? 1 : -1)
      case "Newest":
        return displayTasks.sort((a, b) => a.created_at > b.created_at ? -1 : 1)
      case "Oldest":
        return displayTasks.sort((a, b) => a.created_at > b.created_at ? 1 : -1)
      case "None":
        return displayTasks
    }
    return displayTasks
  }



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
      
        <Navbar users={this.state.users} />
            
        <Switch>
          <Route path='/' />
        </Switch>
 
         
        <Route path="/welcome" render={routerProps =>
          <LoginScreen {...routerProps} /> } />
        
      
        {/* <SearchContainer customers={this.state.customers} />  */}
        
            
        <Route path='/home' render={routerProps => 
          <Dashboard
            {...routerProps}
            users={this.state.users} 
            customers={this.state.customers}
            tasks={this.state.tasks}
          />} /> 
          

        <Route path='/userprofile' render={routerProps =>
          <UserComponent {...routerProps} users={this.state.users} />} />
      
          
        <Route path='/customers' render={routerProps =>
          <CustomersPage
            chooseCustomer={this.chooseCustomer}
            viewCustomer={this.viewCustomer}
            deleteCustomer={this.deleteCustomer}
            search={this.state.search}
            sort={this.state.sort}
            customers={this.displayCustomers()}
            updateCustomer={this.updateCustomer}
            handleFilter={this.handleFilter}
            handleSearch={this.handleSearch}
            handleSort={this.handleSort}
            {...routerProps}
          />} />
  

        <Route path="/newcustomerform" render={(routerProps) => 
          <NewCustomerForm
            addCustomer={this.addCustomer} 
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
            customers={this.state.customers}
            users={this.state.users}
            handleNewTask={this.handleNewTask}
            chosenTask={this.state.chosenTask}
            chooseTask={this.chooseTask}
            chosenCustomer={this.chosenCustomer}
            currentUser={this.currentUser}
            deleteTask={this.deleteTask}
            tasks={this.displayTasks()}
            search={this.state.search}
            sort={this.state.sort}
            sortTask={this.sortTask}
            searchTask={this.searchTask}
            filterTask={this.filterTask}
            handleFilterType={this.handleFilterType}
            {...routerProps}
          /> } /> 

          
        <Route path="/newtaskform" render={(routerProps) => 
            <NewTaskForm
              tasks={this.state.tasks}
              customers={this.state.customers}
              users={this.state.users}
              addTask={this.addTask}
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
