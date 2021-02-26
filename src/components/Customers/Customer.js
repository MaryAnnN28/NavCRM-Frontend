import React from 'react'; 

const Customer = ({ customer }) => {

   return (
   
         <tr>
            <td>{customer.first_name}</td>
            <td>{customer.last_name}</td>
            <td>{customer.company}</td>
            <td>{customer.job_title}</td>
            <td>{customer.email}</td>
            <td>{customer.phone}</td>
         </tr>

    
   )
}
 

export default Customer; 