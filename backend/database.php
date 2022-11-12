<?php

define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'denis');
define('DB_PASSWORD', 'biblioteca2022/*');
define('DB_NAME', 'db_biblioteca');
 
$conn = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
 
if($conn === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
?>