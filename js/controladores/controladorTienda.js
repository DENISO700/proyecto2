var url = "../TIENDA/php/API/Empresas/API-empresas.php";
var url2 = "../TIENDA/php/API/Administrador/API-categorias.php";
var url3 = "../TIENDA/php/API/Usuarios/API-promocionesFavoritas.php";
var url4 = "../TIENDA/php/API/Usuarios/API-carrito.php";
var url5 = "../TIENDA/php/API/Empresas/API-comentarios.php";
var url6 = "../TIENDA/php/API/Usuarios/API-usuarios.php";
var url7 = "../TIENDA/php/API/Empresas/API-promociones.php";
var empresas = [];
var categorias = [];

var comentarios = [];
var usuario = [];

var valor;

var indice;

var promoId, empId;

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));


};

var id = getParameterByName('id');

////////////////////////////////////////////////////////////////////////////
function obtenerUsuario() {

    //Peticion Asincrona
    axios({

        method: 'GET', //metodo de solicitud
        url: url6 + `?id=${id}`, //url del API
        responseType: 'json', //tipo de respuesta
    }).then(res => { //inicia la promesa
        this.usuario = res.data;


    }).catch(error => { //captura de errores
        console.error(error); //imprime un erro en caso de existir
    });



}

obtenerUsuario();

////////////////////////////////////////////////////////////////////
//Funcion llenar Group Button
function obtenerCategorias() {

    //Peticion Asincrona
    axios({

        method: 'GET', //metodo de solicitud
        url: url2, //url del API
        responseType: 'json', //tipo de respuesta
    }).then(res => { //inicia la promesa


        document.getElementById("list-group-men").innerHTML = ``;

        for (const keyCat in res.data) {
            document.getElementById("list-group-men").innerHTML +=
                `
            <div class="list-group-collapse sub-men">
            <a class="list-group-item list-group-item-action" href="#sub-men1" data-toggle="collapse"  >${res.data[keyCat].nombre}
        </a>

         
            </div>
        </div>
        
        
        `;
        }



    }).catch(error => { //captura de errores
        console.error(error); //imprime un erro en caso de existir
    });



}

obtenerCategorias();
/////////////////////CONTROLADOR TIENDA////////////////////////////////

function obtenerEmpresas() {

    //Peticion Asincrona
    axios({

        method: 'GET', //metodo de solicitud
        url: url, //url del API
        responseType: 'json', //tipo de respuesta
    }).then(res => { //inicia la promesa



        this.empresas = res.data; //asignamos a el arreglo usuarios los valores de la respuesta
        CeldasTienda();
        listaTienda();


    }).catch(error => { //captura de errores
        console.error(error); //imprime un erro en caso de existir
    });

}

obtenerEmpresas();


//////////////////////////////////////////////////////////////

function regresar() {

    document.getElementById("navbar-menu").innerHTML +=

        `
    
        <ul class="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp" style="color: white;">

        <li class="nav-item"><a class="nav-link" href="#" onclick=" window.history.back();"><i class="fa fa-undo" ></i>&nbsp;&nbsp;Regresar</a></li>

    </ul>
    
    `

}

//Crea la vista en celdas de los productos
function CeldasTienda() {

    document.getElementById("celdas").innerHTML = "";




    for (const key in empresas) {
        for (const key2 in empresas[key].promociones) {

            let precio = empresas[key].promociones[key2].precio;
            let rebaja = empresas[key].promociones[key2].porcentaje;

            let promocion = precio - precio * rebaja;

            document.getElementById("celdas").innerHTML += `
    
            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4">
            <div class="products-single fix">
                <div class="box-img-hover">
    
                    <img src="${empresas[key].promociones[key2].foto}" class="img-fluid" alt="Image">
                    <div class="mask-icon">
                        <ul>
    
                            <li><a href="javascript:void(0);" data-toggle="tooltip" data-placement="right" title="Favoritos" onclick = "promosFav('${key}','${key2}');" ><i class="far fa-heart"></i></a></li>
                        </ul>
                        <a class="cart" href="javascript:void(0);" onclick = "añadirCarrito('${key}','${key2}');">Agregar al Carrito</a>
                    </div>
                </div>
                <div class="why-text ">
                    <h4>${empresas[key].promociones[key2].nombre}</h4>
                    <h5>$ ${promocion}</h5>
                </div>
            </div>
        </div>
            
            
            
            `;

        }
    }






}

////////////////////////////////////////////////////////////////////

