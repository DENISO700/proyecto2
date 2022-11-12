<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Editar Usuario</title>
    <link rel="shortcut icon" href="images/favicon.png" type="image/x-icon">


    <!-- Font Awesome CSS -->
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <!-- Site CSS -->
    <link rel="stylesheet" href="css/style.css">
    <!-- Responsive CSS -->
    <link rel="stylesheet" href="css/responsive.css">


</head>


<body class="usuario-reg" onload="editarUsuario() ;regresar();">

    <!--CABEZERA-->
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

                </div>


            </div>

        </nav>

    </header>
    <!-- FIN CABEZERA-->

    <!-- MARCADOR -->
    <div class="all-title-box ">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 ">
                    <h2>Editar Cuenta Cliente</h2>

                </div>
            </div>
        </div>
    </div>
    <!-- MARCADOR-->

    <!-- Formulario Registro -->
    <div class="contenedor-form">

        <div class="formulario" id="data">
            <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Datos Registrados</h1>
            <form >
                <input type="text" placeholder="Usuario" id="user" required>

                <input type="text" placeholder="Contraseña" id="contraseña" required>

                <input type="email" placeholder="Correo Electronico" id="correo" required>

                <input type="text" placeholder="Teléfono" id="telefono" required onkeypress='return validaNumericos(event)' maxlength="8" minlength="8">

               <button type="button" class="btn btn-danger col-12" onclick="editar();">REGISTRARSE</button>


            </form>





        </div>

    </div>
    <!-- End Formulario Registro-->


    <!-- ALL JS FILES -->
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="js/controladores/controladorEditarUsuario.js"></script>
    <script src="js/controladorValidaciones.js"></script>
    <script src="js/jquery-3.2.1.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>


</body>

</html>