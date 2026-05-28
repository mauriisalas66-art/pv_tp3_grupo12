// src/components/DetalleProyecto.jsx
export const DetalleProyecto = ({ proyecto, onVolver }) => {
  const { titulo, categoria, estado, descripcion, enlaces, recursos, equipo } = proyecto;
  const listaEnlaces = enlaces || recursos || [];
 return (
  <div className="detalle-modal">
     <button onClick={onVolver} style={{ marginBottom: '20px', padding: '10px', background: '#011931', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
      ← Cerrar Detalles
    </button>
    <h2>{titulo}</h2>
    <p><strong>Descripción:</strong> 
    {descripcion}</p>
    <h3>Archivos y Recursos</h3>
     <ul>
      {recursos.length > 0 ? recursos.map((rec, i) => <li key={i}>{rec}</li>) : <li>No hay recursos subidos.</li>}
     </ul>
     <h3>Equipo de Trabajo</h3>
      <ul>
         {equipo.length > 0 ? equipo.map((int, i) => <li key={i}><strong>{int.nombre}</strong> (Rol: {int.rol})</li>) : <li>Equipo sin asignar.</li>}
      </ul>
      </div>
 );
}; 