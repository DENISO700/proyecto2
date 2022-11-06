<?php 

class Sucursal{

    private $nombreSucursal;
    private $correo;
    private $telefono;
    private $pais;
    private $ciudad;
  
    private $direccion;
    private $latitud;
    private $longitud;



    public function __construct($nombreSucursal,$correo,$telefono,$pais,$ciudad,$direccion,$latitud,$longitud)
    {

        $this->nombreSucursal = $nombreSucursal;
        $this->correo = $correo;
        $this->telefono = $telefono;
        $this->pais = $pais;
        $this->ciudad = $ciudad;
       
       
        $this->direccion = $direccion;
        $this->latitud = $latitud;
        $this->longitud = $longitud;
        
    }
    


    public function getNombreSucursal()
    {
        return $this->nombreSucursal;
    }

    public function setNombreSucursal($nombreSucursal)
    {
        $this->nombreSucursal = $nombreSucursal;

        return $this;
    }

    
    public function getCorreo()
    {
        return $this->correo;
    }

    public function setCorreo($correo)
    {
        $this->correo = $correo;

        return $this;
    }

    
    public function getTelefono()
    {
        return $this->telefono;
    }

   
    public function setTelefono($telefono)
    {
        $this->telefono = $telefono;

        return $this;
    }

   
    public function getPais()
    {
        return $this->pais;
    }

  
    public function setPais($pais)
    {
        $this->pais = $pais;

        return $this;
    }
 
    public function getCiudad()
    {
        return $this->ciudad;
    }

   
    public function setCiudad($ciudad)
    {
        $this->ciudad = $ciudad;

        return $this;
    }

   
    
    
  
    public function getDireccion()
    {
        return $this->direccion;
    }


    public function setDireccion($direccion)
    {
        $this->direccion = $direccion;

        return $this;
    }

  
    public function getLatitud()
    {
        return $this->latitud;
    }

 
    public function setLatitud($latitud)
    {
        $this->latitud = $latitud;

        return $this;
    }

  
    public function getLongitud()
    {
        return $this->longitud;
    }


    public function setLongitud($longitud)
    {
        $this->longitud = $longitud;

        return $this;
    }

    
    public function getData()
    {

       $result= array(

        "nombreSucursal"=> $this->nombreSucursal,
        "correo"=> $this->correo,
        "telefono"=> $this->telefono,
        "pais"=> $this->pais,

        "ciudad"=> $this->ciudad,
       
        "direccion"=> $this->direccion,
        "latitud"=> $this->latitud,
        "longitud"=> $this->longitud
      



         );

         return $result;
      
    }


     //CRUD

     public function guardarSucursal($db,$indice)
     {

        $sucursal = $this->getData();

        

        $empresas = $db->getReference('empresas/'.$indice.'/sucursales')
            ->push($sucursal);
   
            //mkdir("../../data/Empresas/". $empresas->getKey());
            
            if ($empresas->getKey() !=null) {

                $result["key"]=$empresas->getKey();

                echo json_encode($result);
   
               //return '{"mensaje" : "Registro Almacenado","Key":"'.$empresas->getKey().'"}';
              
            }else
   
            return '{"mensaje" : "Error al guardar el Registro"}';
 
     }
 
 
 
     public static function obtenerSucursales($db,$indice)//no necesitamos mandar atributos asi que se vuelve estatico; accediendo a el sin crear  una instancia
     {
        $result = $db->getReference('empresas/'.$indice.'/sucursales')
        ->getSnapshot()
        ->getValue();

        echo json_encode($result);
 
 
     }
 
     public static function obtenerSucursal($db,$indice,$index)//no necesitamos mandar atributos asi que se vuelve estatico; accediendo a el sin crear  una instancia
     {
        $result = $db->getReference('empresas/'.$indice.'/sucursales')
        ->getChild($index)
        ->getValue();

        echo json_encode($result);
 
     }
 
 
 




     //AGREGAR DEESPUES COMO NUEVA FUNCIONALIDAD CONECTAR A LA BASE
     public function actualizarSucursal($indice,$index)
     {
        //Leemos el archivo
        $contenidoArchivo = file_get_contents("../../data/Empresas/empresa.json");
 
        //Convertimos la cadena a un arreglo asociativo
        $usuarios = json_decode($contenidoArchivo,true);
 
       
        //valores a actualizar
       // $usuario = $this->getData();
 
        //sustituimos la informacion en el indice por la nueva
        $usuarios[$indice]["sucursales"][$index]= $this->getData();
 
        //abrimos el archivo
         $archivo = fopen("../../data/Empresas/empresa.json","w");//metodo de apeertura w para poder escribir en el 
 
         //reescribimos el archivo
         fwrite($archivo,json_encode($usuarios));
 
         //cerramos el archivo
         fclose($archivo);
 
     }
 
 
 
     public static function eliminarSucursal($indice,$index)
     {
        //Leemos el archivo
        $contenidoArchivo = file_get_contents("../../data/Empresas/empresa.json");
 
        //Convertimos la cadena a un arreglo asociativo
        $usuarios = json_decode($contenidoArchivo,true);
 
        //Funcion splice para elimiar recibe el valor, luego el indice , luego la cantidad de datos a eliminar despues de ese indice
        array_splice($usuarios[$indice]["sucursales"],$index,1);
 
        //abrimos el archivo
        $archivo = fopen("../../data/Empresas/empresa.json","w");//metodo de apeertura w para poder escribir en el 
 
        //reescribimos el archivo
        fwrite($archivo,json_encode($usuarios));
 
        //cerramos el archivo
        fclose($archivo);
 
 
       
        
     }


    
}























?>