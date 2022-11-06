<?php 


class Empresa {


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
    private $nombreRed1;
    private $url1;
    private $banner1;
    private $nombreRed2;
    private $url2;
    private $banner2;
    private $nombreRed3;
    private $url3;
    private $banner3;
    private $plan;

    public function __construct($nombreEmpresa,$logo,$correo,$contraseña,$descripcion,$mision,$vision,$telefono,$pais,$ciudad,$nombreRed1,$url1,$banner1,$nombreRed2,$url2,$banner2,$nombreRed3,$url3,$banner3,$plan)
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

        $this->nombreRed1 = $nombreRed1;
        $this->url1 = $url1;
        $this->banner1 = $banner1;

        
        $this->nombreRed2 = $nombreRed2;
        $this->url2 = $url2;
        $this->banner2 = $banner2;

        
        $this->nombreRed3 = $nombreRed3;
        $this->url3 = $url3;
        $this->banner3 = $banner3;

        $this->plan = $plan;


        

        
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


    public function getNombreRed1()
    {
        return $this->nombreRed1;
    }

  
    public function setNombreRed1($nombreRed1)
    {
        $this->nombreRed1 = $nombreRed1;

        return $this;
    }

  
    public function getUrl1()
    {
        return $this->url1;
    }

   
    public function setUrl1($url1)
    {
        $this->url1 = $url1;

        return $this;
    }

   
    public function getBanner1()
    {
        return $this->banner1;
    }

  
    public function setBanner1($banner1)
    {
        $this->banner1 = $banner1;

        return $this;
    }

  
    public function getNombreRed2()
    {
        return $this->nombreRed2;
    }

 
    public function setNombreRed2($nombreRed2)
    {
        $this->nombreRed2 = $nombreRed2;

        return $this;
    }

    public function getUrl2()
    {
        return $this->url2;
    }

    
    public function setUrl2($url2)
    {
        $this->url2 = $url2;

        return $this;
    }

   
    public function getBanner2()
    {
        return $this->banner2;
    }

  
    public function setBanner2($banner2)
    {
        $this->banner2 = $banner2;

        return $this;
    }

  
    public function getNombreRed3()
    {
        return $this->nombreRed3;
    }

   
    public function setNombreRed3($nombreRed3)
    {
        $this->nombreRed3 = $nombreRed3;

        return $this;
    }

  
    public function getUrl3()
    {
        return $this->url3;
    }

    public function setUrl3($url3)
    {
        $this->url3 = $url3;

        return $this;
    }

   
    public function getBanner3()
    {
        return $this->banner3;
    }

    
    public function setBanner3($banner3)
    {
        $this->banner3 = $banner3;

        return $this;
    }

    
      public function getPlan()
      {
               return $this->plan;
      }  


    public function setPlan($plan)
      {
        $this->plan = $plan;

       return $this;
       }

    
    public function getData()
    {

   
        $result= array(

            "nombreEmpresa"=> $this->nombreEmpresa,
            "logo"=> $this->logo,
            "correo"=> $this->correo,
            "contraseña"=>  password_hash($this->contraseña,PASSWORD_DEFAULT),
    
            "descripcion"=> $this->descripcion,
            "mision"=> $this->mision,

            "vision"=> $this->vision,
           
            "telefono"=> $this->telefono,
            "pais"=> $this->pais,
            "ciudad"=> $this->ciudad,
    
            "nombreRed1"=> $this->nombreRed1,
            "url1"=> $this->url1,
            "banner1"=> $this->banner1,
    
            "nombreRed2"=> $this->nombreRed2,
            "url2"=> $this->url2,
            "banner2"=> $this->banner2,
    
            "nombreRed3"=> $this->nombreRed3,
            "url3"=> $this->url3,
            "banner3"=> $this->banner3,

            "formasDePago"=>[],

            "plan"=> $this->plan,
          
          
            "sucursales"=>[],

            "productos"=>[],

            "promociones"=>[]
    
    
             );
    
             return $result;;
      
    }

