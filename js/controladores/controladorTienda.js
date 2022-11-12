
var clases=['Sistemas Dinamicos I',
            'Programacion Comercial',
            'Teoria de Bases de Datos',
            'Sistemas de Informacion',
            'Redes Computacionales',
            'Admon de Centros de Computo',
            'Lenguajes Formales',
            'Programacion Matematica II',
            'Algebra Booleana']
//Funcion llenar Group Button
function obtenerCategorias() {

    document.getElementById("list-group-men").innerHTML = ``;

        for (let i = 0; i < clases.length; i++) {
            document.getElementById("list-group-men").innerHTML +=
                `
            <div class="list-group-collapse sub-men">
            <a class="list-group-item list-group-item-action" href="#sub-men1" data-toggle="collapse"  >${clases[i]}
        </a>

         
            </div>
        </div>
        
        
        `;
        }



}

obtenerCategorias();


function regresar() {

    document.getElementById("navbar-menu").innerHTML +=

        `
    
        <ul class="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp" style="color: white;">

        <li class="nav-item"><a class="nav-link" href="#" onclick=" window.history.back();"><i class="fa fa-undo" ></i>&nbsp;&nbsp;Regresar</a></li>

    </ul>
    
    `

}

//Crea la vista en celdas de los productos
function Celdas() {

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
function lista() {

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

