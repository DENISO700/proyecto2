<?php

require_once "database.php";
 
if($_SERVER["REQUEST_METHOD"] == "POST"){

$usuario = $_POST["usuario"];
$contra = $_POST["contra"];

$sql = "SELECT  * FROM `usuarios` ";
$consulta = mysqli_query ($conn,$sql) ;


While ($row=mysqli_fetch_assoc($consulta)){
if ($usuario === $row['nombre_usuario'] && $contra === $row['contraseña']) {
    $valido=true;
    break;
}else{
    $valido=false;
}
}

if ($valido) {
    session_start();
    $_SESSION["nombre_completo"] = $row['nombre_completo'];
    $_SESSION["correo_personal"] = $row['correo_personal'];
    $_SESSION["nombre_usuario"] = $row['nombre_usuario'];
    $_SESSION["id"] = $row['id'];
    header("Location: ../../tienda.php");
} else {
    echo '<script>alert("Datos Incorrectos")</script>';
    header("location: ../../login.html");  
}
}


?>


