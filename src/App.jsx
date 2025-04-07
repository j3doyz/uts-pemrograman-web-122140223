import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Navbar';
import { CartProvider } from './context/CartContext';
import Footer from './components/Footer';
import './styles/main.css';
import './styles/theme.css';

function App() {
  // Set initial theme based on system preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e) => {
      const newTheme = e.matches ? 'dark' : 'light';
      document.body.classList.toggle('dark-mode', e.matches);
      localStorage.setItem('theme', newTheme);
    };

    // Set initial theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.body.classList.toggle('dark-mode', savedTheme === 'dark');
    } else {
      document.body.classList.toggle('dark-mode', mediaQuery.matches);
      localStorage.setItem('theme', mediaQuery.matches ? 'dark' : 'light');
    }

    // Listen for system theme changes
    mediaQuery.addEventListener('change', handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, []);

  return (
    <CartProvider>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<HomePage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;