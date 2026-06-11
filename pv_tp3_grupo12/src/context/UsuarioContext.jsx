import { createContext, useState,useEffect } from "react";
export const UsuarioContext = createContext ();
export const UsuarioProvider = ({children}) => {
    const [usuario, setUsuario] = useState (() => {
        const datosGuardados = localStorage.getItem ("perfil_usuario");
        return datosGuardados ? json.parse (datosGuardados) : null;
        //Arranca en null si no hay sesión
    });

    useEffect (() => {
        if (usuario) {
            localStorage.setItem("perfil_usuario", JSON.stringify(usuario));
        }else {
            localStorage.removeItem("perfil_usuario");
        }
    }, [usuario] );

    const guardarSesion = (datos) => setUsuario(datos);
    const cerrarSesion = () => setUsuario(null);
    const actualizarPerfil = (nuevosDatos) => setUsuario(nuevosDatos);
    return (
        <UsuarioContext.Provider value={{usuario, guardarSesion, cerrarSesion, actualizarPerfil}}>
            {children}
        </UsuarioContext.Provider>
    );
};