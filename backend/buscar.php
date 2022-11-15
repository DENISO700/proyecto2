<?php
    require_once "database.php";
    if(!empty($_POST['filtro'])){
        if(empty($_POST['filtro'])){
        }else{
            $filtro = $conn->real_escape_string($_POST['filtro']);

            $consulta = "SELECT * FROM libros WHERE titulo = '%$filtro%' OR autor LIKE '%$filtro%'";
            $libroEncontrado = mysqli_query($conn, $consulta);

            header("Location: ../busqueda.php?filtro=$filtro");


        }
    }
    
    
?>