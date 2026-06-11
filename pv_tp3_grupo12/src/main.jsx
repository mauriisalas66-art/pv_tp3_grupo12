import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';

import { App } from './App.jsx';
import { Dashboard } from './views/Dashboard.jsx';
import { ListaProyectos } from './views/ListaProyectos.jsx';
import { DetallesProyecto } from './views/DetallesProyecto.jsx';
import { PerfilUsuario } from './views/PerfilUsuario.jsx';

// IMPORTACIONES DE INFRAESTRUCTURA
import { UsuarioProvider } from './context/UsuarioContext.jsx';
import { RutaProtegida } from './components/RutaProtegida.jsx';

const rutas = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Dashboard /> }, // Libre para poder loguearse
      { 
        path: "proyectos", 
        element: <RutaProtegida><ListaProyectos /></RutaProtegida> 
      },
      { 
        path: "proyectos/:id", 
        element: <RutaProtegida><DetallesProyecto /></RutaProtegida> 
      },
      { 
        path: "perfil", 
        element: <RutaProtegida><PerfilUsuario /></RutaProtegida> 
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Envolvemos las rutas con el proveedor global */}
    <UsuarioProvider>
      <RouterProvider router={rutas} />
    </UsuarioProvider>
  </React.StrictMode>,
);