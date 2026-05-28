import { useState } from 'react';

export const FormularioProyecto = ({ onAgregar }) => {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("Estudiantes");
  const [descripcion, setDescripcion] = useState("");
  
  // Estados para las listas dinámicas
  const [enlaces, setEnlaces] = useState([]);
  const [equipo, setEquipo] = useState([]);

  // Lógica de Enlaces
  const añadirFilaEnlace = () => setEnlaces([...enlaces, { nombre: "", url: "" }]);
  const actualizarEnlace = (index, campo, valor) => {
    const nuevaLista = [...enlaces];
    nuevaLista[index][campo] = valor;
    setEnlaces(nuevaLista);
  };

  // Lógica de Equipo
  const añadirFilaEquipo = () => setEquipo([...equipo, { nombre: "", rol: "" }]);
  const actualizarEquipo = (index, campo, valor) => {
    const nuevaLista = [...equipo];
    nuevaLista[index][campo] = valor;
    setEquipo(nuevaLista);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (!titulo.trim()) {
      alert("Por favor, Jairo, ingresá un título para el proyecto.");
      return;
    }

    const nuevoProyectoPaquete = {
      titulo: titulo,
      categoria: categoria,
      descripcion: descripcion,
      enlaces: enlaces,
      equipo: equipo
    };

    onAgregar(nuevoProyectoPaquete);

    setTitulo(""); setDescripcion(""); setEnlaces([]); setEquipo([]);
  };

  return (
    <form onSubmit={manejarEnvio} style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem', border: '1px solid #e2e8f0' }}>
      <h3 style={{ color: '#003355', marginTop: 0 }}>Nuevo Proyecto Educativo</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        
        <label style={{ fontWeight: 'bold', color: '#444' }}>Título del Proyecto:</label>
        <input type="text" placeholder="Ej: Plataforma de Notas UNJu" value={titulo} onChange={(e) => setTitulo(e.target.value)} style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }} />
        
        <label style={{ fontWeight: 'bold', color: '#444' }}>Categoría:</label>
        <select value={categoria} onChange={(e) => setCategoria(e.target.value)} style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}>
          <option value="Estudiantes">Estudiantes</option>
          <option value="Docentes">Docentes</option>
        </select>

        <label style={{ fontWeight: 'bold', color: '#444' }}>Descripción Extendida:</label>
        <textarea placeholder="Escribí de qué se trata el proyecto aquí..." value={descripcion} onChange={(e) => setDescripcion(e.target.value)} style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc', height: '80px', resize: 'none' }} />

        {/* Las cajitas dinámicas irán acá en el siguiente paso */}

        <button type="submit" style={{ backgroundColor: '#005088', color: 'white', padding: '0.7rem', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem' }}>
          Guardar Proyecto
        </button>

      </div>
    </form>
  );
};