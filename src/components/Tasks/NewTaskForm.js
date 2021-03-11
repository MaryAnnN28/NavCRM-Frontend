import React from 'react';
import './Tasks.css';
import { Input, FormControl, FormLabel, HStack, Select, Textarea, Heading, Button } from '@chakra-ui/react';

const TASKS_URL = "http://localhost:3000/tasks/";

class NewTaskForm extends React.Component {
  
  state = {
      title: "", 
      task_type: null, 
      description: "", 
      due_date: "", 
      time_due: "", 
      notes: "", 
      customer_id: {}, 
      user_id: {}
    }

  

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
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
      customer_id: this.state.customer_id,
      user_id: this.state.user_id 
    }

    let reqPack = {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(newTask)
    }

    fetch(TASKS_URL, reqPack)
      .then(resp => resp.json())
      .then((newTaskData) => {
        this.props.addTask(newTaskData)
        this.renderTasks()
        event.target.reset()
    })
  }


  handleCustomerSelect = (customer_id) => {
    this.setState({ customer_id })
  }

  handleUserSelect = (user_id) => {
    this.setState({ user_id })
  }

  renderTasks() {
    this.props.history.push('/tasks');
  }
  
    
  render () {
    const { title, task_type, description, due_date, time_due, notes, customer_id, user_id } = this.state
    
    return (
      <>
        <center>
        <div className="task-form-container"><br />
            <Heading size="md" mb={5}>Create New Task</Heading><br />
            
          <form className="task-form" id="new-task-form" onSubmit={(event) => this.handleNewTask(event)}>

              <FormControl id="title" isRequired={true}>
                <HStack space={2} direction="row">
                <FormLabel colorScheme="gray">Title</FormLabel>
                <Input
                  name="title"
                  type="text"
                  size="md"
                  width="xs" 
                  variant="outline"
                  textColor="blackAlpha.900"
                  value={title}
                  onChange={this.handleInputChange}/>
                </HStack>
              </FormControl>
              
              <br />
              <FormControl id="task_type" isRequired={true}>
                <HStack space={2} direction="row">
                <FormLabel colorScheme="gray">Type</FormLabel>
                <Select
                  name="task_type"
                  size="md"
                  width="xs" 
                  variant="outline"
                  textColor="gray"
                  value={task_type} 
                  onChange={this.handleInputChange} >
                  <option value="To-do">Select a task type</option>
                  <option value="Email">Email</option>
                  <option value="Call">Call</option>
                  <option value="Proposal">Proposal</option>
                  <option value="Appointment">Appointment</option>
                  </Select>
                  </HStack>
              </FormControl>


                <br />
                <FormControl id="description">
                <HStack space={2} direction="row">
                <FormLabel colorScheme="gray">Description</FormLabel>
                <Input
                  name="description"
                  type="text"
                  size="md" width="xs" 
                  textColor="blackAlpha.900"
                  variant="outline"
                  value={description}
                  onChange={this.handleInputChange}
                  />
                </HStack>
                </FormControl>
      
                <br />
                <FormControl id="chosenCustomer" isRequired={true}>
                <HStack space={2} direction="row">
                <FormLabel colorScheme="gray">Customer</FormLabel>
                <Select
                  name="chosenCustomer"
                  placeholder="Select customer"
                  size="md" width="xs"
                  variant="outline"
                  value={customer_id}
                  onChange={(e) => this.handleCustomerSelect(e.target.value)}>
                    {this.props.customers.map(customer => 
                      <option value={customer.id}>
                      {customer.first_name} {customer.last_name}
                        </option>
                      )}
                  </Select>
                  </HStack>
                </FormControl>

                <br />

                <FormControl id="currentUser" isRequired={true}>
                <HStack space={2} direction="row">
                <FormLabel colorScheme="gray">User</FormLabel>
                <Select
                  name="currentUser"
                  placeholder="Select user"
                  size="md" width="xs"
                  variant="outline"
                  value={user_id}
                  onChange={(e) => this.handleUserSelect(e.target.value)}>
                    {this.props.users.map(user => 
                      <option value={user.id}>
                        {user.first_name} 
                        </option>
                      )}
                </Select>
                </HStack>
                </FormControl>
                <br /> 

                <FormControl id="due_date" isRequired={false}>
                <HStack space={2} direction="row">
                <FormLabel colorScheme="gray">Due Date</FormLabel>
                <Input
                  name="due_date"
                  placeholder="MM/DD/YYY"
                  type="date"
                  size="md" width="xs" 
                  variant="outline"
                  value={due_date}
                  onChange={this.handleInputChange}/>
                  </HStack>
                </FormControl>

                <br />

                <FormControl id="time_due" isRequired={false}>
                <HStack space={5} direction="row">
                <FormLabel colorScheme="gray">Time Due</FormLabel>
                <Input
                  name="time_due"
                  placeholder="Time Due"
                  type="time"
                  size="md" width="xs" 
                  textColor="blackAlpha.900"
                  variant="outline"
                  value={time_due}
                    onChange={this.handleInputChange} />
                  </HStack>
                </FormControl>
                  

                <br />
                <FormControl id="notes" isRequired={false}>
                <HStack space={2} direction="row">
                <FormLabel colorScheme="gray">Notes</FormLabel>
                <Textarea
                  name="notes"
                  rows="4"
                  placeholder="Notes"
                  size="md"  width="sm"
                  colorScheme="blackAlpha"
                  value={notes}
                  onChange={this.handleInputChange}/>
              </HStack>
                </FormControl>
                <br /> <br />
          

              <Button colorScheme="blackAlpha" size="sm" variant="solid" type="submit">
                Create Task
              </Button>
        </form>
        </div>
        </center>
    </>
    )
  }
}

export default NewTaskForm; 