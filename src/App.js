import logo from './logo.svg';
import './App.css';
import Layout from './components/layout/Layout';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/home/home/Home';
function App() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />

    </Routes>

  );
}

export default App;
