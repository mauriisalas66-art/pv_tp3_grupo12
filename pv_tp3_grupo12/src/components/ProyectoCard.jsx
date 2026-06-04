// src/components/ProyectoCard.jsx
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const ProyectoCard = ({ proyecto, onEliminar, onCambiarEstado }) => {
  const { id, titulo, categoria, estado } = proyecto;
  const varianteEstado = estado === "En Curso" ? "warning" : "success";

  return (
    <Card className="h-100 shadow-sm border-0 border-top border-primary border-3">
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text className="text-muted">Categoría: {categoria}</Card.Text>
        <Card.Text>
          Estado: <span className={`badge bg-${varianteEstado}`}>{estado}</span>
        </Card.Text>

        <div className="d-grid gap-2 mt-4">
          <Button variant="info" className="text-white fw-bold" onClick={() => onCambiarEstado(id)}>
            Cambiar a {estado === "En Curso" ? "Finalizado" : "En Curso"}
          </Button>
          
          <div className="d-flex justify-content-between gap-2 mt-2">
            {/* El cambio clave: ahora viaja dinámicamente por la URL usando el ID */}
            <Button as={Link} to={`/proyectos/${id}`} variant="warning" className="w-50 fw-bold">
              Ver Detalles
            </Button>
            <Button variant="danger" className="w-50 fw-bold" onClick={() => onEliminar(id)}>
              Eliminar
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};