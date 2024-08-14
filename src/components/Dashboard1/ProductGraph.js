
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const ProductGraph = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.product),
    datasets: [{
      label: 'Sales Amount',
      data: data.map(item => item.salesAmount),
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  };

  return <Bar data={chartData} />;
};
export default ProductGraph;