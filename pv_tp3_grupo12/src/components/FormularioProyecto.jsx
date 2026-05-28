//src/components/FormularioProyecto.jsx 
import { useState } from 'react';

export const FormularioProyecto = ({ onAgregar }) => {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("Estudiantes");
  const [descripcion, setDescripcion] = useState("");
  const [enlaces, setEnlaces] = useState([]);
  const [equipo, setEquipo] = useState([]);

  const añadirFilaEnlace = () => {
    setEnlaces([...enlaces, { nombre: "", url: "" }]);
  };

  const actualizarEnlace = (index, campo, valor) => {
    const nuevaLista = [...enlaces];
    nuevaLista[index][campo] = valor;
    setEnlaces(nuevaLista);
  };

  const añadirFilaEquipo = () => {
    setEquipo([...equipo, { nombre: "", rol: "" }]);
  };

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

    setTitulo("");
    setDescripcion("");
    setEnlaces([]);
    setEquipo([]);
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

        <div style={{ border: '1px solid #cbd5e1', padding: '1rem', borderRadius: '6px', backgroundColor: '#f8fafc' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <strong style={{ color: '#003355' }}>Enlaces y Recursos:</strong>
            <button type="button" onClick={añadirFilaEnlace} style={{ backgroundColor: '#005088', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', padding: '0.3rem 0.6rem', fontWeight: 'bold' }}>
              + Añadir Link
            </button>
          </div>
          {enlaces.map((link, index) => (
            <div key={index} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <input type="text" placeholder="Nombre (Ej: GitHub)" value={link.nombre} onChange={(e) => actualizarEnlace(index, 'nombre', e.target.value)} style={{ flex: 1, padding: '0.4rem' }} />
              <input type="text" placeholder="URL (https://...)" value={link.url} onChange={(e) => actualizarEnlace(index, 'url', e.target.value)} style={{ flex: 2, padding: '0.4rem' }} />
            </div>
          ))}
        </div>

        <div style={{ border: '1px solid #cbd5e1', padding: '1rem', borderRadius: '6px', backgroundColor: '#f8fafc' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <strong style={{ color: '#003355' }}>Equipo de Trabajo:</strong>
            <button type="button" onClick={añadirFilaEquipo} style={{ backgroundColor: '#005088', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', padding: '0.3rem 0.6rem', fontWeight: 'bold' }}>
              + Añadir Miembro
            </button>
          </div>
          {equipo.map((persona, index) => (
            <div key={index} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <input type="text" placeholder="Nombre compañero" value={persona.nombre} onChange={(e) => actualizarEquipo(index, 'nombre', e.target.value)} style={{ flex: 1, padding: '0.4rem' }} />
              <input type="text" placeholder="Rol (Ej: Backend)" value={persona.rol} onChange={(e) => actualizarEquipo(index, 'rol', e.target.value)} style={{ flex: 1, padding: '0.4rem' }} />
            </div>
          ))}
        </div>

        <button type="submit" style={{ backgroundColor: '#005088', color: 'white', padding: '0.7rem', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem' }}>
          Guardar Proyecto
        </button>

      </div>
    </form>
  );
};