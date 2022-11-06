<?php 


class Plan {


private $nombrePlan;
private $precio;
private $promos;
private $almacenamiento;
private $soporte;
private $centroDeAyuda;
private $duracion;
private $panpallaPrincipal;



public function __construct($nombrePlan,$precio,$promos,$almacenamiento,$soporte,$centroDeAyuda,$duracion,$panpallaPrincipal)
{

    $this->nombrePlan = $nombrePlan;
    $this->precio = $precio;
    $this->promos = $promos;
    $this->almacenamiento = $almacenamiento;
    $this->soporte = $soporte;
    $this->centroDeAyuda = $centroDeAyuda;
    $this->duracion = $duracion;
    $this->panpallaPrincipal = $panpallaPrincipal;
  
    
}

/**
 * Get the value of nombrePlan
 */ 
public function getNombrePlan()
{
return $this->nombrePlan;
}

/**
 * Set the value of nombrePlan
 *
 * @return  self
 */ 
public function setNombrePlan($nombrePlan)
{
$this->nombrePlan = $nombrePlan;

return $this;
}

/**
 * Get the value of precio
 */ 
public function getPrecio()
{
return $this->precio;
}

/**
 * Set the value of precio
 *
 * @return  self
 */ 
public function setPrecio($precio)
{
$this->precio = $precio;

return $this;
}

/**
 * Get the value of promos
 */ 
public function getPromos()
{
return $this->promos;
}

/**
 * Set the value of promos
 *
 * @return  self
 */ 
public function setPromos($promos)
{
$this->promos = $promos;

return $this;
}

/**
 * Get the value of almacenamiento
 */ 
public function getAlmacenamiento()
{
return $this->almacenamiento;
}

/**
 * Set the value of almacenamiento
 *
 * @return  self
 */ 
public function setAlmacenamiento($almacenamiento)
{
$this->almacenamiento = $almacenamiento;

return $this;
}

/**
 * Get the value of soporte
 */ 
public function getSoporte()
{
return $this->soporte;
}

/**
 * Set the value of soporte
 *
 * @return  self
 */ 
public function setSoporte($soporte)
{
$this->soporte = $soporte;

return $this;
}

/**
 * Get the value of centroDeAyuda
 */ 
public function getCentroDeAyuda()
{
return $this->centroDeAyuda;
}

/**
 * Set the value of centroDeAyuda
 *
 * @return  self
 */ 
public function setCentroDeAyuda($centroDeAyuda)
{
$this->centroDeAyuda = $centroDeAyuda;

return $this;
}

/**
 * Get the value of duracion
 */ 
public function getDuracion()
{
return $this->duracion;
}

/**
 * Set the value of duracion
 *
 * @return  self
 */ 
public function setDuracion($duracion)
{
$this->duracion = $duracion;

return $this;
}

/**
 * Get the value of panpallaPrincipal
 */ 
public function getPanpallaPrincipal()
{
return $this->panpallaPrincipal;
}

/**
 * Set the value of panpallaPrincipal
 *
 * @return  self
 */ 
public function setPanpallaPrincipal($panpallaPrincipal)
{
$this->panpallaPrincipal = $panpallaPrincipal;

return $this;
}








    public function getData()
    {

       $result= array(

        "nombrePlan"=> $this->nombrePlan,
        "precio"=> $this->precio,
        "promos"=> $this->promos,
        "almacenamiento"=> $this->almacenamiento,
        "soporte"=> $this->soporte,
        "centroDeAyuda"=> $this->centroDeAyuda,
        "duracion"=> $this->duracion,
        "panpallaPrincipal"=> $this->panpallaPrincipal,
        
  
         );

         return $result;
      
    }


    //CRUD

    public function guardarPlan($db)
    {
      $plan = $this->getData();

        

      $empresas = $db->getReference('planes')
          ->push($plan);
 
          //mkdir("../../data/Empresas/". $empresas->getKey());
          
          if ($empresas->getKey() !=null) {

              $result["key"]=$empresas->getKey();

              echo json_encode($result);
 
             //return '{"mensaje" : "Registro Almacenado","Key":"'.$empresas->getKey().'"}';
            
          }else
 
          return '{"mensaje" : "Error al guardar el Registro"}';

    }



    public static function obtenerPlanes($db)//no necesitamos mandar atributos asi que se vuelve estatico; accediendo a el sin crear  una instancia
    {
      $result = $db->getReference('planes')
      ->getSnapshot()
      ->getValue();

      echo json_encode($result);


    }

    public static function obtenerPlan($db,$indice)//no necesitamos mandar atributos asi que se vuelve estatico; accediendo a el sin crear  una instancia
    {
      $result = $db->getReference('planes')
      ->getChild($indice)
      ->getValue();

      echo json_encode($result);

    }



    public function actualizarPlan($db,$indice)
    {
      $result = $db->getReference('planes')
        ->getChild($indice)
      
        ->set($this->getData());

        if ($result->getKey() !=null) 
  
              return '{"mensaje" : "Registro Actualizado","Key":"'.$result->getKey().'"}';
  
           else
  
           return '{"mensaje" : "Error al guardar el Registro"}';

    }



    public static function eliminarPlan($db,$indice)
    {
      $db->getReference('planes')
      ->getChild($indice)
      ->remove();


     
      echo '{"mensaje" : "Registro Eliminado con Exito"}';


      
       
    }




}