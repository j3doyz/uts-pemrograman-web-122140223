import { useCart } from '../context/CartContext';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

function Cart() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    totalPrice,
    checkout,
    notification,
  } = useCart();

  const [showAddedBadge, setShowAddedBadge] = useState(false);
  const [addedItem, setAddedItem] = useState(null);

  // Show badge when new item is added
  useEffect(() => {
    if (notification && notification.includes('added to cart')) {
      const itemTitle = notification.replace(' added to cart!', '');
      const addedItem = cart.find(item => item.title === itemTitle);
      
      if (addedItem) {
        setAddedItem(addedItem);
        setShowAddedBadge(true);
        
        const timer = setTimeout(() => {
          setShowAddedBadge(false);
        }, 2000); // Hide after 2 seconds
        
        return () => clearTimeout(timer);
      }
    }
  }, [notification, cart]);

  const handleQuantityChange = (id, e) => {
    const newQuantity = parseInt(e.target.value);
    if (newQuantity > 0) {
      updateQuantity(id, newQuantity);
    }
  };

  if (cart.length === 0) {
    return <div className="empty-cart">Your cart is empty</div>;
  }

  return (
    <div className="cart">
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.title}</h3>
              <p>${item.price.toFixed(2)}</p>
              <div className="quantity-control">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, e)}
                  className="quantity-input"
                />
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="remove-btn"
                >
                  Remove
                </button>
              </div>
              <p>Item Total: ${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2>Order Summary</h2>
        <div className="summary-row">
          <span>Subtotal</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span>Shipping</span>
          <span>FREE</span>
        </div>
        <div className="summary-row">
          <span>Tax</span>
          <span>${(totalPrice * 0.1).toFixed(2)}</span>
        </div>
        <div className="summary-total">
          <span>Total</span>
          <span>${(totalPrice * 1.1).toFixed(2)}</span>
        </div>
        <button onClick={checkout} className="checkout-btn">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

Cart.propTypes = {
  cart: PropTypes.array,
  removeFromCart: PropTypes.func,
  updateQuantity: PropTypes.func,
  totalPrice: PropTypes.number,
  checkout: PropTypes.func,
  notification: PropTypes.string,
};

export default Cart;