import React, { useState } from 'react';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';

import TasksList from './TasksList';

import './Tasks.css';
import * as BsIcons from 'react-icons/bs';
import {
  // Drawer,
  // DrawerBody,
  // DrawerFooter,
  // DrawerHeader,
  // DrawerOverlay,
  // DrawerContent,
  // DrawerCloseButton,
  Button, 
  Select, 
  Input,
  InputGroup, 
  InputRightAddon,
  RadioGroup,
  Radio,
  Stack
} from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons';


const TasksPage = ({ tasks, customers, users, handleNewTask, chooseTask, chosenTask, chosenCustomer, currentUser, deleteTask, search, sort, sortTask, searchTask, filterTask, handleFilterType }) => {

  const history = useHistory();

  const [value, setValue] = useState("None");
  
  const [show] = useState(false);

  const [taskTypes, setTaskTypes] = useState([]);

  tasks.map(task => taskTypes.includes(task.task_type) ? null : setTaskTypes([...taskTypes, task.task_type]))
  

  const btnRef = React.useRef()

  const handleNewClick = () => {
    history.push('/newtaskform')
  };

  return (
    <div className="tasks-page-main">
   
     
      <div className="new-task-btn">
        <Button colorScheme="blackAlpha" variant="solid" size="sm"  type="button" onClick={handleNewClick}>
            <h4>+ New Task</h4>&nbsp;
        </Button>
      </div>

      <div className="task-list-table-div">
        
        <table className="task-filter">
          <tr className="top-header">
            
            <td className="sort-field" colSpan="3">
              {/* Sort by:  */}
              <RadioGroup onChange={setValue} value={value}>
                <Stack spacing={3} direction="row">
                  <Radio
                    colorScheme="blackAlpha"
                    type="radio"
                    value="None"
                    checked={sort === "None"}
                    onChange={(event) => sortTask(event.target.value)}>
                  <p class="top-header">None</p>
                  </Radio>
                  <Radio
                    colorScheme="blackAlpha"
                    type="radio"
                    value="Due_Date"
                    checked={sort === "Due_Date"}
                    onChange={(event) => sortTask(event.target.value)}>
                  <p class="top-header">Due Date</p>
                  </Radio>
                  <Radio
                    colorScheme="blackAlpha"
                    type="radio"
                    value="Newest"
                    checked={sort === "Newest"}
                    onChange={(event) => sortTask(event.target.value)}>
                  <p class="top-header">Newest</p>
                  </Radio>
                  <Radio
                    colorScheme="blackAlpha"
                    type="radio"
                    value="Oldest"
                    checked={sort === "Oldest"}
                    onChange={(event) => sortTask(event.target.value)}>
                  <p class="top-header">Oldest</p>
                  </Radio>
                </Stack>
              </RadioGroup>
            </td>

          <td className="filter-row" colSpan="2">
              <Select name="filter" placeholder="Filter By Task Type" ml={6}  onChange={handleFilterType}>{taskTypes.map(type =>
                <option value={type}>{type}</option>)}
            </Select>
            </td>
            
          <td className="filter-row" colSpan="3">
              <InputGroup>
                <Input name="search" placeholder="Search" value={search} width='xs' ml={8} onChange={searchTask}></Input>
                <InputRightAddon children={<SearchIcon/>}/>
              </InputGroup>
            </td>
            

          <td className="filter-row" colSpan="2" align="right">
          </td>
          </tr>
          </table>
          
          <table className="task-list-table">

        <tbody>
          <tr className="task-header-row">  
            <th className="task-header" width="50px" align="center"><BsIcons.BsCheckBox/></th>
            <th className="task-header" width="120px"><h4>Task</h4></th>
            <th className="task-header" width="200px">Title</th>
            <th className="task-header" width="140px"><h4>Customer</h4></th>
            <th className="task-header" width="150px"><h4>Company</h4></th>
            <th className="task-header" width="100px"><h4>Due Date</h4></th>
            <th className="task-header" width="100px"><h4>Time Due</h4></th>
            <th className="task-header" width="140px"><h4>Actions</h4></th>
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

      {/* <div className="drawer-div">
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

              <DrawerBody> */}
                
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
                  
              {/* </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button color="blue">Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
        </div> */}
    

    </div>
  )
}

export default TasksPage; 