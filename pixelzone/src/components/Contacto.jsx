import { useState } from 'react';

export function Contacto() {
  const [datos, setDatos] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });
  
  const [enviado, setEnviado] = useState(false);

  const manejarCambio = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    });
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    setEnviado(true);
    setDatos({ nombre: '', email: '', asunto: '', mensaje: '' });
  };

  return (
    <section className="container my-5 text-light">
      <div className="row g-4 justify-content-center">
        
        {/* Información de Contacto / Fono */}
        <div className="col-md-5">
          <div className="card bg-dark text-light border border-secondary p-4 h-100 shadow-lg">
            <h3 className="text-primary fw-bold mb-4">Otras formas de contactarnos</h3>
            
            <p className="text-secondary">
              ¿Tienes dudas con una compra o quieres ayuda inmediata? Puedes comunicarte con nuestro equipo directamente.
            </p>

            <div className="d-flex align-items-start my-3">
              <i className="bi bi-telephone-fill text-primary fs-3 me-3"></i>
              <div>
                <h6 className="mb-1 fw-bold">Fono / Atención telefónica</h6>
                <p className="mb-0 text-light fs-5 fw-semibold">+56 9 1234 5678</p>
                <small className="text-secondary">Llama de Lunes a Viernes de 9:00 a 18:00 hrs</small>
              </div>
            </div>

            <hr className="border-secondary my-3" />

            <div className="d-flex align-items-start my-3">
              <i className="bi bi-envelope-fill text-primary fs-3 me-3"></i>
              <div>
                <h6 className="mb-1 fw-bold">Correo directo</h6>
                <p className="mb-0 text-light fw-semibold">soporte@pixelzone.com</p>
              </div>
            </div>

            <hr className="border-secondary my-3" />

            <div className="d-flex align-items-start my-3">
              <i className="bi bi-clock-fill text-primary fs-3 me-3"></i>
              <div>
                <h6 className="mb-1 fw-bold">Horario de Soporte</h6>
                <p className="mb-0 text-secondary">Lunes a Sábado: 09:00 - 20:00 hrs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Formulario de Mensaje */}
        <div className="col-md-7">
          <div className="card bg-dark text-light border border-secondary p-4 shadow-lg">
            <h3 className="text-center mb-4 text-primary fw-bold">Envíanos un mensaje</h3>
            
            {enviado && (
              <div className="alert alert-success text-center fw-semibold">
                ¡Gracias por tu mensaje! Nos pondremos en contacto contigo muy pronto.
              </div>
            )}

            <form onSubmit={manejarEnvio}>
              <div className="mb-3">
                <label className="form-label">Nombre completo</label>
                <input
                  type="text"
                  name="nombre"
                  className="form-control bg-secondary text-light border-0"
                  placeholder="Escribe tu nombre"
                  value={datos.nombre}
                  onChange={manejarCambio}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Correo electrónico</label>
                <input
                  type="email"
                  name="email"
                  className="form-control bg-secondary text-light border-0"
                  placeholder="correo@ejemplo.com"
                  value={datos.email}
                  onChange={manejarCambio}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Asunto</label>
                <input
                  type="text"
                  name="asunto"
                  className="form-control bg-secondary text-light border-0"
                  placeholder="Motivo de tu mensaje"
                  value={datos.asunto}
                  onChange={manejarCambio}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Mensaje</label>
                <textarea
                  name="mensaje"
                  rows="4"
                  className="form-control bg-secondary text-light border-0"
                  placeholder="Escribe tu consulta o comentario aquí..."
                  value={datos.mensaje}
                  onChange={manejarCambio}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100 fw-bold">
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}