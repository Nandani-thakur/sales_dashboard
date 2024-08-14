
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard1 from './components/Dashboard1/Dashboard1';
import Dashboard2 from './components/Dashboard2/Dashboard2';
import Navbar from './components/Navbar/Navbar';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Dashboard1 />} />
      <Route path="/dashboard2" element={<Dashboard2 />} />
    </Routes>
  </Router>
);

export default App;
