/////////////////////CONTROLADOR REGISTRO SUCURSAL////////////////////////////////////////////



function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));


};

var url = "../TIENDA/php/API/Empresas/API-sucursales.php";
var id = getParameterByName('id');



function nuevaSucursal() {



    let sucursal = {

        nombreSucursal: document.getElementById('nombreSucursal').value,
        correo: document.getElementById('correoSucursal').value,
        telefono: document.getElementById('telefono').value,
        pais: document.getElementById('pais').value,
        ciudad: document.getElementById('ciudad').value,
        direccion: document.getElementById('direccionSucursal').value,
        latitud: document.getElementById('latitud').value,
        longitud: document.getElementById('longitud').value,
    };

    console.log(sucursal);

    axios({

        method: 'POST', //metodo de solicitud
        url: url + `?id=${id}`, //url del API
        responseType: 'json', //tipo de respuesta
        data: sucursal //mandamos el parametro a guardar 
    }).then(res => { //inicia la promesa
        console.log(res); //imprimimos en consola el valor de la funcion flecha

        window.history.back();
    }).catch(error => { //captura de errores
        console.error(error); //imprime un erro en caso de existir

    });



}

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $('#blah').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#imgInp").change(function() {
    readURL(this);
});

function regresar() {

    document.getElementById("navbar-menu").innerHTML +=

        `
    
        <ul class="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp" style="color: white;">

        <li class="nav-item"><a class="nav-link" href="#" onclick=" window.history.back();"><i class="fa fa-undo" ></i>&nbsp;&nbsp;Regresar</a></li>

    </ul>
    
    `

}