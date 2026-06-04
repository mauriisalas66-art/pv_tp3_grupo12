import { Card, ListGroup, Container, Row, Col } from 'react-
bootstrap';

export const PerfilUsuario = () => {
    const integrantes = [
        { nombre: "Hernán Jairo Gerardo Almazán" },
        { nombre: "Ignacio Cardozo" },
        { nombre: "Camila Mansilla" },
        { nombre: "Alessandro Nieves" },
        { nombre: "Mauricio Salas" }
    ];

    return (
        <Container className="py-5">
            <h2 className="text-center mb-4">Equipo de Desarrollo - Grupo12</h2>
            <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
                {integrantes.map((alumno, index) => (
                    <Col key={index}>
                        <Card className="shadow-sm h-100 border-top border-primary border-3">



                            <Card.Header className="bg-dark text-white text-center fw-bold">
                                Perfil del Estudiante
                            </Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item><strong>Nombre:</strong><br/>{alumno.nombre}</ListGroup.Item>
                                <ListGroup.Item><strong>Rol:</strong><br/>Estudiante</ListGroup.Item>
                                <ListGroup.Item><strong>Institución:</strong><br/>Facultad de Ingeniería - UNJu</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};