<?php

require_once "database.php";
 
if($_SERVER["REQUEST_METHOD"] == "POST"){
    
$consulta_insertar = "INSERT INTO `libros`(`id`, `ISBN`, `titulo`, `autor`, `pais`, `año`, `edicion`, `editorial`, `tamaño_archivo`, `tipo_archivo`, `nombre_archivo`, `imagen_portada`) 
VALUES ('[value-1]','[value-2]','[value-3]','[value-4]','[value-5]','[value-6]','[value-7]','[value-8]','[value-9]','[value-10]','[value-11]','[value-12]')";
mysqli_query ($conn,$consulta_insertar) or die("No se pudo insertar los datos en la base de datos.");
}

if($_SERVER["REQUEST_METHOD"] == "PUT"){
    
$consulta_actualizar = "UPDATE `libros` SET `id`='[value-1]',`ISBN`='[value-2]',`titulo`='[value-3]',`autor`='[value-4]',`pais`='[value-5]',`año`='[value-6]',`edicion`='[value-7]',`editorial`='[value-8]',`tamaño_archivo`='[value-9]',`tipo_archivo`='[value-10]',`nombre_archivo`='[value-11]',`imagen_portada`='[value-12]' WHERE 1";
mysqli_query ($conn,$consulta_actualizar) or die("No se pudo insertar los datos en la base de datos.");
}


?>


