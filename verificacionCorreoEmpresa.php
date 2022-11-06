<?php
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';


 //echo 'Informacion: ' . file_get_contents('php://input');
    header("Content-Type: application/json");//marca resúesta en formato JSON

   

////////////////////////////////////////////


 
    switch($_SERVER['REQUEST_METHOD']){


        case 'POST'://GUARDAR

            
           /* $nombre = $_POST["nombre"];

            $num_archivos = count($_FILES['archivo']['name']);
            

            for ($i=0; $i < $num_archivos; $i++) { 

               if (!empty($_FILES['archivo']['name'][$i])) {

               $ruta_nueva = "php/data/Empresas/".$nombre."/".$_FILES['archivo']['name'][$i];
  
               if (file_exists($ruta_nueva)) {

                echo "el archivo ".$_FILES['archivo']['name'][$i]."ya se encuentra en el servidor<br>";
           
                 } else {
                 $ruta_temporal = $_FILES['archivo']['tmp_name'][$i];
                 move_uploaded_file($ruta_temporal,$ruta_nueva);

                  echo "el archivo ".$_FILES['archivo']['name'][$i]."se subio de manera exitosa<br>";
                  }
         
        
            } 

           }*/

 
             $correo = $_POST["correo"];

               $mail=new PHPMailer();
             $mail->CharSet = 'UTF-8';

              $body = '
              <div>
                 <h1>Bienvenido a ICHIRAKU</h1>

                  <h3>Verificacion de Correo correcta</h3>
                  <h3>Agrega una forma de Pago para terminar tu registro</h3>

    
                </div>';

               $mail->IsSMTP();
               $mail->Host       = 'smtp.gmail.com';
               $mail->SMTPSecure = 'tls';
               $mail->Port       = 587;
               $mail->SMTPDebug  = 1;
               $mail->SMTPAuth   = true;
               $mail->Username   = 'registroichiraku@gmail.com';
               $mail->Password   = 'cisco2019/*';
               $mail->SetFrom('registroichiraku@gmail.com', "Ichiraku");
               $mail->AddReplyTo('no-reply@mycomp.com','no-reply');
               $mail->Subject    = 'Correo de Verificacion ICHIRAKU';
               $mail->MsgHTML($body);

               $mail->AddAddress($correo, 'Gianni');
               $mail->send();


            break;

        
     
       
     
    }
?>