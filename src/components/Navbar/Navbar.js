import React, { useState } from 'react';
import './Navbar.css';

import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';

import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import { Image } from '@chakra-ui/react'

import Login from '../Login';
import Logout from '../Logout';

 
function Navbar({ users }) {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

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

          <div>
            
          
          {users.map(user =>
          
          <div className="user-photo-div">
               <Image
                key={user.id}
                user={user}
               borderRadius="full"
               boxSize="55px"
               src="https://i.imgur.com/3txe6Vm.jpg?1"
               alt={user.first_name}
            />
        </div>
          )}
          </div>
        
        
          <div className="login-logout-buttons">
            {/* <Logout /> */}
          </div>
            

      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu' }>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <li className="navbar-toggle">
              <Link to="#" className='menu-bars'>
                <div className="sidebar-close-icon">
              <BiIcons.BiArrowToLeft/>
                </div>

{/*                 
              <AiIcons.AiOutlineClose /> */}
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