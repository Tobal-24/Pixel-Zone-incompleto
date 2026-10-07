export function Navbar({ currentView, setCurrentView, cartCount, setIsCartOpen }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow border-bottom border-secondary">
      <div className="container">
        <button 
          className="navbar-brand btn btn-link text-primary fw-bold fs-3 text-decoration-none p-0"
          onClick={() => setCurrentView('inicio')}
        >
          <i className="bi bi-controller me-2"></i>PixelZone
        </button>

        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto me-3 align-items-center">
            <li className="nav-item">
              <button 
                className={`nav-link btn btn-link text-decoration-none ${currentView === 'inicio' ? 'active fw-bold text-primary' : ''}`}
                onClick={() => setCurrentView('inicio')}
              >
                Inicio
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link btn btn-link text-decoration-none ${currentView === 'catalogo' ? 'active fw-bold text-primary' : ''}`}
                onClick={() => setCurrentView('catalogo')}
              >
                Catálogo
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link btn btn-link text-decoration-none ${currentView === 'login' ? 'active fw-bold text-primary' : ''}`}
                onClick={() => setCurrentView('login')}
              >
                Iniciar Sesión
              </button>
            </li>
          </ul>

          <div className="d-flex gap-2 align-items-center mt-2 mt-lg-0">
            <button 
              className={`btn btn-outline-primary btn-sm ${currentView === 'registro' ? 'active' : ''}`}
              onClick={() => setCurrentView('registro')}
            >
              Registrarse
            </button>

            {/* Botón del Carrito */}
            <button 
              className="btn btn-warning position-relative ms-2 fw-semibold"
              onClick={() => setIsCartOpen(true)}
            >
              <i className="bi bi-cart-fill me-1"></i> Carrito
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}