import { Card, Button, Form, Row, Col } from 'react-bootstrap';

export const Dashboard = () => {
    return (
        <div>
            <h1 className="mb-4">Bienvenido al Gestor de Proyectos</h1>
            <Row>
                <Col md={6}>
                <Card className="mb-4 shadow-sm">
                    <Card.Body>
                        <Card.Title>Metricas Generales</Card.Title>
                        <Card.Text>Ttoal de proyectos cargados: <strong>5</strong></Card.Text>
                        <Card.Text>Proyectos en curso: <strong className="text-primary">3</strong></Card.Text>
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