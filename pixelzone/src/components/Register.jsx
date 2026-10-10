import React, { useState } from 'react';

export function Register({ setCurrentView, setUser }) {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    correo: '',
    calle: '',
    depto: '',
    region: '',
    comuna: '',
    indicaciones: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Guardar los datos ingresados por el usuario
    setUser(formData);
    alert(`¡Cuenta creada con éxito! Bienvenido ${formData.nombre}.`);
    setCurrentView('catalogo');
  };

  return (
    <div className="container py-5 text-light">
      <div className="card bg-secondary text-light p-4 mx-auto shadow" style={{ maxWidth: '600px', borderRadius: '12px' }}>
        <h3 className="text-info fw-bold mb-4 text-center">
          <i className="bi bi-person-plus-fill me-2"></i>Registro de Cliente
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="row g-2 mb-3">
            <div className="col-md-6">
              <label className="form-label small">Nombre*</label>
              <input 
                type="text" 
                name="nombre" 
                className="form-control" 
                required 
                placeholder="Ej: Pedro" 
                value={formData.nombre}
                onChange={handleChange} 
              />
            </div>
            <div className="col-md-6">
              <label className="form-label small">Apellidos*</label>
              <input 
                type="text" 
                name="apellidos" 
                className="form-control" 
                required 
                placeholder="Ej: Hacker" 
                value={formData.apellidos}
                onChange={handleChange} 
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label small">Correo Electrónico*</label>
            <input 
              type="email" 
              name="correo" 
              className="form-control" 
              required 
              placeholder="Ej: pedro.hacker20@example.com" 
              value={formData.correo}
              onChange={handleChange} 
            />
          </div>

          <h6 className="fw-bold text-info mt-4 mb-2">Dirección de Entrega</h6>
          <div className="row g-2 mb-3">
            <div className="col-md-8">
              <label className="form-label small">Calle*</label>
              <input 
                type="text" 
                name="calle" 
                className="form-control" 
                required 
                placeholder="Ej: Los Crisantemos, Edificio Norte" 
                value={formData.calle}
                onChange={handleChange} 
              />
            </div>
            <div className="col-md-4">
              <label className="form-label small">Depto (Opcional)</label>
              <input 
                type="text" 
                name="depto" 
                className="form-control" 
                placeholder="Ej: Depto 603" 
                value={formData.depto}
                onChange={handleChange} 
              />
            </div>
            <div className="col-md-6">
              <label className="form-label small">Región*</label>
              <input 
                type="text" 
                name="region" 
                className="form-control" 
                required 
                placeholder="Ej: Región Metropolitana de Santiago" 
                value={formData.region}
                onChange={handleChange} 
              />
            </div>
            <div className="col-md-6">
              <label className="form-label small">Comuna*</label>
              <input 
                type="text" 
                name="comuna" 
                className="form-control" 
                required 
                placeholder="Ej: Cerrillos" 
                value={formData.comuna}
                onChange={handleChange} 
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="form-label small">Indicaciones para la entrega (Opcional)</label>
            <textarea 
              name="indicaciones" 
              className="form-control" 
              rows="2" 
              placeholder="Ej: Dejar con el conserje en caso de no responder el timbre..." 
              value={formData.indicaciones}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-success w-100 fw-bold">
            Crear Cuenta e Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
}