//Crea la vista en filas de los productos
function listaTienda() {

    document.getElementById("list-view").innerHTML = "";




    for (const key in empresas) {
        for (const key2 in empresas[key].promociones) {


            let precio = empresas[key].promociones[key2].precio;
            let rebaja = empresas[key].promociones[key2].porcentaje;

            let promocion = precio - precio * rebaja;

            document.getElementById("list-view").innerHTML += `
        
                <div class="list-view-box">
        
                <div class="row">
        
                    <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4">
        
                        <div class="products-single fix">
        
                            <div class="box-img-hover ">
        
                                <img src="${empresas[key].promociones[key2].foto}" class="w-100" alt="Image">
                                <div class="mask-icon">
                                    <ul>
        
                                        <li><a href="javascript:void(0);" data-toggle="tooltip" data-placement="right" title="Favoritos" onclick = "promosFav('${key}','${key2}');"><i class="far fa-heart"></i></a></li>
                                    </ul>
        
                                </div>
                            </div>

                           

                   

                            
                        </div>
                    </div>
        
                    <div class="col-sm-6 col-md-6 col-lg-8 col-xl-8">
                        <div class="why-text full-width">
                            <h4>${empresas[key].promociones[key2].nombre}</h4>
                            <h5> <del>$ ${empresas[key].promociones[key2].precio}  </del>$ ${promocion}</h5>
                            <p>${empresas[key].promociones[key2].descripcion} </p>
                            <a class="btn hvr-hover" href="javascript:void(0);" onclick = "añadirCarrito('${key}','${key2}');">Agregar al Carrito</a>
                            <a class="btn hvr-hover" href="javascript:void(0);" data-toggle="modal" data-target="#exampleModalScrollable" style="cursor:pointer" onclick="Modal('${key}','${key2}');cargarSucursales('${key}','${key2}');">Ver mas Detalles</a>
                            <a class="btn hvr-hover" href="javascript:void(0);"  onclick="comentar('${key}','${key2}');" >Ver Comentarios</a>
                         
                     
                      
                      
                            </div>
                    </div>
        
                </div>
        
            </div>
                
                
                `;






        }
    }
















}

/////////////////////////////////////////////////////////////////////////

//Funcion que muestra las categorias





////////////////////////////////////////////////////////////////////////////

//Funcion que muestra los comentarios

function comentar(empresa, promo) {



    //Peticion Asincrona
    axios({

        method: 'GET', //metodo de solicitud
        url: url5 + `?id=${empresa}&index=${promo}`, //url del API
        responseType: 'json', //tipo de respuesta
    }).then(res => { //inicia la promesa

        document.getElementById("comentarios2").innerHTML = "";


        for (const key in res.data) {
            document.getElementById("comentarios2").innerHTML +=
                `
    <div class="media mb-3">
    <div class="mr-2">
        <img class="rounded-circle border p-1" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_160c142c97c%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_160c142c97c%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.5546875%22%20y%3D%2236.5%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
            alt="Generic placeholder image">
    </div>
    <div class="media-body">
        <p>${res.data[key].contenido}
        </p>
        <small class="text-muted">Posted by ${res.data[key].usuario}</small><br>
        <small class="text-muted">Calificacion  ${res.data[key].calificacion} Estrellas</small>
    </div>
</div>



`;
        }





        $('#exampleModalScrollable2').modal('show'); // abrir




    }).catch(error => { //captura de errores
        console.error(error); //imprime un erro en caso de existir
    });



    document.getElementById("nuevo").innerHTML =

        `
    
    
    <div class="px-0">



                     
    <div class="input-group mb-3">
 
      <input type="text" class="form-control" placeholder="Nuevo Comentario" id="context"><br>

      <div class="input-group-append">
          <button type="button"  class="btn btn-outline-danger" onclick="nuevoComentario('${empresa}','${promo}');"><i class="far fa-paper-plane"></i></button>                            
          </div>

        </div>
       </div>
    
    `


}

function estrellas(id) {


    $('#Estrellas' + id).starrr({
        rating: 3,
        change: function(e, valor) {
            alert(valor);

        }

    });



}


////////////////////////////////////////////////////////////////////////
//Funcion que genra las imagenes
function Carrusel(index, c) {


    document.getElementById("img").innerHTML = `      
    <div class="text-center m-auto">
        <img src="${empresas[index].promociones[c].imagenes[0]}" class=" d-block w-75 h-75" >
    </div>
  

`


}

//////////////////////////////////////////////////////////////////////////

