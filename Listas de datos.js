function agregarContacto(nombreApellido) {
    listaContactos.push(nombreApellido);
  }
  
  function borrarContacto(nombreApellido) {
    const indice = listaContactos.indexOf(nombreApellido);
    if (indice !== -1) {
      listaContactos.splice(indice, 1);
    }
  }
  
  function imprimirContactos() {
    console.log("Lista de Contactos:");
    for (let contacto of listaContactos) {
      console.log(contacto);
    }
  }
  
  agregarContacto("Laura Martínez");
  
  imprimirContactos();
  
  borrarContacto("María Gómez");
  
  imprimirContactos();

