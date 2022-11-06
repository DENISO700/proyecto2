<?php 

class Producto{

    private $categoria;
    private $nombre;
    private $precio;
    private $cantida;
    private $descripcion;
    private  $foto;


    public function __construct($categoria,$nombre,$precio,$cantida,$descripcion,$foto)
    {

        $this->categoria = $categoria;
        $this->nombre = $nombre;
        $this->precio = $precio;
        $this->cantida = $cantida;
        $this->descripcion = $descripcion;
        $this->foto = $foto;
        
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
        return $this->cantida;
    }


    public function setCantida($cantida)
    {
        $this->cantida = $cantida;

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



    public function getData($db,$id)
    {

        $backup = $db->getReference('empresas')
        ->getChild($id)
        ->getValue();

        echo json_encode($backup);
        
 
   
        $result= array(

            "categoria"=> $this->categoria,
            "nombre"=> $this->nombre,
            "precio"=> $this->precio,
            "cantida"=> $this->cantida,
    
            "descripcion"=> $this->descripcion,

            "foto" => $this->foto,
           
    
            "sucursales"=>$backup["sucursales"],
          
          
            "imagenes"=>[]

            
    
    
             );
    
             return $result;;
      
    }


     //CRUD

     public function guardarProducto($db,$indice)
     {
     

        $producto = $this->getData($db,$indice);

        

        $empresas = $db->getReference('empresas/'.$indice.'/productos')
            ->push($producto);
   
            //mkdir("../../data/Empresas/". $empresas->getKey());
            
            if ($empresas->getKey() !=null) {

                

               
   
               return '{"mensaje" : "Registro Almacenado","Key":"'.$empresas->getKey().'"}';
              
            }else
   
            return '{"mensaje" : "Error al guardar el Registro"}';

      
     }
 
 
 
     public static function obtenerProductos($db,$indice)//no necesitamos mandar atributos asi que se vuelve estatico; accediendo a el sin crear  una instancia
     {
        $result = $db->getReference('empresas/'.$indice.'/productos')
          ->getSnapshot()
          ->getValue();

          echo json_encode($result);
 
 
     }
 
     public static function obtenerProducto($db,$indice,$index)//no necesitamos mandar atributos asi que se vuelve estatico; accediendo a el sin crear  una instancia
     {
        $result = $db->getReference('empresas/'.$indice.'/productos')
        ->getChild($index)
        ->getValue();

        echo json_encode($result);
 
     }
 
 
 //hacer para agregar nueva funcionalidad con la base
     public function actualizarProducto($indice,$index)
     {
        //Leemos el archivo
        $contenidoArchivo = file_get_contents("../../data/Empresas/empresa.json");
 
        //Convertimos la cadena a un arreglo asociativo
        $usuarios = json_decode($contenidoArchivo,true);
 
       
        //valores a actualizar
       // $usuario = $this->getData();
 
        //sustituimos la informacion en el indice por la nueva
        //$usuarios[$indice]["productos"][$index]= $this->getData($indice);
 
        //abrimos el archivo
         $archivo = fopen("../../data/Empresas/empresa.json","w");//metodo de apeertura w para poder escribir en el 
 
         //reescribimos el archivo
         fwrite($archivo,json_encode($usuarios));
 
         //cerramos el archivo
         fclose($archivo);
 
     }
 
 
 
     public static function eliminarProducto($indice,$index)
     {
        //Leemos el archivo
        $contenidoArchivo = file_get_contents("../../data/Empresas/empresa.json");
 
        //Convertimos la cadena a un arreglo asociativo
        $usuarios = json_decode($contenidoArchivo,true);
 
        //Funcion splice para elimiar recibe el valor, luego el indice , luego la cantidad de datos a eliminar despues de ese indice
        array_splice($usuarios[$indice]["productos"],$index,1);
 
        //abrimos el archivo
        $archivo = fopen("../../data/Empresas/empresa.json","w");//metodo de apeertura w para poder escribir en el 
 
        //reescribimos el archivo
        fwrite($archivo,json_encode($usuarios));
 
        //cerramos el archivo
        fclose($archivo);
 
 
       
        
     }


}



















?>