import React from 'react'; 
import { useHistory } from 'react-router-dom';
import { Box, IconButton } from '@chakra-ui/react'
import { EditIcon, DeleteIcon, ViewIcon } from '@chakra-ui/icons';
import './Tasks.css'

// import NewTaskForm from './NewTaskForm';
// import {
//   Drawer,
//   DrawerBody,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   Button, 
//   useDisclosure
// } from "@chakra-ui/react"


const TASKS_URL = "http://localhost:3000/tasks/";

const TasksList = ({ task, customers, users, handleNewTask, chooseTask, chosenTask, chosenCustomer, currentUser, deleteTask// chosenCustomer,
  // chosenTask
}) => {

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
    })
  }

  
  return (
    
      <tr className="task-list-table">
      <td className="task-data-row" align="center" width="40px">
        <input type="checkbox" class="hidden" /></td>
      
      <td className="task-data-row-bold" align="center">{task.task_type}</td>

      <td className="task-data-row"> {task.title}</td>

      { task.customer ? <td className="task-data-row-bold">{task.customer.first_name} {task.customer.last_name}</td> : null }
      { task.customer ? <td className="task-data-row">{task.customer.company}</td> : null}
      <td className="task-data-row" align="center">{task.due_date}</td>

      <td className="task-data-row" align="center">{task.time_due}</td>

     {/* { task.customer === chosenTask.customer ? <td>{chosenTask.customer.company}</td> : null} */}


      <td className="task-data-row" align="center">
          <IconButton
            variant="unstyled"
            colorScheme="blackAlpha"
            aria-label="View Task"
            icon={<ViewIcon />}
            // onClick={handleViewTask}
            mr="1" mt="1" mb="1" /> 
        
          <IconButton
            variant="unstyled"
            colorScheme="blackAlpha"
            aria-label="Edit Task"
            icon={<EditIcon />}
            onClick={handleEditClick}
            mr="1" mt="1" mb="1"/> 
      
          <IconButton
            variant="unstyled"
            colorScheme="blackAlpha"
            aria-label="Delete Task"
            icon={<DeleteIcon />}
            onClick={handleDelete} 
            //<--- Directly deletes without alert
            // onClick={() => setIsOpen(true)}
            mt="1" mb="1"
          />
      </td>
    </tr>

  
  )
}
 

export default TasksList; 