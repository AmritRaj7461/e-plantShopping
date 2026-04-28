import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQty, decreaseQty } from '../redux/CartSlice';
import { Link } from 'react-router-dom';
import './Cart.css';

export default function CartItem() {
    const items = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

    return (
        <div className="cart-page">
            <h2>🛒 Shopping Cart</h2>

            {items.length === 0 ? (
                <div className="empty">
                    <p>Your cart is empty 😢</p>
                    <Link to="/plants">
                        <button className="btn">Continue Shopping</button>
                    </Link>
                </div>
            ) : (
                <>
                    {items.map(i => (
                        <div className="cart-card" key={i.id}>
                            <img src={i.img} alt={i.name} />

                            <div className="cart-info">
                                <h3>{i.name}</h3>
                                <p>Price: ₹{i.price}</p>
                                <p>Total: ₹{i.price * i.quantity}</p>

                                <div className="qty">
                                    <button onClick={() => dispatch(decreaseQty(i.id))}>-</button>
                                    <span>{i.quantity}</span>
                                    <button onClick={() => dispatch(increaseQty(i.id))}>+</button>
                                </div>
                            </div>

                            <button
                                className="delete"
                                onClick={() => dispatch(removeFromCart(i.id))}
                            >
                                ❌
                            </button>
                        </div>
                    ))}

                    <h3 className="total">Total Amount: ₹{total}</h3>

                    <div className="cart-actions">
                        <button className="btn" onClick={() => alert("Coming Soon 🚀")}>
                            Checkout
                        </button>

                        <Link to="/plants">
                            <button className="btn secondary">Continue Shopping</button>
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
}