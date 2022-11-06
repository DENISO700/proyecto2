/////////////////////////////////////////////////////////CONTROLADOR COMPRA/////////////////////////////


function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));


};

var id = getParameterByName('id');


var url = "../TIENDA/php/API/Usuarios/API-carrito.php";
var url2 = "../TIENDA/php/API/Usuarios/API-usuarios.php";

var carrito = [];

var usuario = [];

function obtenerCarrito() {

    //Peticion Asincrona
    axios({

        method: 'GET', //metodo de solicitud
        url: url + `?id=${id}`, //url del API
        responseType: 'json', //tipo de respuesta
    }).then(res => { //inicia la promesa

        this.carrito = res.data;

        document.getElementById("pedido").innerHTML = ``;


        for (const key in res.data) {

            document.getElementById("pedido").innerHTML +=
                `
            <div class="media mb-2 border-bottom">

            <div class="media-body"> <a href="#"> ${res.data[key].nombre}</a>
                <div class="small text-muted">Precio:${res.data[key].precio} <span class="mx-2">|</span> Ctd: 1 <span class="mx-2">|</span> Subtotal: $80.00</div>
            </div>
        </div>
        
        `;


        }




    }).catch(error => { //captura de errores
        console.error(error); //imprime un erro en caso de existir
    });

}

obtenerCarrito();

function obtenerUsuario() {

    //Peticion Asincrona
    axios({

        method: 'GET', //metodo de solicitud
        url: url + `?id=${id}`, //url del API
        responseType: 'json', //tipo de respuesta
    }).then(res => { //inicia la promesa

        this.usuario = res.data;


        enviarPedido();


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

regresar();

//Funcion que cargara los datso del pedido



/////////////////////////////////////////////////////////////////////////////////

function enviarPedido() {

    let user = {

        nombre: usuario.nombre,
        correo: usuario.correo


    }

    //Peticion Asincrona
    axios({


        method: 'POST', //metodo de solicitud
        url: "simulacionCompra.php", //url del API
        responseType: 'json', //tipo de respuesta
        data: user
    }).then(res => { //inicia la promesa

        console.log(res);


        alert("Compra Realizada con Exito");


        window.location.href = `my-account.php?id=${id}`;





    }).catch(error => { //captura de errores
        console.error(error); //imprime un erro en caso de existir
    });



}