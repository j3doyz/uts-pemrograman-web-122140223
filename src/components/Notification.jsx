import { useCart } from '../context/CartContext'
import PropTypes from 'prop-types'
import '../styles/main.css'

function Notification() {
  const { notification } = useCart()

  if (!notification) return null

  return (
    <div className="notification">
      <div className="notification-content">
        <p>{notification}</p>
      </div>
    </div>
  )
}

Notification.propTypes = {
  message: PropTypes.string,
}

export default Notification