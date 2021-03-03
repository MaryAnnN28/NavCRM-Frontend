import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { Button } from '@chakra-ui/react';

const clientId =
  '397188808547-2hfcr6bieudiptt1p46a15ak264puqgj.apps.googleusercontent.com';

function Logout() {
  const onSuccess = () => {
    console.log('Logout successful');
    alert('Logout successful ✌');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
        style={{ marginTop: '70px'}}
        render={renderProps => (
          <Button onClick={renderProps.onClick} disabled={renderProps.disabled} 
            variant="solid"
            colorScheme="gray" size="sm">Log Out</Button>
        )}
        />
    
    </div>
  );
}

export default Logout;