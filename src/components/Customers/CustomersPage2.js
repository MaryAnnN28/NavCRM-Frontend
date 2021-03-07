import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import CustomerList from './CustomerList';
import CustomerModal from './CustomerModal';
import MainDashboardDisplay from '../MainDashboardDisplay';
import './Customer.css';
import { Button, Box, Select } from '@chakra-ui/react';
import * as AiIcons from 'react-icons/ai';



// import { BrowserRouter as Route} from "react-router-dom";


const CustomersPage = ({ customers, chooseCustomer, viewCustomer, deleteCustomer }) => {
  
  const history = useHistory(); 

  const [showModal, setShowModal] = useState(false);

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

            <tr className="top-header">
              <td className="filter-row" colSpan="2">
                <Select name="filter" placeholder="Filter By"></Select>
              </td>
        </tr>
        <tr className="customer-header-row">
          <th className="customer-star" align="center" width="40px"><h4><AiIcons.AiFillStar/></h4></th>
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
            showModal={showModal}
            setShowModal={setShowModal}
          />
          )}
      </tbody>
        </table>
    </Box>

      {/* <div>
        {customers.map(customer =>
          <CustomerModal
            key={customer.id}
            customer={customer}
            showModal={showModal}
            handleClose={() => setShowModal(false)}

          />)}
      </div>  */}
     
 
  </div>

)
}
   

export default CustomersPage; 






