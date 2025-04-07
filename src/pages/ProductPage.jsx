import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import ProductDetail from '../components/ProductDetail'
import Loading from '../components/Loading'
import Error from '../components/Error'

function ProductPage() {
  const { id } = useParams()
  const { data: product, loading, error } = useFetch(
    `https://fakestoreapi.com/products/${id}`
  )

  if (loading) return <Loading />
  if (error) return <Error message={error} />

  return (
    <div className="product-page">
      {product && <ProductDetail product={product} />}
    </div>
  )
}

export default ProductPage