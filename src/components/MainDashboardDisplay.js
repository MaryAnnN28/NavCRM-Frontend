import React from 'react'; 
import './MainDash.css'; 
import { Heading, Grid, GridItem } from '@chakra-ui/react'; 

function MainDashboardDisplay({ users, customers, tasks }) {

  return (
    <div>
      
      <div className="dashboard-header">
        {users.map(user =>
          <Heading size="lg" colorScheme="blackAlpha">😄  Hi  {user.first_name}, welcome to your dashboard!  🎉</Heading>)}
      </div>

      <div className="dashboard-grid">
        <Grid
          h="700px"
          w="5xl"
          templateRows="repeat(5, 2fr)"
          templateColumns="repeat(5, 1fr)"
          gap={4}
        >
          {/* <GridItem rowSpan={2} colSpan={2} bg="#294668de" />
          <GridItem rowSpan={2} colSpan={3} bg="gray.400" />
          <GridItem rowSpan={2} colSpan={5} bg="#294668de" />
          <GridItem rowSpan={2} colSpan={3} bg="gray.100" />
          <GridItem rowSpan={2} colSpan={2} bg="#294668de" /> */}

          <GridItem rowSpan={2} colSpan={2} bg="gray.100" className="grid-1">
            <Heading size="md">Customer Info Box</Heading> <br />
            <h4>
              You have <strong>{customers.length}</strong> customers. 
            </h4>
             
          </GridItem>
        

          <GridItem rowSpan={2} colSpan={3} bg="gray.300" className="grid-2">
            <Heading size="md">Task Info Box</Heading> <br />
              <p>
              You have <strong>{tasks.length}</strong> tasks. 
              
              </p>
            
          </GridItem>

          <GridItem rowSpan={3} colSpan={5} bg="#294668de" />

          {/* <GridItem rowSpan={2} colSpan={3} bg="gray.100" /> */}

          {/* <GridItem rowSpan={2} colSpan={2} bg="#294668de" /> */}
        
        </Grid>
      </div>

    </div>
  )

}

export default MainDashboardDisplay; 