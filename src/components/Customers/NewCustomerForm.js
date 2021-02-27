import React from 'react'; 


class NewCustomerForm extends React.Component {
  constructor() {
    super()
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

  

  // renderCustomers() {
  //   this.props.history.push('/customers');
  // }

  render() {
    const {first_name, last_name, company, job_title, industry, email, phone, notes } = this.state

    return (
      <div>
        <center>
        <h1>New Customer Form</h1>
          <form onSubmit={event => this.props.handleNewCustomer(event) }>
            
          
            <input type="text" name="first_name" id="inputFirstName"
              placeholder="First Name"
              value={first_name}
              onChange={this.handleInputChange} />
            
          <br/><br />
       
            <input type="text" name="last_name" id="inputLastName"
              placeholder="Lirst Name"
              value={last_name}
              onChange={this.handleInputChange} />
            
          <br/><br />
      
            <input type="text" name="company" id="inputCompany"
              placeholder="Company" value={company}
              onChange={this.handleInputChange} />
            
          <br/><br />
            <input type="text" name="job_title" id="inputJobTitle"
              placeholder="Job Title"
              value={job_title}
              onChange={this.handleInputChange} />
            
          <br/><br />
            <input type="text" name="industry" id="inputIndustry"
              placeholder="Industry"
              value={industry}
              onChange={this.handleInputChange} />
            
          <br/><br />
            <input type="text" name="email" id="inputEmail"
              placeholder="Email"
              value={email}
              onChange={this.handleInputChange} />
            
          <br/><br />
            <input type="text" name="phone" id="inputPhone"
              placeholder="Phone"
              value={phone}
              onChange={this.handleInputChange} />
            
          <br/><br />
            <textarea name="notes" id="customer-notes" rows="4"
              placeholder="Notes"
              value={notes}
              onChange={this.handleInputChange} />
            
          <br/>
          <br/>
          <button type="submit">Add Customer</button>
          </form>

        </center>
      </div>
    )
  }
  
}

export default NewCustomerForm; 