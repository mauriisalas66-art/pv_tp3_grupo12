export const ProyectoService = (() => {

  let proyectos = [
    {
      id: 1,
      titulo: "App Matemática",
      categoria: "Estudiantes",
      estado: "En Curso"
    },
    {
      id: 2,
      titulo: "Sistema de Registro de Alumnos",
      categoria: "Docentes",
      estado: "Finalizado"
    },
    {
      id: 3,
      titulo: "Biblioteca Digital",
      categoria: "Estudiantes",
      estado: "En Curso"
    },
    {
      id: 4,
      titulo: "Plataforma de Aprendizaje Online",
      categoria: "Estudiantes",
      estado: "Finalizado"
    },
    {
      id: 5,
      titulo: "Chatbot estudiantil",
      categoria: "Estudiantes",
      estado: "En Curso"
    }
  ];

  return {

    obtenerProyectos: () => {
      return [...proyectos];
    },

    agregarProyecto: (nuevo) => {

      const nuevoId = proyectos.length + 1;

      const proyectoConId = {
        ...nuevo,
        id: nuevoId
      };

      proyectos.push(proyectoConId);

      return [...proyectos];
    },

    eliminarProyecto: (id) => {

      proyectos = proyectos.filter(
        (p) => p.id !== id
      );

      return [...proyectos];
    },

    buscarProyecto: (texto) => {

      if (!texto.trim()) {
        return [...proyectos];
      }

      return proyectos.filter((p) =>
        p.titulo
          .toLowerCase()
          .includes(texto.toLowerCase())
      );
    }

  };

})();