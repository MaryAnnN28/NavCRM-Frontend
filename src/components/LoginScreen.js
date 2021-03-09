import React from 'react'; 
import './LoginScreen.css';
import Login from './Login';
import { Input, Button, FormControl } from '@chakra-ui/react';

function LoginScreen() {
  return (
    <div>
   

    <section class="login-background" role="img" aria-label="sky-sunset-gradient">
        
      <div className="logo-container">
        <img className="logo-login-page" src="https://i.imgur.com/LT4Qy6L.png?1" alt="logo-login-page" /></div>
        {/* For Header/Text on LoginScreen */}

      <div className="login-card"></div>
         
        <div className="login-form">
            <FormControl>

          <div className="login-content">
            <h2 className="login-screen-text">Welcome</h2>
                
              <Input name="email-login" placeholder="name@email.com" mt={5} size="md" width="xs" variant="outline" colorScheme="blackAlpha" />
                
              <Input name="password" placeholder="password" mt={5} mb={5} size="md" width="xs" textColor="whiteAlpha.200" focusBorderColor="blue.500"/>
                
              <br />
                
              <Button colorScheme="blackAlpha" size="md" variant="solid" type="submit">Log In</Button>
              
              <div class="v1">
                
                  <hr class="hr-login" /><p className="or-text">OR</p><hr class="hr-login" />
                
              
              </div>

              <div className="google-login-button">
                <Login /> &nbsp; &nbsp;
                {/* <Logout /> */}
              </div>

          </div>
        

            </FormControl>
        
        </div>






      </section>

    </div>
  )
}

export default LoginScreen; 