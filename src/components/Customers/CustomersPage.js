import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import CustomerList from './CustomerList';

import './Customer.css';
import { Button, Box, Select, Input, InputGroup, InputRightAddon, RadioGroup, Radio, Stack } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import * as AiIcons from 'react-icons/ai';



// import { BrowserRouter as Route} from "react-router-dom";


const CustomersPage = ({ customers, chooseCustomer, viewCustomer, deleteCustomer, search, sort, handleSearch, handleSort, handleFilter }) => {
  
  const history = useHistory(); 

  const [value, setValue] = useState("alphabetical");

  const handleNewClick = () => {
    history.push('/newcustomerform')
  };


  
 
  return (
    <div className='customers-page-main'>
      <Box>
    <table className="customer-list-table" aria-rowindex='5' paginationSize="10">

        <tr className="top-header">
            <td className="sort-field" colSpan="5">
              <RadioGroup
                // onChange={setValue} value={value}
              >
                <Stack spacing={4} direction="row">
                  <Radio
                    colorScheme="blackAlpha"
                    type="radio"
                    value="Alphabetical_First"
                    checked={sort === "Alphabetical_First"}
                    onChange={handleSort}> 
                    <p class="top-header">First Name</p>
                  </Radio>
                  <Radio 
                    colorScheme="blackAlpha"
                    value="Alphabetical_Last"
                    checked={sort === "Alphabetical_Last"}
                    onChange={(event) => handleSort(event.target.value)}> 
                     <p class="top-header">Last Name</p>
                  </Radio>
                  <Radio
                    colorScheme="blackAlpha"
                    value="Company"
                    checked={sort === "Company"}
                    onChange={(event) => handleSort(event.target.value)}> 
                     <p class="top-header">Company</p>
                  </Radio>
                  <Radio 
                    colorScheme="blackAlpha"
                    value="Newest"
                    checked={sort === "Newest"}
                    onChange={(event) => handleSort(event.target.value)}> 
                     <p class="top-header">Newest</p>
                  </Radio>
                  <Radio 
                    colorScheme="blackAlpha"
                    value="Oldest"
                    checked={sort === "Oldest"}
                    onChange={(event) => handleSort(event.target.value)}> 
                    <p class="top-header">Oldest</p>
                  </Radio>
                </Stack>

              </RadioGroup>
            </td>
            

            <td className="filter-row" colSpan="2">
              <InputGroup>
                <Input name="search" placeholder="Search" onChange={(event) => handleSearch(event.target.value)} />
                <InputRightAddon children={<SearchIcon/>}/>
              </InputGroup>
            </td>
            

          <td className="filter-row" colSpan="2" align="right">
            <Button colorScheme="blackAlpha" variant="solid" size="sm" type="button" onClick={handleNewClick}>
                <h4>+</h4>&nbsp; New Customer
            </Button>
          </td>
          </tr>
          
          
      <tbody>
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
            // showModal={showModal}
            // setShowModal={setShowModal}
          />
          )}
      </tbody>
        </table>
    </Box>

  
     
 
  </div>

)
}
   

export default CustomersPage; 






