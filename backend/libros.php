<?php

require_once "database.php";
 
if($_SERVER["REQUEST_METHOD"] == "POST"){

    //$nombre_libro=$_POST['nombre_libro'];
    $titulo=$_POST['titulo'];
    $autor=$_POST['autor'];
    $pais=$_POST['pais'];
    $año=$_POST['año'];
    $edicion=$_POST['edicion'];
    $editorial=$_POST['editorial'];
    $correo_personal=$_POST['fecha'];
    $ISBN=$_POST['ISBN'];
    $correo_personal=$_POST['paginas'];
    $clase=$_POST['clase'];


    //archivo
    $nombre_archivo=$_FILES['archivo2']['tmp_name'] ;
    $binario_contenido = addslashes(fread(fopen($nombre_archivo, "rb"), filesize($nombre_archivo)));
    $nombre_archivo=$_FILES['archivo2']['name'];
    $tamaño_archivo=$_FILES['archivo2']['size'];
    $tipo_archivo=$_FILES['archivo2']['type'];

    //imagen
    $imagen_portada=$_FILES['archivo1']['tmp_name'] ;
    $imagen_binaria=addslashes(fread(fopen($imagen_portada, "rb"), filesize($imagen_portada)));
    $nombre_imagen=$_FILES['archivo1']['name'];
    $tamaño_imagen=$_FILES['archivo1']['size'];
    $tipo_imagen=$_FILES['archivo1']['type'];
    
    $consulta_insertar = "INSERT INTO `libros`(`ISBN`,`clase`, `titulo`, `autor`, `pais`, `año`, `edicion`, `editorial`,`archivo_binario`, `tamaño_archivo`, `tipo_archivo`, `nombre_archivo`,`binario_imagen`, `tamaño_imagen`, `tipo_imagen`,`imagen_portada`) 
    VALUES ('$ISBN','$clase','$titulo',' $autor',' $pais','$año','$edicion','$editorial','$binario_contenido','$tamaño_archivo','$tipo_archivo','$nombre_archivo','$imagen_binaria','$tamaño_imagen','$tipo_imagen','$nombre_imagen')";
    mysqli_query ($conn,$consulta_insertar) or die("No se pudo insertar los datos en la base de datos.");

    header("location: ../../SuperAdministrador.php");  

}

?>


