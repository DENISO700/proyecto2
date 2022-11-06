///////////////////////////////////////////////////////////////////////////////
var url = "../TIENDA/php/API/Empresas/API-empresas.php";
var url2 = "../TIENDA/php/API/Administrador/API-categorias.php";
var url3 = "../TIENDA/php/API/Usuarios/API-empresasFavoritas.php";
var empresas = [];

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));


};

var id = getParameterByName('id');

/////////////////////CONTROLADOR TIENDA////////////////////////////////

function obtenerEmpresas() {

    //Peticion Asincrona
    axios({

        method: 'GET', //metodo de solicitud
        url: url, //url del API
        responseType: 'json', //tipo de respuesta
    }).then(res => { //inicia la promesa



        this.empresas = res.data; //asignamos a el arreglo usuarios los valores de la respuesta
        Celdas();
        lista();


    }).catch(error => { //captura de errores
        console.error(error); //imprime un erro en caso de existir
    });

}



///////////////CONTROLADOR EMPRESAS///////////////////

function regresar() {

    document.getElementById("navbar-menu").innerHTML +=

        `
    
        <ul class="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp" style="color: white;">

        <li class="nav-item"><a class="nav-link" href="#" onclick=" window.history.back();"><i class="fa fa-undo" ></i>&nbsp;&nbsp;Regresar</a></li>

    </ul>
    
    `

}

///////////////////////////////////////////////////////////
function Celdas() {

    document.getElementById("celdas").innerHTML = "";




    for (const key in empresas) {


        document.getElementById("celdas").innerHTML += `

        <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4">
        <div class="products-single fix">
            <div class="box-img-hover">
                <div class="type-lb">

                </div>
                <img src="
                ${empresas[key].logo}" class="img-fluid w-100" >
                <div class="mask-icon">
                    <ul>

                        <li><a href="javascript:void(0);" data-toggle="tooltip" data-placement="right" title="Favoritos" onclick = "empFav('${key}');"><i class="far fa-heart"></i></a></li>
                    </ul>
                    <a class="cart" href="#" data-toggle="modal" data-target="#exampleModalScrollable" style="cursor:pointer" onclick="Modal('${key}');cargarSucursales('${key}'); " >Ver Sucursales</a>
                </div>
            </div>
            <div class="why-text">
                <h4> ${empresas[key].nombreEmpresa}</h4>

            </div>
        </div>
    </div>
        
        
        `;
    }










}

////////////////////////////////////////////////////////////////////


//Crea la vista en filas de las empresas
function lista() {

    document.getElementById("list-view").innerHTML = "";

    for (const key3 in empresas) {
        document.getElementById("list-view").innerHTML += `

        <div class="list-view-box">

              <div class="row">

                    <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4">

                         <div class="products-single fix">

                                 <div class="box-img-hover">

                                     <img src="${empresas[key3].logo}" class="img-fluid" alt="Image">
                                
                                 </div>

                          </div>
                      
                     </div>
                                        

                     <div class="col-sm-6 col-md-6 col-lg-8 col-xl-8">

                            <div class="why-text full-width">

                                 <h4>${empresas[key3].nombreEmpresa}</h4>

                                 <br>

                                     <p>
                                     
                                     ${empresas[key3].descripcion}
                                     
                                     </p>
                                                   
                                 <a class="btn hvr-hover" href="javascript:void(0);" data-toggle="modal" data-target="#exampleModalScrollable" style="cursor:pointer" onclick="Modal('${key3}');cargarSucursales('${key3}'); ">Ver Sucursales</a>
                                 <a class="btn hvr-hover" href="javascript:void(0);" onclick = "empFav('${key3}');" > Agregar a Favoritos</a>
                                               
                            </div>
                    
                     </div>


                 </div>

           </div>
        
        
        `;
    }




}

////////////////////////////////////

