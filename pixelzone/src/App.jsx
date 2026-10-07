import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DealsGrid } from './components/DealsGrid';
import { Catalog } from './components/Catalog';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { CartModal } from './components/CartModal';
import { Footer } from './components/Footer';

function App() {
  // Estado para la navegación ('inicio', 'catalogo', 'login', 'registro')
  const [currentView, setCurrentView] = useState('inicio');

  // Estado para el carrito de compras
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Funciones del carrito
  const addToCart = (game) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === game.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === game.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...game, quantity: 1 }];
    });
    setIsCartOpen(true); // Abre el carrito al añadir un producto
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
    } else {
      setCart((prevCart) =>
        prevCart.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
      );
    }
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="bg-dark text-light min-vh-100 d-flex flex-column">
      <Navbar 
        currentView={currentView} 
        setCurrentView={setCurrentView} 
        cartCount={totalCartCount}
        setIsCartOpen={setIsCartOpen}
      />
<CartModal 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cart={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        onNavigateToCatalog={() => setCurrentView('catalogo')}
      />
      <main className="flex-grow-1">
        {currentView === 'inicio' && (
          <>
            <Hero setCurrentView={setCurrentView} />
            <DealsGrid />
          </>
        )}

        {currentView === 'catalogo' && (
          <Catalog addToCart={addToCart} />
        )}

        {currentView === 'login' && <Login />}

        {currentView === 'registro' && <Register />}
      </main>

      <CartModal 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cart={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
      />

      <Footer />
    </div>
  );
}

export default App;