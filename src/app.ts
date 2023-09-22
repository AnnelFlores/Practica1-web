import { Usuario } from './03/interfaces/usuario-interface';  
import { displayServicesWithForEach, displayServicesWithForIn, displayServicesWithForOf } from './03/function/funciones';
  const Usuariox: Usuario[] = [
    {
        id: 1,
        nombre: 'Annel',
        apellido: 'Flores',
        telefono: '09678686867',
        correo: 'isa@gmail.com',
        rol: 'cliente',
        
    },
    {
        id: 2,
        nombre: 'Marcos',
        apellido: 'Proaño',
        telefono: '09678436957',
        correo: 'mar@gmail.com',
        rol: 'administrador',
    },
    {
        id: 3,
        nombre: 'Juan',
        apellido: 'Loor',
        telefono: '09678686867',
        correo: 'juan@gmail.com',
        rol: 'cliente',
        
    },
    {
        id:4,
        nombre: 'Annel',
        apellido: 'Flores',
        telefono: '0968829506',
        correo: 'annel@gmail.com',
        rol: 'administrador',
        
    },
    {
        id:5,
        nombre: 'Diego',
        apellido: 'Arteaga',
        telefono: '0969628066',
        correo: 'Diego12@gmail.com',
        rol: 'cliente',
        
    },

  ];
displayServicesWithForEach(Usuariox);
displayServicesWithForIn(Usuariox);
displayServicesWithForOf(Usuariox);