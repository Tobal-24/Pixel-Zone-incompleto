import { useState } from 'react';

export function DealsGrid() {
  const [deals] = useState([
    { 
      id: 1, 
      store: 'Steam Store', 
      discount: '-30%', 
      badgeColor: 'bg-primary', 
      image: '/plataformas/steam.jpg' 
    },
    { 
      id: 2, 
      store: 'Epic Games', 
      discount: '-40%', 
      badgeColor: 'bg-info text-dark', 
      image: '/plataformas/epicgames.jpg' 
    },
    { 
      id: 3, 
      store: 'Xbox Deals', 
      discount: '-60%', 
      badgeColor: 'bg-success', 
      image: '/plataformas/xbox transparent.jpg' 
    },
    { 
      id: 4, 
      store: 'Oferta Relámpago', 
      discount: '-90%', 
      badgeColor: 'bg-danger', 
      image: '/plataformas/thnder transparent.jpg' 
    }
  ]);

  return (
    <section className="py-5 bg-dark text-light">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold">
          <i className="bi bi-fire text-warning me-2"></i>Descuentos Activos en Tiempo Real!
        </h2>
        <div className="row g-4">
          {deals.map((deal) => (
            <div key={deal.id} className="col-12 col-sm-6 col-md-3">
              <div className="card h-100 bg-secondary bg-opacity-10 border-secondary text-center p-3 shadow-sm">
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                  
                  {/* Contenedor ajustado para las imágenes */}
                  <div 
                    className="d-flex align-items-center justify-content-center mb-3 rounded-3 overflow-hidden bg-black bg-opacity-20 p-2 shadow-sm"
                    style={{ width: '60px', height: '60px' }}
                  >
                    <img 
                      src={deal.image} 
                      alt={deal.store} 
                      className="rounded-2"
                      style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} 
                    />
                  </div>

                  <span className={`badge ${deal.badgeColor} fs-4 mb-2`}>
                    {deal.discount}
                  </span>
                  <p className="card-text text-light fw-medium mb-0">{deal.store}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 