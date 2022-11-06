<?php

 //echo 'Informacion: ' . file_get_contents('php://input');
    header("Content-Type: application/json");//marca resúesta en formato JSON

    include_once("../../clases/Empresas/class-sucursales.php");//Incluir el archivo

    require_once("../../clases/database.php");//Incluir el archivo

    $database = new Database();
 
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST'://GUARDAR

            //almacenamos toda la informacion que envia el cliente en un arreglo asociativo
            $_POST = json_decode(file_get_contents('php://input'),true);

            //Crear una instancia a la clkase principal mandamos todos los parametros requeridos por elk constructor            
            $usuario = new Sucursal(
                $_POST["nombreSucursal"],
                $_POST["correo"],
                $_POST["telefono"],
                $_POST["pais"],
                $_POST["ciudad"],
              
                $_POST["direccion"],
                $_POST["latitud"],
                $_POST["longitud"]
            );

            //Lamamos al metodo guardar usuario de la clase principal
            echo  $usuario->guardarSucursal($database->getDB(),$_GET['id']);  


        break;
        case 'GET'://Obtener
            if (isset($_GET['id']) & isset($_GET['index'])){

              //Llamar al metodo, y le mandamos el id como parametro
              Sucursal::obtenerSucursal($database->getDB(),$_GET['id'],$_GET['index']);

            }else{

                //Llamar al metodo
                Sucursal::obtenerSucursales($database->getDB(),$_GET['id']);

            }
        break;
        case 'PUT'://ACTUALIZAR
            //oBTENEMOS LA INFORMACION DEL CLIENTE
            $_PUT = json_decode(file_get_contents('php://input'),true);
           
            //Hacemos una instancia a la clase usuario
            $usuario = new Sucursal(
                $_PUT["nombreSucursal"],
                $_PUT["correo"],
                $_PUT["telefono"],
                $_PUT["pais"],
                $_PUT["ciudad"],
                
                $_PUT["direccion"],
                $_PUT["latitud"],
                $_PUT["longitud"]
            );

            //Lamar al metodo para actualizar
           echo  $usuario->actualizarSucursal($_GET['id'],$_GET['index']);  

        
        break;
        case 'DELETE':

            //llamamos el metodo
            Sucursal :: eliminarSucursal($_GET['id'],$_GET['index']);

            //impresion del resultado en pantalla
            $resultado["mensaje"] = "Eliminar un usuario con el id: ".$_GET['id'];
            echo json_encode($resultado);
        break;
    }

?>