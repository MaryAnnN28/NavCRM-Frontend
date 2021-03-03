import React from 'react'; 
import './MainDash.css'; 
import { Heading, Grid, GridItem } from '@chakra-ui/react'; 

function MainDashboardDisplay({ users }) {

  return (
    <div>
      
      <div className="dashboard-header">
        {users.map(user =>
          <Heading size="lg" colorScheme="blackAlpha">😄  Hi  {user.first_name}, welcome to your dashboard!  🎉</Heading>)}
      </div>

      <div className="dashboard-grid">
        <Grid
          h="1000px"
          w="6xl"
          templateRows="repeat(8, 2fr)"
          templateColumns="repeat(5, 1fr)"
          gap={4}
        >
          {/* <GridItem rowSpan={2} colSpan={2} bg="#294668de" />
          <GridItem rowSpan={2} colSpan={3} bg="gray.400" />
          <GridItem rowSpan={2} colSpan={5} bg="#294668de" />
          <GridItem rowSpan={2} colSpan={3} bg="gray.100" />
          <GridItem rowSpan={2} colSpan={2} bg="#294668de" /> */}

          <GridItem rowSpan={2} colSpan={2} bg="#294668de">
            <div>
            <Heading colorScheme="whiteAlpha">Hello</Heading>

            </div>
            
          </GridItem>

          <GridItem rowSpan={2} colSpan={3} bg="gray.400" />

          <GridItem rowSpan={4} colSpan={5} bg="#294668de" />

          <GridItem rowSpan={2} colSpan={3} bg="gray.100" />

          <GridItem rowSpan={2} colSpan={2} bg="#294668de" />
        
        </Grid>
      </div>

    </div>
  )

}

export default MainDashboardDisplay; 