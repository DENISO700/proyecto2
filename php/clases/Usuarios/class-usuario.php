<?php 


class Usuario {

    private $nombre;
    private $correo;
    private $contraseña;
    private $telefono;


    public function __construct($nombre,$correo,$contraseña,$telefono)
    {

       $this->nombre = $nombre;
       $this->correo = $correo;
       $this->contraseña = $contraseña;
       $this->telefono = $telefono;
 
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

 
    public function getTelefono()
    {
        return $this->telefono;
    }

   
    public function setTelefono($telefono)
    {
        $this->telefono = $telefono;

        return $this;
    }


    public function getData()
    {

       $result= array(

        "nombre"=> $this->nombre,
        "correo"=> $this->correo,
        "contraseña"=> password_hash($this->contraseña,PASSWORD_DEFAULT),
        "telefono"=> $this->telefono,


        "empresasFavoritas"=>[],
        "carrito"=>[],
        "promocionesFavoritas"=>[]


         );

         return $result;
      
    }

    public function updateData($db,$id)
    {

        $backup = $db->getReference('users')
        ->getChild($id)
        ->getValue();

        echo json_encode($backup);

       $result= array(

        "nombre"=> $this->nombre,
        "correo"=> $this->correo,
        "contraseña"=> password_hash($this->contraseña,PASSWORD_DEFAULT),
        "telefono"=> $this->telefono,


        "empresasFavoritas"=>$backup["empresasFavoritas"],
        "carrito"=>$backup[$id]["carrito"],
        "promocionesFavoritas"=>$backup[$id]["promocionesFavoritas"]


         );

         return $result;
      
    }



       //CRUD

       public function guardarUsuario($db)
       {
        //Leer archivo de datos 
         //  $contenidoArchivo = file_get_contents("../../data/Usuarios/usuarios.json");
   
        //convertirlo en un arreglo asociativo
        // $usuarios = json_decode($contenidoArchivo,true);
   
        //Agregar un nuevo elemento al arreglo usuarios a partir del ultimo indice
        $usuario = $this->getData();

        $usuarios = $db->getReference('users')
            ->push($usuario);
   
   
            if ($usuarios->getKey() !=null) 
   
               return '{"mensaje" : "Registro Almacenado","Key":"'.$usuarios->getKey().'"}';
   
            else
   
            return '{"mensaje" : "Error al guardar el Registro"}';

   
        //Ahora toca sobreescribir el archivo
   
        //abrimos el archivo
        //$archivo = fopen("../../data/Usuarios/usuarios.json","w");//metodo de apeertura w para poder escribir en el 
   
        //reescribimos el archivo
   
        // fwrite($archivo,json_encode($usuarios));
   
        //cerramos el archivo
   
        // fclose($archivo);
   
       }
   
   
   
       public static function obtenerUsuarios($db)//no necesitamos mandar atributos asi que se vuelve estatico; accediendo a el sin crear  una instancia
       {
         /* //Leemos el archivo
          $contenidoArchivo = file_get_contents("../../data/Usuarios/usuarios.json");
   
          //imprimimos los datos
          echo $contenidoArchivo;*/

          $result = $db->getReference('users')
          ->getSnapshot()
          ->getValue();

          echo json_encode($result);


   
   
       }
   
       public static function obtenerUsuario($db,$indice)//no necesitamos mandar atributos asi que se vuelve estatico; accediendo a el sin crear  una instancia
       {
         /* //Leemos el archivo
          $contenidoArchivo = file_get_contents("../../data/Usuarios/usuarios.json");
   
          //Convertimos la cadena a un arreglo asociativo
          $usuarios = json_decode($contenidoArchivo,true);
   
          //imprimimos el  dato que el indice llama
          echo  json_encode($usuarios[$indice]);*/

          $result = $db->getReference('users')
          ->getChild($indice)
          ->getValue();

          echo json_encode($result);
   
       }
   
   
   
       public function actualizarUsuario($db,$indice)
       {
          //Leemos el archivo
        //  $contenidoArchivo = file_get_contents("../../data/Usuarios/usuarios.json");
   
          //Convertimos la cadena a un arreglo asociativo
         // $usuarios = json_decode($contenidoArchivo,true);
   
         
          //valores a actualizar
         // $usuario = $this->getData();
   
          //sustituimos la informacion en el indice por la nueva
         // $usuarios[$indice]= $this->updateData($indice);
   
          //abrimos el archivo
           //$archivo = fopen("../../data/Usuarios/usuarios.json","w");//metodo de apeertura w para poder escribir en el 
   
           //reescribimos el archivo
          // fwrite($archivo,json_encode($usuarios));
   
           //cerramos el archivo
         //  fclose($archivo);


         $result = $db->getReference('users')
         ->getChild($indice)
         //->setdata($this->updateData($indice));
         ->set($this->getData());

         if ($result->getKey() !=null) 
   
               return '{"mensaje" : "Registro Actualizado","Key":"'.$result->getKey().'"}';
   
            else
   
            return '{"mensaje" : "Error al guardar el Registro"}';
   
       }
   
   
   
       public static function eliminarUsuario($db,$indice)
       {
         /* //Leemos el archivo
          $contenidoArchivo = file_get_contents("../../data/Usuarios/usuarios.json");
   
          //Convertimos la cadena a un arreglo asociativo
          $usuarios = json_decode($contenidoArchivo,true);
   
          //Funcion splice para elimiar recibe el valor, luego el indice , luego la cantidad de datos a eliminar despues de ese indice
          array_splice($usuarios,$indice,1);
   
          //abrimos el archivo
          $archivo = fopen("../../data/Usuarios/usuarios.json","w");//metodo de apeertura w para poder escribir en el 
   
          //reescribimos el archivo
          fwrite($archivo,json_encode($usuarios));
   
          //cerramos el archivo
          fclose($archivo);*/

          $db->getReference('users')
          ->getChild($indice)
          ->remove();
   
   
         
          
       }

       
    


     public static function login($correo,$contraseña,$db){



      $result = $db->getReference('users')
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