<h1>Juego de eleccion amigo secreto</h1>
# Amigo Secreto

Este proyecto es una aplicación web simple para organizar un **amigo secreto**. Permite ingresar los nombres de tus amigos, mostrarlos en una lista y sortear uno al azar.

## Tecnologías usadas

- HTML5
- CSS3
- JavaScript 

## Estructura del proyecto

├── index.html # Página principal
├── style.css # Estilos del proyecto
├── app.js # Lógica de JavaScript
└── assets/ # Imágenes utilizadas
## Funcionalidades

1. **Agregar amigos**
   - Escribe el nombre de un amigo en el campo de texto.
   - Presiona el botón **Añadir**.
   - El nombre se agrega a la lista y se muestra en pantalla.
   - Validación: no se permite agregar nombres vacíos.

2. **Sortear amigo secreto**
   - Presiona el botón **Sortear amigo**.
   - Se selecciona un amigo al azar de la lista y se muestra el resultado.
   - Validación: si no hay amigos, muestra un mensaje de alerta.

## Uso

1. Abre `index.html` en un navegador moderno.
2. Ingresa los nombres de tus amigos uno a uno.
3. Presiona **Sortear amigo** para descubrir quién es tu amigo secreto.

## Notas

- Las funciones `agregarAmigo()` y `sortearAmigo()` se llaman desde los botones en HTML mediante `onclick`.
- El array de amigos se mantiene en memoria mientras la página esté abierta.
