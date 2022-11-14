<!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Libro</title>
        <!-- Font Awesome CSS -->
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <!-- Site CSS -->
        <link rel="stylesheet" href="css/style.css">
        <!-- Responsive CSS -->
        <link rel="stylesheet" href="css/responsive.css">
    </head>

    <body >

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
                        <h2>Nuevo Libro</h2>

                    </div>
                </div>
            </div>
        </div>
        <!-- FIN MARCADOR-->

        <!-- Formulario -->
        <div class="container contenedor-form-empresa">

            <form enctype="multipart/form-data" action="backend/libros.php" method="POST"  id="formulario-empresa" >
                <div class="row formulario">
                    <div class="col-md-9  col-12 contenido shadow p-3 mb-5 bg-light rounded m-auto">
                        <h2 class="text-center">Datos del Libro</h2>
                        <hr>

                        <div class="col-md-12">
                            <label class="form-control">Datos Generales</label>
                            <hr>
                        </div>

                        <!-- Datos Generales -->
                            <div class="row">
                                <!-- <div class=" col-md-4 mb-3 mt-5">
                                    <input class="form-control" type="text" placeholder="Nombre del Libro" required name="nombre_libro" id="nombreProducto">
                                </div> -->
                                <div class="col-md-5 mx-4 mb-3 mt-5">
                                    <div class="custom-file ">

                                        <label class="custom-file-label mt-3" id="ruta" >Seleccione Foto del Libro</label>
                                        <input name="archivo1"  type='file' id="imgInp"  class="custom-file-input form-control" />
                                    </div>

                                </div>

                                <div class="col-md-5 mb-3 mt-5">
                                    <div class="custom-file ">

                                        <label class="custom-file-label mt-3" id="ruta" >Seleccione el Libro</label>
                                        <input name="archivo2"  type='file' id="imgInp"  class="custom-file-input form-control" />
                                    </div>

                                </div>
                                <!-- <div class="col-md-4 mb-3 mt-3" id="img">
                                    <img id="blah" src="images/log-placeholder.png" alt="your image" class="w-75" />
                                </div> -->
                            </div>

                            <div class="row">
                                <div class="col-md-12 mb-3 mt-4">
                                    <input type="text"  name="titulo" class="form-control" placeholder="Titulo" required >
                                </div>

                                <div class="col-md-12 mb-3 mt-4">
                                    <input type="text"  name="autor" class="form-control" placeholder="Autor" required >
                                </div>

                                <div class="col-md-4 mt-4">
                                    <select required name="clase" class="form-control" id="categorias">
                                        <option value="">Clase</option>
                                    </select>
                                </div>
                                <div class="col-md-4 mt-4">
                                    <input type="text"  name="pais" class="form-control" placeholder="Pais" required >
                                </div>
                                <div class="col-md-4 mt-4">
                                    <input type="text"  name="año" class="form-control" placeholder="Año" required >
                                </div>

                            </div>

                        
                        <!-- Fin  -->
                        <div class="row">
                            <div class="col-md-12">
                                <label class="form-control">Descripcion del Libro</label>
                                <hr>
                            </div>
                        </div>

                        <!-- Descripcion -->
                        <div class="row">
                            <div class="col-md-4 mb-3 mt-4">
                                <input type="text" name="editorial" class="form-control" placeholder="Editorial" required >
                            </div>
                            <div class="col-md-4 mb-3 mt-4">
                                <input type="text" name="fecha" class="form-control" placeholder="Fecha" required >
                            </div>
                            <div class="col-md-4 mb-3 mt-4">
                                <input type="text" name="edicion" class="form-control" placeholder="Edicion" required >
                            </div>
                            <div class="col-md-4 mb-3 mt-4">
                                <input type="text" name="ISBN" class="form-control" placeholder="ISBN" required >
                            </div>
                            <div class="col-md-4 mb-3 mt-4">
                                <input type="text" name="paginas" class="form-control" placeholder="N° Paginas" required >
                            </div>
                        </div>
                        <!-- Fin  -->

                 

                        <!-- Enviar -->


                               <button type="submit" class="btn btn-danger col-12" >Registrar</button>

                       

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
          

    </body>

    </html>