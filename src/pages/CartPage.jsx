import Cart from '../components/Cart'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function CartPage() {
  const { cart } = useCart()

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>
          <h2>Your Cart is Empty</h2>
          <p>Looks like you haven't added any items to your cart yet</p>
          <Link to="/products" className="shop-link">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <Cart />
      )}
    </div>
  )
  
}

export default CartPage