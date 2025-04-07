import { useCart } from '../context/CartContext';

function Notification() {
  const { notification, isVisible } = useCart();

  if (!notification) return null;

  return (
    <div className={`notification ${isVisible ? 'show' : 'hide'}`}>
      <div className="notification-content">
        <p>{notification}</p>
      </div>
    </div>
  );
}

export default Notification;