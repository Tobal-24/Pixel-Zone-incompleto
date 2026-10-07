import { useState } from 'react';

export function Catalog({ addToCart }) {
  const [games] = useState([
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
      price: 44990, 
      discount: '-25%', 
      originalPrice: 59990, 
      icon: 'bi-playstation',
      image: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=600&q=80' 
    },
    { 
      id: 6, 
      title: 'EA SPORTS FC 25', 
      store: 'Xbox Store', 
      price: 29990, 
      discount: '-50%', 
      originalPrice: 59990, 
      icon: 'bi-xbox',
      image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80' 
    },
    { 
      id: 7, 
      title: 'The Witcher 3: Wild Hunt', 
      store: 'Steam', 
      price: 9990, 
      discount: '-75%', 
      originalPrice: 39990, 
      icon: 'bi-steam',
      image: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=600&q=80' 
    },
    { 
      id: 8, 
      title: "Spider-Man Remastered", 
      store: 'PlayStation', 
      price: 34990, 
      discount: '-40%', 
      originalPrice: 57990, 
      icon: 'bi-playstation',
      image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80' 
    },
    { 
      id: 9, 
      title: 'Starfield', 
      store: 'Xbox Store', 
      price: 32990, 
      discount: '-45%', 
      originalPrice: 59990, 
      icon: 'bi-xbox',
      image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=600&q=80' 
    },
    { 
      id: 10, 
      title: 'Resident Evil 4 Remake', 
      store: 'Epic Games', 
      price: 24990, 
      discount: '-50%', 
      originalPrice: 49990, 
      icon: 'bi-controller',
      image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80' 
    }
  ]);

  return (
    <section className="py-5 bg-dark text-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-4 display-6">
          <i className="bi bi-controller text-primary me-2"></i>Catálogo Destacado
        </h2>
        
        <div className="row g-4">
          {games.map((game) => (
            <div key={game.id} className="col-12 col-md-6 col-lg-4">
              <div className="card game-card bg-secondary bg-opacity-10 text-light h-100 shadow">
                
                {/* Portada con Zoom Panorámico */}
                <div className="card-img-container">
                  <img 
                    src={game.image} 
                    className="card-img-top" 
                    alt={game.title} 
                    style={{ height: '210px', objectFit: 'cover' }}
                  />
                  <span className="position-absolute top-0 end-0 m-3 badge bg-danger fs-6 badge-pulse">
                    {game.discount}
                  </span>
                </div>

                {/* Detalles de la tarjeta */}
                <div className="card-body d-flex flex-column justify-content-between p-4">
                  <div>
                    <div className="d-flex align-items-center mb-2 text-primary small fw-semibold store-tag">
                      <i className={`bi ${game.icon} me-2 fs-5`}></i>
                      <span>{game.store}</span>
                    </div>
                    <h4 className="card-title fw-bold text-white mb-3">{game.title}</h4>
                    
                    <div className="d-flex align-items-baseline mb-3">
                      <span className="fs-3 fw-bold text-success me-2">
                        ${game.price.toLocaleString('es-CL')}
                      </span>
                      <span className="text-muted text-decoration-line-through small">
                        ${game.originalPrice.toLocaleString('es-CL')}
                      </span>
                    </div>
                  </div>

                  {/* Botón con ráfaga de brillo */}
                  <button 
                    className="btn btn-primary btn-animate w-100 fw-bold d-flex align-items-center justify-content-center gap-2 mt-2"
                    onClick={() => addToCart(game)}
                  >
                    <i className="bi bi-cart-plus-fill fs-5"></i> Añadir al Carrito
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}