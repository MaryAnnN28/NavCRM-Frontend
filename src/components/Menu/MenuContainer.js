import React from 'react';
import './Menu.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from 'react-router-dom';

// import TaskComponent from '../Tasks/TaskComponent';
// import CustomerComponent from '../Customers/CustomerComponent';
// import Home from '../Home';
 


function MenuContainer() {

  return (
    <Router>
      <div className="menu-container">
        <h3>Menu Container</h3>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/customers">Customers</Link></li>
        <li><Link to="/tasks">Tasks</Link></li>
        <li><Link to="/users">User Profile</Link></li>
        <li><Link to="/newcustomerform">Add Customer</Link></li>
          
        <Switch>
    
          <Route path="/:id" children={<Child />} />
        </Switch>
      </div>
    </Router>
              


  );
}

function Child() {

  let { id } = useParams();

  return (
    <div>
      {id}
    </div>
  )
}


export default MenuContainer; 