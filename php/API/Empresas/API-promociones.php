<?php

 //echo 'Informacion: ' . file_get_contents('php://input');
    header("Content-Type: application/json");//marca resúesta en formato JSON

    include_once("../../clases/Empresas/class-promociones.php");//Incluir el archivo

    require_once("../../clases/database.php");//Incluir el archivo

    $database = new Database();
 
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST'://GUARDAR

            //almacenamos toda la informacion que envia el cliente en un arreglo asociativo
            $_POST = json_decode(file_get_contents('php://input'),true);

            //Crear una instancia a la clkase principal mandamos todos los parametros requeridos por elk constructor            
            $usuario = new Promocion(
                $_POST["categoria"],
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
             $usuario->guardarPromocion($database->getDB(),$_GET['id']);  



            $resultado["mensaje"] = "Guardar usuario, informacion:". json_encode($_POST);
            echo json_encode($resultado);
        break;
        case 'GET'://Obtener
            if (isset($_GET['id']) & isset($_GET['index'])){

              //Llamar al metodo, y le mandamos el id como parametro
              Promocion::obtenerPromocion($database->getDB(),$_GET['id'],$_GET['index']);

            }else{

                //Llamar al metodo
                Promocion::obtenerPromociones($database->getDB(),$_GET['id']);

            }
        break;
        case 'PUT'://ACTUALIZAR
            //oBTENEMOS LA INFORMACION DEL CLIENTE
            $_PUT = json_decode(file_get_contents('php://input'),true);
           
            //Hacemos una instancia a la clase usuario
            $usuario = new Promocion(
                $_PUT["categoria"],
                $_PUT["nombre"],
                $_PUT["precio"],
                $_PUT["porcentaje"],
                $_PUT["descripcion"],
                $_PUT["inicio"],
                $_PUT["final"],
                $_PUT["final"],
                $_PUT["sucursales"]
            );

            //Lamar al metodo para actualizar
            $usuario->actualizarPromocion($_GET['id'],$_GET['index']);  

             //Impresion en pantalla
            $resultado["mensaje"] =  "Actualizar un usuario con el id: " .$_GET['id'].
                                    ",  Informacion a actualizar: ".json_encode($_PUT);
            echo json_encode($resultado);
        break;
        case 'DELETE':

            //llamamos el metodo
            Promocion :: eliminarPromocion($_GET['id'],$_GET['index']);

            //impresion del resultado en pantalla
            $resultado["mensaje"] = "Eliminar un usuario con el id: ".$_GET['id'];
            echo json_encode($resultado);
        break;
    }

?>