var planes, empresas, categorias, usuarios;
var localStorage = window.localStorage;

var url = "../TIENDA/php/API/Usuarios/API-empresasFavoritas.php";

var empFav = [];

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));


};

var id = getParameterByName('id');





//////////////////////////////////////////////////////////////
function obtenerEmpresasFavoritas() {

    //Peticion Asincrona
    axios({

        method: 'GET', //metodo de solicitud
        url: url + `?id=${id}`, //url del API
        responseType: 'json', //tipo de respuesta
    }).then(res => { //inicia la promesa

        document.getElementById("EmpFav").innerHTML = ``;


        for (const key in res.data) {

            document.getElementById("EmpFav").innerHTML +=
                `
        <tr>
        <td class="thumbnail-img">
            <a href="#">
                <img class="w-100" SRC = "${res.data[key].logo}" alt="" />
            </a>
        </td>
        <td class="name-pr">
            <a href="#">
            ${res.data[key].nombreEmpresa}
    </a>
        </td>
        <td class="price-pr">
            <p>${res.data[key].descripcion}</p>
        </td>
        <td class="quantity-box">
        <p>${res.data[key].ciudad}</p>
        </td>

        <td class="quantity-box">
        <button type="button" class="btn btn-danger" onclick="eliminarEmpresaFav('${key}');">Eliminar</button>
        </td>
        
    </tr>


`;

        }

    }).catch(error => { //captura de errores
        console.error(error); //imprime un erro en caso de existir
    });

}

obtenerEmpresasFavoritas();



function eliminarEmpresaFav(key) {

    //Peticion Asincrona
    axios({

        method: 'DELETE', //metodo de solicitud
        url: url + `?id=${id}&index=${key}`, //url del API
        responseType: 'json', //tipo de respuesta
    }).then(res => { //inicia la promesa


        console.log(res.data);
        obtenerEmpresasFavoritas();


    }).catch(error => { //captura de errores
        console.error(error); //imprime un erro en caso de existir
    });
}


/////////////CONTROLADOR EMPRESAS FAVORITAS//////////////////////

function regresar() {

    document.getElementById("navbar-menu").innerHTML +=

        `
    
        <ul class="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp" style="color: white;">

        <li class="nav-item"><a class="nav-link" href="#" onclick=" window.history.back();"><i class="fa fa-undo" ></i>&nbsp;&nbsp;Regresar</a></li>

    </ul>
    
    `

}