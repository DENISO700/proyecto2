var url = "../TIENDA/php/API/Empresas/API-empresas.php";
var empresa = [];

var indice;



function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));


};

var id = getParameterByName('id');



function obtenerEmpresa() {

    //Peticion Asincrona
    axios({

        method: 'GET', //metodo de solicitud
        url: url + `?id=${id}`, //url del API
        responseType: 'json', //tipo de respuesta
    }).then(res => { //inicia la promesa

        document.getElementById("tablero").innerHTML =

            `

        <!-- Opcioness -->
        <div class="row">

            <!-- Editar -->
            <div class="col-xl-2 col-md-6 mb-4">
                <div class="card border-left-primary shadow h-100 py-2">
                    <div class="card-body">
                        <div class="account-box">
                            <div class="service-box">
                                <div class="service-icon">
                                    <a href="EditarEmpresa.php?id=${id}"><i class="fa fa-pencil-square-o" ></i></a>
                                </div>
                                <div class="service-desc">
                                    <h4>Editar Perfil</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Sucursales-->
            <div class="col-xl-2 col-md-6 mb-4">
                <div class="card border-left-success shadow h-100 py-2">
                    <div class="card-body">
                        <div class="account-box">
                            <div class="service-box">
                                <div class="service-icon">
                                    <a href="RegistroSucursal.php?id=${id}"> <i class="fa fa-building"></i></i>
                                    </a>
                                </div>
                                <div class="service-desc">
                                    <h4>Registro de Sucursales</h4>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!--Producto-->
            <div class="col-xl-2 col-md-6 mb-4">
                <div class="card border-left-info shadow h-100 py-2">
                    <div class="card-body">
                        <div class="account-box">
                            <div class="service-box">
                                <div class="service-icon">
                                    <a href="RegistroProducto.php?id=${id}"><i class="fa fa-clipboard" ></i></a>
                                </div>
                                <div class="service-desc">
                                    <h4>Registro de Producttos</h4>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Promocion -->
            <div class="col-xl-2 col-md-6 mb-4">
                <div class="card border-left-warning shadow h-100 py-2">
                    <div class="card-body">
                        <div class="account-box">
                            <div class="service-box">
                                <div class="service-icon">
                                    <a href="RegistroPromociones.php?id=${id}"><i class="fa fa-paperclip" ></i></a>
                                </div>
                                <div class="service-desc">
                                    <h4>Registro de Promocion</h4>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Impresion-->
            <div class="col-xl-2 col-md-6 mb-4">
                <div class="card border-left-danger shadow h-100 py-2">
                    <div class="card-body">
                        <div class="account-box">
                            <div class="service-box">
                                <div class="service-icon">
                                    <a href="FichaPromocion.php?id=${id}"><i class="fa fa-archive" ></i></a>
                                </div>
                                <div class="service-desc">
                                    <h4>Ficha de Impresion</h4>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Proximamente -->
            <div class="col-xl-2 col-md-6 mb-4">
                <div class="card border-left-dark shadow h-100 py-2">
                    <div class="card-body">
                        <div class="account-box">
                            <div class="service-box">
                                <div class="service-icon">
                                    <a href="#"><i class="fa fa-paperclip" ></i></a>
                                </div>
                                <div class="service-desc">
                                    <h4>Proximamente</h4>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Fin Opciones-->


        




`



    }).catch(error => { //captura de errores
        console.error(error); //imprime un erro en caso de existir
    });




}