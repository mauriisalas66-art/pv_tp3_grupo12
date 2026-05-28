export const ProyectoService = (() => {

  let proyectos = [
    {
      id: 1,
      titulo: "App Matemática",
      categoria: "Estudiantes",
      estado: "En Curso",
      disponible: true,
      descripcion:
        "App para resolver integrales y derivadas.\n\nIncluye teoría y ejercicios prácticos para el ciclo básico.",
      recursos: [
        {
          nombre: "GitHub",
          url: "https://github.com/matematica-app"
        }
      ],
      equipo: [
        { nombre: "Nacho", rol: "Backend" },
        { nombre: "Cami", rol: "Frontend" }
      ]
    },

    {
      id: 2,
      titulo: "Registro de Alumnos",
      categoria: "Docentes",
      estado: "Finalizado",
      disponible: true,
      descripcion:
        "Gestión académica de asistencia.\n\nSistema para controlar el presentismo y exportar reportes mensuales.",
      recursos: [
        {
          nombre: "Drive",
          url: "https://drive.google.com/registro-manual"
        }
      ],
      equipo: [
        { nombre: "Mauri", rol: "DBA" },
        { nombre: "Ale", rol: "Backend" }
      ]
    },

    {
      id: 3,
      titulo: "Biblioteca Digital",
      categoria: "Estudiantes",
      estado: "En Curso",
      disponible: true,
      descripcion:
        "Acceso a material académico.\n\nRepositorio digital con libros de consulta rápida y acceso a artículos científicos.",
      recursos: [
        {
          nombre: "GitHub",
          url: "https://github.com/biblioteca-unju"
        }
      ],
      equipo: [
        { nombre: "Jairo", rol: "Documentación" },
        { nombre: "Cami", rol: "Diseño UI" }
      ]
    },

    {
      id: 4,
      titulo: "Plataforma Online",
      categoria: "Estudiantes",
      estado: "Finalizado",
      disponible: true,
      descripcion:
        "Cursos virtuales interactivos.\n\nPlataforma con videos, foros y ejercicios de evaluación automática.",
      recursos: [
        {
          nombre: "Drive",
          url: "https://drive.google.com/cursos"
        }
      ],
      equipo: [
        { nombre: "Ale", rol: "Full Stack" },
        { nombre: "Nacho", rol: "DevOps" }
      ]
    },

    {
      id: 5,
      titulo: "Chatbot Estudiantil",
      categoria: "Estudiantes",
      estado: "En Curso",
      disponible: true,
      descripcion:
        "Asistente 24/7 para dudas.\n\nResuelve trámites administrativos automáticamente mediante IA.",
      recursos: [
        {
          nombre: "GitHub",
          url: "https://github.com/chatbot-unju"
        }
      ],
      equipo: [
        { nombre: "Mauri", rol: "IA Developer" },
        { nombre: "Jairo", rol: "Testing" }
      ]
    }
  ];

  return {

    obtenerProyectos: () =>
      proyectos.filter((p) => p.disponible),

    agregarProyecto: (nuevo) => {

      const nuevoId = proyectos.length + 1;

      const proyectoCompleto = {
        id: nuevoId,
        titulo: nuevo.titulo,
        categoria: nuevo.categoria,
        estado: "En Curso",
        disponible: true,
        descripcion: nuevo.descripcion || "Sin descripción",
        recursos: nuevo.enlaces || [],
        equipo: nuevo.equipo || []
      };

      proyectos.push(proyectoCompleto);

      return proyectos.filter((p) => p.disponible);
    },

    eliminarProyecto: (id) => {

      const proyectoEncontrado = proyectos.find(
        (p) => p.id === id
      );

      if (proyectoEncontrado) {
        proyectoEncontrado.disponible = false;
      }

      return proyectos.filter((p) => p.disponible);
    },

    cambiarEstado: (id) => {

      proyectos = proyectos.map((p) =>
        p.id === id
          ? {
            ...p,
            estado:
              p.estado === "En Curso"
                ? "Finalizado"
                : "En Curso"
          }
          : p
      );

      return proyectos.filter((p) => p.disponible);
    },

    buscarProyecto: (texto) => {

      if (!texto.trim()) {
        return proyectos.filter((p) => p.disponible);
      }

      return proyectos.filter(
        (p) =>
          p.disponible &&
          p.titulo
            .toLowerCase()
            .includes(texto.trim().toLowerCase())
      );
    }
  };

})();