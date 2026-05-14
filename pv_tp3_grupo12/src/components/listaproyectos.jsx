import { useState } from 'react';
import { ProyectoService } from '../services/proyectoService';

export const ListaProyectos = () => {
    const [proyectos, setProyectos] = useState(ProyectoService.obtenerProyectos());
    const [busqueda, setBusqueda] = useState("");

    const [nuevoTitulo, setNuevoTitulo] = useState("");
    const [nuevaCategoria, setNuevaCategoria] = useState("Estudiantes");


    const handleEliminar = (id) => {
        setProyectos(ProyectoService.eliminarProyecto(id));
    };

    const handleBuscar = (e) => {
        const texto = e.target.value;
        setBusqueda(texto);
        setProyectos(ProyectoService.buscarProyecto(texto));
    };

    const handleAgregar = () => {
        if (nuevoTitulo.trim() === "") {
            alert("El título no puede estar vacío");
            return;
        }
        
        const nuevoProyecto = {
            titulo: nuevoTitulo,
            categoria: nuevaCategoria,
            estado: "En Curso" // Por defecto arranca en curso
        };


        setProyectos(ProyectoService.agregarProyecto(nuevoProyecto));
        
        
        setNuevoTitulo(""); 
    };
    
    return (
        <main>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Explorador de Proyectos</h2>
            
            {/* SECCIÓN: AGREGAR PROYECTO */}
            <div style={{ textAlign: 'center', marginBottom: '20px', padding: '20px', background: '#272421', borderRadius: '8px', color: 'white' }}>
                <h3>Agregar Nuevo Proyecto</h3>
                <input 
                    type="text" 
                    placeholder="Título del proyecto..." 
                    value={nuevoTitulo} 
                    onChange={(e) => setNuevoTitulo(e.target.value)} 
                    style={{ padding: '10px', marginRight: '10px', borderRadius: '5px' }}
                />
                <select 
                    value={nuevaCategoria} 
                    onChange={(e) => setNuevaCategoria(e.target.value)}
                    style={{ padding: '10px', marginRight: '10px', borderRadius: '5px' }}
                >
                    <option value="Estudiantes">Estudiantes</option>
                    <option value="Docentes">Docentes</option>
                </select>
                <button 
                    onClick={handleAgregar}
                    style={{ padding: '10px 20px', background: '#014da5', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                >
                    Agregar
                </button>
            </div>

            {/* SECCIÓN: BUSCADOR */}
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <input 
                    type="text" 
                    placeholder="Buscar proyecto..." 
                    value={busqueda} 
                    onChange={handleBuscar} 
                    style={{ padding: '10px', width: '300px', borderRadius: '5px' }}
                />
            </div>

            {/* SECCIÓN: LISTA DE TARJETAS */}
            <section className="contenedor">
                {proyectos.map(p => (
                    <article className="card" key={p.id}>
                        <h3>{p.titulo}</h3>
                        <p>Categoría: {p.categoria}</p>
                        <p>Estado: {p.estado}</p>
                        <button onClick={() => handleEliminar(p.id)}>Eliminar</button>
                    </article>
                ))}
            </section>
        </main>
    );
};