import React, { Component } from 'react';
import { Input, FormControl, Select, Textarea, Heading, Button } from '@chakra-ui/react';


const TASKS_URL = "http://localhost:3000/tasks";

class NewTaskForm extends Component {
  state = {
      title: "", 
      task_type: null, 
      description: "", 
      due_date: "", 
      time_due: "", 
      notes: "", 
      customers: [],
    chosenCustomer: {}, 
    currentUser: {}
    // currentUser (pass in here)
    }
  

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleCustomerSelect = (chosenCustomer) => {
    this.setState({ chosenCustomer })
  }

  handleNewTask = (event) => {
    event.preventDefault() 
    let newTask = {
      title: this.state.title, 
      task_type: this.state.task_type, 
      description: this.state.description, 
      due_date: this.state.due_date, 
      time_due: this.state.time_due, 
      notes: this.state.notes, 
      customer_id: this.state.chosenCustomer.id,
      user_id: this.state.currentUser.id
    }
    let reqPack = {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(newTask)
      // 
    }
    
    fetch(TASKS_URL, reqPack)
    .then(resp => resp.json())
    .then((newTaskData) => {
      console.log(newTaskData)
      this.props.addTask(newTaskData)
      event.target.reset()
      debugger
    })
  }



  // createJoiners = (newTask) => {
  //   let updatedTask = newTask
  //   let customerTasks = []
  //   updatedTask.tasks = customerTasks
  //   this.setState(customer => {
  //     const newCustomerTasks = {
  //       task_id: newTask.id, 
  //       customer_id: customer.id,
  //       user_id: customer.currentUser.id
  //       // NEEds customer id and user id 
  //     }

  //     const reqPack = {
  //       headers: { "Content-Type": "application/json" }, 
  //       method: "POST", 
  //       body: JSON.stringify(newCustomerTasks)
  //     }

  //     fetch(TASKS_URL, reqPack)
  //       .then(resp => resp.json())
  //       .then(customerTask => {
  //         console.log(customerTasks)
  //         customerTasks.push(customerTask)
  //         this.props.addCustomerTasks(updatedTask)
  //     })
  //   })
  //     this.renderTasks()
  // }

  renderTasks = () => {
    this.props.history.push('/tasks');
  }
  
    
  render () {
    
    
    const { title, task_type, description, due_date, time_due, notes, chosenCustomer } = this.state
    
    console.log(chosenCustomer);
    return (
      <div>
        <center>
        <div className="task-form-container"><br />
            <Heading size="lg">Add New Task</Heading><br />
            
          <form className="task-form" id="new-task-form" onSubmit={(e) => {this.handleNewTask(e)}}>

              <FormControl id="title">
                <Input
                  name="title"
                  placeholder="Title"
                  size="md"
                  width="xs" 
                  variant="flushed"
                  value={title}
                  onChange={this.handleInputChange}
                />
              
                <Select
                  name="task_type"
                  placeholder="Type"
                  size="md"
                  width="xs" 
                  variant="flushed"
                  value={task_type} 
                  onChange={this.handleInputChange}
                >
                  <option value="to-do">To-Do</option>
                  <option value="email">Email</option>
                  <option value="call">Call</option>
                  <option value="proposal">Proposal</option>
                  <option value="appointment">Appointment</option>
                </Select>
      
                <Select
                  name="chosenCustomer"
                  placeholder="Customer"
                  size="md"
                  width="xs"
                  variant="flushed"
                  value={this.state.chosenCustomer}
                  // selected={chosenCustomer.includes(customer)}
                  onChange={(e) => this.handleCustomerSelect(e.target.value)}>
                    {this.props.customers.map(customer => 
                      <option value={customer}>
                        {customer.first_name} {customer.last_name}
                        </option>
                      )}
                </Select>

                {/* <Select
                  name="chosenCustomer"
                  placeholder="Customer"
                  size="md"
                  width="xs"
                  variant="flushed"
                  value={chosenCustomer}
                  // selected={chosenCustomer.includes(customer)}
                  onChange={() => this.handleCustomerSelect(chosenCustomer)}>
                    <option value={chosenCustomer.first_name}>
                      {chosenCustomer.first_name} 
                    </option>
             
                </Select> */}
                 
          

                <Input
                  name="description"
                  placeholder="Description"
                  size="md"
                  width="xs" 
                  variant="flushed"
                  value={description}
                  onChange={this.handleInputChange}
                />
                <br /> 

                <Input
                  name="due_date"
                  placeholder="MM/DD/YYY"
                  size="md"
                  width="xs" 
                  variant="flushed"
                  value={due_date}
                  onChange={this.handleInputChange}
                />
                <br />

                <Select
                  name="time_due"
                  placeholder="Time Due"
                  size="md"
                  width="xs" 
                  variant="flushed"
                  value={time_due} 
                  onChange={this.handleInputChange}
                >
                  <option>7:00 am</option>
                  <option>7:30 am</option>
                  <option>8:00 am</option>
                  <option>8:30 am</option>
                  <option>9:00 am</option>
                  <option>9:30 am</option>
                  <option>10:00 am</option>
                  <option>10:30 am</option>
                  <option>11:00 am</option>
                  <option>11:30 am</option>
                  <option>12:00 pm</option>
                  <option>12:30 pm</option>
                  <option>1:00 pm</option>
                  <option>1:30 pm</option>
                  <option>2:00 pm</option>
                  <option>2:30 pm</option>
                  <option>3:00 pm</option>
                  <option>3:30 pm</option>
                  <option>4:00 pm</option>
                  <option>4:30 pm</option>
                  <option>5:00 pm</option>
                  <option>5:30 pm</option>
                  <option>6:00 pm</option>
                  <option>6:30 pm</option>
                  <option>7:00 pm</option>
                  <option>7:30 pm</option>
                  <option>8:00 pm</option>
                  <option>8:30 pm</option>
                  <option>9:00 pm</option>                 
                </Select>
                
                
                <br /><br /> 

                <Textarea
                  name="notes"
                  placeholder="Notes"
                  size="sm"
                  width="xs"
                  value={notes}
                  onChange={this.handleInputChange}
                />
                <br /> <br />
              </FormControl>

              <Button colorScheme="blackAlpha" size="sm" variant="solid" type="submit">
                Create Task
              </Button>
        </form>
        </div>
        </center>
    </div>
    )
  }
  




  }

export default NewTaskForm; 