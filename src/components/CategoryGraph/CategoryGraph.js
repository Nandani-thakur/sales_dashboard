
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './CategoryGraph.css'; 

// Register the required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const CategoryGraph = ({ data }) => {
  // Handle case where data might be empty or not properly structured
  if (!data || data.length === 0) {
    return <p className="no-data-message">No category data available</p>; // Modern placeholder
  }

  const chartData = {
    labels: data.map(item => item.category), 
    datasets: [
      {
        data: data.map(item => item.salesAmount), 
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'], // Colors for slices
        borderColor: '#fff', 
        borderWidth: 1, 
      },
    ],
  };

  return (
    <div className="category-graph-container">
      
      <div className="chart-wrapper">
        <Pie 
          data={chartData} 
          options={{
            responsive: true,
            maintainAspectRatio: false, 
            plugins: {
              legend: {
                position: 'top',
                labels: {
                  color: '#333', 
                  font: {
                    size: 12 
                  }
                }
              },
              tooltip: {
                callbacks: {
                  label: function(tooltipItem) {
                    return `${tooltipItem.label}: $${tooltipItem.raw}`;
                  }
                }
              }
            }
          }} 
        />
      </div>
    </div>
  );
};

export default CategoryGraph;
