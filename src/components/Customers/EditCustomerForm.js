import React from 'react'; 
import './Customer.css'; 
import { Input, FormControl, Textarea, Heading, Button } from '@chakra-ui/react';

const CUSTOMERS_URL = "http://localhost:3000/customers/"; 

class EditCustomerForm extends React.Component {
  state = {
    first_name: this.props.first_name, 
    last_name: this.props.last_name, 
    company: this.props.company, 
    job_title: this.props.job_title, 
    industry: this.props.industry, 
    email: this.props.email, 
    phone: this.props.phone, 
    notes: this.props.notes 
  }
  
  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  renderCustomers() {
    this.props.history.push('/customers');
  }

  handleEditCustomer = (event) => {
    event.preventDefault()
    let updatedCustomer = this.state

    let reqPack = {
      headers: { "Content-Type": "application/json" }, 
      method: "PATCH", 
      body: JSON.stringify(updatedCustomer)
    }
    fetch(CUSTOMERS_URL + this.props.id, reqPack)
      .then(resp => resp.json())
      .then(updatedCustomer => {
        this.props.updateCustomer(updatedCustomer)
        this.renderCustomers()
        event.target.reset()
    })
  }


  render() {

    const { first_name, last_name, company, job_title, industry, email, phone, notes } = this.state
    
    return (
      <div>
        <center>
          <div className="task-form-container"><br />
            <Heading size="lg">Edit Customer</Heading><br />
            <form className="customer-form" onSubmit={this.handleEditCustomer}>
            
            <FormControl id="first_name">
              <Input type="text"
                name="first_name"
                id="inputFirstName"
                width="xs"
                placeholder="First Name"
                value={first_name}
                onChange={this.handleInputChange} />
            
          <br/><br />
               
            <Input type="text"
              name="last_name"
              id="inputLastName"
              width="xs"
              placeholder="Lirst Name"
              value={last_name}
              onChange={this.handleInputChange} />
            
          <br/><br />
      
            <Input type="text"
              name="company"
              id="inputCompany"
              width="xs"
              placeholder="Company"
              value={company}
              onChange={this.handleInputChange} />
            
          <br/><br />
            <Input
              type="text"
              name="job_title"
              id="inputJobTitle"
              width="xs"
              placeholder="Job Title"
              value={job_title}
              onChange={this.handleInputChange} />
            
            <br /><br />
      {/* MAKE A DROP DOWN SELECTION AFTER MVP */}
            <Input type="text"
              name="industry"
              id="inputIndustry"
              width="xs"
              placeholder="Industry"
              value={industry}
              onChange={this.handleInputChange} />
      
<br/><br />
            <Input type="email"
              name="email"
              id="inputEmail"
              width="xs"
              placeholder="Email"
              value={email}
              onChange={this.handleInputChange} />
            
          <br/><br />
            <Input type="tel"
              name="phone"
              id="inputPhone"
              width="xs"
              placeholder="Phone"
              value={phone}
              onChange={this.handleInputChange} />
            
          <br/><br />
            <Textarea name="notes"
              id="customer-notes"
              rows="4"
              width="xs"
              placeholder="Notes"
              value={notes}
              onChange={this.handleInputChange} />
            </FormControl>
          <br/>
          <br/>
              <Button colorScheme="blackAlpha" size="sm" variant="solid" onClick={this.renderCustomers}>
                Cancel
              </Button>
              <Button colorScheme="blackAlpha" size="sm" ml={3} variant="solid" type="submit">
                Save
              </Button>
            </form>
            </div>
            </center>
      </div>
    )
  }
}

export default EditCustomerForm; 