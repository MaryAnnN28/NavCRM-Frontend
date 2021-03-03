import React from 'react'; 
import { useHistory } from 'react-router-dom';
import { IconButton } from '@chakra-ui/react'
import { EditIcon, DeleteIcon, ViewIcon } from '@chakra-ui/icons';
import './Tasks.css'
import { NewTaskOptions } from './NewTaskOptions';


const TASKS_URL = "http://localhost:3000/tasks/";

const TasksList = ({ task, chooseTask, deleteTask, chosenCustomer, currentUser }) => {

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
    <div>

      <NewTaskOptions task={task}/>
  
    <tr className="task-data-row" height="25px">
      <td>{task.title}</td>
      <td>{task.task_type}</td>
      <td>{task.due_date}</td>
      <td>{task.time_due}</td>
      {/* <td>{task.customer.first_name} {task.customer.last_name}</td> */}
      {/* <td>{chosenCustomer.task.first_name} {chosenCustomer.task.last_name}</td> */}
      {/* <td>{task.customer.company}</td> */}
      <td align="center">
          <IconButton
            variant="unstyled"
            colorScheme="blackAlpha"
            aria-label="View Task"
            icon={<ViewIcon />}
            // onClick={handleEditClick}
            mr="1" mt="3" mb="1" /> 
        
          <IconButton
            variant="unstyled"
            colorScheme="blackAlpha"
            aria-label="Edit Task"
            icon={<EditIcon />}
            onClick={handleEditClick}
            mr="1" mt="3" mb="1"/> 
      
          <IconButton
            variant="unstyled"
            colorScheme="blackAlpha"
            aria-label="Delete Task"
            icon={<DeleteIcon />}
            onClick={handleDelete} 
            //<--- Directly deletes without alert
            // onClick={() => setIsOpen(true)}
            mt="3" mb="1"
          />
      </td>
    </tr>

    </div>
  
  )
}
 

export default TasksList; 