import { useParams, Link } from 'react-router-dom';
import { ProyectoService } from '../services/proyectoService';
import { Card, Button, ListGroup, Badge } from 'react-bootstrap';

export const DetalleProyectos = () => {
  const { id } = useParams();
  const proyecto = ProyectoService.obtenerProyectos().find(p => p.id === parseInt(id));

  if (!proyecto) {
    return (
      <div className="text-center mt-5">
        <h2>El proyecto no existe</h2>
        <Button as={Link} to="/proyectos" variant="primary">Volver a
          Proyectos</Button>
      </div>
    );
  }

  const listaEnlaces = proyecto.enlaces || proyecto.recursos || [];

  return (
    <Card className="shadow max-w-75 mx-auto my-5 border-0">
      <Card.Header className="bg-dark text-white d-flex justify
content-between align-items-center p-3">
        <h3 className="mb-0">{proyecto.titulo}</h3>
        <Button as={Link} to="/proyectos" variant="outline-light"
          size="sm">Volver a la lista</Button>
      </Card.Header>

      <Card.Body className="p-4">
        <div className="mb-4">
          <Badge bg="info" className="me-2 fs
6">{proyecto.categoria}</Badge>
          <Badge bg={proyecto.estado === "En Curso" ? "warning" :
            "success"} className="text-dark fs-6">
            {proyecto.estado}
          </Badge>
        </div>
        <h5 className="text-secondary fw-bold border-bottom pb
2">Descripción del Proyecto</h5>
        <Card.Text className="mb-4" style={{
          whiteSpace: 'pre-line'
        }}>{proyecto.descripcion}</Card.Text>
        <h5 className="text-secondary fw-bold border-bottom pb
2">Recursos y Enlaces</h5>
        <ListGroup className="mb-4" variant="flush">
          {listaEnlaces.map((link, index) => (
            <ListGroup.Item key={index} className="px-0">
              {link.url ? <a href={link.url} target="_blank"
                rel="noreferrer" className="text-decoration-none fw
bold">{link.nombre}</a> : link.nombre}
            </ListGroup.Item>
          ))}
        </ListGroup>
        <h5 className="text-secondary fw-bold border-bottom pb
2">Equipo de Trabajo</h5>
        <ListGroup variant="flush">
          {proyecto.equipo && proyecto.equipo.map((integrante, index) => (
            <ListGroup.Item key={index} className="px-0">
              <strong>{integrante.nombre}</strong> - <em
                className="text-muted">{integrante.rol || integrante.role}</em>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};