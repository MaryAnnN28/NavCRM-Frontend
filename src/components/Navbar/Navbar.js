import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';
import './Navbar.css';

import * as FaIcons from 'react-icons/fa';
import * as BiIcons from 'react-icons/bi';
import * as IoMdIcons from 'react-icons/io';

import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import { Image, Button } from '@chakra-ui/react'

 
function Navbar({ users }) {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  const history = useHistory();

  const onSuccess = () => {
    console.log('Logout successful');
    alert('Logout successful ✌');
    history.push('/')
  };

  return (
    <div>
      <IconContext.Provider value={{color: '#fff'}}>
        <div className="navbar">
        <Link to="#" className='menu-bars'>
          <FaIcons.FaBars onClick={showSidebar} />
          </Link>

          <div className="headerLogoWrapper">
            <div className="logo">
              <img src='https://i.imgur.com/XHeHSWu.png' alt="NavCRM logo" />
         
            </div>
          </div>

        
          <div className="notification-icons">
            <IoMdIcons.IoMdNotifications size={30} /> 

          </div>
        
          <div className="login-logout-buttons">
                       
            <GoogleLogout
              clientId="397188808547-flcrbi17jjm7gbec4tvq9ph7fnjhlume.apps.googleusercontent.com"
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
            

      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu' }>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <li className="navbar-toggle">
          <div>         
          {users.map(user =>
          <div className="user-photo">
               <Image
                key={user.id}
                user={user}
                borderRadius="full"
                border="white"
               boxSize="80px"
               src="https://i.imgur.com/3txe6Vm.jpg?1"
               alt={user.first_name}
            />
        </div>
          )}
          </div>
              <Link to="#" className='menu-bars'>
                <div className="sidebar-close-icon">
              <BiIcons.BiArrowToLeft/>
                </div>

            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              
              <li key={index} className={item.className}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
        </nav>
        </IconContext.Provider>
    </div>  
  );
}


export default Navbar; 