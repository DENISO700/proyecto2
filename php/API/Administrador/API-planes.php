<?php

//echo 'Informacion: ' . file_get_contents('php://input');
   header("Content-Type: application/json");//marca resúesta en formato JSON

   include_once("../../clases/Administrador/class-planes.php");//Incluir el archivo

   require_once("../../clases/database.php");//Incluir el archivo

    $database = new Database();

   switch($_SERVER['REQUEST_METHOD']){
       case 'POST'://GUARDAR

           //almacenamos toda la informacion que envia el cliente en un arreglo asociativo
           $_POST = json_decode(file_get_contents('php://input'),true);

           //Crear una instancia a la clkase principal mandamos todos los parametros requeridos por elk constructor            
           $usuario = new Plan(
               $_POST["nombrePlan"],
               $_POST["precio"],
               $_POST["promos"],
               $_POST["almacenamiento"],
               $_POST["soporte"],
               $_POST["centroDeAyuda"],
               $_POST["duracion"],
               $_POST["panpallaPrincipal"]
            
            
           );

           //Lamamos al metodo guardar usuario de la clase principal
          echo  $usuario->guardarPlan($database->getDB());  


       break;
       case 'GET'://Obtener
           if (isset($_GET['id']) ){

             //Llamar al metodo, y le mandamos el id como parametro
             Plan::obtenerPlan($database->getDB(),$_GET['id']);

           }else{

               //Llamar al metodo
               Plan::obtenerPlanes($database->getDB());

           }
       break;
       case 'PUT'://ACTUALIZAR
           //oBTENEMOS LA INFORMACION DEL CLIENTE
           $_PUT = json_decode(file_get_contents('php://input'),true);
          
           //Hacemos una instancia a la clase usuario
           $usuario = new Plan(
            $_PUT["nombrePlan"],
            $_PUT["precio"],
            $_PUT["promos"],
            $_PUT["almacenamiento"],
            $_PUT["soporte"],
            $_PUT["centroDeAyuda"],
            $_PUT["duracion"],
            $_PUT["panpallaPrincipal"]
         
         
        );
           //Lamar al metodo para actualizar
          echo  $usuario->actualizarPlan($database->getDB(),$_GET['id']);  

           
       break;
       case 'DELETE':

           //llamamos el metodo
           Plan :: eliminarPlan($database->getDB(),$_GET['id']);

          
       break;
   }

?>