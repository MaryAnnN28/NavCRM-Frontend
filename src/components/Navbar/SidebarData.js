import React from 'react'; 
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';
// import * as FaIcons from 'react-icons/fa';
// import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Dashboard', 
    path: '/home', 
    icon: <BiIcons.BiHome />, 
    className: 'nav-text'
  }, 
  {
    title: 'Customers', 
    path: '/customers', 
    icon: <AiIcons.AiOutlineContacts />, 
    className: 'nav-text'
  }, 
  {
    title: 'Tasks', 
    path: '/tasks', 
    icon: <BiIcons.BiTask />, 
    className: 'nav-text'
  }, 
  {
    title: 'Add Customer', 
    path: '/newcustomerform', 
    icon: <AiIcons.AiOutlineForm />, 
    className: 'nav-text'
  },
  {
    title: 'Add Task', 
    path: '/newtaskform', 
    icon: <BiIcons.BiTask />, 
    className: 'nav-text'
  },
  {
    title: 'User Profile', 
    path: '/userprofile', 
    icon: <AiIcons.AiOutlineUser />, 
    className: 'nav-text'
  }, 
  {
    title: '', 
  }, 
  {
    title: '', 
  }, 
  {
    title: '', 
  }, 
  {
    title: '', 
  }, 
  {
    title: '', 
  }, 
  {
    title: '', 
  }, 
  {
    title: '', 
  }, 
  {
    title: '', 
  }, 
  // {
  //   title: 'Companies', 
  //   path: '/companies', 
  //   icon: <BiIcons.BiBuildings />, 
  //   className: 'nav-text'
  // }, 
  // {
  //   title: 'Leads', 
  //   path: '/leads', 
  //   icon: <BiIcons.BiFolderOpen />, 
  //   className: 'nav-text'
  // }, 
  {
    title: 'LOG OUT', 
    path: '/welcome', 
    icon: <BiIcons.BiLogOut />, 
    className: 'nav-text'
  }, 
]

