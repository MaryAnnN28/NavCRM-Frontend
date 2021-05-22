import React, { Fragment, useState, useRef } from 'react'; 
import { useHistory } from 'react-router-dom';
import TaskModal from './TaskModal';
import { Box, IconButton, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogContent, AlertDialogOverlay, AlertDialogHeader, Button } from '@chakra-ui/react'
import { EditIcon, DeleteIcon, ViewIcon } from '@chakra-ui/icons';
import './Tasks.css'



const TASKS_URL = "http://localhost:3000/tasks/"

const TasksList = ({ task, chooseTask, deleteTask, chosenCustomer, chosenTask
}) => {

  const history = useHistory();
  
  const [show, setShow] = useState(false); 
  
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

  const [isOpen, setIsOpen] = useState(false)
  const onClose = () => setIsOpen(false)
  const cancelRef = useRef()

  
  return (
    <>
      <tbody></tbody>
      <tr className="task-list-table">
      <td className="task-data-row" align="center" width="40px">
        <input type="checkbox" class="hidden" /></td>
      
      <td className="task-data-row-bold" align="center">{task.task_type}</td>

      <td className="task-data-row"> {task.title}</td>

      { task.customer ? <td className="task-data-row-bold">{task.customer.first_name} {task.customer.last_name}</td> : null }
      { task.customer ? <td className="task-data-row">{task.customer.company}</td> : null}
      <td className="task-data-row" align="center">{task.due_date}</td>

      <td className="task-data-row" align="center">{task.time_due}</td>

      <td className="task-data-row" align="center">
          <IconButton
            variant="unstyled"
            colorScheme="blackAlpha"
            aria-label="View Task"
            icon={<ViewIcon />}
            onClick={() => setShow(true)}
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
            onClick={() => setIsOpen(true)} 
            mt="1" mb="1"
          />
      </td>
    </tr>

      <Fragment>
        
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


        <TaskModal
          task={task}
          show={show}
          chooseTask={chooseTask}
          deleteTask={deleteTask}
          handleClose={() => setShow(false)}
      />
    </Fragment>
    </>
  
  )
}
 

export default TasksList; 