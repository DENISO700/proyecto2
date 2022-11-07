<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Impresion</title>

    <!-- Font Awesome CSS -->
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/bootstrap.min.css">

    <!-- Responsive CSS -->
    <link rel="stylesheet" href="css/responsive.css">

    <!-- Site CSS -->
    <link rel="stylesheet" href="css/style.css">

</head>

<body onload="update_qrcode();regresar();">


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

    <!--  MARCADOR -->
    <div class="all-title-box">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2>Fichas de Impresion</h2>

                </div>
            </div>
        </div>
    </div>
    <!-- FIN MARCADOR -->

    <div class="container">

        <div class="row  p-2">

            <div class="col-md-12  col-12 contenido  m-auto bg-success" style="background-color: darkgray;">

                <!-- Datos Generales -->

                <div class="row" style="background-color: darkgray;">
                    <div class=" col-md-5 mb-1 mt-5 mx-auto" style="background-color: darkgray;">
                        <h1 class="text-center redes-empresa">Datos de la Promocion</h1>
                        <select class="custom-select mt-2" id="productos" onchange="ficha();">
                            <option value ="-1"selected>Nombre Producto</option>
                        </select>
                    </div>


                </div>
                <!-- Fin  -->

                <div class="row">

                    <div class="canvas_div_pdf col-12 p-2" id="ficha" style="background-color: darkgray;">

                        <div class="container col-md-8 mt-3" style="background-color: darkgray;">

                            <div class="row">

                                <div class="col-md-6">
                                    <h1>Ficha de Promocion</h1>
                                </div>

                                <div class="col-md-6 ml-auto">
                                    <span class="descuento">50%</span>
                                </div>
                            </div>

                            <div class="row" style="background-color: rgba(177, 27, 27, 0.61);">

                                <div id="beauty" class="col-md-4">
                                    <h2>Codigo QR</h2>
                                    <div id="qr" class="ml-3">

                                    </div>

                                    <button type="button" class="btn btn-danger" onclick="getPDF()">Generar PDF</button>
                                </div>

                                <div class="main col-md-4">
                                    <h2>Nombre del Producto</h2>
                                    <p>Lorem ionem mollitia amet harum nam ullam quaerat at et
                                    </p>
                                </div>

                                <div class="main2 col-md-4" id="foto">
                                    <h2>Foto Producto</h2>

                                    <img src="images/logotipo.png" width="100" height="100" />

                                </div>


                            </div>

                        </div>


                    </div>

                </div>


            </div>


        </div>



    </div>









    <a href="#" id="back-to-top" title="Back to top" style="display: none;">&uarr;</a>



</body>
<!-- ALL JS FILES -->
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="js/controladores/controladorFicha.js"></script>
<script src="js/jquery-3.2.1.min.js"></script>
<script src="js/popper.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<!-- ALL PLUGINS -->
<script src="js/jquery.superslides.min.js"></script>


<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.min.js"></script>

<script type="text/javascript" src="https://html2canvas.hertzen.com/dist/html2canvas.js"></script>


</html>