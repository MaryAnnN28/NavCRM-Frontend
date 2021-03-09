import React, { useState } from 'react'; 
import './MainDash.css'; 
import { Heading, Grid, GridItem, Button, Stack } from '@chakra-ui/react';
import Chart from 'chart.js';
import * as AiIcons from 'react-icons/ai';

function MainDashboardDisplay({ users, customers, tasks }) {

  const [customer, setCustomer] = useState()

  function getFirstName() {
    setCustomer(customer.first_name)
  }

  // const taskChart = new Chart;

  return (
    // <div className="dashboard-page">
      <section className="dashboard-page-background">

      <div className="dashboard-grid">
      {/* <div className="dashboard-header">
        {users.map(user =>
          <Heading size="md" colorScheme="blackAlpha">😄  Hi  {user.first_name}! 🎉</Heading>)}
      </div> */}
        <Grid
          h="600px"
          w="5xl"
          templateRows="repeat(5, 2fr)"
          templateColumns="repeat(6, 1fr)"
          gap={7}
        >
          {/* <GridItem rowSpan={2} colSpan={2} bg="#294668de" />
          <GridItem rowSpan={2} colSpan={3} bg="gray.400" />
          <GridItem rowSpan={2} colSpan={5} bg="#294668de" />
          <GridItem rowSpan={2} colSpan={3} bg="gray.100" />
          <GridItem rowSpan={2} colSpan={2} bg="#294668de" /> */}

          <GridItem rowSpan={2} colSpan={2} className="grid-1">
            <Heading size="sm" textAlign="center">CUSTOMERS</Heading> <br />
            <h3>You have <strong>{customers.length}</strong> customers.</h3>
            <h3>You have <strong>6</strong> VIP customers.</h3> <br /><br />
            <button color="blue" bgcolor="blue">View VIPs</button><br />
            <Button colorScheme="blackAlpha" color="white" size="sm" shadow={true}>View All Customers</Button>
             
          </GridItem>
        

          <GridItem rowSpan={2} colSpan={2} className="grid-2">
            <Heading size="sm" textAlign="center">TASKS</Heading> <br />
            <h3>You have <strong>{tasks.length}</strong> tasks.</h3> 
            <Stack direction="row">

            <font color="red"><AiIcons.AiFillWarning /> You have <strong>2</strong> tasks <b>past due</b>.<br /></font>
            </Stack>
            - You have <strong>3</strong> tasks due today<br />
            <strong>5</strong> tasks due this week <br /> <br />
            <Button colorScheme="blackAlpha" color="white" size="sm" shadow={true}>View All Tasks</Button>
                {/* *********** TASK INFO ***********  */}
              {/* {tasks.map(task => 
                <p value={task.id}>
                  <strong>{task.task_type}</strong> for <strong>{task.customer.first_name} </strong> 
                  is due on <strong>{task.due_date}</strong> at <strong>{task.time_due}</strong>
                </p>
              )} */}
          </GridItem>

          <GridItem rowSpan={2} colSpan={2} className="grid-2">
            <Heading size="sm" textAlign="center">CALENDAR</Heading> <br />
            INSERT CALENDAR  
                {/* *********** TASK INFO ***********  */}
              {/* {tasks.map(task => 
                <p value={task.id}>
                  <strong>{task.task_type}</strong> for <strong>{task.customer.first_name} </strong> 
                  is due on <strong>{task.due_date}</strong> at <strong>{task.time_due}</strong>
                </p>
              )} */}
          </GridItem>

          <GridItem rowSpan={3} colSpan={3} className="grid-3">
            <Heading size="sm" textAlign="center">CUSTOMER INFOGRAPHS</Heading> <br />
            CUSTOMERS BY INDUSTRY
          </GridItem>

          <GridItem rowSpan={3} colSpan={3} className="grid-3">
            <Heading size="sm" textAlign="center">TASKS CHART/GRAPH</Heading> <br />
            
            ** GITHUB STYLE ACTIVITY CHART ***
             
             
          </GridItem>
        
        </Grid>
        

          
          
        
          {/* <GridItem rowSpan={3} colSpan={3} bg="gray.100" /> */}

          {/* <GridItem rowSpan={2} colSpan={2} bg="#294668de" /> */}
      </div>

      </section>
    
  )

}

export default MainDashboardDisplay; 