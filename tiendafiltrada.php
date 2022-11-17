
<!DOCTYPE html>
<html lang="en">


<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Biblioteca </title>

    <!-- Font Awesome CSS -->
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <!-- Site CSS -->
    <link rel="stylesheet" href="css/style.css">
    <!-- Responsive CSS -->
    <link rel="stylesheet" href="css/responsive.css">

   <script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
 
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

                        <li class="nav-item"><a class="nav-link" href="my-account.php?id=${id}"><i class="fa fa-shopping-bag" ></i>&nbsp;&nbsp;Mi perfil </a></li>
                        <li class="nav-item"><a class="nav-link" href="tienda.php" ><i class="fa fa-undo" ></i>&nbsp;&nbsp;Regresar</a></li>
                        <li class="nav-item"><a class="nav-link" href="#" data-toggle="modal" data-target="#logoutModal"><i class="fa fa-power-off" ></i>&nbsp;&nbsp;Cerrar Sesion</a></li>
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
                    <h2>Biblioteca Ichiraku</h2>

                </div>
            </div>
        </div>
    </div>
    <!-- FIN MARCADOR-->

    <!-- TIENDA-->
    <div class="shop-box-inner">

        <div class="container">

            <div class="row">

                <!-- Vista Productos-->
                <div class="col-xl-9 col-lg-9 col-sm-12 col-xs-12 shop-content-right">

                    <div class="right-product-box">
                        <!-- Productos-->
                        <div class="product-categorie-box">

                            <div class="tab-content">

                                <!-- Vista Celdas-->
                                <div role="tabpanel" class="tab-pane fade show active" id="grid-view">

                                    <div class="row portadas" id="celdas">
                                        <?php
                                            require_once "backend/database.php";
                                            $clase=urldecode($_GET['idClase']);
                                            $sql = "SELECT * FROM `libros` WHERE `clase`='$clase'";
                                            $consulta = mysqli_query ($conn,$sql) ;
                                            While ($row=mysqli_fetch_assoc($consulta)){
                                                echo '<div class="card col-3 m-3">';
                                                echo '<img src="data:'.$row["tipo_imagen"].';base64,'.base64_encode($row["binario_imagen"]).'"/>';

                                                    echo '<div class="card-body">';
                                                        echo '<h1 class="card-title">'.$row['titulo'].'</h1>';
                                                        echo '<p class="card-info">'.$row['autor'].'</p>';
                                                        echo '<a href="detallesLibro.php?libro='.$row['id'].'"><i class="fa fa-eye" ></i></a>';
                                                    echo '</div>';
                                                echo '</div>';
                                            }

                                        ?>
                                    </div>

                                </div>
                                <!-- Fin Vista Celdas-->

                            </div>

                        </div>
                        <!-- Fin Productos-->

                    </div>

                </div>
                <!-- Fin Vista Productos-->



                <!-- Clasificacion-->
                <div class="col-xl-3 col-lg-3 col-sm-12 col-xs-12 sidebar-shop-left">

                    <div class="product-categori">

                        <!-- Buscar-->
                        <div class="search-product">
                         
                            <form action="busqueda.php" method="POST">
                                <input list="browsers" name="filtro" class="form-control"  placeholder="Buscar aqui..." type="text" id="formulario">
                                <button class="btn btn-info md-2" type="submit" id="boton" > <i class="fa fa-search"></i> </button>
                            </form>


                            <datalist id="browsers">
    
                            </datalist>

                           
                        </div>
                        <!-- Fin Buscar-->


                        <!-- Contenido Tabla-->
                        <div class="filter-sidebar-left">

                            <div class="title-left">
                                <h3>Clases</h3>
                            </div>

                            <div class="list-group list-group-collapse list-group-sm list-group-tree" id="list-group-men" data-children=".sub-men">
                                        <?php
                                            require_once "backend/database.php";
                                            $sql = "SELECT * FROM `clases`";
                                            $consulta = mysqli_query ($conn,$sql) ;
                                            While ($row=mysqli_fetch_assoc($consulta)){
                                                echo '<div class="list-group-collapse sub-men">';
                                                    echo '<a class="list-group-item list-group-item-action" href="tiendafiltrada.php?idClase='.urlencode($row['nombreClase']).'"  >'.$row['nombreClase'].'</a>';
                                                echo '</div>';
                                            }

                                        ?>


                            </div>

                        </div>


                        <!-- Fin Contenido Tabla-->



                    </div>

                </div>
                <!-- Fin Clasificacion-->

            </div>

        </div>

    </div>

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
    <!-- ALL PLUGINS -->
    <script src="js/jquery.superslides.min.js"></script>

</body>

</html>