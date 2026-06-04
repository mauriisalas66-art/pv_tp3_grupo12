//Cuando comienza con Mayuscula es un componente, si comienza con minuscula es un elemento html
// src/main.jsx
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

const rutas = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "proyectos", element: <ListaProyectos /> },
      { path: "proyectos/:id", element: <DetallesProyecto /> },
      { path: "perfil", element: <PerfilUsuario /> }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={rutas} />
  </React.StrictMode>,
);