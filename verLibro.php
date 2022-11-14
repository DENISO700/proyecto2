<?php
if(isset($_GET['id'])) {

    require_once "backend/database.php";

    $sql = "SELECT nombre_archivo,archivo_binario,tipo_archivo,tamaño_archivo FROM libros WHERE id='".$_GET['id']."'";

    $consulta = mysqli_query ($conn,$sql);

    $fila=mysqli_fetch_assoc($consulta);
    
    $datos = $fila["archivo_binario"];
    $tipo = $fila["tipo_archivo"];
    $nombre = $fila["nombre_archivo"];
    $peso = $fila["tamaño_archivo"];


    header("Content-type: $tipo");
    header("Content-length: $peso"); 
    header("Content-Disposition: inline; filename=$nombre"); 
 
   echo $datos;

}
?>