import PropTypes from 'prop-types'

function Error({ message }) {
  return (
    <div className="error-container">
      <div className="error-message">
        <h2>Oops! Something went wrong</h2>
        <p>{message}</p>
      </div>
    </div>
  )
}

Error.propTypes = {
  message: PropTypes.string.isRequired,
}

export default Error