<?php 


class Comentario{


private $usuario;
private $calificacion;
private $contenido;


public function __construct($usuario,$calificacion,$contenido)
{

    $this->usuario = $usuario;
    $this->calificacion = $calificacion;
    $this->contenido = $contenido;
    
}


public function getUsuario()
{
return $this->usuario;
}


public function setUsuario($usuario)
{
$this->usuario = $usuario;

return $this;
}


public function getCalificacion()
{
return $this->calificacion;
}


public function setCalificacion($calificacion)
{
$this->calificacion = $calificacion;

return $this;
}


public function getContenido()
{
return $this->contenido;
}


public function setContenido($contenido)
{
$this->contenido = $contenido;

return $this;
}


public function getData()
    {

       $result= array(

        "usuario"=> $this->usuario,
        "calificacion"=> $this->calificacion,
        "contenido"=> $this->contenido
      
      
         );

         return $result;
      
    }


    //CRUD

    public function guardarComentario($db,$indice,$index)
    {
      $comentario = $this->getData();

        

      $empresas = $db->getReference('empresas/'.$indice.'/promociones'.'/'.$index.'/comentarios')
          ->push($comentario);
 
          //mkdir("../../data/Empresas/". $empresas->getKey());
          
          if ($empresas->getKey() !=null) {

              
 
             return '{"mensaje" : "Registro Almacenado","Key":"'.$empresas->getKey().'"}';
            
          }else
 
          return '{"mensaje" : "Error al guardar el Registro"}';

    }



    public static function obtenerComentarios($db,$indice,$index)//no necesitamos mandar atributos asi que se vuelve estatico; accediendo a el sin crear  una instancia
    {
      $result = $db->getReference('empresas/'.$indice.'/promociones'.'/'.$index.'/comentarios')
      ->getSnapshot()
      ->getValue();

      echo json_encode($result);


    }

    public static function obtenerComentario($db,$indice,$index,$especifico)//no necesitamos mandar atributos asi que se vuelve estatico; accediendo a el sin crear  una instancia
    {
      $result = $db->getReference('empresas/'.$indice.'/promociones'.'/'.$index.'/comentarios')
      ->getChild($especifico)
      ->getValue();

      echo json_encode($result);

    }








    //AGREGAR NUEVA FUNCIONALIDA CONECTAR A FIREBASE

    public function actualizarComentario($indice,$index,$i)
    {
       //Leemos el archivo
       $contenidoArchivo = file_get_contents("../../data/Empresas/empresa.json");

       //Convertimos la cadena a un arreglo asociativo
       $usuarios = json_decode($contenidoArchivo,true);

      
       //valores a actualizar
      // $usuario = $this->getData();

       //sustituimos la informacion en el indice por la nueva
       $usuarios[$indice]["promociones"][$index]["comentarios"][$i]= $this->getData();

       //abrimos el archivo
        $archivo = fopen("../../data/Empresas/empresa.json","w");//metodo de apeertura w para poder escribir en el 

        //reescribimos el archivo
        fwrite($archivo,json_encode($usuarios));

        //cerramos el archivo
        fclose($archivo);

    }



    public static function eliminarComentario($indice,$index,$i)
    {
       //Leemos el archivo
       $contenidoArchivo = file_get_contents("../../data/Empresas/empresa.json");

       //Convertimos la cadena a un arreglo asociativo
       $usuarios = json_decode($contenidoArchivo,true);

       //Funcion splice para elimiar recibe el valor, luego el indice , luego la cantidad de datos a eliminar despues de ese indice
       array_splice($usuarios[$indice]["promociones"][$index]["comentarios"],$$i,1);

       //abrimos el archivo
       $archivo = fopen("../../data/Empresas/empresa.json","w");//metodo de apeertura w para poder escribir en el 

       //reescribimos el archivo
       fwrite($archivo,json_encode($usuarios));

       //cerramos el archivo
       fclose($archivo);


      
       
    }

}
















?>