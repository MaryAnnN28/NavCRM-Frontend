import React, { Component } from "react";
import './Customer.css';
import { Input, FormControl, FormLabel, HStack, Textarea, Heading, Button } from '@chakra-ui/react';


class CustomerForm extends Component {
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

  renderCustomers = () => {
    this.props.history.push('/customers'); 
  }



  render() {
    const { first_name, last_name, company, job_title, industry, email, phone, notes } = this.state

    return (
      <div>
      <center>
      <div className="customer-form-container"><br />
          <Heading size="md" mb={5}>Add New Customer</Heading><br />
          <form className="customer-form" onSubmit={(event) => this.handleNewCustomer(event) }>
          
            <FormControl id="first_name" isRequired={true}>
            <HStack space={2} direction="row">
            <FormLabel colorScheme="gray">First Name</FormLabel>
            <Input type="text"
              name="first_name"
              id="inputFirstName"
              width="xs"
              variant="outline"
              value={first_name}
              onChange={this.handleInputChange} />
            </HStack>
          </FormControl>
          
        <br/>
            <FormControl id="last_name" isRequired={true}>
              <HStack space={2} direction="row">
              <FormLabel colorScheme="gray">Last Name</FormLabel>
            <Input type="text"
              name="last_name"
              id="inputLastName"
              width="xs"
              variant="outline"
              value={last_name}
              onChange={this.handleInputChange} />
            </HStack>
            </FormControl>
          
        <br/>
            <HStack space={2} direction="row">
            <FormLabel colorScheme="gray">Company</FormLabel>
            <Input type="text"
              name="company"
              id="inputCompany"
              width="xs"
              variant="outline"
              value={company}
                onChange={this.handleInputChange} />
            </HStack>
            
          
            <br /><br />
            <HStack space={2}>
            <FormLabel colorScheme="gray">Job Title</FormLabel>
            <Input
              type="text"
              name="job_title"
              id="inputJobTitle"
              width="xs"
              variant="outline"
              value={job_title}
              onChange={this.handleInputChange} />
            </HStack>
          
          <br /><br />
            {/* MAKE A DROP DOWN SELECTION AFTER MVP */}
            <HStack space={10}>
            <FormLabel colorScheme="gray">Industry</FormLabel>
            <Input type="text"
                name="industry"
                colorScheme="pink"
              id="inputIndustry"
              width="xs"
              variant="outline"
              value={industry}
                onChange={this.handleInputChange} />
              </HStack>
          
            <br /><br />
            <FormControl id="email" isRequired={true}>
            <HStack space={2} direction="row">
            <FormLabel colorScheme="gray">Email</FormLabel>
            <Input type="email"
              name="email"
              id="inputEmail"
              width="xs"
              variant="outline"
              value={email}
                  onChange={this.handleInputChange} />
              </HStack></FormControl>
          
            <br /><br />
            <FormControl id="phone" isRequired={true}>
            <HStack space={2}>
            <FormLabel colorScheme="gray">Phone</FormLabel>
            <Input type="tel"
              name="phone"
              id="inputPhone"
              width="xs"
              variant="outline"
              value={phone}
                onChange={this.handleInputChange} />
              </HStack>
              </FormControl>
          
            <br /><br />
            <HStack space={2}>
            <FormLabel colorScheme="gray">Notes</FormLabel>
            <Textarea name="notes"
              id="customer-notes"
              rows="4"
              width="xs"
              value={notes}
                onChange={this.handleInputChange} />
              </HStack>
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

export default CustomerForm