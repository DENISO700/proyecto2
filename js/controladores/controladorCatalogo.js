var url = "../TIENDA/php/API/Empresas/API-empresas.php";
var url2 = "../TIENDA/php/API/Administrador/API-categorias.php";
var url3 = "../TIENDA/php/API/Empresas/API-promociones.php";
var empresas = [];
var categorias = [];





function obtenerEmpresas() {

    //Peticion Asincrona
    axios({

        method: 'GET', //metodo de solicitud
        url: url, //url del API
        responseType: 'json', //tipo de respuesta
    }).then(res => { //inicia la promesa

        this.empresas = res.data;

        document.getElementById("catalogo").innerHTML = "";


        for (const key in res.data) {
            for (const key2 in res.data[key].promociones) {

                document.getElementById("catalogo").innerHTML +=
                    `
            <div class="col-lg-3 col-md-6 special-grid ${res.data[key].promociones[key2].categoria}">
            <div class="products-single fix">
                <div class="box-img-hover">
                    <img src="${res.data[key].promociones[key2].foto}" class="w-100" >
                    <div class="mask-icon">
                        <ul>
                            <li><a href="javascript:void(0);"  data-placement="right" title="Ver" data-toggle="modal" data-target="#exampleModalScrollable" style="cursor:pointer" onclick="redireccionar('${key}','${key2}')" ><i class="fas fa-eye"></i></a></li>
    
                            <li><a href="login.html" data-toggle="tooltip" data-placement="right" title="Agregar al Carrito"><i class="far fa-heart"></i></a></li>
                        </ul>
    
                    </div>
                </div>
            </div>
        </div>
    
    
            `;

            }
        }




    }).catch(error => { //captura de errores
        console.error(error); //imprime un erro en caso de existir
    });

}

obtenerEmpresas();

//////////FUNCIONES DE CATALOGO/////////////////////////////////////



////////////////////////////////////////////////////////////////////
//Funcion llenar Group Button
function generarButtons() {

    //Peticion Asincrona
    axios({

        method: 'GET', //metodo de solicitud
        url: url2, //url del API
        responseType: 'json', //tipo de respuesta
    }).then(res => { //inicia la promesa

        this.categorias = res.data; //asignamos a el arreglo usuarios los valores de la respuesta

        for (const key in res.data) {
            document.getElementById("filtro").innerHTML +=

                `  <button data-filter=".${res.data[key].nombre}">${res.data[key].nombre}</button>`;
        }



    }).catch(error => { //captura de errores
        console.error(error); //imprime un erro en caso de existir
    });



}

///////////////////////////////////////////////////////////////////////








//Funcion Modal

//generar la modal
function Modal(index, c) {


    //Peticion Asincrona
    axios({

        method: 'GET', //metodo de solicitud
        url: url3 + `?id=${index}&index=${c}`, //url del API
        responseType: 'json', //tipo de respuesta
    }).then(res => { //inicia la promesa

        document.getElementById("cuerpo").innerHTML = "";


        document.getElementById("cuerpo").innerHTML =

            `      <div class="row" id="datos">
    
        <div class="col-4">
            <img src="${empresas[index].logo}" class="w-100" alt="">
        </div>
    
        <div class="col-6">
            <h5>${res.data.categoria}</h5>
            <h6>${res.data.nombre}</h6>
            <p>${res.data.descripcion} </p>
        </div>
    
        <hr>
    
        <div class="col-12">
        <p class="text-center"><i class="fa fa-star" style="color: green;"></i><i class="fa fa-star" style="color: green;"></i><i class="fa fa-star" style="color: green;"></i><i class="fa fa-star-o" style="color: green;"></i><i class="fa fa-star-o" style="color: green;"></i></p>
        </div>
    
        <hr>
    
    </div>
            
        <div class="modal-footer ml-auto">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
      
        </div>
    
    
    </div>`;



    }).catch(error => { //captura de errores
        console.error(error); //imprime un erro en caso de existir
    });








}

////////////////////////////////////////////////////////////////////////
//Funcion que genra las imagenes
function Carrusel(index, c) {


    document.getElementById("img").innerHTML = `      
    <div class="text-center m-auto">
        <img src="${empresas[index].promociones[c].foto}" class=" d-block w-75 h-75" >
    </div>
  

`


}

//////////////////////////////////////////////////////////////////////////

//Funcion que carga los comentarios
function Comentarios(index, c) {
    document.getElementById("comentarios").innerHTML = "";




    for (const key in empresas[index].promociones[c].comentarios) {
        document.getElementById("comentarios").innerHTML += `   <div class="row">
    
        
    <div class="col-2 my-2 ">
        <img src="images/user.png" class="w-100 img-thumbnail text-center m-auto">
    </div>

    <div class="col-10 my-2 text-rigth">
        <h6>${empresas[index].promociones[c].comentarios[key].usuario}</h6>
        <p>${empresas[index].promociones[c].comentarios[key].contenido} </p>
    </div>
</div> `
    }



}

//////////////////////////////////////////////////////////


function redireccionar(id, index) {

    window.location.href = `dp.html?id=${id}&index=${index}`

}