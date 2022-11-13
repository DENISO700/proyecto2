
<?php
session_start()
?>
<!DOCTYPE html>
    <html lang="en">


    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Cuenta Usuario</title>
        <link rel="shortcut icon" href="images/favicon.png" type="image/x-icon">


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

    <body>


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
                        <h2>Cuenta Cliente</h2>

                    </div>
                </div>
            </div>
        </div>
        <!-- FIN MARCADOR-->

        <!-- MI CUENTA-->
        <div class="container mt-3">

            <div class="row">

                <div class=" col-md-4 " id="izquierda">
                    <div class="row">
                        <!-- Editar Perfil -->
                        <div class="col-xl-10 col-md-10 mx-auto mb-4">
                            <div class="card border-left-primary shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="account-box">
                                        <div class="service-box">
                                            <div class="service-icon">
                                                <a href="editarUsuario.php?id=${id}"><i class="fa fa-pencil-square-o" ></i></a>
                                            </div>
                                            <div class="service-desc">
                                                <h4>Editar Perfil</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>

                <div class="col-md-4 bg-success mb-4" id="datos">
                    <div class="col-md-12 m-auto text-center">
                        <h1 class=" mt-3" style="font-weight: bold;"><?php echo $_SESSION["nombre_completo"]?></h1>
                    </div>

                    <div class="col-md-12 m-auto">
                        <img  <?php
                        if($_SESSION['binario_imagen']==NULL){ echo 'src="images/user.png"';}else{
                            echo 'src="data:'.$_SESSION["tipo_imagen"].';base64,'.base64_encode($_SESSION["binario_imagen"]).'"';}?> class="w-75 my-3 ml-5 img-thumbnail" style="border-radius: 150px;"/>`;
                   
                    </div>

                    <form enctype="multipart/form-data" action="backend/actualizarFoto.php" method="POST">
                        <div class="col-md-12 mb-4 custom-file ">
                            <label class="custom-file-label mt-3" id="ruta" >Actualizar Imagen de Perfil</label>
                            <input name="foto"  type='file' id="imgInp"  class="custom-file-input form-control" />
                        </div>
                        <div class="col-md-12 mb-3">
                            <h1> <b>Correo : </b><?php echo $_SESSION["correo_personal"]?></h1>
                        </div>

                        <div class="col-md-12 mb-3">
                            <h1> <b>Usuario: </b><?php echo $_SESSION["nombre_usuario"]?></h1>
                        </div>

                        <div>
                            <input type="submit" name="actualizar" class="form-control mb-3" value="Actualizar Perfil">
                        </div>
                    </form>

                </div>

                <div class="col-md-4" id="derecha">

                    <div class="row">

                            <!-- Tienda -->
                            <div class="col-xl-10 col-md-10 mx-auto mb-4">
                                <div class="card border-left-warning shadow h-100 py-2">
                                    <div class="card-body">
                                        <div class="account-box">
                                            <div class="service-box">
                                                <div class="service-icon">
                                                    <a href="tienda.php?id=<?php echo $_SESSION["id"]?>"><i class="fa fa-paperclip" ></i></a>
                                                </div>
                                                <div class="service-desc">
                                                    <h4>Biblioteca</h4>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                    </div>

                </div>

            </div>
        </div>
        <!-- FIN MI CUENTA-->

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

        <a href="#" id="back-to-top" title="Back to top" style="display: none;">&uarr;</a>

        <!-- ALL JS FILES -->
        <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
        <script src="js/jquery-3.2.1.min.js"></script>
        <script src="js/popper.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <!-- ALL PLUGINS -->
        <script src="js/jquery.superslides.min.js"></script>

</body>

</html>
