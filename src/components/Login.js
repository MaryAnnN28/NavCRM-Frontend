import React from 'react';
import { Button } from '@chakra-ui/react';

import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from '../utilities/refreshToken';

const clientId =
  '397188808547-2hfcr6bieudiptt1p46a15ak264puqgj.apps.googleusercontent.com';

function Login() {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert(
      `Logged in successfully, welcome ${res.profileObj.name} 😍. \n `
    );
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
      <GoogleLogin
        clientId={clientId}
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