import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import ProductCard from '../components/ProductCard'
import Loading from '../components/Loading'
import Error from '../components/Error'

function HomePage() {
  const [category, setCategory] = useState('all')
  const navigate = useNavigate()
  const { data: products, loading, error } = useFetch(
    'https://fakestoreapi.com/products'
  )

  const categories = [
    'all',
    'electronics',
    'jewelery',
    "men's clothing",
    "women's clothing",
  ]

  const filteredProducts =
    category === 'all'
      ? products
      : products?.filter((product) => product.category === category)

  if (loading) return <Loading />
  if (error) return <Error message={error} />

  return (
    <div className="home-page">
      <div className="category-filter">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`category-btn ${category === cat ? 'active' : ''}`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
      <div className="products-grid">
        {filteredProducts?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default HomePage