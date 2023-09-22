// utils/displayServices.ts
import { Usuario } from '../interfaces/usuario-interface';

export function displayServicesWithForEach(Usuariox: Usuario[]): void {
  console.log('Recorriendo con forEach:');
  Usuariox.forEach((Usuario, index) => {
    console.log(`[${index}] id: ${Usuario.id}, Nombre: ${Usuario.nombre}, Apellido: ${Usuario.apellido}, Correo: ${Usuario.correo}, Rol: ${Usuario.rol}`);
  });
}

export function displayServicesWithForIn(Usuariox: Usuario[]): void {
  console.log('Recorriendo con for in:');
  for (const index in Usuariox) {
    const Usuario = Usuariox[index];
    console.log(`[${index}] id: ${Usuario.id}, Nombre: ${Usuario.nombre}, Apellido: ${Usuario.apellido}, Correo: ${Usuario.correo}, Rol: ${Usuario.rol}`);
  }
}

export function displayServicesWithForOf(Usuariox: Usuario[]): void {
  console.log('Recorriendo con for of:');
  let index = 0;
  for (const Usuario of Usuariox) {
    console.log(`[${index}] id: ${Usuario.id}, Nombre: ${Usuario.nombre}, Apellido: ${Usuario.apellido}, Correo: ${Usuario.correo}, Rol: ${Usuario.rol}`);
    index++;
  }
}
