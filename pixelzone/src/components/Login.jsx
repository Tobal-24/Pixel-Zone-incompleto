export function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Sesión iniciada con éxito');
  };

  return (
    <section className="py-5 bg-dark text-light">
      <div className="container" style={{ maxWidth: '450px' }}>
        <div className="card bg-secondary bg-opacity-10 border-secondary text-light p-4 shadow">
          <h3 className="text-center fw-bold text-primary mb-4">Iniciar Sesión</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Correo Electrónico</label>
              <input type="email" className="form-control bg-dark text-light border-secondary" required placeholder="correo@ejemplo.com" />
            </div>
            <div className="mb-3">
              <label className="form-label">Contraseña</label>
              <input type="password" className="form-control bg-dark text-light border-secondary" required minLength="6" placeholder="••••••••" />
            </div>
            <button type="submit" className="btn btn-primary w-100 fw-bold mt-2">Entrar</button>
          </form>
        </div>
      </div>
    </section>
  );
}