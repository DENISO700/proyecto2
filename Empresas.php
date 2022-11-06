


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

 
 if ($_COOKIE["tipo"] !=1) {//verificar que el usuario solo vea paginas de usuario 
    header("location: 401.html");
 }



?>




<!DOCTYPE html>
<html lang="en">


<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Empresas </title>

    <!-- Font Awesome CSS -->
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <!-- Site CSS -->
    <link rel="stylesheet" href="css/style.css">
    <!-- Responsive CSS -->
    <link rel="stylesheet" href="css/responsive.css">


</head>

<body onload="obtenerEmpresas();regresar();">


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



                    </ul>



                </div>


            </div>

        </nav>

    </header>
    <!--FIN CABEZERA-->

    <!--MARCADOR -->
    <div class="all-title-box">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2>Empresas</h2>

                </div>
            </div>
        </div>
    </div>
    <!-- FIN MARCADOR-->

    <!-- Empresas-->
    <div class="shop-box-inner">

        <div class="container">

            <div class="row">

                <div class="col-xl-12 col-lg-12 col-sm-12 col-xs-12 shop-content-right">

                    <div class="right-product-box">


                        <!-- Tipo Vista -->
                        <div class="product-item-filter row">

                            <div class="col-12 col-sm-4 text-center text-sm-right">

                                <ul class="nav nav-tabs ml-auto">

                                    <li>
                                        <a class="nav-link active ml-auto" href="#grid-view" data-toggle="tab"> <i class="fa fa-th"></i> Ver en Miniaturas</a>
                                    </li>

                                    <li>
                                        <a class="nav-link ml-auto" href="#list-view" data-toggle="tab"> <i class="fa fa-list-ul"></i> Ver en Detalles </a>
                                    </li>

                                </ul>

                            </div>

                        </div>
                        <!-- Fin Tipo Vista -->


                        <!-- Empresas-->
                        <div class="product-categorie-box">

                            <div class="tab-content">


                                <!-- Vista Celdas-->
                                <div role="tabpanel" class="tab-pane fade show active" id="grid-view">

                                    <div class="row" id="celdas">




                                    </div>

                                </div>
                                <!--Fin  Vista Celdas-->

                                <!-- Vista Lista-->
                                <div role="tabpanel" class="tab-pane fade" id="list-view">



                                </div>
                                <!-- Fin Vista Lista-->

                            </div>

                        </div>
                        <!-- Fin Empresas -->


                    </div>

                </div>

            </div>

        </div>

    </div>
    <!-- FIN Empresas-->


    <!-- Modal Vista Previa -->

    <div class="modal fade" id="exampleModalScrollable" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl " role="document">
            <div class="modal-content "  >



                <div class="modal-body " style="background-color: darkgray;">

                    <div class="container p-3 datos-ser">

                        <div class="row">
                            <div class="col-12  text-left" style="background-color: darkgray;">
                                <h1 id="exampleModalLabel" class="titulo-Sucursal">SUCURSALES <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span style="font-weight: bold;">X</span></button></h1>
                                <hr>
                            </div>
                        </div>

                        <div class="row " id="cuerpo">

                        </div>

                        <div class="row mb-3 " id="carrusel" style="height: 500px;">


                            <div class="col-4  p-3">




                                <div style="height: 50px;" id="img">


                                </div>


                                <div class="datos-sucursal" style="height: 450px;" id="date">


                                </div>



                            </div>

                            <div class="col-8">
                                <div class=" my-3 p-3 " style="width: 680px;" id="coor">
                                    <div id="demo">
                                        <h1 style="text-align: center;">Ubicacion de la Sucursal</h1>
                                    </div>
                                    <div id="mapholder" class="m-auto " style="height: 420px;">

                                    </div>
                                </div>
                            </div>








                        </div>



                    </div>





                </div>




            </div>



        </div>
    </div>
    <!-- FinModal Vista Previa -->

    <a href="#" id="back-to-top" title="Back to top" style="display: none;">&uarr;</a>

    <!-- ALL JS FILES -->
    <script src="http://maps.google.com/maps/api/js?sensor=false">
        //API de Google Maps
    </script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="js/controladores/controladorEmpresas.js"></script>
    <script src="js/jquery-3.2.1.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <!-- ALL PLUGINS -->
    <script src="js/jquery.superslides.min.js"></script>
    <script src="js/inewsticker.js"></script>
    <script src="js/images-loded.min.js"></script>
    <script src="js/isotope.min.js"></script>
    <script src="js/baguetteBox.min.js"></script>


</body>

</html>