var url = "../TIENDA/php/API/Administrador/API-planes.php";
var url2 = "../TIENDA/php/API/Empresas/API-empresas.php";
var url3 = "../TIENDA/php/API/Administrador/API-categorias.php";


///////////////////////////////////////////CONTROLADOR SUPERADMINISTRADOR//////////////////////////

//Funcion Caegar Empresas

function tablaEmpresas() {

    axios({

        method: 'GET', //metodo de solicitud
        url: url2, //url del API
        responseType: 'json', //tipo de respuesta

    }).then(res => { //inicia la promesa


        document.getElementById("empresas").innerHTML = ``;


        for (const key in res.data) {


            document.getElementById("empresas").innerHTML +=
                `

                    <tr>

                    <td class="thumbnail-img">
                        <a href="#">
                            <img class="${res.data[key].logo}" alt="" />
                        </a>
                    </td>

                    <td class="name-pr">
                        <a href="#">
                        ${res.data[key].nombreEmpresa}
                    </a>
                    </td>

                    <td class="price-pr">
                        <p>${res.data[key].correo}</p>
                    </td>

                    <td class="quantity-box">
                        <input type="text" size="4" value="${res.data[key].contraseña}" min="0" step="1" class="c-input-text qty text">
                    </td>


                    <td class="total-pr">
                        <p>${res.data[key].descripcion}</p>
                    </td>

                    <td class="name-pr">
                        <a href="#">
                        ${res.data[key].mision}
                    </a>
                    </td>
                    <td class="name-pr">
                        <a href="#">
                        ${res.data[key].vision}
                    </a>
                    </td>
                    <td class="name-pr">
                        <a href="#">
                        ${res.data[key].telefono}
                    </a>
                    </td>
                    <td class="name-pr">
                        <a href="#">
                        ${res.data[key].pais}
                    </a>
                    </td>
                    <td class="name-pr">
                        <a href="#">
                        ${res.data[key].ciudad}
                    </a>
                    </td>
                    <td class="name-pr">
                        <a href="#">
                        ${res.data[key].nombreRed1}
                    </a>
                    </td>
                    <td class="name-pr">
                        <a href="#">
                        ${res.data[key].nombreRed2}
                    </a>
                    </td>
                    <td class="name-pr">
                        <a href="#">
                        ${res.data[key].nombreRed3}
                    </a>
                    </td>


                    <td class="name-pr">
                        <a href="#">
                        ${res.data[key].plan}
                    </a>
                    </td>



                    </tr>


    `;
        }


    }).catch(error => { //captura de errores
        console.error(error); //imprime un erro en caso de existir

    });



}

//Funcion Cargar Planes

function tablaPlanes() {

    axios({

        method: 'GET', //metodo de solicitud
        url: url, //url del API
        responseType: 'json', //tipo de respuesta

    }).then(res => { //inicia la promesa

        document.getElementById("planes").innerHTML = ``;





        for (const key in res.data) {

            document.getElementById("planes").innerHTML +=
                `

        <tr>

        <td class="">
            <a href="#">
               ${res.data[key].nombrePlan}
            </a>
        </td>

        <td class="name-pr">
            <a href="#">
            ${res.data[key].precio}
    </a>
        </td>

        <td class="price-pr">
            <p>${res.data[key].promos}</p>
        </td>

        <td class="quantity-box">
            <input type="text" size="4" value="${res.data[key].almacenamiento}" min="0" step="1" class="c-input-text qty text">
        </td>


        <td class="total-pr">
            <p>${res.data[key].soporte}</p>
        </td>

        <td class="name-pr">
            <a href="#">
            ${res.data[key].centroDeAyuda}
    </a>
        </td>
        <td class="name-pr">
            <a href="#">
            ${res.data[key].duracion}
    </a>
        </td>
        <td class="name-pr">
            <a href="#">
            ${res.data[key].pantallaPrincipal}
    </a>
        </td>
     
        <td >
        <div class="col-md-4 text-center">
            <button type="button" class="btn btn-outline-danger" onclick = "Editar('${key}');">Editar  </button>
        </div>
        </td>

        <td >
        <div class="col-md-4 text-center">
            <button type="button" class="btn btn-outline-danger" onclick = "eliminarPlan('${key}');">Borrar  </button>
        </div>
        </td >



    </tr>


`;

        }



    }).catch(error => { //captura de errores
        console.error(error); //imprime un erro en caso de existir

    });





}

//Funcion Guardar res.data

function guardarPlan() {


    let plan = {
        nombrePlan: document.getElementById("nombre").value,
        precio: document.getElementById("precio").value,
        promos: document.getElementById("promos").value,
        almacenamiento: document.getElementById("almacenamiento").value,
        soporte: document.getElementById("soporte").value,
        centroDeAyuda: document.getElementById("ayuda").value,
        duracion: document.getElementById("duracion").value,
        panpallaPrincipal: document.getElementById("principal").value,
    };

    axios({
        method: 'POST', //metodo de solicitud
        url: url, //url del API
        responseType: 'json', //tipo de respuesta
        data: plan //mandamos el parametro a guardar 
    }).then(res => { //inicia la promesa
        alert("Plan añadido con exito");
        $('#exampleModal').modal('hide');
        tablaPlanes()
    }).catch(error => { //captura de errores
        console.error(error); //imprime un erro en caso de existir
    });
}


////FUNCION ELIMINAR PLAN

function eliminarPlan(e) {

    axios({

        method: 'DELETE', //metodo de solicitud
        url: url + `?id=${e}`, //url del API
        responseType: 'json', //tipo de respuesta

    }).then(res => { //inicia la promesa


        alert("Plan eliminado con exito");
        tablaPlanes()
    }).catch(error => { //captura de errores
        console.error(error); //imprime un erro en caso de existir

    });


}


