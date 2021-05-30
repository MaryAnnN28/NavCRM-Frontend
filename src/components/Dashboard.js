import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './MainDash.css'; 
import { Heading, Grid, GridItem, Button, HStack } from '@chakra-ui/react';
import DoughnutChart from './Charts/DoughnutChart';
import BarChart from './Charts/BarChart';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import { IconContext } from 'react-icons/lib';

// function Dashboard({ users, customers, tasks }) {
const Dashboard = ({ users, customers, tasks }) => {

  const history = useHistory();  
    
  const handleViewCustomers = () => {
    history.push('/customers')
  }
  
  const handleViewTasks = () => {
    history.push('/tasks')
  }

  // FOR CALENDAR 
  const [value, onChange] = useState( new Date() );
  
  // FOR TASKS
  const pastDue = () => {

  }
  

 

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
          </GridItem>
              
          <GridItem rowSpan={2} colSpan={2} className="grid-2">
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
                <p className='grid-5-numbers'>{tasks.length}</p>
                <p className="grid-5-text"> total</p> <br />

                <p className="grid-5-text">past due</p>
                <p className="grid-5-numbers">{tasks.due_date}</p> <br />

                <p className='grid-5-numbers'>2</p>
                <p className="grid-5-text"> due today</p> <br /><br />

                <Button colorScheme="blackAlpha" color="white" size="xs" shadow={true}
                  onClick={handleViewTasks}
                    >View All Tasks</Button>
          </GridItem>

        </Grid>
        
      </div>

      </section>
      </IconContext.Provider>
    </div>
    
  )

}

export default Dashboard; 