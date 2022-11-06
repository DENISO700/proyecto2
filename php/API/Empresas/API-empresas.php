<?php

 //echo 'Informacion: ' . file_get_contents('php://input');
    header("Content-Type: application/json");//marca resúesta en formato JSON

    include_once("../../clases/Empresas/class-empresa.php");//Incluir el archivo

    require_once("../../clases/database.php");//Incluir el archivo

    $database = new Database();

 
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST'://GUARDAR

            //almacenamos toda la informacion que envia el cliente en un arreglo asociativo
            $_POST = json_decode(file_get_contents('php://input'),true);

            //Crear una instancia a la clkase principal mandamos todos los parametros requeridos por elk constructor            
            $usuario = new Empresa(
                $_POST["nombreEmpresa"],
                $_POST["logo"],
                $_POST["correo"],
                $_POST["contraseña"],
                $_POST["descripcion"],
                $_POST["mision"],
                $_POST["vision"],
                $_POST["telefono"],
                $_POST["pais"],
                $_POST["ciudad"],
                $_POST["nombreRed1"],
                $_POST["url1"],
                $_POST["banner1"],
                $_POST["nombreRed2"],
                $_POST["url2"],
                $_POST["banner2"],
                $_POST["nombreRed3"],
                $_POST["url3"],
                $_POST["banner3"],
                $_POST["plan"]
               


            
            
            
            );

            //Lamamos al metodo guardar usuario de la clase principal
            echo  $usuario->guardarEmpresa($database->getDB());  

            



        break;
        case 'GET'://Obtener
            if (isset($_GET['id'])){

              //Llamar al metodo, y le mandamos el id como parametro
              Empresa::obtenerEmpresa($database->getDB(),$_GET['id']);

            }else{

                //Llamar al metodo
                Empresa::obtenerEmpresas($database->getDB());

            }
        break;
        case 'PUT'://ACTUALIZAR
            //oBTENEMOS LA INFORMACION DEL CLIENTE
            $_PUT = json_decode(file_get_contents('php://input'),true);
           
            //Hacemos una instancia a la clase usuario
            $usuario = new Empresa(
                $_PUT["nombreEmpresa"],
                $_PUT["logo"],
                $_PUT["correo"],
                $_PUT["contraseña"],
                $_PUT["descripcion"],
                $_PUT["mision"],
                $_PUT["vision"],
                $_PUT["telefono"],
                $_PUT["pais"],
                $_PUT["ciudad"],
                $_PUT["nombreRed1"],
                $_PUT["url1"],
                $_PUT["banner1"],
                $_PUT["nombreRed2"],
                $_PUT["url2"],
                $_PUT["banner2"],
                $_PUT["nombreRed3"],
                $_PUT["url3"],
                $_PUT["banner3"],
                $_PUT["plan"]
               

            );
            //Lamar al metodo para actualizar
            echo $usuario->actualizarEmpresa($database->getDB(),$_GET['id']);  

            
        break;
        case 'DELETE':

            //llamamos el metodo
            Empresa :: eliminarEmpresa($database->getDB(),$_GET['id']);

          
    }

?>