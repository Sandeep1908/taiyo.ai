// src/components/LineChart.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement } from 'chart.js';
 
ChartJS.register(LineElement, CategoryScale,PointElement, LinearScale, Title, Tooltip, Legend);

interface CaseData {
  [key: string]: number;
}

interface LineChartProps {
  data: CaseData;
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  // Convert data for the chart
  const labels = Object.keys(data).sort();
  const values = labels.map(date => data[date]);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Cases',
        data: values,
        fill: false,
        borderColor: '#4bc0c0',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className=' w-full max-w-7xl   bg-white p-3'>
     
      <Line className='w-full' key={1} data={chartData} color='#fff' />
    </div>
  );
};

export default LineChart;
