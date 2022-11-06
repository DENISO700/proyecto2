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
var ix = getParameterByName('index');
var sucursales = [];
var sucPromo = [];
var promocion;
var P;


//////////////////////CONTROLADOR FICHA DE IMPRESION////////////////////////

function obtenerEmpresas() {

    //Peticion Asincrona
    axios({

        method: 'GET', //metodo de solicitud
        url: url4 + `?id=${id}&index=${ix}`, //url del API
        responseType: 'json', //tipo de respuesta
    }).then(res => { //inicia la promesa

        this.promocion = res.data; //asignamos a el arreglo usuarios los valores de la respuesta
        document.getElementById("img").innerHTML =

            `

            <img src="${res.data.foto}" class="p-2  w-100" alt="">


            
            
            `;


        document.getElementById("descripcion").innerHTML +=

            `
            <h4 class="text-justify p-2">Descripcion: ${res.data.descripcion}</h4>
            <h4 class="text-justify p-2">Nombre: ${res.data.nombre}</h4>
            <h4 class="text-justify p-2">Precio: ${res.data.precio}</h4>
            <h4 class="text-justify p-2">Categoria: ${res.data.categoria}</h4>
            <h4 class="text-justify p-2">Descripcion: ${res.data.descripcion}</h4>
            
            
            
            `


        for (const key in res.data.sucursales) {
            document.getElementById("accordionExample").innerHTML +=

                `
                
                <div class="card">
                        <div class="card-header" id="headingOne">
                            <h2 class="mb-0">
                                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            ${res.data.sucursales[key].nombreSucursal}
                          </button>
                            </h2>
                        </div>

                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div class="card-body">
                                
                                <h5>Ciudad:  ${res.data.sucursales[key].ciudad}</h5>
                                <h5>Correo:  ${res.data.sucursales[key].correo}</h5>
                                <h5>Direccion:  ${res.data.sucursales[key].direccion}</h5>
                                <h5>Pais:  ${res.data.sucursales[key].pais}</h5>
                                <h5>Telefono:  ${res.data.sucursales[key].telefono}</h5>
                            </div>
                        </div>
                    </div>
                
                
                `
        };


        for (const key2 in res.data.comentarios) {
            document.getElementById("comentarios").innerHTML +=

                `
                
                <div class="media mb-3 P-2" style="width:830px; height:195px; overflow: scroll;">
                    <div class="mr-2">
                        <img class="rounded-circle border p-1" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_160c142c97c%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_160c142c97c%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.5546875%22%20y%3D%2236.5%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                            alt="Generic placeholder image">
                    </div>
                    <div class="media-body">
                        <p>${res.data.comentarios[key2].contenido}
                        </p>
                        <small class="text-muted">Posted by ${res.data.comentarios[key2].usuario}</small><br>
                        <small class="text-muted">Calificacion  ${res.data.comentarios[key2].calificacion} Estrellas</small>
                    </div>
                </div>

                
                
                `
        }




    }).catch(error => { //captura de errores
        console.error(error); //imprime un erro en caso de existir
    });

}

obtenerEmpresas();










//////////////////////////////////////////////////////

function regresar() {

    document.getElementById("navbar-menu").innerHTML +=

        `
    
        <ul class="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp" style="color: white;">

        <li class="nav-item"><a class="nav-link" href="#" onclick=" window.history.back();"><i class="fa fa-undo" ></i>&nbsp;&nbsp;Regresar</a></li>

    </ul>
    
    `

}

regresar();