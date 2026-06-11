// src/views/PerfilUsuario.jsx
import { useState, useContext } from 'react';
import { Card, ListGroup, Container, Row, Col, Button, Form } from 'react-bootstrap';
import { UsuarioContext } from '../context/UsuarioContext';

export const PerfilUsuario = () => {
    const { usuario, actualizarPerfil } = useContext(UsuarioContext);
    
    // Estados para controlar si el formulario está abierto y qué estás escribiendo
    const [editando, setEditando] = useState(false);
    const [formData, setFormData] = useState(usuario);

    const manejarCambio = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const manejarGuardar = (e) => {
        e.preventDefault();
        actualizarPerfil(formData); // Inyecta los cambios en el estado global
        setEditando(false);
    };

    return (
        <Container className="py-5">
            <h2 className="text-center mb-4">Perfil de Usuario</h2>
            <Row className="justify-content-center">
                <Col md={6}>
                    <Card className="shadow-sm border-top border-primary border-3">
                        <Card.Header className="bg-dark text-white d-flex justify-content-between align-items-center fw-bold">
                            <span>Información de Cuenta</span>
                            {!editando && (
                                <Button variant="warning" size="sm" onClick={() => {
                                    setFormData(usuario); // Sincroniza el formulario antes de abrirlo
                                    setEditando(true);
                                }}>
                                    Editar Perfil
                                </Button>
                            )}
                        </Card.Header>
                        
                        {editando ? (
                            <Card.Body>
                                <Form onSubmit={manejarGuardar}>
                                    <Form.Group className="mb-3">
                                        <Form.Label className="fw-bold">Nombre Completo</Form.Label>
                                        <Form.Control type="text" name="nombre" value={formData.nombre} onChange={manejarCambio} required />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label className="fw-bold">DNI</Form.Label>
                                        <Form.Control type="text" name="dni" value={formData.dni} onChange={manejarCambio} required />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label className="fw-bold">Rol Universitario</Form.Label>
                                        <Form.Select name="rol" value={formData.rol} onChange={manejarCambio}>
                                            <option value="Estudiante">Estudiante</option>
                                            <option value="Docente">Docente</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label className="fw-bold">Institución</Form.Label>
                                        <Form.Control type="text" name="institucion" value={formData.institucion} onChange={manejarCambio} required />
                                    </Form.Group>
                                    <div className="d-flex justify-content-end gap-2">
                                        <Button variant="secondary" size="sm" onClick={() => setEditando(false)}>
                                            Cancelar
                                        </Button>
                                        <Button variant="success" size="sm" type="submit">
                                            Guardar Cambios
                                        </Button>
                                    </div>
                                </Form>
                            </Card.Body>
                        ) : (
                            <ListGroup variant="flush">
                                <ListGroup.Item><strong>Nombre:</strong><br/>{usuario.nombre}</ListGroup.Item>
                                <ListGroup.Item><strong>DNI:</strong><br/>{usuario.dni}</ListGroup.Item>
                                <ListGroup.Item><strong>Rol:</strong><br/>{usuario.rol}</ListGroup.Item>
                                <ListGroup.Item><strong>Institución:</strong><br/>{usuario.institucion}</ListGroup.Item>
                            </ListGroup>
                        )}
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};
