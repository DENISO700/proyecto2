

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
    <title>Promociones</title>
    <!-- Font Awesome CSS -->
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <!-- Site CSS -->
    <link rel="stylesheet" href="css/style.css">
    <!-- Responsive CSS -->
    <link rel="stylesheet" href="css/responsive.css">
</head>

<body onload="cargarProductos();Sucursales();regresar();">

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
                    <h2>Nueva Promocion</h2>

                </div>
            </div>
        </div>
    </div>
    <!-- FIN MARCADOR-->

    <!-- Formulario -->
    <div class="container contenedor-form-empresa">

        <form id="formulario-empresa" >
            <div class="row formulario">
                <div class="col-md-9  col-12 contenido shadow p-3 mb-5 bg-light rounded m-auto">
                    <h2 class="text-center">Datos de la Promocion</h2>
                    <hr>

                    <div class="col-md-12">
                        <label class="form-control">Producto a Aplicar Promocion </label>
                        <hr>
                    </div>

                    <!-- Datos Generales -->

                    <div class="row">
                        <div class=" col-md-5 mb-3 mt-5">
                            <select class="custom-select mt-2" id="productos" onchange="Precio();" required>
                                <option selected>Nombre Producto</option>
                              
                              </select>
                        </div>

                        <div class="col-md-3 mb-3 mt-5">

                            <input type="text" id="precioproducto" class="form-control" placeholder="Precio" disabled=disabled required>
                        </div>

                        <div class="col-md-4 mb-3 " id="img">
                            <div class="col-md-12 ">
                                <img src="images/log-placeholder.png" class="w-100 ">
                            </div>

                        </div>

                    </div>
                    <!-- Fin  -->


                    <div class="col-md-12">
                        <label class="form-control">Promocion </label>
                        <hr>
                    </div>


                    <!-- Promociones -->
                    <div class="row mb-5">

                        <div class="col-4 mt-3">

                            <select class="custom-select" id="promo" required>
                                <option selected>Porcentaje de Promocion</option>
                                <option value="0.1"> 10 %</option>
                                <option value="0.2"> 20 %</option>
                                <option value="0.3"> 30 %</option>
                                <option value="0.4"> 40 %</option>
                                <option value="0.5"> 50 %</option>
                                <option value="0.6"> 60 %</option>
                                <option value="0.7"> 70 %</option>
                                <option value="0.8"> 80 %</option>
                                <option value="0.9"> 90 %</option>
                                <option value="1.0"> 100 %</option>
                              </select>

                        </div>

                        <div class="col-4">
                            <label for="example">Fecha de incio: </label>
                            <input type="date" class="form-control" id="fechainicio" required>

                        </div>

                        <div class="col-4">
                            <label for="example">Fecha limite: </label>
                            <input type="date" class="form-control" id="fechalimite" required>

                        </div>


                    </div>
                    <!-- Fin  -->

                    <div class="col-md-12">
                        <label class="form-control">Ubicacion </label>
                        <hr>
                    </div>



                    <!-- Sucursales -->

                    <div class="row mb-5">
                        <div class="col-sm-9 col-lg-9 mb-3 m-auto">
                            <div class="checkout-address">
                                <div class="title-left">
                                    <h3>Sucursales con Promocion activa</h3>
                                </div>
                                <form class="needs-validation" novalidate>
                                    <hr class="mb-4">
                                    <div class="d-block my-3" id="sucursales">
                                    


                                    </div>


                                    <hr class="mb-1">
                                </form>
                            </div>


                        </div>

                    </div>



                    <!-- Fin  -->

               
                          <button type="button" class="btn btn-danger col-12" onclick="validarPromocion();">REGISTRAR</button>
                       

        </form>



        </div>
        <!-- Fin Formulario-->

        <a href="#" id="back-to-top" title="Back to top" style="display: none;">&uarr;</a>

        <!-- ALL JS FILES -->
        <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
        <script src="js/controladores/controladorRegistroPromocion.js"></script>
        <script src="js/controladorValidaciones.js"></script>
        <script src="js/jquery-3.2.1.min.js"></script>
        <script src="js/popper.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <!-- ALL PLUGINS -->
        <script src="js/jquery.superslides.min.js"></script>
      



</body>

</html>