function completar() {

    const formulario = document.querySelector('#formulario');
    const boton = document.querySelector('#boton');
    const resultado = document.querySelector('#browsers');
    resultado.innerHTML = "";
    const text = formulario.value.toLowerCase();



    for (let index = 0; index < empresas.length; index++) {
        for (let user of empresas[index].promociones) {
            let valor = user.nombre.toLowerCase();
            if (valor.indexOf(text) !== -1) {
                resultado.innerHTML +=
                    `
                        <option value="${user.nombre} ">
                         
                `;
            };
        };
    }
    if (resultado.innerHTML === "") {
        resultado.innerHTML +=
            `
        <li>Producto No encontrada</li>
               
        `;
    };
}

function buscar() {

    //Peticion Asincrona
    //    axios({

    //       method: 'GET', //metodo de solicitud
    //      url: url, //url del API
    //    responseType: 'json', //tipo de respuesta
    //  }).then(res => { //inicia la promesa



    valor = document.getElementById('formulario').value;



    for (var es = 0; es < empresas.length; es++) {

        for (var pr = 0; pr < empresas[es].promociones.length; pr++) {


            if (empresas[es].promociones[pr].nombre == valor) {


                // promoId = empresas[es].promociones[pr];
                empId = empresas[es].promociones[pr].nombre;



                // };



            }






        }


        //console.log(promoId);




        //}).catch(error => { //captura de errores
        //console.error(error); //imprime un erro en caso de existir
        // });



    }




}


function limpiar() {


    document.getElementById('formulario').value = "";
    document.getElementById('browsers').innerHTML = "";



}

//////////////////////////////////////////////////////////








//FUNCIONES DE GUARDAR



function nuevoComentario(empresa, promo) {


    let comentario = {

        "usuario": usuario.correo,
        "calificacion": document.getElementById("valor").value,
        "contenido": document.getElementById("context").value
    };


    //Peticion Asincrona
    axios({

        method: 'POST', //metodo de solicitud
        url: url5 + `?id=${empresa}&index=${promo}`, //url del API
        responseType: 'json', //tipo de respuesta
        data: comentario
    }).then(res => { //inicia la promesa

        console.log(res);
        comentar(empresa, promo);


    }).catch(error => { //captura de errores
        console.error(error); //imprime un erro en caso de existir
    });
}


//fUNCION PARA AGREGAR A FAVORITOS las promos

function promosFav(j, l) {

    let promoFav = {


        categoria: empresas[j].promociones[l].categoria,
        nombre: empresas[j].promociones[l].nombre,
        precio: empresas[j].promociones[l].precio,
        porcentaje: empresas[j].promociones[l].porcentaje,
        descripcion: empresas[j].promociones[l].descripcion,
        inicio: empresas[j].promociones[l].inicio,
        final: empresas[j].promociones[l].final,
        foto: empresas[j].promociones[l].foto,

        sucursales: empresas[j].promociones[l].sucursales,

        imagenes: empresas[j].promociones[l].imagenes,


    }


    //Peticion Asincrona
    axios({

        method: 'POST', //metodo de solicitud
        url: url3 + `?id=${id}`, //url del API
        responseType: 'json', //tipo de respuesta
        data: promoFav
    }).then(res => { //inicia la promesa

        console.log(res);


    }).catch(error => { //captura de errores
        console.error(error); //imprime un erro en caso de existir
    });



}


///////////////////////////////////////////////

//funcion agregar al carrito
function añadirCarrito(j, l) {

    let carrito = {

        categoria: empresas[j].promociones[l].categoria,
        nombre: empresas[j].promociones[l].nombre,
        precio: empresas[j].promociones[l].precio,
        porcentaje: empresas[j].promociones[l].porcentaje,
        descripcion: empresas[j].promociones[l].descripcion,
        inicio: empresas[j].promociones[l].inicio,
        final: empresas[j].promociones[l].final,
        foto: empresas[j].promociones[l].foto,

        sucursales: empresas[j].promociones[l].sucursales,

        imagenes: empresas[j].promociones[l].imagenes,


    }

    //Peticion Asincrona
    axios({

        method: 'POST', //metodo de solicitud
        url: url4 + `?id=${id}`, //url del API
        responseType: 'json', //tipo de respuesta
        data: carrito
    }).then(res => { //inicia la promesa

        console.log(res);


    }).catch(error => { //captura de errores
        console.error(error); //imprime un erro en caso de existir
    });

}


