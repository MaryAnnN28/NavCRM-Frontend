import React from 'react';
import MainContainer from './components/MainContainer'; 
import MenuContainer from './components/Menu/MenuContainer';
import Login from './components/Login';
import Logout from './components/Logout';

function App() {
    return (
    
      <div>
        <center><h1>This is my Home Page</h1></center>
          <br /><br />
            
        <Login />
        <Logout />
        <MenuContainer /> 
        <MainContainer /> 
        
        
      </div>

  );
};

export default App;
