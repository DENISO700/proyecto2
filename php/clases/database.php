<?php

 //ruta del archivo autoload necesario de composer
    
 require_once __DIR__.'/../vendor/autoload.php';//archivo cargadoen la carpeta vendor

  //NAMESPACE
    
  use Kreait\Firebase\Factory;

class Database{

   
private $keyFile =__DIR__.'/../secret/ichiraku-7a7bb-2704b23ae9fc.json';
private $URI = 'https://ichiraku-7a7bb.firebaseio.com/';
private $db;


public function __construct()
{

    $firebase = (new Factory)
    
    ->withServiceAccount($this->keyFile)//Servicio de cuentas ded googloe
    ->withDatabaseUri($this->URI)//URL de la base de datos
    ->create();

    $this->db= $firebase->getDatabase();


    
}

public  function getDB()
{
   return $this->db;
}

   
  




}






?>