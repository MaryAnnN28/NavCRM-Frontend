import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['Software', 'Financial', 'Government', 'Consulting', 'Health', 'Hospitality', 'Real Estate'],
  datasets: [
    {
      label: 'Top Industries',
      backgroundColor: ['#758398', '#4B5A66', '#849DB3', '#687B8C', '#4B5A66', '#7B929A', '#A5C4CF'],
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      data: [70, 40, 65, 81, 56, 55, 30, 5]
    }
  ]
};

function BarChart () {
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
export default BarChart;