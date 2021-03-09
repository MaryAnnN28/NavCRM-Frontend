import React, { Fragment, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import CustomerModal from './CustomerModal';

import './Customer.css';
import { IconButton, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogContent, AlertDialogOverlay, AlertDialogHeader, Button } from '@chakra-ui/react'
import { EditIcon, DeleteIcon, ViewIcon } from '@chakra-ui/icons';
import * as BsIcons from 'react-icons/bs';




const CUSTOMERS_URL = "http://localhost:3000/customers/"; 

function CustomerList ({ customer, chooseCustomer, deleteCustomer })  {    

  const history = useHistory();

  const [show, setShow] = useState(false);
   
  const handleEditClick = () => {
    chooseCustomer(customer)
    history.push('/editcustomerform')
  };


  const handleDelete = () => {
    fetch(CUSTOMERS_URL + customer.id, { method: "DELETE" })
      .then(resp => resp.json())
      .then(() => {
      deleteCustomer(customer)
    })
  }

  const [isOpen, setIsOpen] = useState(false)
  const onClose = () => setIsOpen(false)
  const cancelRef = useRef()
 
   return (  
      <>
      <tr className="customer-list-table">
            <td className="customer-row-star" align="center" width="=80px"><BsIcons.BsStar/></td>
            <td className="customer-data-row-bold" width="100px">{customer.first_name}</td>
            <td className="customer-data-row-bold">{customer.last_name}</td>
            <td className="customer-data-row-company">{customer.company}</td>
            <td className="customer-data-row">{customer.job_title}</td>
            <td className="customer-data-row-email"><a href={"mailto:" + customer.email} target="_blank"><u>{customer.email}</u></a></td>
            <td className="customer-data-row">{customer.phone}</td>
         <td className="customer-row-actions" align="center">
            <IconButton
               variant="unstyled"
               colorScheme="blackAlpha"
               aria-label="View Customer"
               icon={<ViewIcon />}
               onClick={() => setShow(true)}
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
               onClick={() => setIsOpen(true)} 
               //<--- Directly deletes without alert
               // onClick={() => setIsOpen(true)}
               mt="1" mb="1"
            />
         </td>
  
         </tr>
         <Fragment>
            
            <AlertDialog
               colorScheme="blackAlpha"
               isOpen={isOpen}
               isCentered={true}
               leastDestructiveRef={cancelRef}
               onClose={onClose}
               >
            <AlertDialogOverlay>
            <AlertDialogContent>
               <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  <strong>Delete Customer</strong>
               </AlertDialogHeader>

               <AlertDialogBody>
                  Are you sure you want to delete this customer?
               </AlertDialogBody>

               <AlertDialogFooter>
                  <Button colorScheme="blackAlpha" ref={cancelRef} onClick={onClose}>Cancel</Button>
                  <Button colorScheme="red" ml={3} onClick={handleDelete}>Delete</Button>
               </AlertDialogFooter>
            </AlertDialogContent>
            </AlertDialogOverlay>
         
            </AlertDialog>


            <CustomerModal 
               customer={customer}
               show={show}
               chooseCustomer={chooseCustomer}
               deleteCustomer={deleteCustomer}
               handleClose={() => setShow(false)}
            />
         </Fragment>
      </>
 
   )
}
 

export default CustomerList; 