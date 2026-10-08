import { useState } from 'react';
import './styles/App.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DealsGrid } from './components/DealsGrid';
import { Catalog } from './components/Catalog';
import { Checkout } from './components/Checkout';
import { CheckoutSuccess } from './components/CheckoutSuccess';
import { AdminDashboard } from './components/AdminDashboard';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { CartModal } from './components/CartModal';
import { Footer } from './components/Footer';
import { getStoredGames, addGameCRUD, deleteGameCRUD } from './data/gamesData';

export default function App() {
  const [currentView, setCurrentView] = useState('inicio');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [games, setGames] = useState(getStoredGames());
  
  // Estado de Usuario y Última Orden realizada
  const [user, setUser] = useState(null);
  const [lastOrder, setLastOrder] = useState(null);

  // Gestión del Carrito
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  // Operaciones CRUD de Juegos (Administrador)
  const handleAddGame = (newGame) => {
    const updated = addGameCRUD(games, newGame);
    setGames(updated);
  };

  const handleDeleteGame = (id) => {
    const updated = deleteGameCRUD(games, id);
    setGames(updated);
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="d-flex flex-column min-vh-100 bg-dark text-light">
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        cartCount={totalCartCount}
        setIsCartOpen={setIsCartOpen}
        user={user}
        setUser={setUser}
      />

      <main className="flex-grow-1">
        {currentView === 'inicio' && (
          <>
            <Hero setCurrentView={setCurrentView} />
            <DealsGrid />
          </>
        )}

       {currentView === 'catalogo' && (
  <Catalog games={games} addToCart={addToCart} />
)}

        {currentView === 'checkout' && (
          <Checkout
            cart={cart}
            clearCart={clearCart}
            setCurrentView={setCurrentView}
          />
        )}

        {currentView === 'compra-exitosa' && (
          <CheckoutSuccess 
            orderData={lastOrder} 
            setCurrentView={setCurrentView} 
          />
        )}

        {currentView === 'admin' && (
          <AdminDashboard
            games={games}
            onAddGame={handleAddGame}
            onDeleteGame={handleDeleteGame}
          />
        )}

        {currentView === 'login' && (
          <Login 
            setCurrentView={setCurrentView} 
            setUser={setUser} 
          />
        )}

        {currentView === 'registro' && (
          <Register 
            setCurrentView={setCurrentView} 
            setUser={setUser} 
          />
        )}
      </main>

      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        removeFromCart={removeFromCart}
        setCurrentView={setCurrentView}
        user={user}
        setLastOrder={setLastOrder}
        clearCart={clearCart}
      />

      <Footer />
    </div>
  );
}