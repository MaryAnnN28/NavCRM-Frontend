import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from '../utilities/refreshToken';

import './LoginScreen.css';
// import Login from './Login';
import { Input, Button, FormControl, FormLabel, HStack, propNames } from '@chakra-ui/react';
import { Fragment } from 'react';
import Navbar from './Navbar/Navbar'

function LoginScreen() {

  const history = useHistory();
  
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert(
      `Logged in successfully, welcome ${res.profileObj.name} 😍. \n `
    );
    history.push('/home')
    refreshTokenSetup(res);
  };
  
  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢`
    );
  };
  
  return (
    <div>

    <section class="login-background" role="img" aria-label="sky-sunset-gradient">
        
      <div className="logo-container">
        <img className="logo-login-page" src="https://i.imgur.com/LT4Qy6L.png?1" alt="logo-login-page" /></div>
      
          <div className="login-card"></div>
         
        <div className="login-form">

          <div className="login-content">
            <br /> <br /><br />
            {/* <h2 className="login-screen-text">Welcome</h2> */}
          
            <form
              // onSubmit={handleSubmit}
            >
            <FormControl
              id="email"
              type="email"
              // value={email}
              isRequired={true}
                // onChange={(e) => setEmail(e.target.value)}
              >
              <HStack spacing="39px" mb={3} direction="column">
                <FormLabel color="white">Email</FormLabel>
              <Input name="email" type="email" placeholder="name@email.com" mt={5} size="md" width="xs" variant="outline" color="white" colorScheme="blackAlpha" />
              </HStack>
              </FormControl>
              
            <FormControl
              id="password"
              type="password"
              // value={password}
              isRequired={true}
                // onChange={(e) => setPassword(e.target.value)}
              >
              <HStack space={2} direction="row">
                <FormLabel color="white">Password</FormLabel>
              <Input name="password" type="password" placeholder="password" mt={5} size="md" width="xs" variant="outline" color="white" colorScheme="blackAlpha" />
              </HStack>
            </FormControl>
                           
              <br />
                
              <Button colorScheme="gray" size="md" variant="solid" type="submit"
                // disabled={!validateForm()}
              >Log In</Button>
              
              <div class="v1">
                
                  <hr class="hr-login" /><p className="or-text">OR</p><hr class="hr-login" />
                
              
              </div>

              <div className="google-login-button">
                
                {/* <Login type="submit" /> */}
                
                <GoogleLogin
                  clientId="397188808547-flcrbi17jjm7gbec4tvq9ph7fnjhlume.apps.googleusercontent.com"
                  buttonText="Sign in with Google"
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  cookiePolicy={'single_host_origin'}
                  style={{ marginTop: '70px', borderRadius: '20px', color: 'honeydew', colorScheme: 'blackAlpha' }}
                  type="submit"
                  isSignedIn={true}
                />

              </div>

        

          </form>
        
          </div>
        </div>






      </section>

    </div>
  )
}

export default LoginScreen; 