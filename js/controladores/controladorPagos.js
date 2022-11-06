function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));


};

var id = getParameterByName('id');
var url = "../TIENDA/php/API/Empresas/API-empresas.php"
var url2 = "../TIENDA/php/API/Empresas/API-pagos.php"
var indice;

function obtenerEmpresa() {

    axios({

        method: 'GET', //metodo de solicitud
        url: url, //url del API
        responseType: 'json', //tipo de respuesta

    }).then(res => { //inicia la promesa
        console.log(res); //imprimimos en consola el valor de la funcion flecha

        for (var index = 0; index < res.data.length; index++) {

            if (res.data[index].nombreEmpresa == id) {

                indice = index;

            }

        }

        alert("Ingrese una forma de pago para completar su registro");





    }).catch(error => { //captura de errores
        console.error(error); //imprime un erro en caso de existir

    });

}

obtenerEmpresa();




function agregarPago() {

    let pago = {

        formaDePago: document.getElementById('formaPago').value,
        nombrePropietario: document.getElementById('propietario').value,
        numeroTarjeta: document.getElementById('numeroTarjeta').value,
        vencimiento: document.getElementById('Vencimiento').value,
        CCV: document.getElementById('CCV').value,

    }

    axios({

        method: 'POST', //metodo de solicitud
        url: url2 + `?id=${id}`, //url del API
        responseType: 'json', //tipo de respuesta
        data: pago

    }).then(res => { //inicia la promesa

        location.href = 'loginEmpresa.html';

    }).catch(error => { //captura de errores
        console.error(error); //imprime un erro en caso de existir

    });


}


function cancelarSubscripcion() {

    axios({

        method: 'DELETE', //metodo de solicitud
        url: url + `?id=${id}`, //url del API
        responseType: 'json', //tipo de respuesta

    }).then(res => { //inicia la promesa
        console.log(res); //imprimimos en consola el valor de la funcion flecha


        alert("Registro Cancelado lo esperamos pronto");
        location.href = 'index.html';






    }).catch(error => { //captura de errores
        console.error(error); //imprime un erro en caso de existir

    });



}