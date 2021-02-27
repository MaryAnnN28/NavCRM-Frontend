import React from 'react';
import Customer from './Customer';
import './Customer.css';

// import { BrowserRouter as Router, Route } from "react-router-dom";

const CustomerComponent = (props) => {

  return (
   
      <div>
     

        <table>
          <tbody>
              <tr>
                <th width="100px"><h4>First</h4></th>
                <th width="100px"><h4>Last</h4></th>
                <th width="180px"><h4>Company</h4></th>
                <th width="160px"><h4>Job Title</h4></th>
                <th width="200px"><h4>Email</h4></th>
                <th width="140px"><h4>Phone</h4></th>
              </tr>
              {props.customers.map(customer =>
                <Customer
                    key={customer.id}
                    customer={customer}
                />)}

          </tbody>
        </table>

        </div>
   
  );
}
   

export default CustomerComponent; 