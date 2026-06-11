import { Outlet, Link, useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Footer } from "./components/Footer";
import { useContext } from 'react';
import { UsuarioContext } from './context/UsuarioContext';

export const App = () => {
  const { usuario, cerrarSesion } = useContext(UsuarioContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    cerrarSesion();
    navigate('/');
  };

  return (
    <div className="min-vh-100 d-flex flex-column">
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand as={Link} to="/">Gestor Fi-UNJU</Navbar.Brand>
          <Navbar.Toggle aria-controls="menu-basico" />
          <Navbar.Collapse id="menu-basico">
            
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Dashboard</Nav.Link>
              {usuario && (
                <>
                  <Nav.Link as={Link} to="/proyectos">Proyectos</Nav.Link>
                  <Nav.Link as={Link} to="/perfil">Perfil</Nav.Link>
                </>
              )}
            </Nav>

            <Nav className="ms-auto text-white align-items-center">
              {usuario ? (
                <>
                  <span className="text-warning fw-bold me-3">
                    👤 {usuario.nombre}
                  </span>
                  <Button variant="outline-danger" size="sm" onClick={handleLogout}>
                    Salir
                  </Button>
                </>
              ) : (
                <span className="text-muted">Iniciá sesión para continuar</span>
              )}
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="flex-grow-1">
        <Outlet />
      </Container>
      
      <Footer />
    </div>
  );
};