<?php


class Promocion{

    private $categoria;
    private $nombre;
    private $precio;
    private $porcentaje;
    private $descripcion;
    private $inicio;
    private $final;
    private $foto;
    private $sucursales;


    public function __construct($categoria,$nombre,$precio,$porcentaje,$descripcion,$inicio,$final,$foto,$sucursales)
    {

        $this->categoria = $categoria;
        $this->nombre = $nombre;
        $this->precio = $precio;
        $this->porcentaje = $porcentaje;
        $this->descripcion = $descripcion;
        $this->inicio = $inicio;
        $this->final = $final;
        $this->foto=$foto;
        $this->sucursales= $sucursales;
        
    }

    public function getCategoria()
    {
        return $this->categoria;
    }

  
    public function setCategoria($categoria)
    {
        $this->categoria = $categoria;

        return $this;
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

  
    public function getCantida()
    {
        return $this->porcentaje;
    }


    public function setCantida($porcentaje)
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

    public function getData($db,$indice)
    {

        $result = $db->getReference('empresas')
        ->getChild($indice)
        ->getValue();

        echo json_encode($result);
  
        $result= array(


            "categoria"=> $this->categoria,
            "nombre"=> $this->nombre,
            "precio"=> $this->precio,
            "porcentaje"=> $this->porcentaje,
            "descripcion"=> $this->descripcion,
    
            "inicio"=> $this->inicio,
            "final"=> $this->final,
            "foto"=> $this->foto,
    
            "sucursales"=>$result["sucursales"],
          
          
            "imagenes"=>[],

            "comentarios"=>[]
    
    
             );
    
             return $result;
      
    }

    
     //CRUD

     public function guardarPromocion($db,$indice)
     {
        $promo = $this->getData($db,$indice);

        

        $empresas = $db->getReference('empresas/'.$indice.'/promociones')
            ->push($promo);
   
            //mkdir("../../data/Empresas/". $empresas->getKey());
            
            if ($empresas->getKey() !=null) {

                $result["key"]=$empresas->getKey();

                echo json_encode($result);
   
               //return '{"mensaje" : "Registro Almacenado","Key":"'.$empresas->getKey().'"}';
              
            }else
   
            return '{"mensaje" : "Error al guardar el Registro"}';
 
     }
 
 
 
     public static function obtenerPromociones($db,$indice)//no necesitamos mandar atributos asi que se vuelve estatico; accediendo a el sin crear  una instancia
     {
        $result = $db->getReference('empresas/'.$indice.'/promociones')
        ->getSnapshot()
        ->getValue();

        echo json_encode($result);

 
 
     }
 
     public static function obtenerPromocion($db,$indice,$index)//no necesitamos mandar atributos asi que se vuelve estatico; accediendo a el sin crear  una instancia
     {
        $result = $db->getReference('empresas/'.$indice.'/promociones')
        ->getChild($index)
        ->getValue();

        echo json_encode($result);
 
     }
 
 
 

     //AGREGAR PARA NUEVA FUNCIONALIDAD CONECTAR A LA BASE
     public function actualizarPromocion($db,$indice,$index)
     {
        //Leemos el archivo
        $contenidoArchivo = file_get_contents("../../data/Empresas/empresa.json");
 
        //Convertimos la cadena a un arreglo asociativo
        $usuarios = json_decode($contenidoArchivo,true);
 
       
        //valores a actualizar
       // $usuario = $this->getData();
 
        //sustituimos la informacion en el indice por la nueva
        $usuarios[$indice]["promociones"][$index]= $this->getData($db,$indice);
 
        //abrimos el archivo
         $archivo = fopen("../../data/Empresas/empresa.json","w");//metodo de apeertura w para poder escribir en el 
 
         //reescribimos el archivo
         fwrite($archivo,json_encode($usuarios));
 
         //cerramos el archivo
         fclose($archivo);
 
     }
 
 
 
     public static function eliminarPromocion($indice,$index)
     {
        //Leemos el archivo
        $contenidoArchivo = file_get_contents("../../data/Empresas/empresa.json");
 
        //Convertimos la cadena a un arreglo asociativo
        $usuarios = json_decode($contenidoArchivo,true);
 
        //Funcion splice para elimiar recibe el valor, luego el indice , luego la cantidad de datos a eliminar despues de ese indice
        array_splice($usuarios[$indice]["promociones"],$index,1);
 
        //abrimos el archivo
        $archivo = fopen("../../data/Empresas/empresa.json","w");//metodo de apeertura w para poder escribir en el 
 
        //reescribimos el archivo
        fwrite($archivo,json_encode($usuarios));
 
        //cerramos el archivo
        fclose($archivo);
 
 
       
        
     }

    

}




















?>