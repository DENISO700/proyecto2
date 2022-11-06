


<?php

session_start();

if (!isset($_SESSION["token"])) {
   header("location: 401.html");
}

if (!isset($_COOKIE["token"])) {
    header("location: 401.html");
 }

 if ($_SESSION["token"] != $_COOKIE["token"]) {
    header("location: 401.html");
 }

 if ($_COOKIE["tipo"] !=1) {//verificar que el empresa solo vea paginas de empresa 
    header("location: 401.html");//asistencia de Vanesa
 }


?>





<!DOCTYPE html>
<html lang="en">


<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Comprar </title>


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



                    </ul>
                </div>



            </div>

        </nav>

    </header>
    <!-- FIN CABEZERA -->


    <!--MARCADOR -->
    <div class="all-title-box">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2>Comprar</h2>

                </div>
            </div>
        </div>
    </div>
    <!-- FIN MARCADOR-->

    <!-- PAGO -->
    <div class="cart-box-main">
        <div class="container">


            <div class="row">

                <div class="col-sm-9 col-lg-9 mb-3 m-auto">

                    <div class="checkout-address">

                        <div class="title-left">

                            <h3 class="mt-3">Forma de Pago</h3>

                        </div>

                        <form class="needs-validation" novalidate>
                            <hr class="mb-4">
                            <div class="d-block my-3">
                                <div class="custom-control custom-radio">
                                    <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked required>
                                    <label class="custom-control-label" for="credit">Tarjeta de Credito</label>
                                </div>
                                <div class="custom-control custom-radio">
                                    <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required>
                                    <label class="custom-control-label" for="debit">Tarjeta de Debito</label>
                                </div>
                                <div class="custom-control custom-radio">
                                    <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required>
                                    <label class="custom-control-label" for="paypal">Paypal</label>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label for="cc-name">Nombre de Propietario</label>
                                    <input type="text" class="form-control" id="cc-name" placeholder="" required> <small class="text-muted">Full name as displayed on card</small>
                                    <div class="invalid-feedback"> Nombre del Propietario es Requerido </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="cc-number">Numero de tarjeta </label>
                                    <input type="text" class="form-control" id="cc-number" placeholder="" onkeypress='return validaNumericos(event)'required>
                                    <div class="invalid-feedback"> Numero de Tarjeta es Requerido </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-3 mb-3">
                                    <label for="cc-expiration">Vencimiento</label>
                                    <input type="text" class="form-control" id="cc-expiration" placeholder=""onkeypress='return validaNumericos(event)' required>
                                    <div class="invalid-feedback"> Fecha de Vencimiento Requerida</div>
                                </div>
                                <div class="col-md-3 mb-3">
                                    <label for="cc-expiration">CVV</label>
                                    <input type="text" class="form-control" id="cc-cvv" placeholder="" onkeypress='return validaNumericos(event)' required>
                                    <div class="invalid-feedback"> Codigo de Seguridad Requerido </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <div class="payment-icon">
                                        <ul>
                                            <li><img class="img-fluid" src="images/payment-icon/1.png" alt=""></li>
                                            <li><img class="img-fluid" src="images/payment-icon/2.png" alt=""></li>
                                            <li><img class="img-fluid" src="images/payment-icon/3.png" alt=""></li>
                                            <li><img class="img-fluid" src="images/payment-icon/5.png" alt=""></li>
                                            <li><img class="img-fluid" src="images/payment-icon/7.png" alt=""></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <hr class="mb-1">
                        </form>

                    </div>

                    <div class="row">

                       


                        <div class="col-md-12 col-lg-12">

                            <div class="odr-box">

                                <div class="title-left">
                                    <h3>Carrito de Compras</h3>
                                </div>

                                <div class="rounded p-2 bg-light" id="pedido">



                                </div>
                            </div>
                        </div>

                        <div class="col-md-12 col-lg-12">

                            <div class="order-box">

                                <div class="title-left">
                                    <h3>Tu Orden</h3>
                                </div>

                                <div class="d-flex">
                                   
                                    <div class="ml-auto font-weight-bold">Total</div>
                                </div>
                                <hr class="my-1">

                                <div class="d-flex">
                                    <h4>Sub Total</h4>
                                    <div class="ml-auto font-weight-bold"> $ 440 </div>
                                </div>
                                <hr class="my-1">

                                <div class="d-flex">
                                    <h4>Descuento</h4>
                                    <div class="ml-auto font-weight-bold"> $ 40 </div>
                                </div>
                                <hr class="my-1">

                                <div class="d-flex">
                                    <h4>Costo de Envio</h4>
                                    <div class="ml-auto font-weight-bold"> Free </div>
                                </div>
                                <hr>

                                <div class="d-flex gr-total">
                                    <h5>Total a Pagar</h5>
                                    <div class="ml-auto h5"> $ 388 </div>
                                </div>
                                <hr>

                            </div>

                        </div>

                        <div class="col-12 d-flex shopping-box"> <a href="javascript:void(0);" class="ml-auto btn hvr-hover mb-5" onclick="obtenerUsuario();">Hacer Pedido</a>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    </div>
    <!-- FIN PAGO-->

    <a href="#" id="back-to-top" title="Back to top" style="display: none;">&uarr;</a>

    <!-- ALL JS FILES -->
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="js/controladores/controladorCompra.js"></script>
    <script src="js/controladorValidaciones.js"></script>
    <script src="js/jquery-3.2.1.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <!-- ALL PLUGINS -->
    <script src="js/jquery.superslides.min.js"></script>

    <script src="js/custom.js"></script>
</body>

</html>