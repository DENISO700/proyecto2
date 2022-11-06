<?php

 //echo 'Informacion: ' . file_get_contents('php://input');
    header("Content-Type: application/json");//marca resúesta en formato JSON

    include_once("../../clases/Empresas/class-formaDePago.php");//Incluir el archivo

    require_once("../../clases/database.php");//Incluir el archivo

    $database = new Database();
 
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST'://GUARDAR

            //almacenamos toda la informacion que envia el cliente en un arreglo asociativo
            $_POST = json_decode(file_get_contents('php://input'),true);

            //Crear una instancia a la clkase principal mandamos todos los parametros requeridos por elk constructor            
            $usuario = new Pago(
                $_POST["formaDePago"],
                $_POST["nombrePropietario"],
                $_POST["numeroTarjeta"],
                $_POST["vencimiento"],
                $_POST["CCV"]
             
            );

            //Lamamos al metodo guardar usuario de la clase principal
           echo   $usuario->guardarPago($database->getDB(),$_GET['id']);  



        break;
        case 'GET'://Obtener
            if (isset($_GET['id']) & isset($_GET['index']) & isset($_GET['i'])){

              //Llamar al metodo, y le mandamos el id como parametro
              Pago::obtenerPago($database->getDB(),$_GET['id'],$_GET['index']);

            }else{

                //Llamar al metodo
                Pago::obtenerPagos($database->getDB(),$_GET['id']);

            }
        break;
        case 'PUT'://ACTUALIZAR
            //oBTENEMOS LA INFORMACION DEL CLIENTE
            $_PUT = json_decode(file_get_contents('php://input'),true);
           
            //Hacemos una instancia a la clase usuario
            $usuario = new Pago(
                $_PUT["formaDePago"],
                $_PUT["nombrePropietario"],
                $_PUT["numeroTarjeta"],
                $_PUT["vencimiento"],
                $_PUT["CCV"]
             
            );

            //Lamar al metodo para actualizar
            $usuario->actualizarPago($_GET['id'],$_GET['index'],$_GET['i']);  

             //Impresion en pantalla
            $resultado["mensaje"] =  "Actualizar un usuario con el id: " .$_GET['id'].
                                    ",  Informacion a actualizar: ".json_encode($_PUT);
            echo json_encode($resultado);
        break;
        case 'DELETE':

            //llamamos el metodo
            Pago :: eliminarPago($database->getDB(),$_GET['id'],$_GET['index']);

           
        break;
    }

?>