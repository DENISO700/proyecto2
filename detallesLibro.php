
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
   
   <link rel="stylesheet" href="./css/detalle_Libro.css">
 
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
                    <h2>Detalles Libro</h2>

                </div>
            </div>
        </div>
    </div>
    <!-- FIN MARCADOR-->

    <div class="container mt-4">
        <div class="row">

            <?php
            require_once "backend/database.php";
            $sql = "SELECT * FROM `libros` WHERE `id` LIKE ".$_GET['libro']."";
            $consulta = mysqli_query ($conn,$sql) ;
            $row=mysqli_fetch_assoc($consulta)           
            ?>
            <div class="col-md-6 imagen_P">
                <?php
                echo '<img class="imagen_Portada" src="data:'.$row["tipo_imagen"].';base64,'.base64_encode($row["binario_imagen"]).'"/>';
                ?>
            </div>

            <div class="col-6 mt-4">
                <div class="row" style="text-align: left;">
                    <!-- Autor -->
                    <div class="col-md-12">
                        <p style="font-size:20px"><b>Autor:</b>  <span><?php echo $row["autor"]?></span></p>
                    </div>

                    <!-- Editorial -->
                    <div class="col-md-12">
                        <p style="font-size:20px"><b>Editorial: </b> <span><?php echo $row["editorial"]?></span></p>
                    </div>

                    <!-- Edicion -->
                    <div class="col-md-12">
                        <p style="font-size:20px"><b>Edicion: </b> <span><?php echo $row["edicion"]?></span></p>
                    </div>

                    <!-- ISBN -->
                    <div class="col-md-12">
                        <p style="font-size:20px"><b>ISBN: </b><span><?php echo $row["ISBN"]?></span></p>
                    </div>

                    <!-- Pais -->
                    <div class="col-md-12">
                        <p style="font-size:20px"><b>Pais: </b><span><?php echo $row["pais"]?></span></p>
                    </div>

                    <!-- Fecha -->
                    <div class="col-md-12">
                        <p style="font-size:20px"><b>Año de Publicacion: </b><span><?php echo $row["año"]?></span></p>
                    </div>

                    <!-- No. Paginas -->
                    <div class="col-md-12">
                        <p style="font-size:20px"><b>No. Paginas: </b><span><?php echo $row["paginas"]?></span></p>
                    </div>

                    <div class="col-md-12 mt-4 leer ">
                        <a class="btn btn-secondary " href='verLibro.php?id=<?php echo $row['id']; ?>' target='_blank'>Leer Libro</a>
                    </div>

                </div>
    
            </div>

        </div>
    </div>


    <!-- ALL JS FILES -->
    <script src="js/controladores/controladorTienda.js"></script>

</body>

</html>