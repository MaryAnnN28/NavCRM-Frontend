import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from '../../utilities/refreshToken';




function Login() {

  const history = useHistory();
  
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert(
      `Logged in successfully, welcome ${res.profileObj.name} 😍. \n `
    );
    refreshTokenSetup(res);
    history.push('/')
  };
  
  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢`
    );
  };

  return (
    <div>
      <GoogleLogin
        clientId="397188808547-flcrbi17jjm7gbec4tvq9ph7fnjhlume.apps.googleusercontent.com"
        buttonText="Sign in with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '70px' }}
        isSignedIn={true}
        // render={renderProps => (
        //   <Button onClick={renderProps.onClick} disabled={renderProps.disabled} variant="solid" colorScheme="gray" size="sm">Log In</Button>
        // )}
      />
    </div>
  );
}

export default Login;