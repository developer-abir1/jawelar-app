import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/home/home/Home';
import ProductDetails from './components/home/products/productdetails/ProductDetails';
import ProcessOrder from './components/processOrder/ProcessOrder';
import Login from './components/Login/Login/Login';
function App() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productDetails/:prodId" element={<ProductDetails />} />
      <Route path="/prosscesOrder" element={<ProcessOrder />} />
      <Route path="/login" element={<Login />} />
    </Routes>

  );
}

export default App;
