import React, { useState, useRef } from 'react'; 
import { useHistory } from 'react-router-dom';
import './CustomerModal.css'; 
import * as GrIcons from 'react-icons/gr'; 
import * as FaIcons from 'react-icons/fa'; 
import * as AiIcons from 'react-icons/ai';
import { IconButton, Box, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogContent, AlertDialogOverlay, AlertDialogHeader, Button } from "@chakra-ui/react";


const CUSTOMERS_URL = "http://localhost:3000/customers/"

const CustomerModal = ({ customer, show, handleClose, chooseCustomer, deleteCustomer }) => {

   
  const showHideClassName = show ? "modal display-block" : "modal display-none"; 

  const history = useHistory(); 

  const handleEditClick = () => {
    chooseCustomer(customer)
    history.push('/editcustomerform')
  };

  const handleDelete = () => {
    fetch(CUSTOMERS_URL + customer.id, { method: "DELETE" })
      .then(resp => resp.json())
      .then(() => {
        deleteCustomer(customer)
        handleClose()
    })
  }

  /* Handles the tabs in modal */
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (info) => {
    setToggleState(info);
  }

  /* Handles the delete alert modal */
  const [isOpen, setIsOpen] = useState(false)
  const onClose = () => setIsOpen(false)
  const cancelRef = useRef()



  return (
  


    <div className={showHideClassName}>
  
   
    <section className="modal-main">
      <div class="modal-close-btn">
          <button type="button" class="btn-close" aria-label="Close" onClick={handleClose}><GrIcons.GrClose/>
          </button>
        </div>

        <section className="modal-background">
          <div className="modal-content">
          <h2 class="customer-modal-header">{customer.first_name} {customer.last_name}</h2>
        
          <div class="modal-icons">
                  
                  <FaIcons.FaEdit
                    size={28} 
                    onClick={handleEditClick}
                    />
                  &nbsp; &nbsp;
                  <AiIcons.AiFillDelete
                    size={28}
                      onClick={() => setIsOpen(true)} 
                  />

                </div>

        <div className="bloc-tabs">
          <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>
            Info
          </button>
          <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>
            Tasks
          </button>
          <button className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>
            Leads
          </button>
          <button className={toggleState === 4 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(4)}>
            Notes
          </button>
        </div>

        <div className="content-tabs">
              

              <div className={toggleState === 1 ? "content active-content" : "content"}>
                
                <h2>Customer</h2>
                <hr />
          <div class="modal-row">
            <div class="column">
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
                <div class="key"><strong>Created</strong></div>
                    <div class="value">{customer.created_at.toString().slice(0, -14)}</div>      
                </li>
                
                
              </ul>
            </div>


            <div class="column">
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

              </ul>
            </div>
                </div>

               
                
                  <div class="contact-info"><strong>Email: &nbsp; </strong><a href={"mailto:" + customer.email} target="_blank"><u>{customer.email}</u></a></div>      
          
                <div class="contact-info"><strong>Phone: &nbsp; </strong>{customer.phone}</div>      
        
              
             
          </div>
          
              <div className={toggleState === 2 ? "content active-content" : "content"}>
              <h2>Tasks</h2>
                <hr/>
                <p class="modal-text">
               
                  {/* {customer.tasks.map(task => {

                  return <div task={task.id}>
                    {task.task_type} &nbsp; &nbsp; &nbsp;
                    {task.title} &nbsp; &nbsp; &nbsp; &nbsp;
                    {task.due_date} &nbsp; &nbsp; &nbsp;
                    {task.time_due} &nbsp; &nbsp;
                  </div>
                  } */}
                  {/* )} */}
                    </p>
              </div>
              
              <div className={toggleState === 3 ? "content active-content" : "content"}>
                <h2>Leads</h2>
                <hr/>
                <p>
                  {customer.notes}
                </p>
              </div>

              <div className={toggleState === 4 ? "content active-content" : "content"}>
                <h2>Notes</h2>
                <hr/>
                <p>
                  {customer.notes}
                </p>
              </div>
              

          </div>
        </div>
 

      </section>
    </section>
     

      <AlertDialog
        colorScheme="blackAlpha"
        isOpen={isOpen}
        isCentered={true}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              <strong>Delete Customer</strong>
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure you want to delete this customer?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button colorScheme="blackAlpha" ref={cancelRef} onClick={onClose}>Cancel</Button>
              <Button colorScheme="red" ml={3} onClick={handleDelete}>Delete</Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
        
      </AlertDialog>

    
  </div>

  
  )
}
 

export default CustomerModal; 


