<?php

 //echo 'Informacion: ' . file_get_contents('php://input');
    header("Content-Type: application/json");//marca resúesta en formato JSON

    include_once("../../clases/Usuarios/class-carrito.php");//Incluir el archivo

    require_once("../../clases/database.php");//Incluir el archivo

    $database = new Database();
 
    switch($_SERVER['REQUEST_METHOD']){

        case 'POST'://GUARDAR

            //almacenamos toda la informacion que envia el cliente en un arreglo asociativo
            $_POST = json_decode(file_get_contents('php://input'),true);

            //Crear una instancia a la clkase principal mandamos todos los parametros requeridos por elk constructor            
            $usuario = new Carrito(
                $_POST["nombre"],
                $_POST["precio"],
                $_POST["porcentaje"],
                $_POST["descripcion"],
                $_POST["inicio"],
                $_POST["final"],
                $_POST["foto"],
                $_POST["sucursales"]
                
                        );

            //Lamamos al metodo guardar usuario de la clase principal
            echo  $usuario->guardarCarrito($database->getDB(),$_GET["id"]);  



        break;

        case 'GET'://Obtener
            if (isset($_GET['id']) & isset($_GET['index']) ){

              //Llamar al metodo, y le mandamos el id como parametro
              Carrito::obtenerProductoCarrito($database->getDB(),$_GET['id'],$_GET['index']);

            }else{

                //Llamar al metodo
                Carrito::obtenerCarrito($database->getDB(),$_GET['id']);

            }
        break;

       

        case 'DELETE':

            //llamamos el metodo
            Carrito :: eliminarProductoCarrito($database->getDB(),$_GET['id'],$_GET["index"]);

        break;
    }

?>