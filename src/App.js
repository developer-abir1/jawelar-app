import logo from './logo.svg';
import './App.css';
import Layout from './components/layout/Layout';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/home/home/Home';
import ProductDetails from './components/home/products/productdetails/ProductDetails';
function App() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product+details/:prodId" element={<ProductDetails />} />
    </Routes>

  );
}

export default App;
