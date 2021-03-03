import React from 'react';

import './Search.css'; 

class SearchContainer extends React.Component {
   render() {
      return (
         <div className="search-container-main">
            
            <input className="search-input" type='text' value="" placeholder="SEARCH CUSTOMER OR TASK" />

         </div>
      )
   }
}

export default SearchContainer; 