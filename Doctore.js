// Función para cargar los doctores desde el archivo JSON
function cargarDoctores(callback) {
    fetch('doctores.json')
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => console.error('Error al cargar los doctores:', error));
}

// Función para mostrar los doctores en la página
function mostrarDoctores(doctores) {
    let resultado = '';
    doctores.forEach(doctor => {
        resultado += `<h3>${doctor.nombre}</h3>
                      <p>ID: ${doctor.id}</p>
                      <p>Especialidad: ${doctor.especialidad}</p>
                      <p>Años de Experiencia: ${doctor.experiencia}</p>`;
    });
    document.getElementById('resultadoDoctor').innerHTML = resultado;
}

// Llamar a la función para cargar doctores al cargar la página
window.onload = function() {
    cargarDoctores(mostrarDoctores);
};
