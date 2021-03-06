import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import CustomerList from './CustomerList';
import CustomerCard from './CustomerCard';
import './Customer.css';
import { Button, Box } from '@chakra-ui/react';
import * as AiIcons from 'react-icons/ai';



// import { BrowserRouter as Route} from "react-router-dom";


const CustomersPage = ({ customers, chooseCustomer, viewCustomer, deleteCustomer }) => {
  
  const history = useHistory(); 

  const [show, setShow] = useState(false);

  const handleNewClick = () => {
    history.push('/newcustomerform')
  };


  
 
  return (
    <div className='customers-page-main'>
      <Box>

     
     
    <div className="new-customer-btn">
      <Button colorScheme="blackAlpha" variant="solid" size="sm" type="button" onClick={handleNewClick}>
        <h4>+</h4>&nbsp; New Customer
      </Button>
    </div>

    
    <table className="customer-list-table" aria-rowindex='5'>
      <tbody>

        <tr className="customer-header-row" height="30px">
          <th className="customer-star" align="center" width="60px"><h4><AiIcons.AiFillStar/></h4></th>
          <th className="customer-header" width="100px" padding-left="2px"><h4>First</h4></th>
          <th className="customer-header" width="100px"><h4>Last</h4></th>
          <th className="customer-header" width="180px"><h4>Company</h4></th>
          <th className="customer-header" width="160px"><h4>Job Title</h4></th>
          <th className="customer-header" width="200px"><h4>Email</h4></th>
          <th className="customer-header" width="120px"><h4>Phone</h4></th>
          <th className="customer-header" width="140px"><h4>Actions</h4></th>
        </tr>
        {customers.map(customer =>
          <CustomerList
            key={customer.id}
            customer={customer}
            viewCustomer={viewCustomer}
            chooseCustomer={chooseCustomer}
            deleteCustomer={deleteCustomer}
            show={show}
            setShow={setShow}
          />
          )}
      </tbody>
        </table>
    </Box>

      <div>
        {customers.map(customer =>
          <CustomerCard
            key={customer.id}
            customer={customer}
            show={show}
            handleClose={() => setShow(false)}

          />)}
      </div> 
 
  </div>

)
}
   

export default CustomersPage; 






