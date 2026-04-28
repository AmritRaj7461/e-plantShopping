import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './components/AboutUs';
import './App.css';

export default function App() {
  const cartItems = useSelector(state => state.cart.items);
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const [showProductList, setShowProductList] = useState(false);

  return (
    <BrowserRouter>

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">🌿 Paradise Nursery</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/about">About</Link> {/* ✅ ADDED */}
          <Link to="/cart">Cart ({totalCount})</Link>
        </div>
      </nav>

      <Routes>

        {/* Home Page */}
        <Route
          path="/"
          element={
            <div className="background-image">
              <div className="home">

                {/* REQUIRED EXACT TEXT */}
                <h1>Welcome to Paradise Nursery</h1>

                <p>Your one-stop shop for beautiful plants 🌱</p>

                <Link to="/plants">
                  <button onClick={() => setShowProductList(true)}>
                    Get Started
                  </button>
                </Link>

              </div>
            </div>
          }
        />

        {/* About Page */}
        <Route path="/about" element={<AboutUs />} />

        {/* Product Page */}
        <Route path="/plants" element={<ProductList />} />

        {/* Cart Page */}
        <Route path="/cart" element={<CartItem />} />

      </Routes>

    </BrowserRouter>
  );
}