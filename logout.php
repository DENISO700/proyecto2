<?php


session_start();



session_destroy();


setcookie("token","",time()-1,"/");//almacena la cokie
setcookie("correo","",time()-1,"/") ;
setcookie("tipo","",time()-1,"/") ;



header("location: index.php")



 

?>