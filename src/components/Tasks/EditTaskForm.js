import React from 'react'; 
import './Tasks.css';
import { Input, FormControl, Select, Textarea, Heading, Button } from '@chakra-ui/react'; 

const TASKS_URL = "http://localhost:3000/tasks/";

class EditTaskForm extends React.Component {
  state = {
    title: this.props.title, 
    task_type: this.props.task_type, 
    description: this.props.description,  
    due_date: this.props.due_date, 
    time_due: this.props.time_due,  
    notes: this.props.notes, 
    chosenCustomer: this.props.chosenCustomer
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  renderTasks() {
    this.props.history.push('/tasks');
  }

  handleEditTask = (event) => {
    event.preventDefault()
    let updatedTask = this.state

    let reqPack = {
      headers: { "Content-Type": "application/json" }, 
      method: "PATCH", 
      body: JSON.stringify(updatedTask)
    }
    fetch(TASKS_URL + this.props.id, reqPack)
      .then(resp => resp.json())
      .then(updatedTask => {
        this.props.updateTask(updatedTask)
        this.renderTasks()
        event.target.reset()
    })
  }

  render() {

    const { title, task_type, description, due_date, time_due, notes, chosenCustomer } = this.state

    return (
      <div>
        <center>
        <div className="task-form-container"><br />
            <Heading size="lg">Add New Task</Heading><br />
            
          <form className="task-form" onSubmit={this.handleEditTask}>

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
                  <option>To-Do</option>
                  <option>Email</option>
                  <option>Call</option>
                  <option>Proposal</option>
                  <option>Appointment</option>
                </Select>

                
        <Select
          name="chosenCustomer"
          placeholder="Customer"
          size="md"
          width="xs"
          variant="flushed"
          // selected={chosenCustomer.includes(customer)}
          onChange={() => this.handleCustomerSelect(chosenCustomer)}>
            {this.props.customers.map(customer => 
              <option value={customer.id}>
                {customer.first_name} {customer.last_name}
                </option>
              )}
        </Select>       
          
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

export default EditTaskForm; 