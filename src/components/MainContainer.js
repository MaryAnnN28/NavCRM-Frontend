import React from 'react'; 
import './Main.css'; 
import SearchContainer from './Search/SearchContainer';
import CustomerComponent from './Customers/CustomerComponent';
import TaskComponent from './Tasks/TaskComponent';
import UserComponent from './Users/UserComponent';

import {
   BrowserRouter as Router,
   Route
} from "react-router-dom";

class MainContainer extends React.Component {
   state 

   render() {
      return (
         <Router>
            <div>
               <SearchContainer /> 
            

            
               <h2>Customers</h2>
               <CustomerComponent customers={this.props.customers}/> 
            
               <br />
               

               <h2>Tasks</h2>
               <TaskComponent tasks={this.props.tasks} /> 
               

               <br />
               
               <h2>User Details</h2>
               <UserComponent users={this.props.users} />
               

         </div>
         </Router>
      )
   }
}

export default MainContainer; 