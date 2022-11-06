<?php

 //ruta del archivo autoload necesario de composer
    
 require_once __DIR__."/vendor/autoload.php";//archivo cargadoen la carpeta vendor

  //NAMESPACE
    
  use Kreait\Firebase\Factory;



    $keyFile ='secret/ichiraku-7a7bb-1a8a745baefd.json';
    $URI = 'https://ichiraku-7a7bb.firebaseio.com/';





    $firebase = (new Factory)
    
    ->withServiceAccount($keyFile)//Servicio de cuentas ded googloe
    ->withDatabaseUri($URI)//URL de la base de datos
    ->create();

    $db= $firebase->getDatabase();

    $newPost = $db

    ->getReference('blog/post')
    ->push([
        'Titulo' => 'Prueba Firebase',
        'Encabezado' => 'Primer Registro ',
        'Saludo' => 'Kath Ya Sirvio XD',
        'Insulto' => 'Rata asquerosa inicia tu proyecto '


    ])




?>