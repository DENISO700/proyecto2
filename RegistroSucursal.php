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

 
 if ($_COOKIE["tipo"] !=2) {//verificar que el usuario solo vea paginas de usuario 
    header("location: 401.html");
 }



?>



    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Sucursales</title>
        <!-- Font Awesome CSS -->
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <!-- Site CSS -->
        <link rel="stylesheet" href="css/style.css">
        <!-- Responsive CSS -->
        <link rel="stylesheet" href="css/responsive.css">
    </head>

    <body onload="regresar();">

        <!-- CABEZERA -->
        <header class="main-header">

            <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-default bootsnav pt-5">
                <div class="container" id="cabezera">

                    <div class="navbar-header">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-menu" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fa fa-bars"></i>
            </button>
                        <a class="navbar-brand" href="#"><img src="images/logotipo.png" class="logo d-sm-none d-none d-md-block"></a>
                    </div>
                    <div class="collapse navbar-collapse" id="navbar-menu">
                        <ul class="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp">

                        

                        </ul>
                    </div>

                </div>

            </nav>

        </header>
        <!-- FIN CABEZERA -->


        <!-- MARCADOR-->
        <div class="all-title-box">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h2>Nueva Sucursal</h2>

                    </div>
                </div>
            </div>
        </div>
        <!-- FIN MARCADOR-->

        <!-- Formulario Sucursal-->
        <div class="container contenedor-form-empresa">

            <form   id="formulario-empresa" >
              
                    <div class="col-md-9  col-12 contenido shadow p-3 mb-5 bg-light rounded m-auto">
                        <h2 class="text-center">Datos de la Sucursal</h2>
                        <hr>

                        <div class="col-md-12">
                            <label class="form-control">Datos Generales</label>
                            <hr>
                        </div>

                        <!-- Datos Generales -->
                        <div class="row">
                            <div class=" col-md-5 mb-3">
                                <input class="form-control" type="text" placeholder="Nombre de la Sucursal" required id="nombreSucursal">
                            </div>

                            <div class="col-md-7 mb-3">
                                <div class="mb-3">
                                    <input type="email" class="form-control" placeholder="Correo Electronico" required id="correoSucursal">
                                </div>
                            </div>
                        </div>
                        <!-- Fin  -->

                        <div class="col-md-12">
                            <label class="form-control">Contacto</label>
                            <hr>
                        </div>
                        <!-- Contacto -->
                        <div class="row">
                            <div class=" col-md-4  mb-3">
                                <input type="text" class="form-control" placeholder="Numero Telefonico" required id="telefono" onkeypress='return validaNumericos(event)'>
                            </div>
                            <div class="col-md-4 mb-3 mt-3">
                                <select name="contry" class="custom-select  w-100" required id="pais">
                                      <option value="">Pais</option>
                                      <option value="Honduras">Honduras</option>
                                      <option value="Guatemala">Guatemala</option>
                                      <option value="Salvador">Salvador</option>
                                      <option value="Costa Rica">Costa Rica</option>
                                      <option value="Panama">Panama</option>
                                      <option value="Nicaragua">Nicaragua</option>
                                    </select>
                            </div>
                            <div class="col-md-4 mt-3 mb-3">
                                <select class="custom-select  w-100" required id="ciudad">
                                        <option >Ciudad</option>
                                        <option value="Tegusigalpa">Tegucigalpa</option>
                                      </select>
                            </div>
                        </div>
                        <!-- Fin  -->

                        <div class="col-md-12">
                            <label class="form-control">Ubicacion Geografica</label>
                            <hr>
                        </div>
                        <!-- Ubicacion Geografica -->
                        <div class="row">

                            <div class="col-md-4 mb-3">

                                <input type="text" class="form-control" placeholder="Introduzca su Direccion" required id="direccionSucursal">

                            </div>

                            <div class="col-md-4 mb-3">

                                <input type="text" class="form-control" placeholder="Latitud" required id="latitud" onkeypress="return esNum(event,this)">

                            </div>

                            <div class="col-md-4 mb-3">

                                <input type="text" class="form-control" placeholder="Longitud" required id="longitud" onkeypress="return esNum(event,this)">

                            </div>


                        </div>
                        <!-- Fin  -->



                      <button type="button" class="btn btn-danger col-12" onclick="validarSucursal();">REGISTRAR</button>
                        
                    </div>

            </form>



         </div>
            <!-- Fin Formulario Sucursal-->




            <a href="#" id="back-to-top" title="Back to top" style="display: none;">&uarr;</a>

            <!-- ALL JS FILES -->
            <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
            <script src="js/controladores/controladorRegistroSucursal.js"></script>
            <script src="js/controladorValidaciones.js"></script>
            <script src="js/jquery-3.2.1.min.js"></script>
            <script src="js/popper.min.js"></script>
            <script src="js/bootstrap.min.js"></script>
            <!-- ALL PLUGINS -->
            <script src="js/jquery.superslides.min.js"></script>




    </body>

    </html>