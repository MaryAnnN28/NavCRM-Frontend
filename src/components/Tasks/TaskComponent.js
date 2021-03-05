import React from 'react';
import TasksPage from './TasksPage';

class TaskComponent extends React.Component {
  
  componentWillUnmount() {
    return this.props.taskComponentUnMounted()
  }

  render() {
    return (
      <div>
        {this.props.tasks.map(task => 
          <TasksPage
          key={task.id}
            task={this.props.task} 
            users={this.props.users}
            customers={this.props.customers}
            handleNewTask={this.props.handleNewTask}
            chooseTask={this.props.chooseTask}
            chosenTask={this.props.chosenTask}
            chosenCustomer={this.props.chosenCustomer}
            currentUser={this.props.currentUser}
            deleteTask={this.props.deleteTask}    
          />
        )}
      </div>
    )
  }
}

export default TaskComponent;