function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));


};

var id = getParameterByName('id');


var url = "../TIENDA/php/API/Usuarios/API-carrito.php";

var carrito = [];

function obtenerCarrito() {

    //Peticion Asincrona
    axios({

        method: 'GET', //metodo de solicitud
        url: url + `?id=${id}`, //url del API
        responseType: 'json', //tipo de respuesta
    }).then(res => { //inicia la promesa

        document.getElementById("cuerpo").innerHTML = ``;

        for (const key in res.data) {
            document.getElementById("cuerpo").innerHTML +=
                `
        
                <tr>
                <td class="thumbnail-img">
                    <a href="#">
                        <img class="img-fluid" src="${res.data[key].foto}"  />
                    </a>
                </td>
                <td class="name-pr">
                    <a href="#">
                    <p class="text-center">${res.data[key].nombre}</p> 
                    </a>
                </td>
                <td class="price-pr">
                <input type="text" id="precio" size="4" value="${res.data[key].precio}" disabled  class="c-input-text qty text">
                </td>
               
               
                <td class="remove-pr">
                   
        
                <button type="button" class="btn btn-danger" onclick="eliminarCarrito('${key}');">Eliminar</button>
        
                </td>
            </tr>
        
        
        `;

        }




    }).catch(error => { //captura de errores
        console.error(error); //imprime un erro en caso de existir
    });

}

obtenerCarrito();
//////////////////////////////////////////////////////////////

function eliminarCarrito(key) {

    //Peticion Asincrona
    axios({

        method: 'DELETE', //metodo de solicitud
        url: url + `?id=${id}&index=${key}`, //url del API
        responseType: 'json', //tipo de respuesta
    }).then(res => { //inicia la promesa


        console.log(res.data);
        obtenerCarrito();


    }).catch(error => { //captura de errores
        console.error(error); //imprime un erro en caso de existir
    });
}



//////////////////////////////CONTROLADOR CARRITO////////////////////

function regresar() {

    document.getElementById("navbar-menu").innerHTML +=

        `
    
        <ul class="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp" style="color: white;">
        <li class="nav-item"><a class="nav-link" href="compra.php?id=${id}"><i class="fa fa-usd" aria-hidden="true"></i>&nbsp;&nbsp;Hacer Compra </a></li>
        <li class="nav-item"><a class="nav-link" href="tienda.php?id=${id}"><i class="fa fa-shopping-bag" ></i>&nbsp;&nbsp;Tienda </a></li>
        <li class="nav-item"><a class="nav-link" href="#" onclick=" window.history.back();"><i class="fa fa-undo" ></i>&nbsp;&nbsp;Regresar</a></li>

    </ul>
    
    `

}




//Funcion para generar la orden