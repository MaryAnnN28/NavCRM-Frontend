import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['Software', 'Financial', 'Government', 'Consulting', 'Health', 'Hospitality', 'Real Estate'],
  datasets: [
    {
      label: 'Customer Industries',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 49, 60, 81, 56, 55, 40, 10]
    }
  ]
};
function Dashboard () {
  return (
    <div>
        <h2>Customer Industry</h2>
        <Bar
          data={data}
          width={200}
          height={260}
          options={{
            maintainAspectRatio: false
          }}
        />
    </div>
  );
}
export default Dashboard;