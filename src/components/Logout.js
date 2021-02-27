import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
  '397188808547-2hfcr6bieudiptt1p46a15ak264puqgj.apps.googleusercontent.com';

function Logout() {
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;