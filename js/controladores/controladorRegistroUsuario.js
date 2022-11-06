var url = "../TIENDA/php/API/Usuarios/API-usuarios.php"




/////////////////CONTROLADOR REGISTRO USUARIO///////


function nuevoUsuario() {

    let usuario = {
        nombre: document.getElementById('user').value,
        correo: document.getElementById('correo').value,
        contraseña: document.getElementById('contraseña').value,
        telefono: document.getElementById('telefono').value,
        empresasFavoritas: [],
        carrito: [],
        promocionesFavoritas: []
    };

    axios({
        method: 'POST', //metodo de solicitud
        url: url, //url del API
        responseType: 'json', //tipo de respuesta
        data: usuario //mandamos el parametro a guardar 
    }).then(res => { //inicia la promesa
        console.log(res); //imprimimos en consola el valor de la funcion flecha
        alert("Usuario agregado con exito");
    }).catch(error => { //captura de errores
        console.error(error); //imprime un erro en caso de existir

    });






}