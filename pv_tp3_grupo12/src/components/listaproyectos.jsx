// src/components/ListaProyectos.jsx
import { useState } from 'react';
import { ProyectoService } from '../services/proyectoService';
import { ProyectoCard } from './ProyectoCard';
import { DetalleProyecto } from './DetalleProyecto';

export const ListaProyectos = () => {
    const [proyectos, setProyectos] = 
useState(ProyectoService.obtenerProyectos());
    const [busqueda, setBusqueda] = useState("");
    const [proyectoSeleccionado, setProyectoSeleccionado] = 
useState(null);

    const [formulario, setFormulario] = useState({
        titulo: "",
        descripcion: "",
        categoria: "Estudiantes",
        estado: "En Curso" //
    });
    const { titulo, descripcion, categoria, estado } = formulario;

    const manejarCambioForm = (e) => setFormulario({ ...formulario,
[e.target.name]: e.target.value });

    const handleAgregar = () => {
        if (titulo.trim() === "") return alert("Falta el título");
        setProyectos(ProyectoService.agregarProyecto({ titulo, descripcion, categoria, estado }));
        setFormulario({ titulo: "", descripcion: "", categoria:"Estudiantes", estado: "En Curso" });
        };

    const handleEliminar = (id) => setProyectos(ProyectoService.eliminarProyecto(id));
    const handleCambiarEstado = (id) => setProyectos(ProyectoService.cambiarEstado(id));

    const handleBuscar = (e) => {
        setBusqueda(e.target.value);
        setProyectos(ProyectoService.buscarProyecto(e.target.value)
);
    };

    return (
        <main>
            {proyectoSeleccionado ? (
                <DetalleProyecto proyecto={proyectoSeleccionado}
onVolver={() => setProyectoSeleccionado(null)} />
            ) : (
                <>
                    <h2 style={{ textAlign: 'center', marginBottom:
'20px' }}>Explorador de Proyectos</h2>

                    <div style={{ textAlign: 'center',
marginBottom: '20px', padding: '20px', background: '#272421',
borderRadius: '8px', color: 'white' }}>
                        <h3>Agregar Nuevo Proyecto</h3>
                        <input name="titulo" type="text"placeholder="Título..." value={titulo} onChange={manejarCambioForm}
style={{ padding: '10px', marginRight: '10px' }} />
                        <input name="descripcion" type="text"placeholder="Descripción breve..." value={descripcion}
onChange={manejarCambioForm} style={{ padding: '10px', marginRight:'10px' }} />

                        <select name="categoria" value={categoria}
onChange={manejarCambioForm} style={{ padding: '10px', marginRight:'10px' }}>

                            <option
value="Estudiantes">Estudiantes</option>
                            <option
value="Docentes">Docentes</option>
                        </select>

                        
                        <select name="estado" value={estado}
onChange={manejarCambioForm} style={{ padding: '10px', marginRight:'10px' }}>
                            <option value="En Curso">En Curso</option>
                            <option value="Finalizado">Finalizado</option>
                        </select>

                        <button onClick={handleAgregar} style={{padding: '10px', background: '#014da5', color: 'white', cursor:'pointer', border: 'none', borderRadius: '4px' }}>Agregar</button>
                    </div>

                    <div style={{ textAlign: 'center',marginBottom: '30px' }}>
                        <input type="text" placeholder="Buscar
proyecto..." value={busqueda} onChange={handleBuscar} style={{padding: '10px', width: '300px' }} />
                    </div>

                    {}
                    <section className="contenedor">
                        {proyectos.map(p => (
                            <ProyectoCard
                                key={p.id}
                                proyecto={p}
                                onEliminar={handleEliminar}
                                onVerDetalle={setProyectoSeleccionado}

                                onCambiarEstado={handleCambiarEstado} 
                            />
                        ))}
                    </section>
                </>
            )}
        </main>
    );
};