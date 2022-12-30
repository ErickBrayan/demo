$(document).ready(function() {


});

async function agregarUsuarios() {

    let datos = {};
    datos.nombre = document.getElementById('txtNombre').value;
    datos.apellido = document.getElementById('txtApellido').value;
    datos.email = document.getElementById('txtEmail').value;
    datos.password = document.getElementById('txtPassword').value;

    let repetirPassword = document.getElementById('txtRepeatPassword').value;

    if(repetirPassword != datos.password){
        alert('Escribiste diferentes Contraseñas');
        return;
    }

    const request = await fetch('http://localhost:8080/api/usuarios', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },

      body: JSON.stringify(datos)

    });
    alert("La cuenta fue creada con exito!!")
    window.location.href = 'login.html'
}