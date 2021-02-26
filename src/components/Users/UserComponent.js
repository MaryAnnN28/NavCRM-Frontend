import React from 'react';
import User from './User';
import './Users.css';

const UserComponent = (props) => {
   return (
      <div>
         {props.users.map(user =>
            <User
               key={user.id}
               user={user}
            />)}

      </div>
   )
}

export default UserComponent; 