// Fuente de datos e historia de ofertas (Persistencia Local + CRUD)

export const initialGames = [
  { 
    id: 1, 
    title: 'Cyberpunk 2077', 
    store: 'Steam', 
    price: 29990, 
    discount: '-50%', 
    originalPrice: 59990, 
    icon: 'bi-steam', 
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    id: 2, 
    title: 'Elden Ring', 
    store: 'Xbox Store', 
    price: 38990, 
    discount: '-35%', 
    originalPrice: 59990, 
    icon: 'bi-xbox', 
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    id: 3, 
    title: 'Grand Theft Auto V', 
    store: 'Epic Games', 
    price: 12990, 
    discount: '-60%', 
    originalPrice: 32490, 
    icon: 'bi-controller', 
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    id: 4, 
    title: 'Red Dead Redemption 2', 
    store: 'Steam', 
    price: 19990, 
    discount: '-67%', 
    originalPrice: 59990, 
    icon: 'bi-steam', 
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    id: 5, 
    title: 'God of War Ragnarök', 
    store: 'PlayStation', 
    price: 42990, 
    discount: '-30%', 
    originalPrice: 61414, 
    icon: 'bi-playstation', 
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80' 
  }
];

// Obtener catálogo con respaldo automático
export const getStoredGames = () => {
  const data = localStorage.getItem('pixelzone_games');
  if (!data) return initialGames;
  try {
    const parsed = JSON.parse(data);
    return parsed && parsed.length > 0 ? parsed : initialGames;
  } catch (e) {
    return initialGames;
  }
};

// Guardar en almacenamiento local
export const saveGames = (games) => {
  localStorage.setItem('pixelzone_games', JSON.stringify(games));
};

// Función CRUD: Agregar Juego
export const addGameCRUD = (games, newGame) => {
  const updated = [...games, { ...newGame, id: Date.now() }];
  saveGames(updated);
  return updated;
};

// Función CRUD: Eliminar Juego
export const deleteGameCRUD = (games, id) => {
  const updated = games.filter(g => g.id !== id);
  saveGames(updated);
  return updated;
};