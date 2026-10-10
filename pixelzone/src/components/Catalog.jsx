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
      image: '/juegos/cyberpunk.jpg' 
    },
    { 
      id: 2, 
      title: 'Elden Ring', 
      store: 'Xbox Store', 
      price: 38990, 
      discount: '-35%', 
      originalPrice: 59990, 
      icon: 'bi-xbox',
      image: '/juegos/eldenring.png' 
    },
    { 
      id: 3, 
      title: 'Grand Theft Auto V', 
      store: 'Epic Games', 
      price: 12990, 
      discount: '-60%', 
      originalPrice: 32490, 
      icon: 'bi-controller',
      image: '/juegos/gtaV.png' 
    },
    { 
      id: 4, 
      title: 'Red Dead Redemption 2', 
      store: 'Steam', 
      price: 19990, 
      discount: '-67%', 
      originalPrice: 59990, 
      icon: 'bi-steam',
      image: '/juegos/rdr2.png' 
    },
    { 
      id: 5, 
      title: 'God of War Ragnarök', 
      store: 'PlayStation', 
      price: 44990, 
      discount: '-25%', 
      originalPrice: 59990, 
      icon: 'bi-playstation',
      image: '/juegos/gowragnarok.png' 
    },
    { 
      id: 6, 
      title: 'EA SPORTS FC 25', 
      store: 'Xbox Store', 
      price: 29990, 
      discount: '-50%', 
      originalPrice: 59990, 
      icon: 'bi-xbox',
      image: '/juegos/fifa.jpg' 
    },
    { 
      id: 7, 
      title: 'The Witcher 3: Wild Hunt', 
      store: 'Steam', 
      price: 9990, 
      discount: '-75%', 
      originalPrice: 39990, 
      icon: 'bi-steam',
      image: '/juegos/witcher.png' 
    },
    { 
      id: 8, 
      title: 'Spider-Man Remastered', 
      store: 'PlayStation', 
      price: 34990, 
      discount: '-40%', 
      originalPrice: 57990, 
      icon: 'bi-playstation',
      image: '/juegos/spiderman.jpg' 
    },
    { 
      id: 9, 
      title: 'Starfield', 
      store: 'Xbox Store', 
      price: 32990, 
      discount: '-45%', 
      originalPrice: 59990, 
      icon: 'bi-xbox',
      image: '/juegos/starfield.png' 
    },
    { 
      id: 10, 
      title: 'Resident Evil 4 Remake', 
      store: 'Epic Games', 
      price: 24990, 
      discount: '-50%', 
      originalPrice: 49990, 
      icon: 'bi-controller',
      image: '/juegos/residentevil4.jpg' 
    },
    { 
      id: 11, 
      title: 'Cuphead', 
      store: 'Steam', 
      price: 10990, 
      discount: '-30%', 
      originalPrice: 15990, 
      icon: 'bi-steam',
      image: '/juegos/cuphead.png' 
    },
    { 
      id: 12, 
      title: 'Dying Light', 
      store: 'Steam', 
      price: 14990, 
      discount: '-70%', 
      originalPrice: 49990, 
      icon: 'bi-steam',
      image: '/juegos/dyinglight.jpg' 
    },
    { 
      id: 13, 
      title: 'Grand Theft Auto IV', 
      store: 'Steam', 
      price: 7990, 
      discount: '-65%', 
      originalPrice: 22990, 
      icon: 'bi-steam',
      image: '/juegos/gta 4.png' 
    },
    { 
      id: 14, 
      title: 'Hogwarts Legacy', 
      store: 'Epic Games', 
      price: 29990, 
      discount: '-40%', 
      originalPrice: 49990, 
      icon: 'bi-controller',
      image: '/juegos/harrypotter.jpg' 
    },
    { 
      id: 15, 
      title: 'Sons of the Forest', 
      store: 'Steam', 
      price: 14990, 
      discount: '-25%', 
      originalPrice: 19990, 
      icon: 'bi-steam',
      image: '/juegos/sonsoftheforest.jpg' 
    },
    { 
      id: 16, 
      title: 'Terraria', 
      store: 'Steam', 
      price: 5990, 
      discount: '-50%', 
      originalPrice: 11990, 
      icon: 'bi-steam',
      image: '/juegos/terraria.jpg' 
    },
    { 
      id: 17, 
      title: 'The Forest', 
      store: 'Steam', 
      price: 4990, 
      discount: '-75%', 
      originalPrice: 19990, 
      icon: 'bi-steam',
      image: '/juegos/theforest.png' 
    },
    { 
      id: 18, 
      title: 'Minecraft', 
      store: 'Xbox Store', 
      price: 14990, 
      discount: '-25%', 
      originalPrice: 19990, 
      icon: 'bi-xbox',
      image: '/juegos/minecraft.jpg' 
    },
    { 
      id: 19, 
      title: 'Outlast', 
      store: 'Steam', 
      price: 3990, 
      discount: '-80%', 
      originalPrice: 19990, 
      icon: 'bi-steam',
      image: '/juegos/outlast.jpg' 
    },
    { 
      id: 20, 
      title: 'Outlast 2', 
      store: 'Steam', 
      price: 5990, 
      discount: '-75%', 
      originalPrice: 23990, 
      icon: 'bi-steam',
      image: '/juegos/outlast2.jpg' 
    },
    { 
      id: 21, 
      title: 'The Outlast Trials', 
      store: 'Steam', 
      price: 18990, 
      discount: '-33%', 
      originalPrice: 28340, 
      icon: 'bi-steam',
      image: '/juegos/outlast3.jpg' 
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
              <div className="card game-card bg-secondary bg-opacity-10 text-light h-100 shadow overflow-hidden">
                
                <div className="mt-3">
                  <div className="d-flex align-items-baseline gap-2 mb-2">
                    <span className="fs-4 fw-bold" style={{ color: '#00ff88' }}>
                      ${game.price.toLocaleString('es-CL')}
                    </span>
                    {game.originalPrice && (
                      <span className="text-light text-decoration-line-through small opacity-75">
                        ${game.originalPrice.toLocaleString('es-CL')}
                      </span>
                    )}
                  </div>

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