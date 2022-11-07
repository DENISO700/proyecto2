<!DOCTYPE text/html>
<html lang="en">


<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>ICHIRAKU</title>

    <!--  Dashboard-->
    <link href="css/sb-admin-2.min.css" rel="stylesheet">
    <!-- Font Awesome CSS -->
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <!-- Site CSS -->
    <link rel="stylesheet" href="css/style.css">
    <!-- Responsive CSS -->
    <link rel="stylesheet" href="css/responsive.css">


</head>

<body onload="Slider();">


    <!-- CABEZERA -->
    <header class="main-header ">

        <nav class="navbar navbar-expand-lg navbar-light bg-light  navbar-default bootsnav ">
            <div class="container">
                <!-- Inicio Cabecera-->
                <div class="navbar-header">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-menu">
                  <i class="fa fa-bars"></i>
              </button>
                    <a class="navbar-brand" href="#"><img src="images/logotipo.png" class="logo d-none  d-xl-block "></a>

                </div>
                <!-- Fin Cabezera -->

                <!-- Opciones de Navegacion -->
                <div class="collapse navbar-collapse" id="navbar-menu">
                    <ul class="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp">

                        <li class="nav-item"><a class="nav-link" href="login.html"><i class="fa fa-globe" ></i>&nbsp;&nbsp;Iniciar Sesion</a></li>
                    </ul>
                </div>
                <!-- /.navbar-collapse -->
            </div>

        </nav>

    </header>
    <!-- FIN CABEZERA-->



    <!-- Inicio Slider-->
    <div class="row">
        <div class="container carrusel ">

            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner" id="slider">



                </div>

            </div>

        </div>
    </div>
    <!-- Fin Slider -->

    <!-- Bienvenida -->
    <div class="row">
        <div class="container carrusel">
            <h5 class="bienvenida">
                Bienvenidos a Ichiraku
            </h5>
        </div>
    </div>
    <!-- Bienvenida -->

    <!-- ALL JS FILES -->
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="js/jquery-3.2.1.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <!-- ALL PLUGINS -->
    <script src="js/jquery.superslides.min.js"></script>
    <script src="js/custom.js"></script>
    <script src="js/controladores/controladorIndex.js"></script>




</body>

</html>