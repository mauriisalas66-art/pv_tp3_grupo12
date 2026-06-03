import { useState, useEffect } from 'react';
import { ProyectoService } from '../services/proyectoService';
import { ProyectoCard } from '../components/ProyectoCard';
import { RegistroActividad } from '../components/RegistroActividad';
import { FormularioProyecto } from '../components/FormularioProyecto';
import { Row, Col, Form } from 'react-bootstrap';

export const ListaProyectos = () => {
  const [proyectos, setProyectos] =
    useState(ProyectoService.obtenerProyectos());
  const [busqueda, setBusqueda] = useState("");
  const [fechaActualizacion, setFechaActualizacion] = useState(null);
  const [disparadorActividad, setDisparadorActividad] = useState(0);
  useEffect(() => {
    if (disparadorActividad === 0) return;
    const ahora = new Date();
    setFechaActualizacion(`${ahora.toLocaleDateString()} a las 
${ahora.toLocaleTimeString()} hs`);
  }, [disparadorActividad]);
  const manejarBusqueda = (e) => {
    setBusqueda(e.target.value);
    setProyectos(ProyectoService.buscarProyecto(e.target.value));
  };
  const manejarEliminar = (id) => {
    setProyectos(ProyectoService.eliminarProyecto(id));
    setDisparadorActividad(prev => prev + 1);
  };
  const manejarCambioEstado = (id) => {
    setProyectos(ProyectoService.cambiarEstado(id));
    setDisparadorActividad(prev => prev + 1);
  };
  const manejarAgregarProyecto = (paqueteRecibido) => {
    setProyectos(ProyectoService.agregarProyecto(paqueteRecibido));
    setDisparadorActividad(prev => prev + 1);
  };
  return (
    <div>
      <FormularioProyecto onAgregar={manejarAgregarProyecto} />
      <h2 className="my-4 text-center fw-bold">Proyectos
        Educativos</h2>
      <Form.Control
        type="text"
        placeholder="Buscar proyecto por título..."
        value={busqueda}
        onChange={manejarBusqueda}
        className="mb-5 w-50 mx-auto shadow-sm"
      />

      <Row xs={1} md={2} lg={3} className="g-4 mb-5">
        {proyectos.map((p) => (
          <Col key={p.id}>
            <ProyectoCard proyecto={p} onEliminar={manejarEliminar}
              onCambiarEstado={manejarCambioEstado} />
          </Col>
        ))}
      </Row>
      <RegistroActividad fecha={fechaActualizacion} />
    </div>
  );
};