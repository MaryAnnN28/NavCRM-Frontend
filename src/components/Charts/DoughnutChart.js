import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: ['To-do', 'Call', 'Email', 'Appt'],
  datasets: [{
    data: [8, 2, 2, 2],
    backgroundColor: ['#4B5A66', '#849DB3', '#687B8C'],
    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
  }],
  options: {
    responsive: true,
    legend: {
      position: 'right',
      align: 'right'
    }
  }
};
   
function Dashboard() {
  return (
    <div>
      <center><h2>Task Type</h2></center>
      <Doughnut
        width={200} height={100} options={{ maintainAspectRatio: false }}
        data={data} />
    </div>
  );
}

export default Dashboard;