//generar la modal para ver sucursales de las empresas 
function Modal(k) {


    document.getElementById("cuerpo").innerHTML =

        `      
       

          <div class="col-4  p-1"   >
            <img src="${empresas[k].logo}" class=" imagen-logo" >
          </div>
    
        <div class="col-4  datos-empresa">
              <div class="datos-titulo">
              <h1 >${empresas[k].nombreEmpresa}</h1>
             </div>
          
              <p> Correo: ${empresas[k].correo}</p>
             <p>${empresas[k].descripcion}</p>
             <p> Telefono: ${empresas[k].telefono}</p>
             <p>${empresas[k].pais}</p>
           
         </div>

        <div class="col-4 redes-empresa">

        <h1>REDES SOCIALES </h1>
        
         <div class="row ">

         <div class="col-12  datos-empresa">
         <p> <a href=""><img src="images/logo-de-facebook-png.png" class="red"></a>&nbsp&nbsp&nbsp&nbsp${empresas[k].url1} </p>

        </div>

                    
         </div>
         <div class="row ">
         <div class="col-12  datos-empresa">
         <p> <a href=""><img src="images/logo-instagram.png" class="red"></a>&nbsp&nbsp&nbsp&nbsp${empresas[k].url2} </p>

        </div>
        
       </div>
       <div class="row ">
       <div class="col-12  datos-empresa">
       <p> <a href=""><img src="images/Logo-Twitter.png" class="red"></a>&nbsp&nbsp&nbsp&nbsp${empresas[k].url3} </p>

      </div>
     </div>
    
       
    </div>

      
        <hr>
    
    `;








}


///////////////////////////////////////////////////////////////////////

function empFav(l) {

    let empFavo = {

        nombreEmpresa: empresas[l].nombreEmpresa,
        logo: empresas[l].logo,
        correo: empresas[l].correo,
        contraseña: empresas[l].contraseña,
        descripcion: empresas[l].descripcion,
        mision: empresas[l].mision,
        vision: empresas[l].vision,
        telefono: empresas[l].telefono,
        pais: empresas[l].pais,
        ciudad: empresas[l].ciudad,

    }


    //Peticion Asincrona
    axios({

        method: 'POST', //metodo de solicitud
        url: url3 + `?id=${id}`, //url del API
        responseType: 'json', //tipo de respuesta
        data: empFavo
    }).then(res => { //inicia la promesa

        console.log(res);


    }).catch(error => { //captura de errores
        console.error(error); //imprime un erro en caso de existir
    });



}

/////////////////////////////////////////////////////////////////////////

var x = document.getElementById("demo");

function cargarmap(k) {


    var locacion = document.getElementById("sucursal").value;

    navigator.geolocation.getCurrentPosition(showPosition, showError);

    //Funcion para mostrar posicion
    function showPosition(position) {
        lat = empresas[k].sucursales[locacion].latitud; //Valor de la latitud
        lon = empresas[k].sucursales[locacion].longitud; //Valor de la longitud
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


function cargarSucursales(k) {

    axios({

        method: 'GET', //metodo de solicitud
        url: url + `?id=${k}`, //url del API
        responseType: 'json', //tipo de respuesta
    }).then(res => { //inicia la promesa

        document.getElementById("mapholder").innerHTML = "";
        document.getElementById("date").innerHTML = "";

        document.getElementById("img").innerHTML =
            `
        <select class="custom-select select" id="sucursal" onchange="cargarmap('${k}');Carrusel('${k}');">
        <option selected>Sucursal</option>
       
      </select>
        `

        for (const key4 in res.data.sucursales) {
            document.getElementById("sucursal").innerHTML +=

                `  <option value="${key4}">${res.data.sucursales[key4].nombreSucursal}</option>`;
        }





    }).catch(error => { //captura de errores
        console.error(error); //imprime un erro en caso de existir
    });







}

////////////////////////////////////////////////////////////////////////
//Funcion que genra las imagenes
function Carrusel(k) {

    var sucu = document.getElementById("sucursal").value;

    document.getElementById("date").innerHTML = `      
        <div class=" sucursal-datos ">
    
       
          <div class="mt-2 p-2 datos-sucursales-generales" >


              <p class="da">Correo</p>
              <p>${empresas[k].sucursales[sucu].correo}</p>
          
              <p class="da">Telefono</p>
              <p>${empresas[k].sucursales[sucu].telefono}</p>
              <p class="da">Direccion</p>
              <p>${empresas[k].sucursales[sucu].direccion}</p>
             
             
            </div>

        </div>

       `




}