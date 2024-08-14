
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import './Dashboard2.css'
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const ComparisonGraph = ({ productData, categoryData }) => {
  const productChartData = {
    labels: productData.map(item => item.product),
    datasets: [
      {
        label: 'Date 1 Sales',
        data: productData.map(item => item.date1SalesAmount),
        backgroundColor: '#36A2EB',
        borderColor: '#36A2EB',
        borderWidth: 1,
      },
      {
        label: 'Date 2 Sales',
        data: productData.map(item => item.date2SalesAmount),
        backgroundColor: '#FF6384',
        borderColor: '#FF6384',
        borderWidth: 1,
      },
    ],
  };

  const categoryChartData = {
    labels: categoryData.map(item => item.category),
    datasets: [
      {
        label: 'Date 1 Sales',
        data: categoryData.map(item => item.date1SalesAmount),
        backgroundColor: '#36A2EB',
        borderColor: '#36A2EB',
        borderWidth: 1,
      },
      {
        label: 'Date 2 Sales',
        data: categoryData.map(item => item.date2SalesAmount),
        backgroundColor: '#FF6384',
        borderColor: '#FF6384',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="comparison-graphs">
      <div className="graph-container">
        <h3>Product-Level Comparison</h3>
        <Bar data={productChartData} options={{ maintainAspectRatio: false }} />
      </div>
      <div className="graph-container">
        <h3>Category-Level Comparison</h3>
        <Bar data={categoryChartData} options={{ maintainAspectRatio: false }} />
      </div>
    </div>
  );
};

export default ComparisonGraph;
