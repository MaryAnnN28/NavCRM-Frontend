import React from 'react';
import { useHistory } from 'react-router-dom';
import TasksList from './TasksList';
import './Tasks.css';
import * as BsIcons from 'react-icons/bs';
import { Button } from '@chakra-ui/react';


const TasksPage = ({ tasks, chooseTask, deleteTask, chosenTask }) => {

  const history = useHistory();

  const handleNewClick = () => {
    history.push('/newtaskform')
  };

  return (
    <div className="tasks-page-main">
      
      <div className="new-task-btn">
      <Button colorScheme="blackAlpha" variant="solid" size="sm" type="button" onClick={handleNewClick}>
        <h4>+</h4>&nbsp; Create Task
      </Button>
        <br />
      </div>
      
      <table className="task-list-table">
        <tbody>
          <tr>  
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
              chooseTask={chooseTask}
              deleteTask={deleteTask}
              chosenTask={chosenTask}
              
              />)}
          

        </tbody>
      </table>
      <br />

    </div>
  )
}

export default TasksPage; 