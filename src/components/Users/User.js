import React from 'react'; 
import './Users.css';
import { Image, Button } from '@chakra-ui/react'

const User = ({ user }) => {

   return (
   
      <div className="user-details-page">
         
         <div className="user-details-card">
            
            <div className="user-photo-div">
               <Image
               borderRadius="full"
               boxSize="150px"
               src="https://i.imgur.com/3txe6Vm.jpg?1"
               alt={user.first_name}
            />
            </div>
            <br />

            <p>
            <strong>Name:</strong> {user.first_name} {user.last_name}
            <br />
            <strong>Email:</strong> {user.email} 
            <br />
            <strong>Birthday:</strong> December 28th 
            </p>
            <strong>Password:</strong> {user.password} 
            <br />
            <strong>Confirm Password:</strong> {user.password} 
            <br />

            <br />

            <div className="edit-user-btn">
               <Button colorScheme="blackAlpha" variant="solid" size="sm" type="button">
                  Edit Profile
               </Button>
            </div>
            </div>
         
            
         </div>
 
            

    
   )
}
 

export default User; 