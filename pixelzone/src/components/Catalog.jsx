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
                
                <div className="card-img-container bg-black position-relative d-flex align-items-center justify-content-center" style={{ height: '210px' }}>
                  <img 
                    src={game.image} 
                    className="card-img-top w-100 h-100" 
                    alt={game.title} 
                    style={{ objectFit: 'contain', padding: '6px' }}
                  />
                  <span className="position-absolute top-0 end-0 m-3 badge bg-danger fs-6 badge-pulse">
                    {game.discount}
                  </span>
                </div>

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