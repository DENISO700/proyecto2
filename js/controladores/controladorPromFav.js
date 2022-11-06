function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));


};

var id = getParameterByName('id');


var url = "../TIENDA/php/API/Usuarios/API-promocionesFavoritas.php";



function obtenerPromoFavoritas() {

    //Peticion Asincrona
    axios({

        method: 'GET', //metodo de solicitud
        url: url + `?id=${id}`, //url del API
        responseType: 'json', //tipo de respuesta
    }).then(res => { //inicia la promesa

        document.getElementById("PromFav").innerHTML = ``;

        for (const key in res.data) {

            document.getElementById("PromFav").innerHTML +=
                `
            <tr>

              <td class="thumbnail-img">
                     <a href="#">
                   <img class="w-100" src="${res.data[key].foto}" alt="" />
                      </a>
              </td>

              <td class="name-pr">
                  <a href="#">
                  ${res.data[key].descripcion}
                  </a>
              </td>

              <td class="price-pr">
              ${res.data[key].precio}
              </td>

              <td class="quantity-box">
              <button type="button" class="btn btn-danger" onclick="eliminarPromoFav('${key}');">Eliminar</button>
              </td>

             


             </tr>
    
    
    `;

        }




    }).catch(error => { //captura de errores
        console.error(error); //imprime un erro en caso de existir
    });

}


obtenerPromoFavoritas();
//////////////////////////////////////////////////////////////

function regresar() {

    document.getElementById("navbar-menu").innerHTML +=

        `
    
        <ul class="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp" style="color: white;">

        <li class="nav-item"><a class="nav-link" href="#" onclick=" window.history.back();"><i class="fa fa-undo" ></i>&nbsp;&nbsp;Regresar</a></li>

    </ul>
    
    `

}



////////////////////////CONTROLADOR PROMOCIONES FAVORITAS//////////////////////////////////////


function eliminarPromoFav(key) {

    //Peticion Asincrona
    axios({

        method: 'DELETE', //metodo de solicitud
        url: url + `?id=${id}&index=${key}`, //url del API
        responseType: 'json', //tipo de respuesta
    }).then(res => { //inicia la promesa


        console.log(res.data);
        obtenerPromoFavoritas();


    }).catch(error => { //captura de errores
        console.error(error); //imprime un erro en caso de existir
    });
}