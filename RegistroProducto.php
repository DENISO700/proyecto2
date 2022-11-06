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
        <title>Producto</title>
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
                        <h2>Nuevo Producto</h2>

                    </div>
                </div>
            </div>
        </div>
        <!-- FIN MARCADOR-->

        <!-- Formulario -->
        <div class="container contenedor-form-empresa">

            <form enctype="multipart/form-data" action="subirProductos.php" method="POST"  id="formulario-empresa" >
                <div class="row formulario">
                    <div class="col-md-9  col-12 contenido shadow p-3 mb-5 bg-light rounded m-auto">
                        <h2 class="text-center">Datos del Producto</h2>
                        <hr>

                        <div class="col-md-12">
                            <label class="form-control">Datos Generales</label>
                            <hr>
                        </div>

                        <!-- Datos Generales -->
                        <div class="row">
                            <div class=" col-md-4 mb-3 mt-5">
                                <input class="form-control" type="text" placeholder="Nombre del Producto" required id="nombreProducto">
                                <input id="name" name="nombre" type="hidden" >
                                <input id="correo" name="correo" type="hidden" >
                            </div>
                            <div class="col-md-4 mb-3 mt-5">
                                <div class="custom-file ">

                                    <label class="custom-file-label mt-3" id="ruta" >Seleccione Foto del Producto</label>
                                    <input name="archivo[]"  type='file' id="imgInp" onchange="subirImagenFirebase1();" class="custom-file-input form-control" />
                                </div>

                            </div>
                            <div class="col-md-4 mb-3 mt-3" id="img">
                                <img id="blah" src="images/log-placeholder.png" alt="your image" class="w-75" />
                            </div>


                            <div class="row">

                                <div class="col-md-4 mb-3 mt-4">

                                    <input type="text" id="precioproducto" class="form-control" placeholder="Precio" required onkeypress='return validaNumericos(event)'>
                                </div>

                                <div class="col-md-4 mb-3 mt-4">

                                    <input type="text" id="cantidad" class="form-control" placeholder="Cantidad" required onkeypress='return validaNumericos(event)'>
                                </div>

                                <div class="col-md-4 mt-5">

                                    <select name="" class="form-control" id="categorias">
    
                                <option value="">Categoria</option>
                              
    
                                </select>
                                </div>

                            </div>

                        </div>
                        <!-- Fin  -->
                        <div class="col-md-12">
                            <label class="form-control">Descripcion del Producto</label>
                            <hr>
                        </div>
                        <!-- Descripcion -->
                        <div class="row">
                            <div class=" mx-auto mb-3">
                                <textarea class="m-auto descripcion" rows="5" cols="100" placeholder="Ingrese su Descripcion" required id="descripcion"></textarea>
                            </div>
                        </div>
                        <!-- Fin  -->

                 

                        <!-- Enviar -->


                               <button type="button" class="btn btn-danger col-12" onclick=" validarProducto();">Registrar</button>

                       

            </form>



        </div>
            <!-- Fin Formulario-->

            <a href="#" id="back-to-top" title="Back to top" style="display: none;">&uarr;</a>

            <!-- ALL JS FILES -->
            <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
            <script src="js/controladores/controladorRegistroProducto.js"></script>
            <script src="js/controladorValidaciones.js"></script>
            <script src="js/jquery-3.2.1.min.js"></script>
            <script src="js/popper.min.js"></script>
            <script src="js/bootstrap.min.js"></script>
            <!-- ALL PLUGINS -->
            <script src="js/jquery.superslides.min.js"></script>

            <script src="https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js "></script>



<script src="https://www.gstatic.com/firebasejs/7.13.1/firebase-storage.js "></script>


<script>
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyABLN9vwlWTgyrLkB9R7PzUUxzTBHUcmfs",
        authDomain: "ichiraku-7a7bb.firebaseapp.com",
        databaseURL: "https://ichiraku-7a7bb.firebaseio.com",
        projectId: "ichiraku-7a7bb",
        storageBucket: "ichiraku-7a7bb.appspot.com",
        messagingSenderId: "657807192414",
        appId: "1:657807192414:web:4df903049b35593673dfcf",
        measurementId: "G-7Q422C1KK7"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
</script>
           

    </body>

    </html>