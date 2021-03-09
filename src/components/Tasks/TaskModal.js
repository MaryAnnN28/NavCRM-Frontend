import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import './TaskModal.css';
import * as GrIcons from 'react-icons/gr'; 
import * as FaIcons from 'react-icons/fa'; 
import * as AiIcons from 'react-icons/ai';
import { IconButton, Box, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogContent, AlertDialogOverlay, AlertDialogHeader, Button } from "@chakra-ui/react";

const TASKS_URL = "http://localhost:3000/tasks/"

const TaskModal = ({ task, show, chooseTask, deleteTask, handleClose }) => {

  const showHideClassName = show ? "modal display-block" : "modal display-none";
  
  const history = useHistory();
  
  const handleEditClick = () => {
    chooseTask(task)
    history.push('/edittaskform')
  };

  const handleDelete = () => {
    fetch(TASKS_URL + task.id, { method: "DELETE" })
      .then(resp => resp.json())
      .then(() => {
        deleteTask(task)
        handleClose()
    })
  }

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (info) => {
    setToggleState(info);
  }

  const [isOpen, setIsOpen] = useState(false)
  const onClose = () => setIsOpen(false)
  const cancelRef = useRef()



  return (
    <div className={showHideClassName}>
      
      <section className="modal-main">
        <div class="modal-close-btn">
          <button type="button" class="btn-close" aria-label="Close" onClick={handleClose}><GrIcons.GrClose/></button>
        </div>

      <section className="modal-background">
          <div className="task-modal-content">
            <h2 class="task-modal-header">{task.task_type} </h2>
          
        <div class="modal-icons">
          <FaIcons.FaEdit size={28} onClick={handleEditClick}/>
          &nbsp; &nbsp;
          <AiIcons.AiFillDelete size={28} onClick={() => setIsOpen(true)} />
            </div>
            
          <div className="bloc-tabs">
          <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>
            Details
          </button>
          <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>
            Notes
          </button>
        </div>
        
        <div className="content-tabs">
              <div className={toggleState === 1 ? "content active-content" : "content"}>
             
            <ul class="task-modal-text">
              <li>
                <div class="task-key"><strong>Title:</strong></div>
                <div class="task-value"><strong>{task.title}</strong></div>
              </li>
              <li>
                <div class="task-key"><strong>Description:</strong></div>
                <div class="task-value">{task.description}</div>
              </li>
              <li>
                <div class="task-key"><strong>Customer:</strong></div>
                <div class="task-value">{task.customer.first_name} {task.customer.last_name}</div>
              </li>
              <li>
                <div class="task-key"><strong>Company:</strong></div>
                <div class="task-value">{task.customer.company}</div>
              </li>
              <li>
                <div class="task-key"><strong>Created on:</strong></div>
                <div class="task-value">{task.created_at.toString().slice(0, -14)}</div>
              </li>
              <li>
                <div class="task-key"><strong>Due Date:</strong></div>
                <div class="task-value">{task.due_date}</div>
              </li>
              <li>
                <div class="task-key"><strong>Time Due:</strong></div>
                <div class="task-value">{task.time_due}</div>
              </li>
              <li>
                <div class="task-key"><strong>Mark Complete:</strong></div>
                    <div class="task-value"> <input type="checkbox" class="task-checkbox" size={6}/></div>
              </li>
                </ul>
                  
          </div>
           
              <div className={toggleState === 2 ? "content active-content" : "content"}>
            
                <ul class="modal-text"> 
                  <li>
                    <div class="task-value-notes">{task.notes}</div>
                  </li>
                </ul>
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
              <strong>Delete Task</strong>
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure you want to delete this task?
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

export default TaskModal;