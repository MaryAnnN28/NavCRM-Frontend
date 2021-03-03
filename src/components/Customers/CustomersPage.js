import React from 'react';
import CustomerList from './CustomerList';
import './Customer.css';
import { Button } from '@chakra-ui/react';

import { BrowserRouter as Route} from "react-router-dom";


const CustomersPage = ({ customers, chooseCustomer, deleteCustomer }) => (
   <div>
    <Route exact path='/customers' render={() => 
      <center> <h4>Click on row to view customer details</h4></center>} />
    
      
    <div className="new-customer-btn">
      <Button colorScheme="blackAlpha" variant="solid" size="sm" type="button">
        <h4>+</h4>&nbsp; New Customer
      </Button>
    </div>

    
  <div className='customers-page-main'>
    <table className="customer-list-table">
      <tbody>
        <tr>
          <th width="100px"><h4>First</h4></th>
          <th width="100px"><h4>Last</h4></th>
          <th width="180px"><h4>Company</h4></th>
          <th width="160px"><h4>Job Title</h4></th>
          <th width="200px"><h4>Email</h4></th>
          <th width="140px"><h4>Phone</h4></th>
          <th width="160px"><h4>Actions</h4></th>
        </tr>
        {customers.map(customer =>
          <CustomerList
            key={customer.id}
            customer={customer}
            chooseCustomer={chooseCustomer}
            deleteCustomer={deleteCustomer}
          />)}
      </tbody>
    </table>
  </div>
    {customers.map(customer => 
    <Route path={`customers/:customerID`} render={routerProps => 
        <CustomersPage {...routerProps} key={customer.id} customer={customer} />} />
    )}
   </div>
   
)
   

export default CustomersPage; 