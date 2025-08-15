// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
(() => {
  console.log("app.js cargado"); // Útil para verificar que el archivo se carga

  const amigos = [];
  const campoNombre = document.getElementById("amigo");
  const lista = document.getElementById("listaAmigos");
  const resultado = document.getElementById("resultado");

  function renderLista() {
    if (!lista) return;
    lista.innerHTML = "";
    amigos.forEach((amigo, idx) => {
      const li = document.createElement("li");
      li.textContent = amigo;
      li.setAttribute("data-index", idx);
      lista.appendChild(li);
    });
  }

  // Agregar amigo (llamado por el botón "Añadir")
  function agregarAmigo() {
    if (!campoNombre) {
      console.error("No se encontró el input con id='amigo'.");
      return;
    }

    const nombre = campoNombre.value.trim();

    if (!nombre) {
      alert("Por favor, inserte un nombre.");
      return;
    }

    amigos.push(nombre);
    campoNombre.value = "";       // limpiar input
    resultado.innerHTML = "";     // opcional: limpiar resultado anterior
    renderLista();                // refrescar la lista
  }

  // Sortear amigo (llamado por el botón "Sortear amigo")
  function sortearAmigo() {
    if (amigos.length === 0) {
      alert("No hay amigos en la lista para sortear.");
      return;
    }
    const i = Math.floor(Math.random() * amigos.length);
    const elegido = amigos[i];
    if (resultado) {
      resultado.innerHTML = `<li> Tu amigo secreto es: <strong>${elegido}</strong></li>`;
    }
  }

  // Hacer accesibles las funciones para los onclick del HTML
  window.agregarAmigo = agregarAmigo;
  window.sortearAmigo = sortearAmigo;
})();
