<?php 


class PromocionesFavoritas{


    private $nombre;
    private $precio;
    private $porcentaje;
    private $descripcion;
    private $inicio;
    private $final;
    private $foto;
    private $sucursales;
    private $imagenes;


    public function __construct($nombre,$precio,$porcentaje,$descripcion,$inicio,$final,$foto,$sucursales,$imagenes)
    {

        $this->nombre = $nombre;
        $this->precio = $precio;
        $this->porcentaje = $porcentaje;
        $this->descripcion = $descripcion;
        $this->inicio = $inicio;
        $this->final = $final;
        $this->foto = $foto;
        $this->sucursales = $sucursales;
        $this->imagenes = $imagenes;


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

  
    public function getPrecio()
    {
        return $this->precio;
    }

 
    public function setPrecio($precio)
    {
        $this->precio = $precio;

        return $this;
    }

  
    public function getPorcentaje()
    {
        return $this->porcentaje;
    }

  
    public function setPorcentaje($porcentaje)
    {
        $this->porcentaje = $porcentaje;

        return $this;
    }

    public function getDescripcion()
    {
        return $this->descripcion;
    }


    public function setDescripcion($descripcion)
    {
        $this->descripcion = $descripcion;

        return $this;
    }

  
    public function getInicio()
    {
        return $this->inicio;
    }

    public function setInicio($inicio)
    {
        $this->inicio = $inicio;

        return $this;
    }

    public function getFinal()
    {
        return $this->final;
    }

    public function setFinal($final)
    {
        $this->final = $final;

        return $this;
    }

      /**
     * Get the value of foto
     */ 
    public function getFoto()
    {
        return $this->foto;
    }

    /**
     * Set the value of foto
     *
     * @return  self
     */ 
    public function setFoto($foto)
    {
        $this->foto = $foto;

        return $this;
    }

    /**
     * Get the value of sucursales
     */ 
    public function getSucursales()
    {
        return $this->sucursales;
    }

    /**
     * Set the value of sucursales
     *
     * @return  self
     */ 
    public function setSucursales($sucursales)
    {
        $this->sucursales = $sucursales;

        return $this;
    }

     /**
     * Get the value of imagenes
     */ 
    public function getImagenes()
    {
        return $this->imagenes;
    }

    /**
     * Set the value of imagenes
     *
     * @return  self
     */ 
    public function setImagenes($imagenes)
    {
        $this->imagenes = $imagenes;

        return $this;
    }

    
    public function getData()
    {

       $result= array(

        "nombre"=> $this->nombre,
        "precio"=> $this->precio,
        "porcentaje"=> $this->porcentaje,
        "descripcion"=> $this->descripcion,

        "inicio"=> $this->inicio,
        "final"=> $this->final,
        "foto"=> $this->foto,
    
        "sucursales"=>$this->sucursales,
      
      
        "imagenes"=>[]


         );

         return $result;
      
    }

     
     //CRUD

     public function guardarPromocionFavorita($db,$indice)
     {
        $promoFav = $this->getData();

        

        $empresas = $db->getReference('users/'.$indice.'/promocionesFavoritas')
            ->push($promoFav);
   
            //mkdir("../../data/Empresas/". $empresas->getKey());
            
            if ($empresas->getKey() !=null) {

                $result["key"]=$empresas->getKey();

                echo json_encode($result);
   
               //return '{"mensaje" : "Registro Almacenado","Key":"'.$empresas->getKey().'"}';
              
            }else
   
            return '{"mensaje" : "Error al guardar el Registro"}';

 
     }
 
 
 
     public static function obtenerPromocionesFavoritas($db,$indice)//no necesitamos mandar atributos asi que se vuelve estatico; accediendo a el sin crear  una instancia
     {
        $result = $db->getReference('users/'.$indice.'/promocionesFavoritas')
        ->getSnapshot()
        ->getValue();

        echo json_encode($result);
 
 
     }
 
     public static function obtenerPromocionFavorita($db,$indice,$index)//no necesitamos mandar atributos asi que se vuelve estatico; accediendo a el sin crear  una instancia
     {
        $result = $db->getReference('users/'.$indice.'/promocionesFavoritas')
        ->getChild($index)
        ->getValue();

        echo json_encode($result);
 
     }
 
 
 
 
 
 
     public static function eliminarPromocionFavorita($db,$indice,$index)
     {
        $db->getReference('users/'.$indice.'/promocionesFavoritas')
        ->getChild($index)
        ->remove();
 

       
        echo '{"mensaje" : "Registro Eliminado con Exito"}';
 
 
       
        
     }

  

   
}
















?>