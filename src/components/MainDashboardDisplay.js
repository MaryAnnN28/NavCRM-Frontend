import React, { useState } from 'react'; 
import './MainDash.css'; 
import { Heading, Grid, GridItem } from '@chakra-ui/react'; 

function MainDashboardDisplay({ users, customers, tasks }) {

  const [customer, setCustomer] = useState()

  function getFirstName() {
    setCustomer(customer.first_name)
  }


  return (
    <div>
      
      <div className="dashboard-header">
        {users.map(user =>
          <Heading size="lg" colorScheme="blackAlpha">😄  Hi  {user.first_name}, welcome to your dashboard!  🎉</Heading>)}
      </div>

      <div className="dashboard-grid">
        <Grid
          h="500px"
          w="5xl"
          templateRows="repeat(3, 2fr)"
          templateColumns="repeat(5, 1fr)"
          gap={4}
        >
          {/* <GridItem rowSpan={2} colSpan={2} bg="#294668de" />
          <GridItem rowSpan={2} colSpan={3} bg="gray.400" />
          <GridItem rowSpan={2} colSpan={5} bg="#294668de" />
          <GridItem rowSpan={2} colSpan={3} bg="gray.100" />
          <GridItem rowSpan={2} colSpan={2} bg="#294668de" /> */}

          <GridItem rowSpan={2} colSpan={2} className="grid-1">
            <Heading size="md" textAlign="center">CUSTOMERS</Heading> <br />
            <h3>
              You have <strong>{customers.length}</strong> customers.
            </h3>
             
          </GridItem>
        

          <GridItem rowSpan={2} colSpan={3} className="grid-2">
          
            <Heading size="md" textAlign="center">TASKS</Heading> <br />
              <h3>You have <strong>{tasks.length}</strong> tasks.</h3> <br />
              
              {/* You have <strong>{(tasks.task_type === 'Email').length}</strong> tasks.  */}
              <p>
            {tasks.map(task => 
              <p value={task.id}>
                <strong>{task.task_type}</strong> for <strong>{task.customer.first_name} </strong> is due on <strong>{task.due_date}</strong> at <strong>{task.time_due}</strong>
              
              </p>
            )}
              
              </p>
            
          </GridItem>

          <GridItem rowSpan={3} colSpan={5} bg="#294668de" className="grid-3"/>

          {/* <GridItem rowSpan={2} colSpan={3} bg="gray.100" /> */}

          {/* <GridItem rowSpan={2} colSpan={2} bg="#294668de" /> */}
        
        </Grid>
      </div>

    </div>
  )

}

export default MainDashboardDisplay; 