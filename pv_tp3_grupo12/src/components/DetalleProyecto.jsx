// src/components/DetalleProyecto.jsx
export const DetalleProyecto = ({ proyecto, onVolver }) => {
  const { titulo, categoria, estado, descripcion, enlaces, recursos, equipo } = proyecto;
  const listaEnlaces = enlaces || recursos || [];

  return (
    <div style={{ padding: '2rem', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0', maxWidth: '600px', margin: '2rem auto' }}>
      <button onClick={onVolver} style={{ marginBottom: '1rem', backgroundColor: '#64748b', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>
        Volver a la lista
      </button>
      <h2 style={{ color: '#1e293b', marginBottom: '0.5rem' }}>{titulo}</h2>
      <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '1rem' }}>
        Categoría: <strong>{categoria}</strong> | Estado: <strong>{estado}</strong>
      </p>
      
      <h3 style={{ color: '#334155', fontSize: '1.2rem' }}>Descripción del Proyecto</h3>
      <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '1.5rem' }}>{descripcion}</p>
      
      <h3 style={{ color: '#334155', fontSize: '1.2rem' }}>Recursos y Enlaces</h3>
      <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.2rem' }}>
        {listaEnlaces.map((link, index) => (
          <li key={index} style={{ marginBottom: '0.5rem' }}>
            {link.url ? (
              <a href={link.url} target="_blank" rel="noreferrer" style={{ color: '#3b82f6', textDecoration: 'none', fontWeight: 'bold' }}>
                {link.nombre}
              </a>
            ) : (
              <span style={{ color: '#475569' }}>{typeof link === 'string' ? link : link.nombre}</span>
            )}
          </li>
        ))}
      </ul>

      <h3 style={{ color: '#334155', fontSize: '1.2rem' }}>Equipo de Trabajo</h3>
      <ul style={{ paddingLeft: '1.2rem' }}>
        {equipo && equipo.map((integrante, index) => (
          <li key={index} style={{ marginBottom: '0.5rem', color: '#334155' }}>
            <strong>{integrante.nombre}</strong> - <span style={{ color: '#64748b', fontStyle: 'italic' }}>{integrante.rol || integrante.role}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};