import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import PropTypes from 'prop-types'

function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price}</p>
      </Link>
      <button
        onClick={() => addToCart(product)}
        className="add-to-cart-btn"
      >
        Add to Cart
      </button>
    </div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
}

export default ProductCard