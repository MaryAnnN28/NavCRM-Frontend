import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import CustomerList from './CustomerList';

import './Customer.css';
import { Button, Box, Select, Input, InputGroup, InputRightAddon, RadioGroup, Radio, Stack } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import * as AiIcons from 'react-icons/ai';


const CustomersPage = ({ customers, chooseCustomer, viewCustomer, deleteCustomer, search, sort, handleSearch, handleSort, handleFilter }) => {
  
  const history = useHistory(); 

  const [value, setValue] = useState("None");

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
      
    <table className="customer-filter">
        <tr className="top-header">
            <td className="sort-field" colSpan="5">
              <RadioGroup onChange={setValue} value={value}>
                <Stack spacing={3} direction="row" mt={4}>
                  <Radio
                    colorScheme="blackAlpha"
                    type="radio"
                    value="None"
                    checked={sort === "None"}
                    onChange={(event) => handleSort(event.target.value)}>  
                    <p class="top-header">None</p>
                  </Radio>
                  <Radio
                    colorScheme="blackAlpha"
                    type="radio"
                    value="Alphabetical_First"
                    checked={sort === "Alphabetical_First"}
                    onChange={(event) => handleSort(event.target.value)}>  
                    <p class="top-header">First</p>
                  </Radio>
                  <Radio 
                    colorScheme="blackAlpha"
                    value="Alphabetical_Last"
                    checked={sort === "Alphabetical_Last"}
                    onChange={(event) => handleSort(event.target.value)}> 
                     <p class="top-header">Last</p>
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
            
            <td className="filter-row" colSpan="4">
              <InputGroup ml={7} >
                <Input name="search" placeholder="Search" width='sm' variant="outline" value={search} onChange={handleSearch} />
                <InputRightAddon children={<SearchIcon/>}/>
              </InputGroup>
            </td>
          </tr>
          </table>
          
          
      <table className="customer-list-table">
         
        <tbody>
        <tr className="customer-header-row">
          <th className="customer-star" align="center" width="40px"><h4><AiIcons.AiFillStar/></h4></th>
          <th className="customer-header" width="110px" padding-left="2px"><h4>First</h4></th>
          <th className="customer-header" width="110px"><h4>Last</h4></th>
          <th className="customer-header" width="180px"><h4>Company</h4></th>
          <th className="customer-header" width="160px"><h4>Job Title</h4></th>
          <th className="customer-header" width="200px"><h4>Email</h4></th>
          <th className="customer-header" width="110px"><h4>Phone</h4></th>
          <th className="customer-header" width="140px"><h4>Actions</h4></th>
        </tr>
        {customers.map(customer =>
          <CustomerList
            key={customer.id}
            customer={customer}
            viewCustomer={viewCustomer}
            chooseCustomer={chooseCustomer}
            deleteCustomer={deleteCustomer}
          />
          )}
      </tbody>
    </table>
  </div>

)
}
   

export default CustomersPage; 






