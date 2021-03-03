import React from 'react'; 
// import CustomerList from './CustomerList'; 

// const CUSTOMERS_URL = "http://localhost:3000/customers/"

const CustomerCard = ({ customer }) => {

  // const [first_name, last_name, company, job_title, industry, email, phone, notes ] = this.state
  
  return (

    <div className="customer-show-card">
   
       <h3>{customer.first_name}</h3>
      
     
    </div>

    
   )
}
 

export default CustomerCard; 