//generar la modal para ver sucursales de las empresas 
function Modal(k, j) {


    document.getElementById("cuerpo").innerHTML =

        `      
       

          <div class="col-4  p-1"   >
            <img src="${empresas[k].promociones[j].foto}" class="w-75 imagen-logo" >
          </div>
    
        <div class="col-4  datos-empresa">
              <div class="datos-titulo">
              <h1 >${empresas[k].promociones[j].nombre}</h1>
             </div>
          
              <p> ${empresas[k].promociones[j].descripcion}</p>
             <p> Precio: $ ${empresas[k].promociones[j].precio}</p>
    
           
         </div>

        <div class="col-4 redes-empresa">

        <h1>PERIODO PROMOCION</h1>
        
         <div class="row ">

         <div class="col-12  datos-empresa">
         <p> Inicio: &nbsp&nbsp&nbsp&nbsp${empresas[k].promociones[j].inicio} </p>

        </div>

                    
         </div>
         <div class="row ">
         <div class="col-12  datos-empresa">
         <p>Final: &nbsp&nbsp&nbsp&nbsp${empresas[k].promociones[j].final} </p>

        </div>
        
       </div>
     
     </div>
    
       
    </div>

      
        <hr>
    
    `;








}


///////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////

var x = document.getElementById("demo");

function cargarmap(k, j) {
    var locacion = document.getElementById("sucursal").value;
    navigator.geolocation.getCurrentPosition(showPosition, showError);
    //Funcion para mostrar posicion
    function showPosition(position) {
        lat = empresas[k].promociones[j].sucursales[locacion].latitud; //Valor de la latitud
        lon = empresas[k].promociones[j].sucursales[locacion].longitud; //Valor de la longitud
        latlon = new google.maps.LatLng(lat, lon)
        mapholder = document.getElementById('mapholder')
        mapholder.style.height = '420px';
        mapholder.style.width = '630px';
        var myOptions = {
            center: latlon,
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            navigationControlOptions: { style: google.maps.NavigationControlStyle.SMALL }
        };
        var map = new google.maps.Map(document.getElementById("mapholder"), myOptions);
        var marker = new google.maps.Marker({ position: latlon, map: map, title: "Aqui estamos!" });
    }
    //Funcion de Muestra mensajes por si hay error
    function showError(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                x.innerHTML = "Denegada la peticion de Geolocalización en el navegador."
                break;
            case error.POSITION_UNAVAILABLE:
                x.innerHTML = "La información de la localización no esta disponible."
                break;
            case error.TIMEOUT:
                x.innerHTML = "El tiempo de petición ha expirado."
                break;
            case error.UNKNOWN_ERROR:
                x.innerHTML = "Ha ocurrido un error desconocido."
                break;
        }
    }
}



///////////////////////////////


function cargarSucursales(k, j) {

    //Peticion Asincrona
    axios({

        method: 'GET', //metodo de solicitud
        url: url7 + `?id=${k}&index=${j}`, //url del API
        responseType: 'json', //tipo de respuesta
    }).then(res => { //inicia la promesa


        document.getElementById("mapholder").innerHTML = "";
        document.getElementById("date").innerHTML = "";

        document.getElementById("img").innerHTML =
            `
        <select class="custom-select select" id="sucursal" onchange="cargarmap('${k}','${j}');Carrusel('${k}','${j}');">
        <option selected>Sucursal</option>
       
      </select>
        `


        for (var key in res.data.sucursales) {
            document.getElementById("sucursal").innerHTML +=

                `  <option value="${key}">${res.data.sucursales[key].nombreSucursal}</option>`;
        }

    }).catch(error => { //captura de errores
        console.error(error); //imprime un erro en caso de existir
    });






}

////////////////////////////////////////////////////////////////////////
//Funcion que genra las imagenes
function Carrusel(k, j) {

    //Peticion Asincrona
    axios({

        method: 'GET', //metodo de solicitud
        url: url7 + `?id=${k}&index=${j}`, //url del API
        responseType: 'json', //tipo de respuesta
    }).then(res => { //inicia la promesa

        var sucu = document.getElementById("sucursal").value;

        document.getElementById("date").innerHTML = `      
            <div class=" sucursal-datos ">
        
           
              <div class="mt-2 p-2 datos-sucursales-generales" >
    
    
                  <p class="da">Correo</p>
                  <p>${res.data.sucursales[sucu].correo}</p>
               
                  <p class="da">Telefono</p>
                  <p>${res.data.sucursales[sucu].telefono}</p>
                  <p class="da">Direccion</p>
                  <p>${res.data.sucursales[sucu].direccion}</p>
                 
                 
                </div>
    
            </div>
    
           `


    }).catch(error => { //captura de errores
        console.error(error); //imprime un erro en caso de existir
    });









}