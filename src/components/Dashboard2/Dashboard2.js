

import { useEffect, useState } from 'react';
import ComparisonGraph from './ComparisonGraph';
import ComparisonTable from './ComparisonTable';
import { fetchSalesData } from '../api/salesApi';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Dashboard2.css';

const Dashboard2 = () => {
  const [data, setData] = useState({ products: [], categories: [] });
  const [date1, setDate1] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchSalesData();
      let filteredData = result.comparison;

      // Ensure filteredData is an array or an object with array
      if (filteredData && Array.isArray(filteredData)) {
        
        if (selectedCategory) {
          filteredData = filteredData.filter(item =>
            item.category === selectedCategory
          );
        }

        if (selectedProduct) {
          filteredData = filteredData.filter(item =>
            item.product === selectedProduct
          );
        }

        // Set filtered data
        setData({
          products: filteredData,
          categories: [], // assuming categories are not needed here if filteredData is an array
        });

      } else if (filteredData && typeof filteredData === 'object') {
        // If it's an object, work with the appropriate arrays within it
        if (selectedCategory) {
          filteredData.products = filteredData.products.filter(item =>
            item.category === selectedCategory
          );
        }

        if (selectedProduct) {
          filteredData.products = filteredData.products.filter(item =>
            item.product === selectedProduct
          );
        }

        // Set filtered data
        setData({
          products: filteredData.products || [],
          categories: filteredData.categories || [],
        });

      } else {
        console.error("Unexpected structure for filteredData:", filteredData);
        return;
      }

      // Set categories and products for dropdowns
      const allCategories = [...new Set(result.comparison.categories.map(item => item.category))];
      const allProducts = [...new Set(result.comparison.products.map(item => item.product))];
      setCategories(allCategories);
      setProducts(allProducts);
    };
    fetchData();
  }, [date1, date2, selectedCategory, selectedProduct]);

  // Prepare data for the table with differences calculated
  const preparedData = data.products.map(item => ({
    ...item,
    difference: item.date2SalesAmount - item.date1SalesAmount,
  }));

  return (
    <Container fluid className="dashboard2-container">
      <h2 className="dashboard2-title">Sales Comparison</h2>
      <Row className="mb-4 ">
        <Col md={12} className="mb-3 filter">
          <Card className="dashboard2-card">
            <Card.Body>
              <Card.Title className="card-title">Select Dates</Card.Title>
              <div className="date-picker-container">
                <DatePicker
                  selected={date1}
                  onChange={(date) => setDate1(date)}
                  className="date-picker"
                />
                <DatePicker
                  selected={date2}
                  onChange={(date) => setDate2(date)}
                  className="date-picker"
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} className="mb-3 filter">
          <Card className="dashboard2-card">
            <Card.Body>
              <Card.Title className="card-title">Filters</Card.Title>
              <div className="filter-container">
                <select
                  className="filter-select"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="">Select Category</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <select
                  className="filter-select"
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                >
                  <option value="">Select Product</option>
                  {products.map(product => (
                    <option key={product} value={product}>{product}</option>
                  ))}
                </select>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} className="mb-3">
          <Card className="dashboard2-card">
            <Card.Body>
              <Card.Title className="card-title">Comparison Graphs</Card.Title>
              <ComparisonGraph
                productData={data.products}
                categoryData={data.categories}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col md={12}>
          <Card className="dashboard2-card">
            <Card.Body>
              <Card.Title className="card-title">Comparison Details</Card.Title>
              <ComparisonTable rowData={preparedData} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard2;
