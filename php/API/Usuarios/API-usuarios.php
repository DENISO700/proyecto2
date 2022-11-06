<?php

 //echo 'Informacion: ' . file_get_contents('php://input');
    header("Content-Type: application/json");//marca resúesta en formato JSON

    include_once("../../clases/Usuarios/class-usuario.php");//Incluir el archivo
    require_once("../../clases/database.php");//Incluir el archivo

    $database = new Database();

 
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST'://GUARDAR

            //almacenamos toda la informacion que envia el cliente en un arreglo asociativo
            $_POST = json_decode(file_get_contents('php://input'),true);

            //Crear una instancia a la clkase principal mandamos todos los parametros requeridos por elk constructor            
            $usuario = new Usuario($_POST["nombre"],$_POST["correo"],$_POST["contraseña"],$_POST["telefono"]);

            //Lamamos al metodo guardar usuario de la clase principal
           echo   $usuario->guardarUsuario($database->getDB());  



           
        break;
        case 'GET'://Obtener
            if (isset($_GET['id'])){

              //Llamar al metodo, y le mandamos el id como parametro
              Usuario::obtenerUsuario($database->getDB(),$_GET['id']);

            }else{

                //Llamar al metodo
                Usuario::obtenerUsuarios($database->getDB());

            }
        break;
        case 'PUT'://ACTUALIZAR
            //oBTENEMOS LA INFORMACION DEL CLIENTE
            $_PUT = json_decode(file_get_contents('php://input'),true);
           
            //Hacemos una instancia a la clase usuario
            $usuario = new Usuario($_PUT["nombre"],$_PUT["correo"],$_PUT["contraseña"],$_PUT["telefono"]);

            //Lamar al metodo para actualizar
            echo $usuario->actualizarUsuario($database->getDB(),$_GET['id']);  

        break;
        case 'DELETE':

            //llamamos el metodo
            Usuario :: eliminarUsuario($database->getDB(),$_GET['id']);

            //impresion del resultado en pantalla
            $resultado["mensaje"] = "Eliminar un usuario con el id: ".$_GET['id'];
            echo json_encode($resultado);
        break;
    }

?>