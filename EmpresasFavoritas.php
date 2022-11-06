

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
    <title>Empresas Favoritas </title>



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
    <!-- FIN CABEZERA -->

    <!-- MARCADOR -->
    <div class="all-title-box">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2>Empresas Favoritas</h2>

                </div>
            </div>
        </div>
    </div>
    <!-- FIN MARCADOR-->

    <!-- LISTA DE EMPRESAS -->
    <div class="wishlist-box-main">

        <div class="container">

            <div class="row">

                <div class="col-lg-12">

                    <div class="table-main table-responsive">

                        <table class="table">

                            <thead>

                                <tr>
                                    <th>Logo</th>
                                    <th>Nombre de la Empresa</th>
                                    <th>Descripcion</th>
                                    <th>Ubicacion</th>
                                    <th>Eliminar</th>
                                </tr>


                            </thead>

                            <tbody id="EmpFav">



                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>

    </div>
    <!-- FIN LISTA DE EMPRESAS-->

    <a href="#" id="back-to-top" title="Back to top" style="display: none;">&uarr;</a>

    <!-- ALL JS FILES -->
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="js/controladores/controladorEmpFav.js"></script>
    <script src="js/jquery-3.2.1.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <!-- ALL PLUGINS -->
    <script src="js/jquery.superslides.min.js"></script>
   

</body>

</html>