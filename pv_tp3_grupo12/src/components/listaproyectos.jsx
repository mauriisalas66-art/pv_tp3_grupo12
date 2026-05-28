// src/components/ListaProyectos.jsx
import { useState, useEffect } from 'react';
import { ProyectoService } from '../services/proyectoService';
import { ProyectoCard } from './ProyectoCard';
import { DetalleProyecto } from './DetalleProyecto';
import {RegistroActividad} from './RegistroActividad';
import {FormularioProyecto} from './FormularioProyecto';

export const ListaProyectos = () => {
    const [proyectos, setProyectos] = useState(ProyectoService.obtenerProyectos());
    const [busqueda, setBusqueda] = useState("");
    const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);
    const [fechaActualizacion, setFechaActualizacion] = useState(null);
    const [disparadorActividad, setDisparadorActividad] =useState(0);

    useEffect(() => {
        if (disparadorActividad === 0) return;
        const ahora = new Date();
        const formato = `${ahora.toLocaleDateString()} a las ${ahora.toLocaleTimeString()} hs`;
        setFechaActualizacion(formato);
    }, [disparadorActividad]);

    const manejarBusqueda = (e) => {
        const texto = e.target.value;
        setBusqueda(texto);
        setProyectos(ProyectoService.buscarProyecto(texto));
    };

    const manejarEliminar = (id) => {
        setProyectos(ProyectoService.eliminarProyecto(id));
        if (proyectoSelecccionado?.id === id) setProyectoSeleccionado(null);
        setDisparadorActividad(prev => prev + 1);
    };

    const manejarCamcioEstado = (id) => {
        setProyectos(ProyectoService.cambiarEstado(id));
        setDisparadorActividad(prev => prev + 1);
    }

    const manejarAgregarProyecto = (paqueteRecibido) => {
        const listaActualizada = ProyectoService.agregarProyecto(paqueteRecibido);
        setProyectos(listaActualizada);
        setDisparadorActividad(prev => prev + 1);
    };
    
    return (
        <section className="contenedor-proyectos">
            {proyectoSeleccionado ? (
                <DetalleProyecto proyecto={proyectoSeleccionado} onVolver={() => setProyectoSeleccionado(null)} />
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', gap: '1.5rem' }}>
                    <div style={{width: '100%'}}>
                        <FormularioProyecto onAgregar={manejarAgregarProyecto} />
                    </div>

                    <h2>Proyectos Educativos</h2>
                    <div style= {{width: '100%', dispplay: 'flex', justifyContent: 'center'}}>
                        <input 
                            type="text"
                            placeholder="Buscar proyecto por título..."
                            value={busqueda}
                            onChange={manejarBusqueda}
                            style= {{padding: '0.6rem 1.2rem', width: '300px', borderRadius: '20px', border: '1px solid #cc', fontSize: '1rem', outline: 'none'}}
                        />
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', width: '100%' }}>
                        {proyectos.mapp((p) => (
                            <ProyectoCard 
                                key={p.id} 
                                proyecto={p}
                                onEliminar={manejarEliminar}
                                onVerDetalle={setProyectoSeleccionado}
                                onCambiarEstado={manejarCambioEstado}
                            />

                        ))}
                    </div>
                    <RegistroActividad fecha={fechaActualizacion} />
                </div>
            )}
        </section>
    );
};
                 
            

    