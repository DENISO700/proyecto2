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
    $rol=$row['rol'];
    break;
}else{
    $valido=false;
}
}

if ($valido) {

    if ($rol=='Usuario') {
        session_start();
        $_SESSION["nombre_completo"] = $row['nombre_completo'];
        $_SESSION["correo_personal"] = $row['correo_personal'];
        $_SESSION["nombre_usuario"] = $row['nombre_usuario'];
        $_SESSION["tipo_imagen"] = $row['tipo_imagen'];
        $_SESSION["binario_imagen"] = $row['binario_imagen'];
        $_SESSION["id"] = $row['id'];
        header("Location: ../../tienda.php");
    } else {
        session_start();
        $_SESSION["nombre_completo"] = $row['nombre_completo'];
        $_SESSION["correo_personal"] = $row['correo_personal'];
        $_SESSION["nombre_usuario"] = $row['nombre_usuario'];
        $_SESSION["tipo_imagen"] = $row['tipo_imagen'];
        $_SESSION["binario_imagen"] = $row['binario_imagen'];
        $_SESSION["id"] = $row['id'];
        header("Location: ../../SuperAdministrador.php");
    }    

} else {
    echo '<script>alert("Datos Incorrectos")</script>';
    header("location: ../../login.html");  
}
}


?>


