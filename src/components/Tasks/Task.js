import React from 'react'; 

const Task = ({ task }) => {

   return (
   
         <tr>
            <td>{task.title}</td>
            <td>{task.task_type}</td>
            <td>{task.due_date}</td>
            <td>{task.time_due}</td>
            <td>{task.customer.first_name} {task.customer.last_name}</td>
            <td>{task.customer.company}</td>
         </tr>

    
   )
}
 

export default Task; 