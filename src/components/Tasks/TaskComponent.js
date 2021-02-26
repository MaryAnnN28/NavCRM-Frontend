import React from 'react';
import Task from './Task';
import './Tasks.css';

const TaskComponent = (props) => {
   return (
      <div>
       
         <table>
            <tbody>
               <tr>
                  <th width="200px"><h4>Title</h4></th>
                  <th width="100px"><h4>Task</h4></th>
                  <th width="100px"><h4>Due Date</h4></th>
                  <th width="90px"><h4>Time Due</h4></th>
                  <th width="160px"><h4>Customer</h4></th>
                  <th width="180px"><h4>Company</h4></th>
               </tr>
               {props.tasks.map(task =>
                  <Task
                     key={task.id}
                     task={task}
                  />)}

            </tbody>
         </table>

      </div>
   )
}

export default TaskComponent; 