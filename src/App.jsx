import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './components/AboutUs';
import './App.css';

export default function App() {
  const cartItems = useSelector(state => state.cart.items);
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <BrowserRouter>

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">🌿 Paradise Nursery</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">
            Cart 🛒 ({totalCount})
          </Link>
        </div>
      </nav>

      {/* Pages */}
      <Routes>

        {/* Home Page */}
        <Route path="/" element={
          <div className="home">
            <h1>🌿 Paradise Nursery</h1>
            <p>Your one-stop shop for beautiful plants 🌱</p>

            <Link to="/plants">
              <button>Get Started</button>
            </Link>
          </div>
        } />

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