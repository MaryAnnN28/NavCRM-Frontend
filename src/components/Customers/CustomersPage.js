import React from 'react';
import { useHistory } from 'react-router-dom';
import CustomerList from './CustomerList';
import './Customer.css';
import { Button } from '@chakra-ui/react';
import * as AiIcons from 'react-icons/ai';

// import { BrowserRouter as Route} from "react-router-dom";


const CustomersPage = ({ customers, chooseCustomer, deleteCustomer }) => {
  
  const history = useHistory(); 

  const handleNewClick = () => {
    history.push('/newcustomerform')
  };
  
  return (
  <div className='customers-page-main'>
     
    <div className="new-customer-btn">
      <Button colorScheme="blackAlpha" variant="solid" size="sm" type="button" onClick={handleNewClick}>
        <h4>+</h4>&nbsp; New Customer
      </Button>
    </div>

    
    <table className="customer-list-table">
      <tbody>
        <tr>
          <th align="center" width="50px"><h4><AiIcons.AiFillStar/></h4></th>
          <th width="80px"><h4>First</h4></th>
          <th width="100px"><h4>Last</h4></th>
          <th width="180px"><h4>Company</h4></th>
          <th width="160px"><h4>Job Title</h4></th>
          <th width="200px"><h4>Email</h4></th>
          <th width="140px"><h4>Phone</h4></th>
          <th width="140px"><h4>Actions</h4></th>
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

)
}
   

export default CustomersPage; 