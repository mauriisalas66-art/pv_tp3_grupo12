// src/components/FormularioProyecto.jsx 
import { useState } from 'react';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';

export const FormularioProyecto = ({ onAgregar }) => {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("Estudiantes");
  const [descripcion, setDescripcion] = useState("");
  const [enlaces, setEnlaces] = useState([]);
  const [equipo, setEquipo] = useState([]);

  const añadirFilaEnlace = () => setEnlaces([...enlaces, { nombre: "", url: "" }]);
  
  const actualizarEnlace = (index, campo, valor) => {
    const nuevaLista = [...enlaces];
    nuevaLista[index][campo] = valor;
    setEnlaces(nuevaLista);
  };

  const añadirFilaEquipo = () => setEquipo([...equipo, { nombre: "", rol: "" }]);
  
  const actualizarEquipo = (index, campo, valor) => {
    const nuevaLista = [...equipo];
    nuevaLista[index][campo] = valor;
    setEquipo(nuevaLista);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (!titulo.trim()) {
      alert("Por favor, ingresá un título para el proyecto.");
      return;
    }

    onAgregar({ titulo, categoria, descripcion, enlaces, equipo });

    setTitulo("");
    setDescripcion("");
    setEnlaces([]);
    setEquipo([]);
  };

  return (
    <Card className="mb-5 shadow-sm border-0">
      <Card.Body className="p-4">
        <h3 className="text-primary mb-4">Nuevo Proyecto Educativo</h3>
        
        <Form onSubmit={manejarEnvio}>
          <Row className="mb-3">
            <Col md={8}>
              <Form.Group>
                <Form.Label className="fw-bold">Título del Proyecto:</Form.Label>
                <Form.Control type="text" placeholder="Ej: Plataforma de Notas UNJu" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
              </Form.Group>
            </Col>
            
            <Col md={4}>
              <Form.Group>
                <Form.Label className="fw-bold">Categoría:</Form.Label>
                <Form.Select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                  <option value="Estudiantes">Estudiantes</option>
                  <option value="Docentes">Docentes</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-4">
            <Form.Label className="fw-bold">Descripción Extendida:</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Escribí de qué se trata el proyecto aquí..." value={descripcion} onChange={(e) => setDescripcion(e.target.value)} style={{ resize: 'none' }} />
          </Form.Group>

          {/* Bloque de Enlaces */}
          <div className="bg-light p-3 rounded border mb-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <strong className="text-secondary">Enlaces y Recursos:</strong>
              <Button variant="outline-primary" size="sm" onClick={añadirFilaEnlace}>+ Añadir Link</Button>
            </div>
            {enlaces.map((link, index) => (
              <Row key={index} className="mb-2">
                <Col>
                  <Form.Control type="text" placeholder="Nombre (Ej: GitHub)" value={link.nombre} onChange={(e) => actualizarEnlace(index, 'nombre', e.target.value)} />
                </Col>
                <Col>
                  <Form.Control type="text" placeholder="URL (https://...)" value={link.url} onChange={(e) => actualizarEnlace(index, 'url', e.target.value)} />
                </Col>
              </Row>
            ))}
          </div>

          {/* Bloque de Equipo */}
          <div className="bg-light p-3 rounded border mb-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <strong className="text-secondary">Equipo de Trabajo:</strong>
              <Button variant="outline-primary" size="sm" onClick={añadirFilaEquipo}>+ Añadir Miembro</Button>
            </div>
            {equipo.map((persona, index) => (
              <Row key={index} className="mb-2">
                <Col>
                  <Form.Control type="text" placeholder="Nombre compañero" value={persona.nombre} onChange={(e) => actualizarEquipo(index, 'nombre', e.target.value)} />
                </Col>
                <Col>
                  <Form.Control type="text" placeholder="Rol (Ej: Backend)" value={persona.rol} onChange={(e) => actualizarEquipo(index, 'rol', e.target.value)} />
                </Col>
              </Row>
            ))}
          </div>

          <Button variant="primary" type="submit" size="lg" className="w-100 fw-bold shadow-sm">
            Guardar Proyecto
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};