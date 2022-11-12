<?php

require_once "database.php";
 
if($_SERVER["REQUEST_METHOD"] == "POST"){

$nombre_completo=$_POST['nombre_completo'];
$nombre_usuario=$_POST['nombre_usuario'];
$correo_personal=$_POST['correo_personal'];
$contraseña=$_POST['contra'];
    
$consulta_insertar = "INSERT INTO usuarios (nombre_completo, nombre_usuario, correo_personal, contraseña) VALUES ('$nombre_completo', '$nombre_usuario', '$correo_personal', '$contraseña')";
mysqli_query ($conn,$consulta_insertar) or die("No se pudo insertar los datos en la base de datos.");

header("location: ../../login.html");  
}


?>
 