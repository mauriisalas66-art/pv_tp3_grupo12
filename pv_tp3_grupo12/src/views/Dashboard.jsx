// src/views/Dashboard.jsx
import { useState, useContext } from 'react';
import { Card, Button, Form, Row, Col, Alert, Spinner } from 'react-bootstrap';
import { ProyectoService } from '../services/proyectoService';
import { authService } from '../services/authService';
import { UsuarioContext } from '../context/UsuarioContext';
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
    // 1. Extraemos las métricas desde el servicio de proyectos
    const proyectos = ProyectoService.obtenerProyectos();
    const totalProyectos = proyectos.length;
    const proyectosEnCurso = proyectos.filter(p => p.estado === "En Curso").length;

    // 2. Sintonizamos la antena de radio global y el control de rutas
    const { usuario, guardarSesion } = useContext(UsuarioContext);
    const navigate = useNavigate();

    // 3. Estados locales para controlar el formulario, errores y carga
    const [credenciales, setCredenciales] = useState({ user: '', password: '' });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // 4. Capturador de pulsaciones de teclado para los inputs
    const manejarCambio = (e) => {
        setCredenciales({ ...credenciales, [e.target.name]: e.target.value });
    };

    // 5. Función de envío para procesar el Login asíncrono
    const manejarEnvio = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            // Llamamos al portero asíncrono esperando la respuesta
            const usuarioLogueado = await authService.login(credenciales.user, credenciales.password);
            guardarSesion(usuarioLogueado); // Guardamos en la antena global
            navigate('/proyectos');          // Saltamos directo a proyectos
        } catch (err) {
            setError(err.message);           // Atrapamos el error e inyectamos el mensaje
        } finally {
            setLoading(false);               // Apagamos el Spinner de carga
        }
    };

    return (
        <div className="py-4">
            <h1 className="mb-4 fw-bold text-dark">Panel de Control</h1>
            <Row className="g-4">
                
                {/* COLUMNA IZQUIERDA: MÉTRICAS GENERALES */}
                <Col md={6}>
                    <Card className="h-100 shadow-sm border-0 border-top border-primary border-3 bg-white p-3">
                        <Card.Body>
                            <Card.Title className="text-secondary fw-bold mb-4">Métricas Generales</Card.Title>
                            <Card.Text className="fs-5 mb-3">
                                Total de proyectos cargados: <strong className="text-dark">{totalProyectos}</strong>
                            </Card.Text>
                            <Card.Text className="fs-5">
                                Proyectos en curso: <strong className="text-primary">{proyectosEnCurso}</strong>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                {/* COLUMNA DERECHA: FORMULARIO DE LOGIN O SALUDO */}
                <Col md={6}>
                    {!usuario ? (
                        /* SI NO HAY SESIÓN: Muestra el Formulario de Ingreso */
                        <Card className="shadow-sm border-0 bg-white p-2">
                            <Card.Header className="bg-white border-0 pt-4 pb-2 fw-bold fs-4 text-primary">
                                Ingreso al Sistema
                            </Card.Header>
                            <Card.Body>
                                {error && (
                                    <Alert variant="danger" className="py-2 border-0 shadow-sm mb-3">
                                        {error}
                                    </Alert>
                                )}
                                
                                <Form onSubmit={manejarEnvio}>
                                    <Form.Group className="mb-3">
                                        <Form.Label className="fw-bold text-secondary">Usuario Universitario</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            name="user" 
                                            placeholder="Ej: jairo-unju" 
                                            value={credenciales.user} 
                                            onChange={manejarCambio} 
                                            required 
                                        />
                                    </Form.Group>
                                    
                                    <Form.Group className="mb-4">
                                        <Form.Label className="fw-bold text-secondary">Contraseña</Form.Label>
                                        <Form.Control 
                                            type="password" 
                                            name="password" 
                                            placeholder="***" 
                                            value={credenciales.password} 
                                            onChange={manejarCambio} 
                                            required 
                                        />
                                    </Form.Group>
                                    
                                    <Button variant="success" type="submit" className="w-100 py-2 fw-bold shadow-sm" disabled={loading}>
                                        {loading ? <Spinner as="span" animation="border" size="sm" /> : 'Iniciar Sesión'}
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    ) : (
                        /* SI LA SESIÓN ESTÁ ACTIVA: Muestra el Saludo Minimalista */
                        <Card className="shadow-sm border-0 bg-white p-4 text-center h-100 d-flex align-items-center justify-content-center">
                            <Card.Body>
                                <div className="fs-1 mb-2">👋</div>
                                <h3 className="fw-bold mb-1">¡Bienvenido!</h3>
                                <p className="text-secondary mb-4 fs-5">{usuario.nombre}</p>
                                
                                <Button 
                                    variant="primary" 
                                    className="px-4 py-2 fw-bold shadow-sm"
                                    onClick={() => navigate('/proyectos')}
                                >
                                    Ir a Proyectos
                                </Button>
                            </Card.Body>
                        </Card>
                    )}
                </Col>

            </Row>
        </div>
    );
};
