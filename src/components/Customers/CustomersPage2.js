
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import CustomerList from './CustomerList';
import CustomerCard from './CustomerCard';
import './Customer.css';
import { Button, Box } from '@chakra-ui/react';
import * as AiIcons from 'react-icons/ai';


import { DataGrid } from '@material-ui/data-grid'; 
import PageviewIcon from '@material-ui/icons/Pageview';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';


// import { BrowserRouter as Route} from "react-router-dom";
const CustomersPage = ({ customers }) => {

  const renderCustomer = (customer, index) => {
    return (
      <tr key={index}>
        <td>{customer.first_name}</td>
        <td>{customer.last_name}</td>
        <td>{customer.company}</td>
        <td>{customer.job_title}</td>
        <td>{customer.email}</td>
        <td>{customer.phone}</td>
    </tr>
  )
}
//   {
//     id: customer.id, 
//     first_name: 'Mary Ann', 
//     last_name: 'Navarrete', 
//     company: 'NavCRM', 
//     job_title: 'CEO', 
//     email: 'mdn@navcrm.com', 
//     phone: '703-229-2580', 
//     action: '', 

//   }
// ]

const columns = [
  { field: 'first_name', headerName: 'First Name', type: 'string', width: 140 }, 
  { field: 'last_name', headerName: 'Last Name', type: 'string', width: 140 }, 
  { field: 'company', headerName: 'Company', type: 'string', width: 150 }, 
  { field: 'job_title', headerName: 'Position', type: 'string', width: 130 }, 
  { field: 'email', headerName: 'Email', type: 'string', width: 170 }, 
  { field: 'phone', headerName: 'Phone', type: 'string', width: 130 }, 
  { field: 'actions', headerName: 'Actions', type: 'string', width: 150 }
]





  return (
    <div className="customer-page-main" align="right">

      <div style={{ height: 600, width: '75%' }}>
        {/* {customers.map((customer) => ( */}
        <DataGrid
          columns={columns}
          rows={rows}
          />
        {/* ))
        } */}



        )
      </div>
    </div>

  )
}
  

   

export default CustomersPage; 