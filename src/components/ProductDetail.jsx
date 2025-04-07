import { useCart } from '../context/CartContext'
import PropTypes from 'prop-types'

function ProductDetail({ product }) {
  const { addToCart } = useCart()

  return (
    <div className="product-detail">
      <div className="product-detail-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-detail-info">
        <h1>{product.title}</h1>
        <p className="price">${product.price}</p>
        <p className="category">{product.category}</p>
        <p className="description">{product.description}</p>
        <div className="rating">
          Rating: {product.rating.rate} ({product.rating.count} reviews)
        </div>
        <button
          onClick={() => addToCart(product)}
          className="add-to-cart-btn"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

ProductDetail.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
}

export default ProductDetail