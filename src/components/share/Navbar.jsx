import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/icon/logo.png"
import { getStoreCart } from '../utility/localStorege';
import useProduct from '../utility/useProduct';


const Navbar = () => {
  const [products,] = useProduct();

  const [cart, setCart] = useState([])
  const [lodding, setLodding] = useState(false)

  let totalQuantity = 0;
  for (const prod of cart)
  {


    if (!prod.quantity)
    {
      prod.quantity = 1
    }



    totalQuantity = totalQuantity + prod.quantity


  }



  useEffect(() => {


    if (products.length)
    {
      const saveCart = getStoreCart()
      const storedCart = []
      for (const key in saveCart)
      {

        const addedProduct = products.find(pd => pd._id === key)
        if (addedProduct)
        {
          const quantity = saveCart[key]
          addedProduct.quantity = quantity

        }
        storedCart.push(addedProduct)

      }
      setCart(storedCart)

    }
  }, [products]);
  if (totalQuantity.length > 0)
  {
    setLodding(true);
  }

  return (
    <nav className="navbar navbar-expand-lg bg-dark p-0   fixed-top">
      <div className="container">
        <Link to="/" className=" text-decoration-none">  <a className="navbar-brand d-flex align-items-center justify-content-center"  >
          <img style={{ height: "50px" }} src={logo} alt="" />

          <span className="fw-bold  text-danger">নারী</span>
        </a></Link>
        <button className="navbar-toggler " style={{ backgroundColor: "darkcyan" }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon   "></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto ">
            <Link to="/" className=" text-decoration-none">  <span className="nav-link active text-white"  >Home</span> </Link>
            <span className="nav-link text-white"  >Features</span>


            <Link to="/prosscesOrder" className=" text-decoration-none">   <span className="nav-link text-white">  <span>Cart</span> <span className=" rounded-circle p-1   bg-danger">{totalQuantity}</span> </span></Link>
            <span className="nav-link text-white"  >Login</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;