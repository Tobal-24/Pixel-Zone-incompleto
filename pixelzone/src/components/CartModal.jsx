export function CartModal({ 
  isOpen, 
  onClose, 
  cart = [], 
  updateQuantity, 
  removeFromCart, 
  clearCart,
  onNavigateToCatalog
}) {
  if (!isOpen) return null;

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleGoToCatalog = () => {
    onClose();
    if (onNavigateToCatalog) {
      onNavigateToCatalog();
    }
  };

  return (
    <div 
      className="modal show d-block" 
      tabIndex="-1" 
      style={{ backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 1050 }}
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content bg-dark text-light border border-secondary shadow-lg">
          
          {/* Encabezado */}
          <div className="modal-header border-secondary p-3">
            <h5 className="modal-title fw-bold text-primary d-flex align-items-center gap-2">
              <i className="bi bi-cart-check-fill fs-4"></i>
              Tu Carrito de Compras
            </h5>
            <button 
              type="button" 
              className="btn-close btn-close-white" 
              onClick={onClose}
            ></button>
          </div>

          {/* Cuerpo del Modal */}
          <div className="modal-body p-4 text-light">
            {cart.length === 0 ? (
              <div className="text-center py-4">
                <i className="bi bi-cart-x display-1 text-secondary mb-3 d-block"></i>
                <h4 className="fw-bold text-light mb-2">Tu carrito está vacío</h4>
                <p className="text-white-50 mb-4">Agrega productos desde el catálogo para verlos aquí.</p>
                
                {/* Botón para ir al Catálogo directamente */}
                <button 
                  className="btn btn-primary btn-animate fw-bold px-4 py-2"
                  onClick={handleGoToCatalog}
                >
                  <i className="bi bi-controller me-2 fs-5 align-middle"></i>
                  Explorar Catálogo de Juegos
                </button>
              </div>
            ) : (
              <div className="table-responsive">
                <table className="table table-dark table-hover align-middle mb-0">
                  <thead>
                    <tr>
                      <th scope="col">Juego</th>
                      <th scope="col">Precio</th>
                      <th scope="col" className="text-center">Cantidad</th>
                      <th scope="col">Subtotal</th>
                      <th scope="col" className="text-end">Acción</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <div className="d-flex align-items-center gap-3">
                            {item.image && (
                              <img 
                                src={item.image} 
                                alt={item.title} 
                                style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '6px' }}
                              />
                            )}
                            <span className="fw-bold text-white">{item.title}</span>
                          </div>
                        </td>
                        <td className="text-light">${item.price.toLocaleString('es-CL')}</td>
                        <td className="text-center">
                          <div className="btn-group btn-group-sm" role="group">
                            <button 
                              className="btn btn-outline-light btn-animate" 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              -
                            </button>
                            <span className="btn btn-dark disabled border-secondary px-3 fw-bold text-white">
                              {item.quantity}
                            </span>
                            <button 
                              className="btn btn-outline-light btn-animate" 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="fw-bold text-success">
                          ${(item.price * item.quantity).toLocaleString('es-CL')}
                        </td>
                        <td className="text-end">
                          <button 
                            className="btn btn-sm btn-outline-danger btn-animate" 
                            onClick={() => removeFromCart(item.id)}
                            title="Eliminar"
                          >
                            <i className="bi bi-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Pie del Modal */}
          <div className="modal-footer border-secondary justify-content-between p-3">
            {cart.length > 0 ? (
              <>
                <button className="btn btn-outline-danger btn-sm fw-semibold btn-animate" onClick={clearCart}>
                  <i className="bi bi-trash me-1"></i> Vaciar Carrito
                </button>
                <div className="d-flex align-items-center gap-2">
                  <button className="btn btn-outline-light btn-animate me-2" onClick={handleGoToCatalog}>
                    <i className="bi bi-arrow-left me-1"></i> Seguir Comprando
                  </button>
                  <h4 className="mb-0 fw-bold text-white me-2">
                    Total: <span className="text-success">${total.toLocaleString('es-CL')}</span>
                  </h4>
                  <button 
                    className="btn btn-primary fw-bold px-4 btn-animate" 
                    onClick={() => alert('¡Gracias por tu compra en PixelZone!')}
                  >
                    Finalizar Compra
                  </button>
                </div>
              </>
            ) : (
              <button className="btn btn-secondary btn-sm ms-auto" onClick={onClose}>
                Cerrar
              </button>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}