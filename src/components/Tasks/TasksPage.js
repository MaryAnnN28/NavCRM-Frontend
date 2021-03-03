import React from 'react';
import './Tasks.css';
import { Button } from '@chakra-ui/react';
import TasksList from './TasksList';


const TasksPage = ({ tasks, chooseTask, deleteTask, chosenCustomer, currentUser }) => {
  return (
    <div className="tasks-page-main">
      
      <div className="new-task-btn">
      <Button colorScheme="blackAlpha" variant="solid" size="sm" type="button">
        <h4>+</h4>&nbsp; Create Task
      </Button>
      </div>
      
      <table className="task-list-table">
        <tbody>
          <tr>  
            <th width="200px"><h4>Title</h4></th>
            <th width="100px"><h4>Task</h4></th>
            <th width="100px"><h4>Due Date</h4></th>
            <th width="90px"><h4>Time Due</h4></th>
            <th width="160px"><h4>Customer</h4></th>
            {/* <th width="180px"><h4>Company</h4></th> */}
            <th width="140px"><h4>Actions</h4></th>
        </tr>
          {tasks.map(task =>
            <TasksList
              key={task.id}
              task={task} 
              chooseTask={chooseTask}
              deleteTask={deleteTask}
              chosenCustomer={chosenCustomer}
              currentUser={currentUser}
              />)}

        </tbody>
      </table>

    </div>
  )
}

export default TasksPage; 