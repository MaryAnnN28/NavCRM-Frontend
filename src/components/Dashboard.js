import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './MainDash.css'; 
import { Heading, Grid, GridItem, Button, HStack } from '@chakra-ui/react';
import { Doughnut } from 'react-chartjs-2';
import DoughnutChart from './Charts/DoughnutChart';
import BarChart from './Charts/BarChart';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';

function Dashboard({ users, customers, tasks }) {

  const history = useHistory();

  const [customer, setCustomer] = useState()
  
  
  function getFirstName() {
    setCustomer(customer.first_name)
  }
  
  const handleViewCustomers = () => {
    history.push('/customers')
  }
  
  const handleViewTasks = () => {
    history.push('/tasks')
  }

  // FOR CALENDAR 
  const [value, onChange] = useState(new Date());
  
  // FOR CHARTS
  // const [value, onChange] = useState(new Date());

 

  return (
    <div className="dashboard-page">
      <IconContext.Provider value={{ className: 'react-icons', style: {verticalAlign: 'middle' } }}>
        
      <section className="dashboard-page-background">
      <div className="dashboard-header">
        {users.map(user =>
          <Heading size="sm" color="#687B8C"> Welcome,  {user.first_name}! 🎉</Heading>)}
      </div>

      <div className="dashboard-grid">
        <Grid
          h="600px"
          w="5xl"
          templateRows="repeat(5, 2fr)"
          templateColumns="repeat(6, 1fr)"
          gap={8}
        >
         
            
              <GridItem rowSpan={2} colSpan={2} className="grid-1">
                
              <p className='grid-1-text'>Total of <p className='grid-1-numbers'>{customers.length}</p> customers </p><br />
           
           <Button colorScheme="blackAlpha" color="white" size="xs" shadow={true}
             onClick={handleViewCustomers}
                >View All Customers</Button>
                
            
              
                {/* *********** TASK INFO ***********  */}
              {/* {tasks.map(task => 
                <p value={task.id}>
                  <strong>{task.task_type}</strong> for <strong>{task.customer.first_name} </strong> 
                  is due on <strong>{task.due_date}</strong> at <strong>{task.time_due}</strong>
                </p>
              )} */}

              {/* Button for all tasks */}
              {/* <Button colorScheme="blackAlpha" color="white" size="sm" shadow={true}
                onClick={handleViewTasks}
              >View All Tasks</Button> */}

              
            </GridItem>
          <GridItem rowSpan={2} colSpan={2} className="grid-2">
            {/* <Heading size="sm" textAlign="center">TASKS CHART/GRAPH</Heading> */}
                <DoughnutChart />       
          </GridItem>

          <GridItem rowSpan={3} colSpan={2} className="grid-3">
              <Calendar onChange={onChange} value={value} calendarType="US"/>
          </GridItem>

              
              
          <GridItem rowSpan={4} colSpan={4} className="grid-4" >
            <BarChart />      
          </GridItem>
            


              <GridItem rowSpan={3} colSpan={2} className="grid-5">
                
                <p className='grid-5-header'>Tasks</p>
                
                      
                {/* <p className="grid-5-text">You have</p> */}
                <p className='grid-5-numbers'>{tasks.length}</p> <p className="grid-5-text"> total</p> <br/>
            
                {/* Add function for filtering by task type and due tate  */}
                    {/* <AiIcons.AiFillWarning /> */}
                  <p className="grid-5-text"> past due</p> <p className="grid-5-numbers">7</p> <br/>
              
           <p className='grid-5-numbers'>2</p> <p className="grid-5-text"> due today</p> <br />
           {/* <p className="grid-5-text"> this week</p> <p className='grid-5-numbers'>4</p> <br /> */}

             
          </GridItem>
        


          {/* <GridItem rowSpan={2} colSpan={2} className="grid-6">
            <Heading size="sm" textAlign="center">CUSTOMER INFOGRAPHS</Heading> <br />
            CUSTOMERS BY INDUSTRY
            </GridItem> */}
            
            
        
        </Grid>
        

          
          
        
          {/* <GridItem rowSpan={3} colSpan={3} bg="gray.100" /> */}

          {/* <GridItem rowSpan={2} colSpan={2} bg="#294668de" /> */}
      </div>

      </section>
      </IconContext.Provider>
      </div>
    
  )

}

export default Dashboard; 