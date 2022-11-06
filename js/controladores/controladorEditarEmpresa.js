/////CONTROLADOR EDITAR EMPRESA////////

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));


};

var url = "../TIENDA/php/API/Empresas/API-empresas.php";
var id = getParameterByName('id');

var empresa = [];

var url2 = "../TIENDA/php/API/Administrador/API-planes.php"






////////////////////////CONTROLADOR REGISTRO EMPRESAS/////////////////////////////

//FuncionCargarSelect



function CargarPlanes() {

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


function editarEmpresa() {


    //Peticion Asincrona
    axios({

        method: 'GET', //metodo de solicitud
        url: url + `?id=${id}`, //url del API
        responseType: 'json', //tipo de respuesta
    }).then(res => { //inicia la promesa

        this.empresa = res.data;
        console.log(empresa);

        document.getElementById('nombre').value = empresa.nombreEmpresa,
            document.getElementById("blah").setAttribute("src", empresa.logo),
            document.getElementById('correo').value = empresa.correo,

            document.getElementById('descripcion').value = empresa.descripcion,
            document.getElementById('mision').value = empresa.mision,
            document.getElementById('vision').value = empresa.vision,
            document.getElementById('telefono').value = empresa.telefono,
            document.getElementById('pais').value = empresa.pais,
            document.getElementById('ciudad').value = empresa.ciudad,

            document.getElementById('red1').value = empresa.red1,
            document.getElementById('url1').value = empresa.url1,
            document.getElementById("blah1").setAttribute("src", empresa.banner1),
            document.getElementById('red2').value = empresa.red2,
            document.getElementById('url2').value = empresa.url2,
            document.getElementById("blah2").setAttribute("src", empresa.banner2),
            document.getElementById('red3').value = empresa.red3,
            document.getElementById('url3').value = empresa.url3,
            document.getElementById("blah3").setAttribute("src", empresa.banner3)








    }).catch(error => { //captura de errores
        console.error(error); //imprime un erro en caso de existir
    });


}


function updateEmp() {

    let update = {
        nombreEmpresa: document.getElementById('nombre').value,
        logo: document.getElementById("imgInp").getAttribute('src'),
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
        banner1: document.getElementById("logo1").getAttribute('src'),
        nombreRed2: document.getElementById('red2').value,
        url2: document.getElementById('url2').value,
        banner2: document.getElementById("logo2").getAttribute('src'),
        nombreRed3: document.getElementById('red3').value,
        url3: document.getElementById('url3').value,
        banner3: document.getElementById("logo3").getAttribute('src'),

        formasDePago: empresa.formasDePago,

        plan: document.getElementById('plan').value,

        sucursales: empresa.sucursales,
        productos: empresa.productos,
        promociones: empresa.promociones

    };

    //Peticion Asincrona
    axios({

        method: 'PUT', //metodo de solicitud
        url: url + `?id=${id}`, //url del API
        responseType: 'json', //tipo de respuesta
        data: update
    }).then(res => { //inicia la promesa

        console.log(res.data);
        alert("Empresa editado con exito");
        location.href = 'loginEmpresa.html';






    }).catch(error => { //captura de errores
        console.error(error); //imprime un erro en caso de existir
    });




}

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






function regresar() {

    document.getElementById("navbar-menu").innerHTML +=

        `
    
        <ul class="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp" style="color: white;">

        <li class="nav-item"><a class="nav-link" href="#" onclick=" window.history.back();"><i class="fa fa-undo" ></i>&nbsp;&nbsp;Regresar</a></li>

    </ul>
    
    `

}