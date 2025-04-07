import PropTypes from 'prop-types'

function Loading() {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>Loading products...</p>
    </div>
  )
}

Loading.propTypes = {
  message: PropTypes.string,
}

export default Loading