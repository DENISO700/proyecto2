/////CONTROLADOR EDITAR USUARIO////////

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));


};

var url = "../TIENDA/php/API/Usuarios/API-usuarios.php";
var id = getParameterByName('id');

var usuario = [];

function editarUsuario() {


    //Peticion Asincrona
    axios({

        method: 'GET', //metodo de solicitud
        url: url + `?id=${id}`, //url del API
        responseType: 'json', //tipo de respuesta
    }).then(res => { //inicia la promesa

        this.usuario = res.data;
        console.log(usuario);

        document.getElementById("user").value = usuario.nombre
        document.getElementById("contraseña").value = usuario.contraseña
        document.getElementById("correo").value = usuario.correo
        document.getElementById("telefono").value = usuario.telefono

    }).catch(error => { //captura de errores
        console.error(error); //imprime un erro en caso de existir
    });


}


function update() {

    let update = {
        nombre: document.getElementById('user').value,
        correo: document.getElementById('correo').value,
        contraseña: document.getElementById('contraseña').value,
        telefono: document.getElementById('telefono').value,

        empresasFavoritas: usuario.empresasFavoritas,
        carrito: usuario.carrito,
        promocionesFavoritas: usuario.promocionesFavoritas

    };

    //Peticion Asincrona
    axios({

        method: 'PUT', //metodo de solicitud
        url: url + `?id=${id}`, //url del API
        responseType: 'json', //tipo de respuesta
        data: update
    }).then(res => { //inicia la promesa

        console.log(res.data);
        alert("Usuario editado con exito");
        location.href = 'login.html';






    }).catch(error => { //captura de errores
        console.error(error); //imprime un erro en caso de existir
    });




}

function regresar() {

    document.getElementById("navbar-menu").innerHTML +=

        `
    
        <ul class="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp" style="color: white;">

        <li class="nav-item"><a class="nav-link" href="#" onclick=" window.history.back();"><i class="fa fa-undo" ></i>&nbsp;&nbsp;Regresar</a></li>

    </ul>
    
    `

}