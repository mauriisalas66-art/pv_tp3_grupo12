import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import { ProyectoService } from '../services/proyectoService';
export const Dashboard = () => {
    const proyectos = ProyectoService.obtenerProyectos();
    const totalProyectos = proyectos.length;
    const proyectosEnCurso = proyectos.filter(p => p.estado === "En Curso").length;
    return (
        <div>
            <h1 className="mb-4">Bienvenido al Gestor de Proyectos</h1>
            <Row>
                <Col md={6}>
                <Card className="mb-4 shadow-sm">
                    <Card.Body>
                        <Card.Title>Métricas Generales</Card.Title>
                        <Card.Text>Total de proyectos cargados: <strong>{totalProyectos}</strong></Card.Text>
                        <Card.Text>Proyectos en curso: <strong className="text-primary">{proyectosEnCurso}</strong></Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={6}>
                <Card className="shadow-sm">
                    <Card.Header className="bg-primary text-white">Ingreso al Sistema</Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Usuario Universitario</Form.Label>
                                <Form.Control type="text" placeholder="Ej: alumno-unju" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control type="password" placeholder="***" />
                            </Form.Group>
                            <Button variant="success" type="button" className="w-100">
                                Iniciar Sesion
                            </Button>
                         </Form>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </div>
    );
};