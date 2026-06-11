export const authService = (() => {
    const usuarios = [
        {
            id: 1,
            user: "jairo-unju",
            password: "123",
            nombre: "Jairo Almazán",
            dni: "11111111",
            rol: "Estudiante",
            institucion: "Facultad de Ingeniería - UNJu"
        },
        {
            id: 2,
            user: "cami-unju",
            password: "123",
            nombre: "Camilla Mansilla",
            dni: "22222222",
            rol: "Estudiante",
            institucion: "Facultad de Ingeniería - UNJu"
        },
        {
            id: 3,
            user: "ale-unju",
            password: "123",
            nombre : "Alessandro Nieves",
            dni: "33333333",
            rol: "Estudiante",
            institucion: "Facultad de Ingeniería - UNJu"
        },
        {
            id: 4,
            user: "mauri-unju",
            password: "123",
            nombre: "Mauricio Salas",
            dni: "44444444",
            rol: "Estudiante",
            institucion: "Facultad de Ingeniería - UNJu"
        },
        {
            id: 5,
            user: "nacho-unju",
            password: "123",
            nombre: "Ignacio Cardozo",
            dni: "55555555",
            rol: "Estudiante",
            institucion: "Facultad de Ingeniería - UNJu"
        },
    ];

    return {
        login: (user, password) => {

            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const encontrado = usuarios.find(
                        (u) => u.user === user && u.password === password
                    );

                    if (encontrado) {
                        resolve(encontrado);
                    } else {
                        reject(new Error('Usuario o contraseña incorrectos'));
                    }
                }, 800);
            });
        }
    };
})();