//FUNCION MOSTRAR DIALOGO EDITAR

function Editar(r) {

    axios({

        method: 'GET', //metodo de solicitud
        url: url + `?id=${r}`, //url del API
        responseType: 'json', //tipo de respuesta

    }).then(res => { //inicia la promesa

        document.getElementById("form").innerHTML =

            `
        <form onsubmit="return validarPlan2('${r}');">
        <div class="form-group">
            <label for="recipient-name" class="col-form-label">Nombre:</label>
            <input type="text" class="form-control" id="nombre2" required>
        </div>
        <div class="form-group">
            <label for="recipient-name" class="col-form-label">Precio:</label>
            <input type="text" class="form-control" id="precio2" required onkeypress='return validaNumericos(event)'>
        </div>
        <div class="form-group">
            <label for="recipient-name" class="col-form-label">Espacios de Promociones:</label>
            <input type="text" class="form-control" id="promos2" required onkeypress='return validaNumericos(event)'>
        </div>
        <div class="form-group">
            <label for="recipient-name" class="col-form-label">Almacenamiento:</label>
            <input type="text" class="form-control" id="almacenamiento2" required onkeypress='return validaNumericos(event)'>
        </div>
        <div class="form-group">
            <label for="recipient-name" class="col-form-label">Soporte Tecnico:</label>
            <input type="checkbox" class="form-control" id="soporte2">
        </div>
        <div class="form-group">
            <label for="recipient-name" class="col-form-label">Centro de Ayuda:</label>
            <input type="checkbox" class="form-control" id="ayuda2">
        </div>
        <div class="form-group">
            <label for="recipient-name" class="col-form-label">Duracion:</label>
            <input type="text" class="form-control" id="duracion2" required onkeypress='return validaNumericos(event)'>
        </div>
        <div class="form-group">
            <label for="recipient-name" class="col-form-label">Pantalla Principal:</label>
            <input type="checkbox" class="form-control" id="principal2">
        </div>

        <div class="col-md-4 mx-auto">
            <input type="submit" value="Editar Plan">
        </div>

    </form>
        `

        $('#exampleModal2').modal('show');

        document.getElementById("nombre2").value = res.data.nombrePlan
        document.getElementById("precio2").value = res.data.precio
        document.getElementById("promos2").value = res.data.promos
        document.getElementById("almacenamiento2").value = res.data.almacenamiento
        document.getElementById("soporte2").value = res.data.soporte
        document.getElementById("ayuda2").value = res.data.centroDeAyuda
        document.getElementById("duracion2").value = res.data.duracion
        document.getElementById("principal2").value = res.data.panpallaPrincipal




    }).catch(error => { //captura de errores
        console.error(error); //imprime un erro en caso de existir

    });


}

///FUNCION EDITAR PLAN

function editarPlan(m) {

    let editado = {
        nombrePlan: document.getElementById("nombre2").value,
        precio: document.getElementById("precio2").value,
        promos: document.getElementById("promos2").value,
        almacenamiento: document.getElementById("almacenamiento2").value,
        soporte: document.getElementById("soporte2").value,
        centroDeAyuda: document.getElementById("ayuda2").value,
        duracion: document.getElementById("duracion2").value,
        panpallaPrincipal: document.getElementById("principal2").value,
    };
    axios({
        method: 'PUT', //metodo de solicitud
        url: url + `?id=${m}`, //url del API
        responseType: 'json', //tipo de respuesta
        data: editado //mandamos el parametro a guardar 
    }).then(res => { //inicia la promesa
        $('#exampleModal2').modal('hide');
        alert("Plan editado con exito");
        tablaPlanes();
    }).catch(error => { //captura de errores
        console.error(error); //imprime un erro en caso de existir
    });

}

function categorias() {

    axios({

        method: 'GET', //metodo de solicitud
        url: url3, //url del API
        responseType: 'json', //tipo de respuesta

    }).then(res => { //inicia la promesa

        document.getElementById("categorias").innerHTML = ``;

        for (const key in res.data) {

            document.getElementById("categorias").innerHTML +=
                `

        <tr>

        <td class="">
            <a href="#">
               ${res.data[key].nombre}
            </a>
        </td>

       

      
     
        <td >
        <div class="col-md-4 text-center">
            <button type="button" class="btn btn-outline-danger" onclick = "EditarCategoria('${key}');">Editar  </button>
        </div>
        </td>

        <td >
        <div class="col-md-4 text-center">
            <button type="button" class="btn btn-outline-danger" onclick = "borrarCategoria('${key}');">Borrar  </button>
        </div>
        </td >



    </tr>


`;

        }



    }).catch(error => { //captura de errores
        console.error(error); //imprime un erro en caso de existir

    });





};

function nuevaCategoria() {


    let categoria = {
        nombre: document.getElementById("categoriaNueva").value,

    };

    axios({
        method: 'POST', //metodo de solicitud
        url: url3, //url del API
        responseType: 'json', //tipo de respuesta
        data: categoria //mandamos el parametro a guardar 
    }).then(res => { //inicia la promesa
        alert("Categoria añadido con exito");
        $('#categoriasModal').modal('hide');
        categorias()
    }).catch(error => { //captura de errores
        console.error(error); //imprime un erro en caso de existir
    });
}

function borrarCategoria(id) {


    axios({
        method: 'DELETE', //metodo de solicitud
        url: url3 + `?id=${id}`, //url del API
        responseType: 'json', //tipo de respuesta

    }).then(res => { //inicia la promesa
        alert("Categoria eliminada con exito");
        $('#categoriasModal').modal('hide');
        categorias()
    }).catch(error => { //captura de errores
        console.error(error); //imprime un erro en caso de existir
    });
}





///////////////////////////////////////////////////////////////////////////////////////////////////