// Call the dataTables jQuery plugin
$(document).ready(function() {

  cargarUsuarios().then((err)=>{
      console.log(err)
  })

  $('#usuarios').DataTable();

  actualizarEmail();

});

const getHeaders =  () => {
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': localStorage.token
    }
}
const actualizarEmail =  () => {
    document.getElementById('txtEmailUsuario').outerHTML = localStorage.email
}

async function cargarUsuarios() {
 
    const request = await fetch('http://localhost:8080/api/usuarios', {
      method: 'GET',
      headers: getHeaders(),
    });
    const usuarios = await request.json();

    let listaHTML = '';

    for(let usuario of usuarios){
        let usuarioHtml='<tr><td>'+usuario.id+'</td><td>'+usuario.nombre+'</td><td>'+usuario.email+'</td><td>'+usuario.telefono
        +'</td><td><a href="#" onclick="eliminarUsuario('+usuario.id+')" class="btn btn-danger btn-circle"><i class="fas fa-trash"></i></a></td></tr>'
        listaHTML +=usuarioHtml;
}



    console.log(usuarios);
    document.querySelector('#usuarios tbody').outerHTML = listaHTML

}

async function eliminarUsuario(id){

    if(!confirm('Desea Eliminar?')){
        return;
    }

    const request = await fetch('http://localhost:8080/api/usuarios/'+id, {
        method: 'DELETE',
        headers: getHeaders()
    });

    location.reload();

}

