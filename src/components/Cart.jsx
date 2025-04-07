import { useCart } from '../context/CartContext'
import PropTypes from 'prop-types'

function Cart() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    totalPrice,
    checkout,
  } = useCart()

  const handleQuantityChange = (id, e) => {
    const newQuantity = parseInt(e.target.value)
    if (newQuantity > 0) {
      updateQuantity(id, newQuantity)
    }
  }

  if (cart.length === 0) {
    return <div className="empty-cart">Your cart is empty</div>
  }

  return (
    <div className="cart">
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.title}</h3>
              <p>${item.price}</p>
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
              <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2>Order Summary</h2>
        <p>Total Items: {cart.reduce((sum, item) => sum + item.quantity, 0)}</p>
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
        <button onClick={checkout} className="checkout-btn">
          Proceed to Checkout
        </button>
      </div>
    </div>
  )
}

Cart.propTypes = {
  cart: PropTypes.array,
  removeFromCart: PropTypes.func,
  updateQuantity: PropTypes.func,
  totalPrice: PropTypes.number,
  checkout: PropTypes.func,
}

export default Cart