<?php 


class Categoria {


private $nombre;



public function __construct($nombre)
{

    $this->nombre = $nombre;
  
    
}



  public function getNombre()
   {
   return $this->nombre;
   }


   public function setNombre($nombre)
   {
     $this->nombre = $nombre;

     return $this;
    }





    public function getData()
    {

       $result= array(

        "nombre"=> $this->nombre,
  
         );

         return $result;
      
    }


    //CRUD

    public function guardarCategoria($db)
    {
      $categoria = $this->getData();

        

      $empresas = $db->getReference('categorias')
          ->push($categoria);
 
          //mkdir("../../data/Empresas/". $empresas->getKey());
          
          if ($empresas->getKey() !=null) {

              $result["key"]=$empresas->getKey();

              echo json_encode($result);
 
             //return '{"mensaje" : "Registro Almacenado","Key":"'.$empresas->getKey().'"}';
            
          }else
 
          return '{"mensaje" : "Error al guardar el Registro"}';

    }



    public static function obtenerCategorias($db)//no necesitamos mandar atributos asi que se vuelve estatico; accediendo a el sin crear  una instancia
    {
      $result = $db->getReference('categorias')
      ->getSnapshot()
      ->getValue();

      echo json_encode($result);


    }

    public static function obtenerCategoria($db,$indice)//no necesitamos mandar atributos asi que se vuelve estatico; accediendo a el sin crear  una instancia
    {
      $result = $db->getReference('categorias')
      ->getChild($indice)
      ->getValue();

      echo json_encode($result);

    }



    public function actualizarCategoria($db,$indice)
    {
      $result = $db->getReference('categorias')
      ->getChild($indice)
    
      ->set($this->getData());

      if ($result->getKey() !=null) 

            return '{"mensaje" : "Registro Actualizado","Key":"'.$result->getKey().'"}';

         else

         return '{"mensaje" : "Error al guardar el Registro"}';

    }



    public static function eliminarCategoria($db,$indice)
    {
      $db->getReference('categorias')
        ->getChild($indice)
        ->remove();
 

       
        echo '{"mensaje" : "Registro Eliminado con Exito"}';


      
       
    }


}
















?>