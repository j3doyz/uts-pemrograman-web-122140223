import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import NotFoundPage from './pages/NotFoundPage'
import Navbar from './components/Navbar'
import Notification from './components/Notification'
import { CartProvider } from './context/CartContext'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.body.classList.toggle('dark-mode')
  }

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <CartProvider>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Notification />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<HomePage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </CartProvider>
    </div>
  )
}

export default App