<?php

require_once "database.php";

session_start();
if($_SERVER["REQUEST_METHOD"] == "POST" ){

    $imagen_portada=$_FILES['foto']['tmp_name'] ;
    $imagen_binaria=addslashes(fread(fopen($imagen_portada, "rb"), filesize($imagen_portada)));
    $nombre_imagen=$_FILES['foto']['name'];
    $tamaño_imagen=$_FILES['foto']['size'];
    $tipo_imagen=$_FILES['foto']['type'];
      
    $consulta_insertar = "UPDATE libros
    SET binario_imagen = '$imagen_binaria', 
    tipo_imagen = '$tipo_imagen', 
    tamaño_imagen = '$tamaño_imagen', 
    imagen_portada = '$nombre_imagen'
    WHERE id=".$_GET['libro']."";

    mysqli_query ($conn,$consulta_insertar) or die("No se pudo insertar los datos en la base de datos.");
    
    header("location: ../../editarLibro.php?libro=".$_GET['libro']."");  

    }


?>