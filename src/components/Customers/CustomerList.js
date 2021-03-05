import React from 'react';
import { useHistory } from 'react-router-dom';
import './Customer.css';
import { IconButton } from '@chakra-ui/react'
import { EditIcon, DeleteIcon, ViewIcon } from '@chakra-ui/icons';
import * as BsIcons from 'react-icons/bs';



const CUSTOMERS_URL = "http://localhost:3000/customers/"; 

const CustomerList = ({ customer, chooseCustomer, deleteCustomer }) => {    

   // const [setShow] = useState(false); 

   const history = useHistory();
   
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

 
   
   return (  
      <tr className="customer-data-row" 
         height="20px">
            <td align="center" width="50px"><BsIcons.BsStar/></td>
            <td>{customer.first_name}</td>
            <td>{customer.last_name}</td>
            <td>{customer.company}</td>
            <td>{customer.job_title}</td>
            <td>{customer.email}</td>
            <td>{customer.phone}</td>
         <td align="center">
            <IconButton
               variant="unstyled"
               colorScheme="blackAlpha"
               aria-label="View Customer"
               icon={<ViewIcon />}
               // onClick={handleEditClick}
               mr="1" mt="3" mb="1"/> 
            <IconButton
               variant="unstyled"
               colorScheme="blackAlpha"
               aria-label="Edit Customer"
               icon={<EditIcon />}
               onClick={handleEditClick}
               mr="1" mt="3" mb="1"/> 
         
            <IconButton
               variant="unstyled"
               colorScheme="blackAlpha"
               aria-label="Delete Customer"
               icon={<DeleteIcon />}
               onClick={handleDelete} 
               //<--- Directly deletes without alert
               // onClick={() => setIsOpen(true)}
               mt="3" mb="1"
            />
         </td>
  
         </tr>

      
   )
}
 

export default CustomerList; 