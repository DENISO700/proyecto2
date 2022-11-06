<?php 


class EmpresaFavorita {


    private $nombreEmpresa;
    private $logo;
    private $correo;
    private $contraseña;
    private $descripcion;
    private $mision;
    private $vision;
    private $telefono;
    private $pais;
    private $ciudad;

    public function __construct($nombreEmpresa,$logo,$correo,$contraseña,$descripcion,$mision,$vision,$telefono,$pais,$ciudad)
    {


        $this->nombreEmpresa = $nombreEmpresa;
        $this->logo = $logo;
        $this->correo = $correo;
        $this->contraseña = $contraseña;
        $this->descripcion = $descripcion;
        $this->mision = $mision;
        $this->vision = $vision;
        $this->telefono = $telefono;
        $this->pais = $pais;
        $this->ciudad = $ciudad;

        
    }


    public function getNombreEmpresa()
    {
        return $this->nombreEmpresa;
    }

   
    public function setNombreEmpresa($nombreEmpresa)
    {
        $this->nombreEmpresa = $nombreEmpresa;

        return $this;
    }

  
    public function getLogo()
    {
        return $this->logo;
    }

   
    public function setLogo($logo)
    {
        $this->logo = $logo;

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

   
    public function getContraseña()
    {
        return $this->contraseña;
    }

  
    public function setContraseña($contraseña)
    {
        $this->contraseña = $contraseña;

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

   
    public function getMision()
    {
        return $this->mision;
    }

   
    public function setMision($mision)
    {
        $this->mision = $mision;

        return $this;
    }

  
    public function getVision()
    {
        return $this->vision;
    }

   
    public function setVision($vision)
    {
        $this->vision = $vision;

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


    public function getData()
    {

       $result= array(

        "nombreEmpresa"=> $this->nombreEmpresa,
        "logo"=> $this->logo,
        "correo"=> $this->correo,
        "contraseña"=> $this->contraseña,

        "descripcion"=> $this->descripcion,
        "mision"=> $this->mision,
        "vision"=> $this->vision,
        "telefono"=> $this->telefono,

        "pais"=> $this->pais,
        "ciudad"=> $this->ciudad,


        


         );

         return $result;
      
    }


     //CRUD

     public function guardarEmpresaFavorita($db,$indice)
     {
      
        $empresaFav = $this->getData();

        

        $empresas = $db->getReference('users/'.$indice.'/empresasFavoritas')
            ->push($empresaFav);
   
            //mkdir("../../data/Empresas/". $empresas->getKey());
            
            if ($empresas->getKey() !=null) {

                $result["key"]=$empresas->getKey();

                echo json_encode($result);
   
               //return '{"mensaje" : "Registro Almacenado","Key":"'.$empresas->getKey().'"}';
              
            }else
   
            return '{"mensaje" : "Error al guardar el Registro"}';
     
 
     }
 
 
 
     public static function obtenerEmpresasFavoritas($db,$indice)//no necesitamos mandar atributos asi que se vuelve estatico; accediendo a el sin crear  una instancia
     {
        $result = $db->getReference('users/'.$indice.'/empresasFavoritas')
        ->getSnapshot()
        ->getValue();

        echo json_encode($result);
 
     }
 
     public static function obtenerEmpresasFavorita($db,$indice,$index)//no necesitamos mandar atributos asi que se vuelve estatico; accediendo a el sin crear  una instancia
     {
        $result = $db->getReference('users/'.$indice.'/empresasFavoritas')
        ->getChild($index)
        ->getValue();

        echo json_encode($result);
 
     }
 
 
 
 
 
 
     public static function eliminarEmpresasFavorita($db,$indice,$index)
     {
        $db->getReference('users/'.$indice.'/empresasFavoritas')
        ->getChild($index)
        ->remove();
 

       
        echo '{"mensaje" : "Registro Eliminado con Exito"}';
 
       
        
     }




    
}













?>