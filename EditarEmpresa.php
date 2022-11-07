


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
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Editar Empresa</title>


    <!-- Font Awesome CSS -->
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <!-- Site CSS -->
    <link rel="stylesheet" href="css/style.css">
    <!-- Responsive CSS -->
    <link rel="stylesheet" href="css/responsive.css">



</head>

<body class="usuario-reg" onload="CargarPlanes();regresar();editarEmpresa();" >

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
                    <ul class="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp">

                     



                    </ul>
                </div>



            </div>

        </nav>

    </header>
    <!-- FIN CABEZERA-->

    <!-- MARCADOR-->
    <div class="all-title-box">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2>Editar Cuenta Empresa</h2>

                </div>
            </div>
        </div>
    </div>
    <!--FIN MARCADOR-->

    

       
<!-- Formulario -->
<div class="container contenedor-form-empresa">

<div class="col-md-9  col-12 contenido shadow p-3 mb-5 bg-light rounded m-auto">

    <h2 class="text-center">Datos de la Empresa</h2>
    <hr>

    <div class="col-md-12">
        <label class="form-control">Datos Generales</label>
        <hr>
    </div>

    <form enctype="multipart/form-data" action="subirArchivosEmpresa.php" method="POST" id="formulario-empresa" >

        <!-- Datos Generales -->
        <div class="row">

            <div class=" col-md-5 mb-3">
                <input class="form-control" type="text" name="nombre" placeholder="Nombre de la Empresa" id="nombre" required>
            </div>

            <div class="col-md-5 mb-3 ">
                <div class="custom-file ">
                    <input type='file' id="imgInp" name="archivo[]" class="custom-file-input form-control" onchange="readURL(this);" required/>
                    <label class="custom-file-label mt-3">Seleccione el Logo de su Empresa</label>
                </div>

            </div>

            <div class="col-md-2 mb-3 mt-3">
                <div class="col-md-12 ">
                    <img id="blah" src="images/log-placeholder.png" alt="your image" class="w-100" />
                </div>
            </div>

        </div>

        <div class="row">
            <div class="col-md-7 mb-3">
                <div class="mb-3">
                    <input type="email" class="form-control" placeholder="Correo Electronico" id="correo" name="correo" required>
                </div>
            </div>
            <div class="col-md-5 mb-3">
                <div class="mb-3">
                    <div style="display: flex">
                        <input type="text" class="form-control" placeholder="Contraseña" id="contraseña" required>
                    </div>

                </div>
            </div>

        </div>
        <!-- Fin  -->
        <div>
            <label class="form-control">Descripcion Empresarial</label>
            <hr>
        </div>
        <!-- Descripcion -->
        <div class="row">
            <div class=" mx-auto mb-3">
                <textarea class="m-auto descripcion" rows="5" cols="100" placeholder="Ingrese su Descripcion" id="descripcion" required></textarea>
            </div>
        </div>
        <!-- Fin  -->

        <div>
            <label class="form-control">Valores de la Empresa</label>
            <hr>
        </div>
        <!-- Mision y Vision -->
        <div class="row">
            <div class="col-md-6 mb-3">
                <div class="mb-3">
                    <input type="text" class="form-control" style="height: 100px;" placeholder="Mision" id="mision" required>
                </div>
            </div>
            <div class="col-md-6 mb-3">
                <div class="mb-3">
                    <input type="text" class="form-control" style="height: 100px;" placeholder="Vision" id="vision" required>
                </div>
            </div>

        </div>
        <!-- Fin  -->

        <div>
            <label class="form-control">Contacto</label>
            <hr>
        </div>
        <!-- Contacto -->
        <div class="row">
            <div class=" col-md-4  mb-3">
                <input type="text" class="form-control" placeholder="Numero Telefonico" id="telefono" onkeypress='return validaNumericos(event)' required>
            </div>
            <div class="col-md-4 mb-3 mt-3">
                <select class="custom-select  w-100" id="pais">
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
                <select class="custom-select  w-100" id="ciudad">
                          <option >Ciudad</option>
                          <option value="Tegucigalpa">Tegucigalpa</option>
                        </select>
            </div>
        </div>
        <!-- Fin  -->

        <div>
            <label class="form-control">Redes Sociales</label>
            <hr>
        </div>
        <!-- Redes Sociales -->
        <div class="row">


            <div class="col-md-2 mt-3">
                <select class="custom-select " id="red1">
                        <option value="">Red Social</option>
                        <option value="facebook">Facebook</option>
                        <option value="Instagram">Instagram</option>
                        <option value="Pinters">Pinter</option>
                        <option value="Twiter">Twiter</option>
                      </select>
            </div>

            <div class="col-md-4 mt-3">
                <input type="url" class="form-control   mr-3 w-100" placeholder="url" id="url1" required>
            </div>
            <div class="col-md-4 mb-3">
                <div class="custom-file">
                    <input type="file" name="archivo[]" class="custom-file-input form-control" id="logo1" onchange="readURL1(this);">
                    <label class="custom-file-label mt-3">Banner</label>
                </div>
            </div>

            <div class="col-md-2 mb-3 ">
                <div class="col-md-12 mt-3 ">
                    <img src="images/log-placeholder.png" class="w-100" id="blah1">
                </div>
            </div>

        </div>


        <div class="row">


            <div class="col-md-2 mt-3">
                <select class="custom-select " id="red2">
                          <option value="">Red Social</option>
                          <option value="facebook">Facebook</option>
                          <option value="Instagram">Instagram</option>
                          <option value="Pinters">Pinter</option>
                          <option value="Twiter">Twiter</option>
                        </select>
            </div>

            <div class="col-md-4 mt-3">
                <input type="url" class="form-control   mr-3 w-100" placeholder="url" id="url2" required>
            </div>
            <div class="col-md-4 mb-3">
                <div class="custom-file">
                    <input type="file" name="archivo[]" class="custom-file-input form-control" id="logo2" onchange="readURL2(this);">
                    <label class="custom-file-label mt-3">Banner</label>
                </div>
            </div>

            <div class="col-md-2 mb-3 mt-3 ">
                <div class="col-md-12 ">
                    <img src="images/log-placeholder.png" class="w-100" id="blah2">
                </div>
            </div>

        </div>


        <div class="row">


            <div class="col-md-2 mt-3">
                <select class="custom-select " id="red3">
                        <option value="">Red Social</option>
                        <option value="facebook">Facebook</option>
                        <option value="Instagram">Instagram</option>
                        <option value="Pinters">Pinter</option>
                        <option value="Twiter">Twiter</option>
                      </select>
            </div>

            <div class="col-md-4 mt-3">
                <input type="url" class="form-control   mr-3 w-100" placeholder="url" id="url3" required>
            </div>
            <div class="col-md-4 mb-3">
                <div class="custom-file">
                    <input type="file" name="archivo[]" class="custom-file-input form-control" id="logo3" onchange="readURL3(this);">
                    <label class="custom-file-label mt-3">Banner</label>
                </div>
            </div>

            <div class="col-md-2 mb-3 mt-3">
                <div class="col-md-12">
                    <img src="images/log-placeholder.png" class="w-100" id="blah3">
                </div>
            </div>

        </div>
        <!-- Fin  -->

        <!-- Plan -->

        <div class="row">
            <div class="col-md-12 col-lg-12">
                <div class="shipping-method-box">
                    <div class="title-left">
                        <h3>Plan </h3>
                    </div>
                    <select class="custom-select  w-100 mb-5" id="plan">
                        <option value="">Plan</option>
                     
                   
                      </select>
                </div>
            </div>



        </div>


        <!-- Enviar -->



      <button type="button" class="BTN BTN-DANGER CLASS-12" onclick="updateEmpresa()">REGISTRARSE</button>

       


    </form>

</div>









</div>
<!-- Fin Formulario-->

        <a href="#" id="back-to-top" title="Back to top" style="display: none;">&uarr;</a>


        <!-- ALL JS FILES -->
        <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

        <script src="js/controladorValidaciones.js"></script>
        <script src="js/controladores/controladorEditarEmpresa.js"></script>
        <script src="js/jquery-3.2.1.min.js"></script>
        <script src="js/popper.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <!-- ALL PLUGINS -->
        <script src="js/jquery.superslides.min.js"></script>
        <script src="js/custom.js"></script>

</body>

</html>