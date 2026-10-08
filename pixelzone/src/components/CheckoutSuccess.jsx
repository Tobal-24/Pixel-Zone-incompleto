import React from 'react';

export function CheckoutSuccess({ orderData, setCurrentView }) {
  const defaultData = {
    orderNum: '20240705',
    orderCode: 'ORDER12345',
    nombre: 'pedro',
    apellidos: 'hacker',
    correo: 'pedro.hacker20@example.com',
    calle: 'Los crisantemos, Edificio Norte',
    depto: 'Depto 603',
    region: 'Región Metropolitana de Santiago',
    comuna: 'Cerrillos',
    indicaciones: 'El martes no estaremos en el depto, pero puede dejarselo con el conserje.',
    items: [
      { name: 'Fortnite', price: 0, quantity: 1 },
      { name: 'Minecraft', price: 2695, quantity: 4 },
      { name: 'Red Dead Redemption 2', price: 5999, quantity: 1 }
    ]
  };

  const data = orderData || defaultData;
  const totalPaid = data.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="container py-5 text-dark">
      <div className="card shadow-lg p-4 bg-light mx-auto border-0" style={{ maxWidth: '850px', borderRadius: '12px' }}>
        
        {/* Encabezado con número de orden */}
        <div className="d-flex justify-content-between align-items-center mb-2 border-bottom pb-3">
          <h5 className="text-success fw-bold m-0 d-flex align-items-center gap-2">
            <i className="bi bi-check-circle fs-4"></i>
            Se ha realizado la compra. nro #{data.orderNum}
          </h5>
          <span className="text-muted small">Código orden: {data.orderCode}</span>
        </div>

        <p className="text-muted small mb-3">Información de la compra realizada</p>

        {/* Información personal */}
        <div className="row g-2 mb-3">
          <div className="col-md-4">
            <label className="form-label small text-muted mb-1">Nombre*</label>
            <input type="text" className="form-control form-control-sm bg-white" value={data.nombre} readOnly />
          </div>
          <div className="col-md-4">
            <label className="form-label small text-muted mb-1">Apellidos*</label>
            <input type="text" className="form-control form-control-sm bg-white" value={data.apellidos} readOnly />
          </div>
          <div className="col-md-4">
            <label className="form-label small text-muted mb-1">Correo*</label>
            <input type="email" className="form-control form-control-sm bg-white" value={data.correo} readOnly />
          </div>
        </div>

        {/* Dirección de entrega */}
        <h6 className="fw-bold mt-2 mb-2 text-dark">Dirección de entrega de los productos</h6>
        <div className="row g-2 mb-3">
          <div className="col-md-7">
            <label className="form-label small text-muted mb-1">Calle*</label>
            <input type="text" className="form-control form-control-sm bg-white" value={data.calle} readOnly />
          </div>
          <div className="col-md-5">
            <label className="form-label small text-muted mb-1">Departamento (opcional)</label>
            <input type="text" className="form-control form-control-sm bg-white" value={data.depto || 'N/A'} readOnly />
          </div>
          <div className="col-md-6">
            <label className="form-label small text-muted mb-1">Región*</label>
            <input type="text" className="form-control form-control-sm bg-white" value={data.region} readOnly />
          </div>
          <div className="col-md-6">
            <label className="form-label small text-muted mb-1">Comuna*</label>
            <input type="text" className="form-control form-control-sm bg-white" value={data.comuna} readOnly />
          </div>
        </div>

        {/* Indicaciones de entrega */}
        <div className="mb-4">
          <label className="form-label small text-muted mb-1">Indicaciones para la entrega (opcional)</label>
          <textarea className="form-control form-control-sm bg-white" rows="2" value={data.indicaciones || 'Sin indicaciones especiales.'} readOnly />
        </div>

        {/* Tabla resumen de artículos */}
        <div className="table-responsive mb-3">
          <table className="table table-sm align-middle text-center mb-0">
            <thead>
              <tr className="table-secondary text-dark">
                <th>Imagen</th>
                <th className="text-start">Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {data.items.map((item, index) => (
                <tr key={index}>
                  <td>
                    <div className="bg-secondary rounded mx-auto" style={{ width: '36px', height: '24px' }}></div>
                  </td>
                  <td className="text-start fw-semibold">{item.name || item.title}</td>
                  <td>$ {item.price.toLocaleString('es-CL')}</td>
                  <td>{item.quantity}</td>
                  <td>$ {(item.price * item.quantity).toLocaleString('es-CL')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Total pagado */}
        <div className="bg-white border rounded text-center py-2 mb-4 shadow-sm">
          <h5 className="fw-bold m-0 text-dark">Total pagado: $ {totalPaid.toLocaleString('es-CL')}</h5>
        </div>

        {/* Botones de acción final */}
        <div className="d-flex justify-content-center gap-2">
          <button className="btn btn-danger btn-sm px-3" onClick={() => window.print()}>
            Imprimir boleta en PDF
          </button>
          <button className="btn btn-success btn-sm px-3" onClick={() => alert(`Boleta enviada exitosamente a ${data.correo}`)}>
            Enviar boleta por email
          </button>
          <button className="btn btn-outline-dark btn-sm px-3" onClick={() => setCurrentView('inicio')}>
            Volver al inicio
          </button>
        </div>

      </div>
    </div>
  );
}