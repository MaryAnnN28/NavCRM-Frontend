import React, { useState } from 'react';
import {
  BrowserRouter as
  Router,
  // Switch,
  // Route,
  useHistory
} from 'react-router-dom';

import TasksList from './TasksList';
// import NewTaskForm from './NewTaskForm';
import './Tasks.css';
import * as BsIcons from 'react-icons/bs';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button, 
  useDisclosure
} from "@chakra-ui/react"


const TasksPage = ({ tasks, customers, users, handleNewTask, chooseTask, chosenTask, chosenCustomer, currentUser, deleteTask}) => {

  // const history = useHistory();
  const [ show ] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  // const handleNewClick = () => {
  //   history.push('/newtaskform')
  // };

  return (
    <div className="tasks-page-main">
      <div className="new-task-btn">
               
        <Button ref={btnRef} colorScheme="teal"
          onClick={onOpen}
          // onClick={() => setShow(true)}
        >
          + Create Task
      </Button>
      </div>
     
      <div className="task-list-table-div">
      <table className="task-list-table">
        <tbody>
          <tr className="task-rows">  
            <th width="40px" align="center"><BsIcons.BsCheckBox/></th>
            <th width="170px">Title</th>
            <th width="90px"><h4>Task</h4></th>
            <th width="80px"><h4>Due Date</h4></th>
            <th width="70px"><h4>Time Due</h4></th>
            <th width="120px"><h4>Customer</h4></th>
            <th width="130px"><h4>Company</h4></th>
            <th width="150px"><h4>Actions</h4></th>
            </tr>
            {tasks.map(task => 
              <TasksList
                key={task.id}
                task={task} 
                customers={customers}
                users={users}
                handleNewTask={handleNewTask}
                chosenCustomer={chosenCustomer}
                currentUser={currentUser}
                chooseTask={chooseTask}
                deleteTask={deleteTask}
                chosenTask={chosenTask}  
              />
            )}
        </tbody>
      </table>
      </div>

      <div className="drawer-div">
        <Drawer
        show={show}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        >
          <DrawerOverlay colorScheme="blackAlpha">
          <DrawerContent colorScheme="blackAlpha">
            <DrawerCloseButton />
            <DrawerHeader>Create New Task</DrawerHeader>

              <DrawerBody>
                
                {/* <Route path="/newtaskform" render={(routerProps) =>
                  <NewTaskForm
                    task={task}
                    customers={customers}
                    users={users}
                    handleNewTask={handleNewTask}
                    currentUser={currentUser}
                    chosenCustomer={chosenCustomer}
                    {...routerProps}
                  />} /> */}
                  
              </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button color="blue">Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
        </div>
    

    </div>
  )
}

export default TasksPage; 