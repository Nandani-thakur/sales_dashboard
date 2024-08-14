
import { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ProductGraph from './ProductGraph';
import SalesTable from './SalesTable';
import CategoryGraph from '../CategoryGraph/CategoryGraph';
import { fetchSalesData } from '../api/salesApi';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard1.css'; 

const Dashboard1 = () => {
  const [data, setData] = useState({ products: [], categories: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchSalesData();
      setData(result.today); // Use `result.today` to match simulated data structure
    };
    fetchData();
  }, []);

  return (
    <Container fluid className="dashboard-container">
      <h2 className="dashboard-title">Today's Sales Overview</h2>
      <Row className="mb-4">
        <Col md={6} className="mb-3">
          <Card className="dashboard-card">
            <Card.Body>
              <Card.Title className="card-title">Product Sales</Card.Title>
              <ProductGraph data={data.products} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-3">
          <Card className="dashboard-card">
            <Card.Body>
              <Card.Title className="card-title">Sales by Category</Card.Title>
              <CategoryGraph data={data.categories} /> 
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="dashboard-card">
            <Card.Body>
              <Card.Title className="card-title">Sales Details</Card.Title>
              <SalesTable rowData={data.products} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard1;
