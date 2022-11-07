


<?php

// session_start();

// if (!isset($_SESSION["token"])) {
//    header("location: 401.html");
// }

// if (!isset($_COOKIE["token"])) {
//     header("location: 401.html");
//  }

//  if ($_SESSION["token"] != $_COOKIE["token"]) {
//     header("location: 401.html");
//  }

//  if ($_COOKIE["tipo"] !=1) {//verificar que el usuario solo vea paginas de usuario 
//     header("location: 401.html");
//  }


?>





<!DOCTYPE html>
<html lang="en">


<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Tienda </title>

    <!-- Font Awesome CSS -->
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <!-- Site CSS -->
    <link rel="stylesheet" href="css/style.css">
    <!-- Responsive CSS -->
    <link rel="stylesheet" href="css/responsive.css">

    <link href="css/starrr.css" rel=stylesheet/>

    <script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
 
 
   
   
    
    

    <script src="js/starrr.js"></script>
    
    

</head>

<body onload="regresar(); ">

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
    <!--FIN CABEZERA-->

    <!--MARCADOR -->
    <div class="all-title-box">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2>Tienda</h2>

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

                        <!-- Tipo de Vista-->
                        <div class="product-item-filter row">

                            <div class="col-12 col-sm-4 text-center text-sm-right">
                                <ul class="nav nav-tabs ml-auto">

                                    <li>
                                        <a class="nav-link active ml-auto" href="#grid-view" data-toggle="tab"> <i class="fa fa-th"></i> Ver en Miniaturas</a>
                                    </li>
                                    <li>
                                        <a class="nav-link ml-auto" href="#list-view" data-toggle="tab"> <i class="fa fa-list-ul"></i> Ver en Detalles </a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <!-- Fin Tipo de Vista-->

                        <!-- Productos-->
                        <div class="product-categorie-box">

                            <div class="tab-content">

                                <!-- Vista Celdas-->
                                <div role="tabpanel" class="tab-pane fade show active" id="grid-view">

                                    <div class="row" id="celdas">




                                    </div>

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
                                <h3>Categorias</h3>
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

  


    <!-- Modal Vista Previa -->

    <div class="modal fade" id="exampleModalScrollable" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable" role="document">
            <div class="modal-content ">



                <div class="modal-body " style="background-color: darkgray;">

                    <div class="container p-3 datos-ser">

                        <div class="row">
                            <div class="col-12  text-left" style="background-color: darkgray;">
                                <h1 id="exampleModalLabel" class="titulo-Sucursal">DETALLES <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span style="font-weight: bold;">X</span></button></h1>
                                <hr>
                            </div>
                        </div>

                        <div class="row " id="cuerpo">

                        </div>

                        <div class="row mb-3 " id="carrusel" style="height: 500px;">


                            <div class="col-4  p-3">




                                <div style="height: 50px;" id="img">


                                </div>


                                <div class="datos-sucursal" style="height: 450px;" id="date">


                                </div>



                            </div>

                            <div class="col-8">
                                <div class=" my-3 p-3 " style="width: 680px;" id="coor">
                                    <div id="demo">
                                        <h1 style="text-align: center;">Ubicacion de la Sucursal</h1>
                                    </div>
                                    <div id="mapholder" class="m-auto " style="height: 420px;">

                                    </div>
                                </div>
                            </div>








                        </div>



                    </div>





                </div>




            </div>



        </div>
    </div>
    <!-- FinModal Vista Previa -->


    <!-- Modal Comentar -->
    <div class="modal fade" id="exampleModalScrollable2" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
          
          <div class="modal-content">

          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalScrollableTitle">Comentarios</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
           </button>
         </div>

         
         
                <div class="modal-body">

                   
                   <div class="container" style="width:100%; height:400px; overflow: scroll;" id="comentarios2"></div>

                   <div class="container mt-3">
                    Calificar: <span id="Estrellas"></span>
                    <input type="hidden" id="valor">
                  </div>

                  <div class="container" id="nuevo"></div>



                 
                   

                </div>


            </div>



        </div>

    </div>
      <!-- FinModal Vista Previa -->



  
  
    <a href="#" id="back-to-top" title="Back to top" style="display: none;">&uarr;</a>

    <!-- ALL JS FILES -->

    <script src="js/custom.js"></script>

    <script>


   $('#Estrellas').starrr({
    

       rating:0,
       change:function(e,valor){
         
     
            document.getElementById("valor").value =valor;
            
      
       
        
      
           
       }
       
   });
    
    </script>

   
    <!-- ALL JS FILES -->
    <script src="http://maps.google.com/maps/api/js?sensor=false">
        //API de Google Maps
    </script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="js/controladores/controladorTienda.js"></script>
    <script src="js/jquery-3.2.1.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <!-- ALL PLUGINS -->
    <script src="js/jquery.superslides.min.js"></script>
    <script src="js/inewsticker.js"></script>
    <script src="js/images-loded.min.js"></script>
    <script src="js/isotope.min.js"></script>
    <script src="js/baguetteBox.min.js"></script>
    <script src="js/custom.js"></script>

   
   
    

 

</body>

</html>