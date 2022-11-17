<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Cuenta Administrador</title>



    <!-- Font Awesome CSS -->
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/bootstrap.min.css">

    <!--  Dashboard-->
    <link href="css/sb-admin-2.min.css" rel="stylesheet">
    <!-- CSS -->
    <link rel="stylesheet" href="css/style.css">
    <!-- Responsive CSS -->
    <link rel="stylesheet" href="css/responsive.css">


</head>

<body >


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
                    <h2>Cuenta Empresarial</h2>

                </div>
            </div>
        </div>
    </div>
    <!-- FIN MARCADOR-->




    <!-- Tablero-->
    <div class="container p-0 m-auto">
        <div id="content-wrapper" class="d-flex flex-column mt-5">

            <div class="container-fluid">


                <!-- Opcioness -->
                <div class="row"  id="tablero">

                 
                </div>
                <!-- Fin Opciones-->


                <!-- Inicio Graficos -->
                <div class="row">

                    <!-- Area Chart -->
                    <div class="col-xl-8 col-lg-7">
                        <div class="card shadow mb-4">
                            <!-- Card Header - Dropdown -->
                            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 class="m-0 font-weight-bold text-primary">Seguidores por Mes</h6>
                                <div class="dropdown no-arrow">
                                    <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                                        <div class="dropdown-header">Acciones:</div>
                                        <a class="dropdown-item" href="#">Ver Registros</a>
                                        <a class="dropdown-item" href="#">Actualizar</a>

                                    </div>
                                </div>
                            </div>
                            <!-- Card Body -->
                            <div class="card-body">
                                <div class="chart-area">
                                    <canvas id="myAreaChart"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Pie Chart -->
                    <div class="col-xl-4 col-lg-5">
                        <div class="card shadow mb-4">
                            <!-- Card Header - Dropdown -->
                            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 class="m-0 font-weight-bold text-primary">Ventas por Dia</h6>
                                <div class="dropdown no-arrow">
                                    <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                                        <div class="dropdown-header">Acciones:</div>
                                        <a class="dropdown-item" href="#">Ver Registros</a>
                                        <a class="dropdown-item" href="#">Actualizar</a>

                                    </div>
                                </div>
                            </div>
                            <!-- Card Body -->
                            <div class="card-body">
                                <div class="chart-pie pt-4 pb-2">
                                    <canvas id="myPieChart"></canvas>
                                </div>
                                <div class="mt-4 text-center small">
                                    <span class="mr-2">
                      <i class="fas fa-circle text-primary"></i> Direct
                    </span>
                                    <span class="mr-2">
                      <i class="fas fa-circle text-success"></i> Social
                    </span>
                                    <span class="mr-2">
                      <i class="fas fa-circle text-info"></i> Referral
                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Graficos-->




            </div>
            <!-- End of Main Content -->
        </div>
    </div>
    <!-- Fin Tablero-->


    <a href="#" id="back-to-top" title="Back to top" style="display: none;">&uarr;</a>

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
    <script src="js/jquery-3.2.1.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>

    <!-- Custom scripts-->
    <script src="js/sb-admin-2.min.js"></script>

    <!-- ALL PLUGINS -->
    <script src="js/jquery.superslides.min.js"></script>
    <script src="js/controladores/controladorCuentaEmpresa.js"></script>






</body>

</html>