var url = "../TIENDA/php/API/Usuarios/API-usuarios.php";
var usuario = [];

var indice;

test=['Denis Ordoñez','sevilladenis97@gmail.com','9517-3789']

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));


};

var id = getParameterByName('id');



function obtenerUsuario() {

    //Peticion Asincrona
    axios({

        method: 'GET', //metodo de solicitud
        url: url + `?id=${id}`, //url del API
        responseType: 'json', //tipo de respuesta
    }).then(res => { //inicia la promesa

        document.getElementById("datos").innerHTML =

            `
    
    <div class="col-md-12 m-auto text-center">
    <h1 class=" mt-3" style="font-weight: bold;">${res.data.nombre}</h1>
</div>

<div class="col-md-12 m-auto">
    <img src="images/user.png" class="w-75 my-3 ml-5 img-thumbnail" style="border-radius: 150px;">
</div>

<div class="col-md-12 mb-3">
    <h1> <b>Correo : </b>${res.data.correo}</h1>
</div>

<div class="col-md-12 mb-3">
    <h1> <b>Telefono: </b>${res.data.telefono}</h1>
</div>

<div class="col-md-12 mb-3">
    <h1><b>Direccion:  </b> Col. La Peña</h1>
</div>

<div class="col-md-12 mb-3">
    <h1> <b>Fecha de Inicio:</b> 25/07/2019</h1>
</div>

<div class="col-md-12 mb-3">
    <h1><b> Ultima compra:</b> 06/11/2019</h1>
</div>
    
    `



        document.getElementById("izquierda").innerHTML = "";
        document.getElementById("derecha").innerHTML = "";

        document.getElementById("izquierda").innerHTML =

            `
    
    <div class="row">
    <!-- Editar Perfil -->
    <div class="col-xl-10 col-md-10 mx-auto mb-4">
        <div class="card border-left-primary shadow h-100 py-2">
            <div class="card-body">
                <div class="account-box">
                    <div class="service-box">
                        <div class="service-icon">
                            <a href="editarUsuario.php?id=${id}"><i class="fa fa-pencil-square-o" ></i></a>
                        </div>
                        <div class="service-desc">
                            <h4>Editar Perfil</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


  
    
    `


        document.getElementById("derecha").innerHTML =

            `
    <div class="row">

    <!-- Tienda -->
    <div class="col-xl-10 col-md-10 mx-auto mb-4">
        <div class="card border-left-warning shadow h-100 py-2">
            <div class="card-body">
                <div class="account-box">
                    <div class="service-box">
                        <div class="service-icon">
                            <a href="tienda.php?id=${id}"><i class="fa fa-paperclip" ></i></a>
                        </div>
                        <div class="service-desc">
                            <h4>Tienda</h4>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>


   
    `





    }).catch(error => { //captura de errores
        console.error(error); //imprime un erro en caso de existir
    });




}

obtenerUsuario();

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





///////////////////////////////////////////////////////////////////////////