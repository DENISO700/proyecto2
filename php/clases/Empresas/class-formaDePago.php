<?php



class Pago{

private $formaDePago;
private $nombrePropietario;
private $numeroTarjeta;
private $vencimiento;
private $CCV;



public function __construct($formaDePago,$nombrePropietario,$numeroTarjeta,$vencimiento,$CCV)
{

    $this->formaDePago = $formaDePago;
    $this->nombrePropietario = $nombrePropietario;
    $this->numeroTarjeta = $numeroTarjeta;
    $this->vencimiento = $vencimiento;
    $this->CCV = $CCV;
  
    
}

public function getFormaDePago()
{
return $this->formaDePago;
}


public function setFormaDePago($formaDePago)
{
$this->formaDePago = $formaDePago;

return $this;
}


public function getNombrePropietario()
{
return $this->nombrePropietario;
}


public function setNombrePropietario($nombrePropietario)
{
$this->nombrePropietario = $nombrePropietario;

return $this;
}


public function getNumeroTarjeta()
{
return $this->numeroTarjeta;
}


public function setNumeroTarjeta($numeroTarjeta)
{
$this->numeroTarjeta = $numeroTarjeta;

return $this;
}


public function getVencimiento()
{
return $this->vencimiento;
}


public function setVencimiento($vencimiento)
{
$this->vencimiento = $vencimiento;

return $this;
}

public function getCCV()
{
return $this->CCV;
}


public function setCCV($CCV)
{
$this->CCV = $CCV;

return $this;
}




public function getData()
    {

       $result= array(

        "formaDePago"=> $this->formaDePago,
        "nombrePropietario"=> $this->nombrePropietario,
        "numeroTarjeta"=> $this->numeroTarjeta,
        "vencimiento"=> $this->vencimiento,
        "CCV"=> $this->CCV,
        
      
      



         );

         return $result;
      
    }

    //CRUD

    public function guardarPago($db,$indice)
    {
      $pago = $this->getData();

      $dir = "../../data/Empresas/".$indice;

      mkdir($dir."/Productos");
      mkdir($dir."/Sucursales");

      $empresas = $db->getReference('empresas/'.$indice.'/formasDePago')
          ->push($pago);
 
          
          
          if ($empresas->getKey() !=null) {
 
             return '{"mensaje" : "Registro Almacenado","Key":"'.$empresas->getKey().'"}';
            
          }else
 
          return '{"mensaje" : "Error al guardar el Registro"}';

     

     
    }



    public static function obtenerPagos($db,$indice)//no necesitamos mandar atributos asi que se vuelve estatico; accediendo a el sin crear  una instancia
    {
      $result = $db->getReference('empresas/'.$indice.'/formasDePago')
      ->getSnapshot()
      ->getValue();

      echo json_encode($result);


    }

    public static function obtenerPago($db,$indice,$index)//no necesitamos mandar atributos asi que se vuelve estatico; accediendo a el sin crear  una instancia
    {
      $result = $db->getReference('empresas/'.$indice.'/formasDePago')
      ->getChild($index)
      ->getValue();

      echo json_encode($result);

    }



    public function actualizarPago($indice,$index)
    {
       //Leemos el archivo
       $contenidoArchivo = file_get_contents("../../data/Empresas/empresa.json");

       //Convertimos la cadena a un arreglo asociativo
       $usuarios = json_decode($contenidoArchivo,true);

      
       //valores a actualizar
      // $usuario = $this->getData();

       //sustituimos la informacion en el indice por la nueva
       $usuarios[$indice]["formasDePago"][$index]= $this->getData();

       //abrimos el archivo
        $archivo = fopen("../../data/Empresas/empresa.json","w");//metodo de apeertura w para poder escribir en el 

        //reescribimos el archivo
        fwrite($archivo,json_encode($usuarios));

        //cerramos el archivo
        fclose($archivo);

    }



    public static function eliminarPago($db,$indice,$index)
    {
      

      $db->getReference('empresas/'.$indice.'/formasDePago')
      ->getChild($index)
      ->remove();


     
      echo '{"mensaje" : "Registro Eliminado con Exito"}';


      
       
    }





}














?>