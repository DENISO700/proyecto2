var url = "../TIENDA/php/API/Usuarios/API-usuarios.php";
var usuarios = [];
var acceso = false;
var id;



//FUNCIONES LOGIN USUARIO

function campoVacio() {
    valor = document.getElementById("correo").value;
    valor2 = document.getElementById("contraseña").value;
    if (valor == null || valor.length == 0 || /^\s+$/.test(valor) || valor2 == null || valor2.length == 0 || /^\s+$/.test(valor2)) {
        alert("Debe Rellenar todos los campos");
        return false;
    } else {

       // login();
       window.location.href = "my-account.php"
        return true;
    }
}

function login() {

    axios({


        url: "../TIENDA/loginUsuario.php",

        method: "POST",

        responseType: "json",

        data: {

            correo: document.getElementById("correo").value,
            contraseña: document.getElementById("contraseña").value

        }
    }).then(res => {



        if (res.data.codigo == 2) {

            window.location.href = "SuperAdministrador.php";

        } else if (res.data.codigo == 1) {

            window.location.href = "my-account.php" + `?id=${res.data.key}`;


        } else {

            document.getElementById("error").style.display = 'block';

            document.getElementById("error").innerHTML = res.data.mensaje;

        }


    }).catch(err => {


        console.error(err);



    })


}








///////////////////////////////////////////////////////////////////