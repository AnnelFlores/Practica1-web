// Importamos el arreglo
const {usuario} = require("./array");

// Ciclo forEach
console.log("Ciclo forEach");
usuario.forEach(({ id, nombre, apellido, telefono, correo, rol }) => {
    console.log(`id: ${id},
    nombre: ${nombre},
    apellido: ${apellido},
    telefono: ${telefono},
    correo: ${correo},
    rol: ${rol}`);
});

// Ciclo for in
console.log("Ciclo for in");
for (let i = 0; i < usuario.length; i++) {
    const usuarioObj = usuario[i];
    console.log(`id: ${usuarioObj.id},
    nombre: ${usuarioObj.nombre}, 
    apellido: ${usuarioObj.apellido},
    telefono: ${usuarioObj.telefono},
    correo: ${usuarioObj.correo},  
    rol: ${usuarioObj.rol} `);
}

// Ciclo for of
console.log("Ciclo for of");
for (const usuarioObj of usuario) {
    console.log(`id: ${usuarioObj.id},
    nombre: ${usuarioObj.nombre}, 
    apellido: ${usuarioObj.apellido},
    telefono: ${usuarioObj.telefono},
    correo: ${usuarioObj.correo},  
    rol: ${usuarioObj.rol} `);
}
