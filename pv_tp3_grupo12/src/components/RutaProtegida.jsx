import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { UsuarioContext } from '../context/UsuarioContext';

export const RutaProtegida = ({ children }) => {
  const { usuario } = useContext(UsuarioContext);

  if (!usuario) {
    return <Navigate to="/" replace />;
  }

  return children;
};
