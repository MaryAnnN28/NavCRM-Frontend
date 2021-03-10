import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: ['To-do', 'Call', 'Email', 'Appointment'],
  datasets: [
    {
      data: [8, 2, 2, 2],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
        ],
        hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
        ]
      }]
  };
   
function Dashboard() {
  return (
    <div>
      <h2>Task Type Activity</h2>
      <Doughnut
        width={200} height={100} options={{ maintainAspectRatio: false }}
        data={data} />
    </div>
  );
}

export default Dashboard;