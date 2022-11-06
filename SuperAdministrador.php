<?php

session_start();

if (!isset($_SESSION["token"])) {
   header("location: 401.html");
}

if (!isset($_COOKIE["token"])) {
    header("location: 401.html");
 }

 if ($_SESSION["token"] != $_COOKIE["token"]) {
    header("location: 401.html");
 }

 if ($_COOKIE["tipo"] !=3) {//verificar que el usuario solo vea paginas de usuario 
    header("location: 401.html");
 }


?>




    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Administrador</title>

        <!-- Font Awesome CSS -->
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">

        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <!-- Site CSS -->
        <link rel="stylesheet" href="css/style.css">
        <!-- Responsive CSS -->
        <link rel="stylesheet" href="css/responsive.css">
    </head>

    <body onload="tablaEmpresas();tablaPlanes();categorias();">

        <!-- CABEZERA-->
        <header class="main-header">

            <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-default bootsnav">
                <div class="container" id="cabezera">

                    <div class="navbar-header">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-menu" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fa fa-bars"></i>
                </button>
                        <a class="navbar-brand" href="#"><img src="images/logotipo.png" class="logo d-sm-none d-none d-md-block"></a>
                    </div>

                    <div class="collapse navbar-collapse" id="navbar-menu">
                        <ul class="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp" style="color: white;">

                            <li class="nav-item"><a class="nav-link" href="#" data-toggle="modal" data-target="#logoutModal"><i class="fa fa-power-off" ></i>&nbsp;&nbsp;Cerrar Sesion</a></li>

                        </ul>
                    </div>



                </div>

            </nav>

        </header>
        <!--FIN CABEZERA-->

        <!-- MARCADOR-->
        <div class="all-title-box">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h2>Cuenta Administrador</h2>

                    </div>
                </div>
            </div>
        </div>
        <!-- FIN MARCADOR-->

        <!-- TABLA EMPRESAS-->
        <div class="row">


            <div class="container">

                <div class="col-md-12 text-center my-5">
                    <h2>EMPRESAS REGISTRADAS</h2>
                </div>

                <div class="col-md-12 table-responsive">

                    <table class="table table-hover">

                        <thead>
                            <th>Logo</th>
                            <th>Nombre</th>

                            <th>Correo</th>

                            <th>Contraseña</th>

                            <th>Descripcion</th>
                            <th>Mision</th>
                            <th>Vision</th>
                            <th>Telefono</th>
                            <th>Pais</th>

                            <th>Ciudad</th>
                            <th>Redes Soiciales 1</th>
                            <th>Redes Sociales 2</th>
                            <th>Redes Sociales 3</th>
                            <th>Plan</th>




                        </thead>
                        <tbody id="empresas">




                        </tbody>


                    </table>

                </div>
            </div>

        </div>
        <!-- FIN EMPRESAS-->

        <!--  PLANES-->
        <div class="container">

            <div class="row">
                <div class="col-md-12 text-center my-5">
                    <h2>PLANES DE SERVICIOS</h2>
                </div>

            </div>

            <div class="row">

                <div class="col-md-12 table-responsive">

                    <table class="table table-hover">

                        <thead>
                            <th>Titulo</th>
                            <th>Precio</th>

                            <th>Promociones</th>

                            <th>Almacenamiento </th>

                            <th>Soporte</th>
                            <th>Centro de Ayuda</th>
                            <th>Duracion </th>
                            <th>Pantalla Principal</th>


                        </thead>

                        <tbody id="planes">

                        </tbody>


                    </table>

                </div>

                <div class="col-md-4 text-center">
                    <button type="button" class="btn btn-outline-danger" data-toggle="modal" data-target="#exampleModal">Nuevo Plan </button>
                </div>




            </div>

        </div>
        <!-- FIN PLANES-->

          <!--  CATEGORIAS-->
        <div class="container">

            <div class="row">
                <div class="col-md-12 text-center my-5">
                    <h2>CATEGORIAS</h2>
                </div>

            </div>

            <div class="row">

                <div class="col-md-12 table-responsive">

                    <table class="table table-hover">

                        <thead>
                            <th>Nombre</th>
                            <th>.</th>
                            <th>.</th>
                        
                        </thead>

                        <tbody id="categorias">

                        </tbody>


                    </table>

                </div>

                <div class="col-md-4 text-center">
                    <button type="button" class="btn btn-outline-danger" data-toggle="modal" data-target="#categoriasModal">Nueva Categoria </button>
                </div>




            </div>

        </div>
           <!-- FIN PLANES-->


        <!-- Modal Nuevo Plan-->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Creacion de Plan</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
                </button>
                    </div>
                    <div class="modal-body">

                        <form >

                            <div class="form-group">
                                <label for="recipient-name" class="col-form-label">Nombre:</label>
                                <input type="text" class="form-control" id="nombre" required>
                            </div>

                            <div class="form-group">
                                <label for="recipient-name" class="col-form-label">Precio:</label>
                                <input type="text" class="form-control" id="precio" required onkeypress='return validaNumericos(event)'>
                            </div>

                            <div class="form-group">
                                <label for="recipient-name" class="col-form-label">Espacios de Promociones:</label>
                                <input type="text" class="form-control" id="promos" required onkeypress='return validaNumericos(event)'>
                            </div>

                            <div class="form-group">
                                <label for="recipient-name" class="col-form-label">Almacenamiento:</label>
                                <input type="text" class="form-control" id="almacenamiento" required onkeypress='return validaNumericos(event)'>
                            </div>

                            <div class="form-group">
                                <label for="recipient-name" class="col-form-label">Soporte Tecnico:</label>
                                <input type="checkbox" class="form-control" id="soporte">
                            </div>

                            <div class="form-group">
                                <label for="recipient-name" class="col-form-label">Centro de Ayuda:</label>
                                <input type="checkbox" class="form-control" id="ayuda">
                            </div>

                            <div class="form-group">
                                <label for="recipient-name" class="col-form-label">Duracion:</label>
                                <input type="text" class="form-control" id="duracion" required onkeypress='return validaNumericos(event)'>
                            </div>

                            <div class="form-group">
                                <label for="recipient-name" class="col-form-label">Pantalla Principal:</label>
                                <input type="checkbox" class="form-control" id="principal">
                            </div>

                           
                                <button type="button" onclick="validarPlan();">Registrar Plan</button>
                           



                        </form>

                    </div>

                </div>
            </div>
        </div>
        <!-- Fin Modal Nuevo Plan-->

        <!-- Modal Editar Plan-->
        <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Creacion de Plan</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
             </button>
                    </div>
                    <div class="modal-body" id="form">


                    </div>

                </div>
            </div>
        </div>
        <!-- Fin Modal Editar Plan-->

        <!-- Modal Nuevo Categoria-->
        <div class="modal fade" id="categoriasModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Creacion de Categoria</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
                </button>
                    </div>
                    <div class="modal-body">

                        <form >

                            <div class="form-group">
                                <label for="recipient-name" class="col-form-label">Nombre:</label>
                                <input type="text" class="form-control" id="categoriaNueva" required>
                            </div>

                          
                           
                                <button type="button" onclick="nuevaCategoria();">Registrar Plan</button>
                           



                        </form>

                    </div>

                </div>
            </div>
        </div>
        <!-- Fin Modal Nuevo Plan-->

        <!-- Cerrar Sesion Modal-->
        <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">¿Listo para salir?</h5>
                        <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
                    </div>
                    <div class="modal-body">
                        Seleccione "Cerrar sesión" a continuación si está listo para finalizar su sesión actual.</div>
                    <div class="modal-footer">
                        <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancelar</button>
                        <a class="btn btn-primary" href="logout.php">Cerrar Sesion</a>
                    </div>
                </div>
            </div>
        </div>




        <!-- ALL JS FILES -->
        <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
        <script src="js/controladores/controladorSuperAdministrador.js"></script>
        <script src="js/controladorValidaciones.js"></script>
        <script src="js/jquery-3.2.1.min.js"></script>
        <script src="js/popper.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <!-- ALL PLUGINS -->
        <script src="js/jquery.superslides.min.js"></script>





    </body>

    </html>