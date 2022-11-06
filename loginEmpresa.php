<?php

session_start();

//echo 'Informacion: ' . file_get_contents('php://input');
   header("Content-Type: application/json");//marca respúesta en formato JSON

   include_once("php/clases/Empresas/class-empresa.php");//Incluir el archivo

   require_once("php/clases/database.php");//Incluir el archivo

   $database = new Database();


   $_POST = json_decode(file_get_contents('php://input'),true);

   switch($_SERVER['REQUEST_METHOD']){
       case 'POST':

       
        if ( "admin"==$_POST['correo'] && "123456" == $_POST['contraseña']) {

          $respuesta = array(

            "codigo"=>2,
            "mensaje"=>"Usuario Autenticado",
            "token" => sha1(uniqid(rand(),true)),
            "correo" => $_POST['correo'],
            "tipo" => 3,



        );    

              $_SESSION["token"] = $respuesta["token"];

             setcookie("token",$respuesta["token"],time()+60*60*24*31,"/");//almacena la cokie

              setcookie("correo",$_POST['correo'],time()+(60*60*24*31),"/") ;

              setcookie("tipo",$respuesta["tipo"],time()+(60*60*24*31),"/") ;
              
              

              echo json_encode($respuesta);
       }else{

        
           $result = Empresa::login($_POST['correo'],$_POST['contraseña'],$database->getDB());

           if ($result) {


           $respuesta = array(

               "codigo"=>1,
               "mensaje"=>"Usuario Autenticado",
               "token" => sha1(uniqid(rand(),true)),
               "correo" => $result["correo"],
               "key" => $result['key'],
               "tipo" =>2,

           );    

                 $_SESSION["token"] = $respuesta["token"];

                setcookie("token",$respuesta["token"],time()+60*60*24*31,"/");//almacena la cokie

                 setcookie("correo",$result["correo"],time()+(60*60*24*31),"/") ;
                 setcookie("tipo",$respuesta["tipo"],time()+60*60*24*31,"/");//almacena la cokie

                 echo json_encode($respuesta);
            } else {

                setcookie("token","",time()-1,"/");//almacena la cokie

                setcookie("correo","",time()-1,"/") ;

                setcookie("tipo","",time()-1,"/");//almacena la cokie

               echo '{"codigoResultado":0,"mensaje":"Usuario/Password No Validos"}';


            }
            
          }
          
         
       break;
      
   }

?>