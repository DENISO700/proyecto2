<?php
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';


 //echo 'Informacion: ' . file_get_contents('php://input');
    header("Content-Type: application/json");//marca resúesta en formato JSON

   

////////////////////////////////////////////


 
    switch($_SERVER['REQUEST_METHOD']){


        case 'POST'://GUARDAR

            
            $correo = $_POST["correo"];

            $mail=new PHPMailer();
            $mail->CharSet = 'UTF-8';

            $body = '
            <div>
                <h1>Bienvenido a ICHIRAKU</h1>

               
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

            header("location: login.html");


        break;

        
     
       
     
    }
?>