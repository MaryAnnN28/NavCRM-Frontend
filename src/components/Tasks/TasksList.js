import React from 'react'; 
import { useHistory } from 'react-router-dom';
import { IconButton } from '@chakra-ui/react'
import { EditIcon, DeleteIcon, ViewIcon } from '@chakra-ui/icons';
import './Tasks.css'



const TASKS_URL = "http://localhost:3000/tasks/";

const TasksList = ({ task, chooseTask, deleteTask, chosenCustomer, chosenTask }) => {

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

    // Single source of truth needed for tasks (old and new)!!! // 

    // **** THIS PARTIALLY WORKS - DO NOT GET RID OF!!!!!! ***** //
    // * RENDERS TASK.CUSTOMER BUT AFTER YOU UPDATE THE TASK ** //
    // **** IT COMES BACK WITH NO CUSTOMER OR COMPANY ***** //
    // <tr className="task-data-row" height="25px">
    //   <td align="center" width="40px"> <input type="checkbox" class="hidden"/></td>
    //   <td> {task.title}</td>
    //   <td>{task.task_type}</td>
    //   <td>{task.due_date}</td>
    //   <td>{task.time_due}</td>
    //   { task.customer ? <td>{task.customer.first_name} {task.customer.last_name}</td> : null }
    //   { task.customer ? <td>{task.customer.company}</td> : null}


    <tr className="task-data-row" height="25px">
      <td align="center" width="40px"> <input type="checkbox" class="hidden"/></td>
      <td> {task.title}</td>
      <td>{task.task_type}</td>
      <td>{task.due_date}</td>
      <td>{task.time_due}</td>
      { task.customer ? <td>{task.customer.first_name} {task.customer.last_name}</td> : null }
     {/* { task.customer === chosenTask.customer ? <td>{chosenTask.customer.company}</td> : null} */}
      { task.customer ? <td>{task.customer.company}</td> : null}
    
      



      

      <td align="center">
          <IconButton
            variant="unstyled"
            colorScheme="blackAlpha"
            aria-label="View Task"
            icon={<ViewIcon />}
            // onClick={handleViewTask}
            mr="1" mt="2" mb="1" /> 
        
          <IconButton
            variant="unstyled"
            colorScheme="blackAlpha"
            aria-label="Edit Task"
            icon={<EditIcon />}
            onClick={handleEditClick}
            mr="1" mt="2" mb="1"/> 
      
          <IconButton
            variant="unstyled"
            colorScheme="blackAlpha"
            aria-label="Delete Task"
            icon={<DeleteIcon />}
            onClick={handleDelete} 
            //<--- Directly deletes without alert
            // onClick={() => setIsOpen(true)}
            mt="2" mb="1"
          />
      </td>
    </tr>

  
  )
}
 

export default TasksList; 