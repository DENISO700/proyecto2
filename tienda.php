
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
                    <li class="nav-item"><a class="nav-link" href="#" onclick=" window.history.back();"><i class="fa fa-undo" ></i>&nbsp;&nbsp;Regresar</a></li>
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

                                    <div class="row" id="celdas">
                                    </div>

                                    <?php
                                        require_once "backend/database.php";
                                        $sql = "SELECT * FROM `libros` WHERE `titulo` LIKE '%test%'";
                                        $consulta = mysqli_query ($conn,$sql) ;


                                        
                                        While ($row=mysqli_fetch_assoc($consulta)){
    
                                            echo '<div class="col-sm-6 col-md-6 col-lg-4 col-xl-4">';
                                                echo '<div class="products-single fix">';
                                                    echo '<div class="box-img-hover">';
                                                        echo '<img height="100" width="100" src="data:'.$row["tipo_imagen"].';base64,'.base64_encode($row["binario_imagen"]).'"/>';
                                                    echo '</div>';
                                                    echo '<div class="why-text ">';
                                                    echo '    <h4>'.$row['titulo'].'</h4>';
                                                    echo '    <h5>'.$row['autor'].'</h5>';
                                                    echo '    <span><a href="detallesLibro.php?libro='.$row['id'].'">Detalles</a></span>';
                                                    echo ' </div>';
                                                echo ' </div>';
                                            echo ' </div>';
                                            

                                        }

                                    ?>

                                </div>
                                <!-- Fin Vista Celdas-->

                                <!-- Vista Lista-->
                                <div role="tabpanel" class="tab-pane fade" id="list-view">

                                </div>
                                <!-- Fin Vista Lista-->

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
                         
                                <input list="browsers" class="form-control" onkeyup="completar();" placeholder="Buscar aqui..." type="text" id="formulario">
                                <button class="btn btn-info md-2" id="boton" onclick="buscar();"> <i class="fa fa-search"></i> </button>

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



                            </div>

                        </div>


                        <!-- Fin Contenido Tabla-->



                    </div>

                </div>
                <!-- Fin Clasificacion-->

            </div>

        </div>

    </div>
    <!-- FIN TIENDA-->

 
    <!-- ALL JS FILES -->
    <script src="js/controladores/controladorTienda.js"></script>
    <script src="js/jquery-3.2.1.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <!-- ALL PLUGINS -->
    <script src="js/custom.js"></script>

   
   
    

 

</body>

</html>