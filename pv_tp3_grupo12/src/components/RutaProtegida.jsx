import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { UsuarioContext } from '../context/UsuarioContext';

export const RutaProtegida = ({ children }) => {
  const { usuario } = useContext(UsuarioContext);

  // Si no está logueado, lo redireccionamos forzadamente a la raíz (Dashboard)
  if (!usuario) {
    return <Navigate to="/" replace />;
  }

  // Si está validado, se le permite renderizar la vista hija (children)
  return children;
};
