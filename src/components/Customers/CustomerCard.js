import React from 'react'; 
import { useHistory } from 'react-router-dom';



// const CUSTOMERS_URL = "http://localhost:3000/customers/"

const CustomerCard = ({ customer, show, handleClose }) => {

   
   const showHideClassName = show ? "modal display-block" : "modal display-none"; 

   const history = useHistory(); 

  // const [first_name, last_name, company, job_title, industry, email, phone, notes ] = this.state
  
  return (

     <div className={showHideClassName}>
        <section className="modal-main">


       <h3>{customer.first_name}</h3>


        </section>
   
      
     
    </div>

    
   )
}
 

export default CustomerCard; 


