var url = "../TIENDA/php/API/Empresas/API-empresas.php"
var url2 = "../TIENDA/php/API/Administrador/API-planes.php"






////////////////////////CONTROLADOR REGISTRO EMPRESAS/////////////////////////////

//FuncionCargarSelect

function Planes() {

    axios({

        method: 'GET', //metodo de solicitud
        url: url2, //url del API
        responseType: 'json', //tipo de respuesta

    }).then(res => { //inicia la promesa

        document.getElementById("plan").innerHTML = ``;

        for (const key in res.data) {

            document.getElementById("plan").innerHTML +=

                `  <option value="${res.data[key].nombrePlan}">${res.data[key].nombrePlan}</option>`;
        }






    }).catch(error => { //captura de errores
        console.error(error); //imprime un erro en caso de existir

    });


}

Planes();

window.onload = Inicializar;

var Fichero;

var storageRef;

var imagenRef;



function Inicializar() {


    fichero = document.getElementById("imgInp");
    fichero1 = document.getElementById("logo1");
    fichero2 = document.getElementById("logo2");
    fichero3 = document.getElementById("logo3");

    //fichero.addEventListener("change", subirImagenFirebase, false);

    storageRef = firebase.storage().ref();

}





function subirImagenFirebase1() {

    var imagenSubir = fichero.files[0];

    var uploadTask = storageRef.child('imagenes/' + imagenSubir.name).put(imagenSubir);

    uploadTask.on('state_changed',

        function(snapshot) {},
        function(error) {
            alert("Hubo un error")
        },
        function() {
            storageRef.child('imagenes/' + imagenSubir.name).getDownloadURL().then(function(url) {
                // Or inserted into an <img> element:
                var img = document.getElementById('blah');
                img.src = url;
            }).catch(function(error) {
                // Handle any errors
            });
        });

};

function subirImagenFirebase2() {


    var imagenSubir2 = fichero1.files[0];




    var uploadTask1 = storageRef.child('imagenes/' + imagenSubir2.name).put(imagenSubir2);



    uploadTask1.on('state_changed',

        function(snapshot) {



        },
        function(error) {

            // alert("Hubo un error")

        },
        function() {




            storageRef.child('imagenes/' + imagenSubir2.name).getDownloadURL().then(function(url) {

                // Or inserted into an <img> element:
                var img = document.getElementById('blah1');

                img.src = url;



            }).catch(function(error) {
                // Handle any errors
            });






        });





};

function subirImagenFirebase3() {


    var imagenSubir3 = fichero2.files[0];




    var uploadTask2 = storageRef.child('imagenes/' + imagenSubir3.name).put(imagenSubir3);



    uploadTask2.on('state_changed',

        function(snapshot) {



        },
        function(error) {

            // alert("Hubo un error")

        },
        function() {




            storageRef.child('imagenes/' + imagenSubir3.name).getDownloadURL().then(function(url) {

                // Or inserted into an <img> element:
                var img = document.getElementById('blah2');

                img.src = url;



            }).catch(function(error) {
                // Handle any errors
            });






        });





};

function subirImagenFirebase4() {


    var imagenSubir4 = fichero3.files[0];




    var uploadTask3 = storageRef.child('imagenes/' + imagenSubir4.name).put(imagenSubir4);



    uploadTask3.on('state_changed',

        function(snapshot) {



        },
        function(error) {

            // alert("Hubo un error")

        },
        function() {




            storageRef.child('imagenes/' + imagenSubir4.name).getDownloadURL().then(function(url) {

                // Or inserted into an <img> element:
                var img = document.getElementById('blah3');

                img.src = url;



            }).catch(function(error) {
                // Handle any errors
            });






        });





};







///////////////////////////////////////////////////////////////



function nuevaEmpresa() {



    let empresa = {

        nombreEmpresa: document.getElementById('nombre').value,
        logo: document.getElementById("blah").getAttribute("src"),
        correo: document.getElementById('correo').value,
        contraseña: document.getElementById('contraseña').value,
        descripcion: document.getElementById('descripcion').value,
        mision: document.getElementById('mision').value,
        vision: document.getElementById('vision').value,
        telefono: document.getElementById('telefono').value,
        pais: document.getElementById('pais').value,
        ciudad: document.getElementById('ciudad').value,

        nombreRed1: document.getElementById('red1').value,
        url1: document.getElementById('url1').value,
        banner1: document.getElementById("blah1").getAttribute("src"),
        nombreRed2: document.getElementById('red2').value,
        url2: document.getElementById('url2').value,
        banner2: document.getElementById("blah2").getAttribute("src"),
        nombreRed3: document.getElementById('red3').value,
        url3: document.getElementById('url3').value,
        banner3: document.getElementById("blah3").getAttribute("src"),

        formasDePago: [],

        plan: document.getElementById('plan').value,

        sucursales: [],
        productos: [],
        promociones: []
    };




    axios({

        method: 'POST', //metodo de solicitud
        url: url, //url del API
        responseType: 'json', //tipo de respuesta
        data: empresa //mandamos el parametro a guardar 
    }).then(res => { //inicia la promesa
        console.log(res); //imprimimos en consola el valor de la funcion flecha

        location.href = 'pagos.html?' + `?id=${res.data.key}`;
    }).catch(error => { //captura de errores
        console.error(error); //imprime un erro en caso de existir

    });






}


///////////////////////////////////////////////////////////////////////////


function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $('#blah').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
};




////////////////////////////////////////////////////////////////////////////

function readURL1(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $('#blah1').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}




////////////////////////////////////////////////////////////////////////

function readURL2(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $('#blah2').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}



////////////////////////////////////////////////////////////////////////////////

function readURL3(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $('#blah3').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}