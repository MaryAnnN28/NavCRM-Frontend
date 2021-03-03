import React from 'react'; 
import './Customer.css';
import { Input, FormControl, Textarea, Heading, Button } from '@chakra-ui/react';


class NewCustomerForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      first_name: "", 
      last_name: "", 
      company: "", 
      job_title: "", 
      industry: "", 
      email: "", 
      phone: "",
      notes: ""
    }
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  renderCustomers() {
    this.props.history.push('/customers');
  }

  render() {
    const {first_name, last_name, company, job_title, industry, email, phone, notes } = this.state

    return (
      <div>
        <center>
        <div className="task-form-container"><br />
            <Heading size="lg">Add New Customer</Heading><br />
            <form className="customer-form" onSubmit={(event) => this.props.handleNewCustomer(event) }>
            
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
                placeholder="Last Name"
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
          <Button colorScheme="blackAlpha" size="sm" variant="solid" type="submit">
                Create Customer
              </Button>
          </form>

        </div>
        </center>
      </div>


      
      

    )
  }
  
}

export default NewCustomerForm; 