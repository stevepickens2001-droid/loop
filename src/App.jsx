import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.css';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Cars from './pages/Cars/Cars';
import CarDetail from './pages/CarDetail/CarDetail';
import Booking from './pages/Booking/Booking';
import Management from './pages/Management/Management';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/cars/:id" element={<CarDetail />} />
          <Route path="/book/:id" element={<Booking />} />
          <Route path="/manage" element={<Management />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
