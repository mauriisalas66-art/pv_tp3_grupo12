export const ProyectoCard = ({proyecto, onEliminar, onVerDetalle, onCambiarEstado}) => {
    const { id, titulo, categoria, estado } = proyecto;
    const claseEstado = estado === "En curso" ? "estado-en-curso" : "estado-finalizado";

    return (
        <article className="card">
        <h3>{titulo}</h3>
        <p className="categoria">Categoria: {categoria}</p>
        <p className="estado-container">
            Estado: <strong className={claseEstado}>{estado}</strong>
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '15px' }}></div>
        <button
        onClick={() => onCambiarEstado(id)}
        style={{ background: '#0284c7', color: 'white', padding: '8px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
        Cambiar a {estado === "En Curso" ? "Finalizado" : "En Curso"}
        </button>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
          <button 
            onClick={() => onVerDetalle(proyecto)} 
            style={{ flex: 1, background: '#f59e0b', color: 'black', padding: '8px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            Ver Detalles
          </button>
          
          <button 
            onClick={() => onEliminar(id)} 
            style={{ flex: 1, background: '#e11d48', color: 'white', padding: '8px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            Eliminar
          </button>
        </div>
      </div>
    </article>
  );
};
