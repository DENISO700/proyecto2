
<?php
session_start()
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

    <body >

        <!-- CABEZERA-->
        <header>
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

          <!--  CATEGORIAS-->
        <div class="container">

            <div class="row">

                <!-- Tienda -->
                <div class="col-xl-6 col-md-10 mx-auto mb-4">
                    <div class="card border-left-warning shadow h-100 py-2">
                        <div class="card-body">
                            <div class="account-box">
                                <div class="service-box">
                                    <div class="service-icon">
                                        <a href="RegistroLibro.php?id=<?php echo $_SESSION["id"]?>"><i class="fa fa-paperclip" ></i></a>
                                    </div>
                                    <div class="service-desc">
                                        <h4>Agregar Libro</h4>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="row">
                <div class="col-6 mx-5">
                    <table class="table caption-top">
                        <caption>Lista de Libros</caption>
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>

                </div>

            </div>

        </div>
           <!-- FIN PLANES-->




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