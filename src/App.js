import logo from './logo.svg';
import './App.css';
import Layout from './components/layout/Layout';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/home/home/Home';
import ProductDetails from './components/home/products/productdetails/ProductDetails';
import ProcessOrder from './components/processOrder/ProcessOrder';
function App() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productDetails/:prodId" element={<ProductDetails />} />
      <Route path="/prosscesOrder" element={<ProcessOrder />} />
    </Routes>

  );
}

export default App;
