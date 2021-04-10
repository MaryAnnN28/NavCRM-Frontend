import React from 'react';

function CustomerMethods({ customers }) {

  const industryCount = (customers) => {
    let industryName = customers.filter(obj => obj.industry === "Consulting")
    
    if (industryName) {
      return industryName.length
    } else {
      return undefined
    }
  }
  console.log(industryCount);

  return (
    <div>
  
    </div>
  )
}

export default CustomerMethods; 