    public function updateData($db,$id)
    {


        $backup = $db->getReference('empresas')
        ->getChild($id)
        ->getValue();

        echo json_encode($backup);
        
 
   
        $result= array(

            

            "nombreEmpresa"=> $this->nombreEmpresa,
            "logo"=> $this->logo,
            "correo"=> $this->correo,
            "contraseña"=> password_hash($this->contraseña,PASSWORD_DEFAULT),
    
            "descripcion"=> $this->descripcion,
            "mision"=> $this->mision,

            "vision"=> $this->vision,
           
            "telefono"=> $this->telefono,
            "pais"=> $this->pais,
            "ciudad"=> $this->ciudad,
    
            "nombreRed1"=> $this->nombreRed1,
            "url1"=> $this->url1,
            "banner1"=> $this->banner1,
    
            "nombreRed2"=> $this->nombreRed2,
            "url2"=> $this->url2,
            "banner2"=> $this->banner2,
    
            "nombreRed3"=> $this->nombreRed3,
            "url3"=> $this->url3,
            "banner3"=> $this->banner3,

            "formasDePago"=> $backup["formasDePago"],

            "plan"=> $this->plan,
          
          
            "sucursales"=> $backup["sucursales"],

            "productos"=> $backup["productos"],

            "promociones"=> $backup["promociones"]
    
    
             );

            // rename ('../../data/Empresas/'.$empresa[$id]["nombreEmpresa"], '../../data/Empresas/'.$result["nombreEmpresa"]);
    
             return $result;
      
    }

     //CRUD

     public function guardarEmpresa($db)
     {
        $empresa = $this->getData();

        

        $empresas = $db->getReference('empresas')
            ->push($empresa);
   
            //mkdir("../../data/Empresas/". $empresas->getKey());
            
            if ($empresas->getKey() !=null) {

                $result["key"]=$empresas->getKey();

                echo json_encode($result);
   
               //return '{"mensaje" : "Registro Almacenado","Key":"'.$empresas->getKey().'"}';
              
            }else
   
            return '{"mensaje" : "Error al guardar el Registro"}';

    
 
     }
 
 
 
     public static function obtenerEmpresas($db)//no necesitamos mandar atributos asi que se vuelve estatico; accediendo a el sin crear  una instancia
     {
        $result = $db->getReference('empresas')
          ->getSnapshot()
          ->getValue();

          echo json_encode($result);
 
 
     }
 
     public static function obtenerEmpresa($db,$indice)//no necesitamos mandar atributos asi que se vuelve estatico; accediendo a el sin crear  una instancia
     {
        $result = $db->getReference('empresas')
        ->getChild($indice)
        ->getValue();

        echo json_encode($result);
 
     }
 
 
 
     public function actualizarEmpresa($db,$indice)
     {
       
        $result = $db->getReference('empresas')
        ->getChild($indice)
      
        ->set($this->updateData($db,$indice));

        if ($result->getKey() !=null) 
  
              return '{"mensaje" : "Registro Actualizado","Key":"'.$result->getKey().'"}';
  
           else
  
           return '{"mensaje" : "Error al guardar el Registro"}';
 
     }
 
 
 
     public static function eliminarEmpresa($db,$indice)
     {
      
 
        $db->getReference('empresas')
        ->getChild($indice)
        ->remove();
 

       
        echo '{"mensaje" : "Registro Eliminado con Exito"}';

        
     }

     
    

     public static function login($correo,$contraseña,$db){



        $result = $db->getReference('empresas')
            ->orderByChild('correo')
            ->equalTo($correo)
            ->getSnapshot()
            ->getValue();
  
    
            $key = array_key_first($result);
  
           $autenticado = password_verify($contraseña,$result[$key]["contraseña"]) ;
  
           $respuesta["autenticado"] = $autenticado==1?true:false;
  
           if ($respuesta["autenticado"]) {
  
             
             
              $respuesta["correo"]=$result[$key]["correo"];
              $respuesta["key"]=$key;
             
              
  
          return $respuesta;
          
          }
  
          return null;
  
       }
  


    
      }













?>