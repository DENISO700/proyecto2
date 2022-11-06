//////////////////////CONTROLADOR REGISTRO PROMOCIONES///////////////////////////////


function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};

var url = "../TIENDA/php/API/Empresas/API-empresas.php";
var url2 = "../TIENDA/php/API/Empresas/API-sucursales.php"
var url3 = "../TIENDA/php/API/Empresas/API-producto.php";
var url4 = "../TIENDA/php/API/Empresas/API-promociones.php";
var id = getParameterByName('id');
var sucursales = [];
var sucPromo = [];
var empresa = [];



//////////////////////////////////////////////////////////////

//Funcion para cargar categorias
function cargarProductos() {


    axios({

        method: 'GET', //metodo de solicitud
        url: url3 + `?id=${id}`, //url del API
        responseType: 'json', //tipo de respuesta

    }).then(res => { //inicia la promesa


        this.empresa = res.data;

        for (const key in res.data) {
            document.getElementById("productos").innerHTML +=

                `  <option value="${key}">${res.data[key].nombre}</option>`;

        }





    }).catch(error => { //captura de errores
        console.error(error); //imprime un erro en caso de existir

    });

}



////////////////////////////////////////////////////////////////////////////////////////////////////

//Funcion Cargar Precio

function Precio() {

    document.getElementById("precioproducto").value = empresa[document.getElementById("productos").value].precio;

    document.getElementById("img").innerHTML = `


    <div class="col-md-12 ">
    <img src="${empresa[document.getElementById("productos").value].foto}" class="w-100 ">
    </div>

`
}
/////////////////////////////////////////////////////////////

//Funcion Cargar Sucursales

function Sucursales() {

    axios({

        method: 'GET', //metodo de solicitud
        url: url2 + `?id=${id}`, //url del API
        responseType: 'json', //tipo de respuesta

    }).then(res => { //inicia la promesa

        this.sucursales = res.data;


        document.getElementById("sucursales").innerHTML = ``;

        for (const key2 in res.data) {
            document.getElementById("sucursales").innerHTML += `
        
            <div>
              <input id="Sucursal${key2}"  type="checkbox" >
              <label for="Sucursal${key2}" style="background-color: white;">${sucursales[key2].nombreSucursal}</label>
            </div>
            `;
        }




    }).catch(error => { //captura de errores
        console.error(error); //imprime un erro en caso de existir

    });


}





/////////////////////////////////

function nuevaPromocion() {

    for (const key5 in sucursales) {
        if (document.getElementById(`Sucursal${key5}`).checked == true) {
            sucPromo.push(sucursales[key5]);
        }
    }

    var indice = document.getElementById("productos").value;
    var precio = document.getElementById("precioproducto").value;
    var promo = document.getElementById("promo").value;
    let promocion = {
        categoria: empresa[indice].categoria,
        nombre: empresa[indice].nombre,
        precio: empresa[indice].precio,
        porcentaje: promo,
        descripcion: empresa[indice].descripcion,
        inicio: document.getElementById("fechainicio").value,
        final: document.getElementById("fechalimite").value,
        foto: empresa[document.getElementById("productos").value].foto,
        sucursales: sucPromo,
        imagenes: [],
        comentarios: []
    };

    axios({

        method: 'POST', //metodo de solicitud
        url: url4 + `?id=${id}`, //url del API
        responseType: 'json', //tipo de respuesta
        data: promocion
    }).then(res => { //inicia la promesa
        console.log(res); //imprimimos en consola el valor de la funcion flecha
        window.history.back();
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