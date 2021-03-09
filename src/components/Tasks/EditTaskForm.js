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
    chosenCustomer: this.props.customer_id, 
    currentUser: this.props.user_id
  }


  componentDidMount() {
    return this.props.handlePageChange('edit')
  }

  componentWillUnmount() {
    return this.props.handlePageChange('home')
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleCustomerSelect = (chosenCustomer) => {
    this.setState({ chosenCustomer })
  }

  handleUserSelect = (currentUser) => {
    this.setState({ currentUser })
  }

  renderTasks() {
    this.props.history.push('/tasks');
  }

  // ******** Handles the Edit Submit Function ******** //
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
        // console.log(updatedTask)
        this.props.updateTask(updatedTask)
        this.renderTasks()
        event.target.reset()
    })
  }

  render() {

    const { title, task_type, description, due_date, time_due, notes, chosenCustomer, currentUser} = this.state

    return (
      <div>
        <center>
        <div className="task-form-container"><br />
            <Heading size="lg">Update Task</Heading><br />
            
            <form className="task-form" onSubmit={(event) => {this.handleEditTask(event)}}>
            

       
                <Input
                  name="title"
                  type="text"
                  placeholder="Title"
                  size="md"
                  width="xs" 
                  variant="flushed"
                  textColor="blackAlpha.900"
                  value={title}
                  onChange={this.handleInputChange}
                />
              
                <br /><br />
                <Select
                  name="task_type"
                  placeholder="Type"
                  size="md"
                  width="xs" 
                  variant="flushed"
                  value={task_type} 
                  onChange={this.handleInputChange}
                >
                  <option value="To-do">To-Do</option>
                  <option value="Email">Email</option>
                  <option value="Call">Call</option>
                  <option value="Proposal">Proposal</option>
                  <option value="Appointment">Appointment</option>
                </Select>


                <br /><br />

                <Input
                  name="description"
                  placeholder="Description"
                  type="text"
                  size="md"
                  width="xs" 
                  variant="flushed"
                  value={description}
                  onChange={this.handleInputChange}
                />
      
                <br /><br />

                <Select
                  name="chosenCustomer"
                  placeholder="Customer"
                  size="md"
                  width="xs"
                  variant="flushed"
                  value={chosenCustomer}
                  onChange={(e) => this.handleCustomerSelect(e.target.value)}>
                  {/* onChange={this.handleInputChange}> */}
                    {this.props.customers.map(customer => 
                      <option value={customer.id}>
                      {customer.first_name} {customer.last_name}
                        </option>
                      )}
              
                </Select>

                <br /><br /> 

                <Select
                  name="currentUser"
                  placeholder="User"
                  size="md"
                  width="xs"
                  variant="flushed"
                  value={currentUser}
                  // onChange={this.handleInputChange}>
                  onChange={(e) => this.handleUserSelect(e.target.value)}>
                    {this.props.users.map(user => 
                      <option value={user.id}>
                        {user.first_name} 
                        </option>
                      )}
                </Select>          
    
                <br /> <br />

                <Input
                  name="due_date"
                  placeholder="MM/DD/YYY"
                  type="date"
                  size="md"
                  width="xs" 
                  variant="flushed"
                  value={due_date}
                  onChange={this.handleInputChange}
                />

                <br /><br />

                <Input
                  name="due_date"
                  placeholder="MM/DD/YYY"
                  type="time"
                  size="md"
                  width="xs" 
                  variant="flushed"
                  textColor="gray.400"
                  value={time_due}
                  onChange={this.handleInputChange}
                />

                <br /><br />

                 <Textarea
                  name="notes"
                  rows="4"
                  placeholder="Notes"
                  size="sm"
                  width="xs"
                  value={notes}
                  onChange={this.handleInputChange}
                />
                <br /> <br />
        

              <Button colorScheme="blackAlpha" size="sm" variant="solid" type="submit">
                Update Task
              </Button>
        </form>
        </div>
        </center>
    </div>

    )
  }
}

export default EditTaskForm; 