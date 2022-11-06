/////CONTROLADOR EDITAR EMPRESA////////

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};

var url = "../TIENDA/php/API/Empresas/API-empresas.php";
var url2 = "../TIENDA/php/API/Administrador/API-categorias.php"
var url3 = "../TIENDA/php/API/Empresas/API-producto.php";
var id = getParameterByName('id');
var empresa = [];


function cargarCategorias() {


    axios({

        method: 'GET', //metodo de solicitud
        url: url2, //url del API
        responseType: 'json', //tipo de respuesta

    }).then(res => { //inicia la promesa

        console.log(res.data);

        for (const key in res.data) {
            document.getElementById("categorias").innerHTML +=

                `  <option value="${res.data[key].nombre}">${res.data[key].nombre}</option>`;
        }




    }).catch(error => { //captura de errores
        console.error(error); //imprime un erro en caso de existir

    });





}

cargarCategorias();



window.onload = Inicializar;

var Fichero;

var storageRef;

var imagenRef;



function Inicializar() {


    fichero = document.getElementById("imgInp");


    //fichero.addEventListener("change", subirImagenFirebase, false);

    storageRef = firebase.storage().ref();

}





function subirImagenFirebase1() {

    var imagenSubir = fichero.files[0];


    var uploadTask = storageRef.child('imagenes/' + imagenSubir.name).put(imagenSubir);


    uploadTask.on('state_changed',

        function(snapshot) {



        },
        function(error) {

            // alert("Hubo un error")

        },
        function() {




            storageRef.child('imagenes/' + imagenSubir.name).getDownloadURL().then(function(url) {

                // Or inserted into an <img> element:
                var img = document.getElementById('blah');

                img.src = url;


            }).catch(function(error) {
                // Handle any errors
            });






        });





};


function nuevoProducto() {


    let producto = {
        categoria: document.getElementById('categorias').value,
        nombre: document.getElementById('nombreProducto').value,
        precio: document.getElementById('precioproducto').value,
        cantida: document.getElementById('cantidad').value,
        descripcion: document.getElementById('descripcion').value,
        foto: document.getElementById("blah").getAttribute("src"),
        sucursales: empresa.sucursales,
        imagenes: []
    };


    //Peticion Asincrona
    axios({
        method: 'POST', //metodo de solicitud
        url: url3 + `?id=${id}`, //url del API
        responseType: 'json', //tipo de respuesta
        data: producto
    }).then(res => { //inicia la promesa

        window.history.back();
    }).catch(error => { //captura de errores
        console.error(error); //imprime un erro en caso de existir
    });
}
//////////////////////////////////////////


function regresar() {

    document.getElementById("navbar-menu").innerHTML +=

        `
    
        <ul class="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp" style="color: white;">

        <li class="nav-item"><a class="nav-link" href="#" onclick=" window.history.back();"><i class="fa fa-undo" ></i>&nbsp;&nbsp;Regresar</a></li>

    </ul>
    
    `

}

regresar()