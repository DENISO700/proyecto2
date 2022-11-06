function login() {

    axios({


        url: "../TIENDA/loginEmpresa.php",

        method: "POST",

        responseType: "json",

        data: {

            correo: document.getElementById("nombre").value,
            contraseña: document.getElementById("contra").value

        }
    }).then(res => {

        console.log(res.data);

        if (res.data.codigo == 1) {

            window.location.href = "dashboard1.php" + `?id=${res.data.key}`;

        } else {

            document.getElementById("error").style.display = 'block';

            document.getElementById("error").innerHTML = res.data.mensaje;

        }


    }).catch(err => {


        console.error(err);



    })


}