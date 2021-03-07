import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Customer.css';
import { IconButton } from '@chakra-ui/react'
import { EditIcon, DeleteIcon, ViewIcon } from '@chakra-ui/icons';
import * as BsIcons from 'react-icons/bs';
import styled from 'styled-components';



const CUSTOMERS_URL = "http://localhost:3000/customers/"; 

function CustomerList ({ customer, chooseCustomer, viewCustomer, deleteCustomer })  {    

  const history = useHistory();

  const [showModal, setShowModal] = useState(false);
   
  const handleEditClick = () => {
    chooseCustomer(customer)
    history.push('/editcustomerform')
  };

  const handleViewClick = () => {
    viewCustomer(customer)
    history.push('/customers')
  };

  const handleDelete = () => {
    fetch(CUSTOMERS_URL + customer.id, { method: "DELETE" })
      .then(resp => resp.json())
      .then(() => {
      deleteCustomer(customer)
    })
  }

 
   return (  
      <>
      <tr className="customer-list-table">
            <td className="customer-row-star" align="center" width="=80px"><BsIcons.BsStar/></td>
            <td className="customer-data-row" width="100px">{customer.first_name}</td>
            <td className="customer-data-row">{customer.last_name}</td>
            <td className="customer-data-row"><strong>{customer.company}</strong></td>
            <td className="customer-data-row">{customer.job_title}</td>
            <td className="customer-data-row">{customer.email}</td>
            <td className="customer-data-row">{customer.phone}</td>
         <td className="customer-row-actions" align="center">
            <IconButton
               variant="unstyled"
               colorScheme="blackAlpha"
               aria-label="View Customer"
               icon={<ViewIcon />}
               onClick={() => setShowModal(true)}
               mr="1" mt="1" mb="1"/> 
            <IconButton
               variant="unstyled"
               colorScheme="blackAlpha"
               aria-label="Edit Customer"
               icon={<EditIcon />}
               onClick={handleEditClick}
               mr="1" mt="1" mb="1"/> 
         
            <IconButton
               variant="unstyled"
               colorScheme="blackAlpha"
               aria-label="Delete Customer"
               icon={<DeleteIcon />}
               onClick={handleDelete} 
               //<--- Directly deletes without alert
               // onClick={() => setIsOpen(true)}
               mt="1" mb="1"
            />
         </td>
  
         </tr>
      </>

      
   )
}
 

export default CustomerList; 