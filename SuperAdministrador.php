
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
                            <li class="nav-item"><a class="nav-link" href="accountAdmin.php"><i class="fa fa-shopping-bag" ></i>&nbsp;&nbsp;Mi perfil </a></li>
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
                        <h2>Dashboard</h2>

                    </div>
                </div>
            </div>
        </div>
        <!-- FIN MARCADOR-->

          <!--  CATEGORIAS-->
        <div class="container">
            
        <div class="col-md-4" id="derecha">

            <div class="row m-4 text-align-center">

                    <!-- Tienda -->
                    <div class="col-xl-10 col-md-10 mx-auto mb-4">
                        <div class="card border-left-warning shadow h-100 py-2">
                            <div class="card-body">
                                <div class="account-box">
                                    <div class="service-box">
                                        <div class="service-icon">
                                            <a href="RegistroLibro.php?id=<?php echo $_SESSION["id"]?>"><i class="fa fa-paperclip" ></i></a>
                                        </div>
                                        <div class="service-desc">
                                            <h4>Registrar Libro</h4>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>

        </div>

            <div class="row m-4">
                    <h1>Libros Registrados</h1>
                    <table class="table caption-top">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">ISBN</th>
                            <th scope="col">Clase</th>
                            <th scope="col">Titulo</th>
                            <th scope="col">Autor</th>
                            <th scope="col">Portada</th>
                            <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                        <?php
                            require_once "backend/database.php";
                            $sql = "SELECT * FROM `libros` ";
                            $consulta = mysqli_query ($conn,$sql) ;
                            While ($row=mysqli_fetch_assoc($consulta)){
                                echo '<tr>';
                                    echo '<th scope="row">'.$row["id"].'</th>';
                                    echo '<td scope="row">'.$row["ISBN"].'</td>';
                                    echo '<td scope="row">'.$row["clase"].'</td>';
                                    echo '<td scope="row">'.$row["titulo"].'</td>';
                                    echo '<td scope="row">'.$row["autor"].'</td>';
                                    echo '<td scope="row"><img width=75px height=100px src="data:'.$row["tipo_imagen"].';base64,'.base64_encode($row["binario_imagen"]).'"/></td>';
                                    echo '<td><a href="editarLibro.php?libro='.$row['id'].'"><i class="fa fa-pencil" ></i></a>';
                                echo '</tr>';
                            }

                        ?>
                        </tbody>
                    </table>
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
        <script src="js/controladores/controladorSuperAdministrador.js"></script>
        <script src="js/controladorValidaciones.js"></script>
        <script src="js/jquery-3.2.1.min.js"></script>
        <script src="js/popper.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <!-- ALL PLUGINS -->
        <script src="js/jquery.superslides.min.js"></script>





    </body>

    </html>