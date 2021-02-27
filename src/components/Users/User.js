import React from 'react'; 
import './Users.css';

const User = ({ user }) => {

   return (
   
         <div className="user-details-card">
         <p>
            <strong>Name:</strong> {user.first_name} {user.last_name}
            <br />
            <strong>Email:</strong>{/* {user.email}  */}
            <br />
            <strong>Password:</strong> {user.password} 
         
         </p>

         </div>
            

    
   )
}
 

export default User; 