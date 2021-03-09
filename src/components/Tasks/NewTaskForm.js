import React from 'react';
import './Tasks.css';
import { Input, FormControl, Select, Textarea, Heading, Button } from '@chakra-ui/react';



class NewTaskForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "", 
      task_type: null, 
      description: "", 
      due_date: "", 
      time_due: "", 
      notes: "", 
      chosenCustomer: {}, 
      currentUser: {}
    }
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

  renderTasks = () => {
    this.props.history.push('/tasks');
  }
  
    
  render () {
    const { title, task_type, description, due_date, time_due, notes, chosenCustomer, currentUser } = this.state
    
    return (
      <>
        <center>
        <div className="task-form-container"><br />
            <Heading size="lg">Add New Task</Heading><br />
            
          <form className="task-form" id="new-task-form" onSubmit={(event) => this.props.handleNewTask(event)}>

            
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
                  size="md" width="xs" 
                  textColor="blackAlpha.900"
                  variant="flushed"
                  value={description}
                  onChange={this.handleInputChange}
                />
      
                <br /><br />

                <Select
                  name="chosenCustomer"
                  placeholder="Select customer"
                  size="md" width="xs"
                  variant="flushed"
                  value={chosenCustomer}
                  onChange={(e) => this.handleCustomerSelect(e.target.value)}>
                    {this.props.customers.map(customer => 
                      <option value={customer.id}>
                      {customer.first_name} {customer.last_name}
                        </option>
                      )}
                </Select>

                <br /><br /> 

                <Select
                  name="currentUser"
                  placeholder="Select user"
                  size="md" width="xs"
                  variant="flushed"
                  value={currentUser}
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
                  size="md" width="xs" 
                  variant="flushed"
                  value={due_date}
                  onChange={this.handleInputChange}
                />

                <br /><br />

                <Input
                  name="time_due"
                  placeholder="Time Due"
                type="time"
                  size="md" width="xs" 
                  textColor="blackAlpha.900"
                  variant="flushed"
                  value={time_due}
                  onChange={this.handleInputChange}
                />

                <br /><br /> 

                <Textarea
                  name="notes"
                  rows="4"
                  placeholder="Notes"
                  size="sm"  width="xs"
                  colorScheme="blackAlpha"
                  value={notes}
                  onChange={this.handleInputChange}
                />
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