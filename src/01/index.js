const {buscarUsuarioId} = require ('./array');
const {usuario} = require ("./array");
buscarUsuarioId(2,usuario, (err,usuario) => {
    if (err){
        console.err("Error", err);
    }
    else{
        console.log('Usuario econtrado', usuario);
    }
});