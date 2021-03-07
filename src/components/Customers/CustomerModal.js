import React, { useState } from 'react'; 
import { useHistory } from 'react-router-dom';
import './CustomerModal.css'; 
import * as GrIcons from 'react-icons/gr'; 
// import Prismic from '@prismicio/client'
// import { Date, Moment, Link, RichText } from 'prismic-reactjs'



// const CUSTOMERS_URL = "http://localhost:3000/customers/"

const CustomerModal = ({ customer, show, handleClose }) => {

   
  const showHideClassName = show ? "modal display-block" : "modal display-none"; 

  const history = useHistory(); 

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (info) => {
    setToggleState(info);
  }
 
  return (
  


    <div className={showHideClassName}>
      <div className="container">

    <section className="modal-main">
      <div class="modal-close-btn">
        <button type="button" class="btn-close" aria-label="Close" onClick={handleClose}><GrIcons.GrClose size={18}/></button>
        </div>

        <section className="modal-background">
          <div className="modal-content">
          <h2 class="customer-modal-header">{customer.first_name} {customer.last_name}</h2>
        


        <div className="bloc-tabs">
          <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>
            Info
          </button>
          <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>
            Tasks
          </button>
          <button className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>
            Notes
          </button>
          <button className={toggleState === 4 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(4)}>
            Leads
          </button>
        </div>

        <div className="content-tabs">
              

                <div className={toggleState === 1 ? "content active-content" : "content"}>
                  <h2>Info</h2>
                  <hr />
     
              <ul class="modal-text">
                <li>
                <div class="key"><strong>First</strong></div>
                <div class="value">{customer.first_name}</div>      
                </li>
              
                <li>
                <div class="key"><strong>Last</strong></div>
                <div class="value">{customer.last_name}</div>      
                </li>
                
                <li>
                  <div class="key"><strong>Email</strong></div>
  
                  <div class="value"><a href={"mailto:" + customer.email}><u>{customer.email}</u></a></div>      
                </li>
                
                <li>
                <div class="key"><strong>Phone</strong></div>
                <div class="value">{customer.phone}</div>      
                </li>
              </ul>



    
              <ul class="modal-text">
                <li>
                <div class="key"><strong>Company</strong></div>
                <div class="value">{customer.company}</div>      
                </li>

                <li>
                <div class="key"><strong>Job Title</strong></div>
                <div class="value">{customer.job_title}</div>      
                </li>
                

                <li>
                <div class="key"><strong>Industry</strong></div>
                <div class="value">{customer.industry}</div>      
                </li>

                {/* <li> */}
                {/* <div class="key"><strong>Created</strong></div> */}
                    {/* <div class="value">{customer.created_at.toDateString}</div>       */}
                {/* </li> */}
              </ul>
            </div>
 

          
                <div className={toggleState === 2 ? "content active-content" : "content"}>
                  <h2>Tasks</h2>
                    <ul class="modal-text">
                      <div class="value">{customer.tasks.map((task) => {
                        <li value={task.id}>{task.task_type}</li>
                      })}</div>      
                    </ul>
                </div>
                

                <div className={toggleState === 3 ? "content active-content" : "content"}>
                  <h2>Notes</h2>
                    
                  <div class="value">
                    <p>{customer.notes}</p>
                  </div>      
                    
                </div>
                

              
              <div className={toggleState === 4 ? "content active-content" : "content"}>
                <h2>Leads</h2>
                <ul>
                  <li>Lead 1</li>
                  <li>Lead 2</li>
                  <li>Lead 3</li>
                </ul>
              </div>
              

          </div>
        </div>
 

      </section>
    </section>

    
    
      </div>
  </div>

  
  )
}
 

export default CustomerModal; 


