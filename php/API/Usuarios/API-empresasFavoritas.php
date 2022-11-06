<?php

 //echo 'Informacion: ' . file_get_contents('php://input');
    header("Content-Type: application/json");//marca resúesta en formato JSON

    include_once("../../clases/Usuarios/class-empresasFavoritas.php");//Incluir el archivo

    require_once("../../clases/database.php");//Incluir el archivo

    $database = new Database();
 
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST'://GUARDAR

            //almacenamos toda la informacion que envia el cliente en un arreglo asociativo
            $_POST = json_decode(file_get_contents('php://input'),true);

            //Crear una instancia a la clkase principal mandamos todos los parametros requeridos por elk constructor            
            $usuario = new EmpresaFavorita(
                $_POST["nombreEmpresa"],
                $_POST["logo"],
                $_POST["correo"],
                $_POST["contraseña"],
                $_POST["descripcion"],
                $_POST["mision"],
                $_POST["vision"],
                $_POST["telefono"],
                $_POST["pais"],
                $_POST["ciudad"]
                        );

            //Lamamos al metodo guardar usuario de la clase principal
           echo   $usuario->guardarEmpresaFavorita($database->getDB(),$_GET["id"]);  

        break;
        case 'GET'://Obtener
            if (isset($_GET['id']) & isset($_GET['index']) ){

              //Llamar al metodo, y le mandamos el id como parametro
              EmpresaFavorita::obtenerEmpresasFavorita($database->getDB(),$_GET['id'],$_GET['index']);

            }else{

                //Llamar al metodo
                EmpresaFavorita::obtenerEmpresasFavoritas($database->getDB(),$_GET['id']);

            }
        break;
        case 'PUT'://ACTUALIZAR
            //oBTENEMOS LA INFORMACION DEL CLIENTE
            $_PUT = json_decode(file_get_contents('php://input'),true);
           
            //Hacemos una instancia a la clase usuario
            $usuario = new Usuario($_PUT["nombre"],$_PUT["correo"],$_PUT["contraseña"],$_PUT["telefono"]);

            //Lamar al metodo para actualizar
           // $usuario->actualizarUsuario($_GET['id']);  

            
        break;
        case 'DELETE':

            //llamamos el metodo
            EmpresaFavorita :: eliminarEmpresasFavorita($database->getDB(),$_GET['id'],$_GET["index"]);

           
        break;
    }

?>