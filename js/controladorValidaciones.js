//CONTROLADOR DE VALIDACIONES//

function campoVacio1() {

    valor = document.getElementById("correo").value;
    valor2 = document.getElementById("contraseña").value;
    if (valor == null || valor.length == 0 || /^\s+$/.test(valor) || valor2 == null || valor2.length == 0 || /^\s+$/.test(valor2)) {
        alert("Debe Rellenar todos los campos");
        return false;
    } else {
        Admin();
    }

}


///////////////////////////////////////////////////////


///////////////////////////////////////////////////
//Validacion Select List///////////////

function selectNoVacio() {

    indice = document.getElementById("opciones").selectedIndex;
    if (indice == null || indice == 0) {
        return false;
    }

}

///////////////////////////////////////////////////////////////////////////////

//VALIDAR IDENTIFICADOR UNICO /////

function idUnico() {
    valor = document.getElementById("campo").value;
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    if (!(/^\d{8}[A-Z]$/.test(valor))) {
        return false;
    }

    if (valor.charAt(8) != letras[(valor.substring(0, 8)) % 23]) {
        return false;
    }

}
//////////////////////////////////////////////////////////////////////////
////////////////VALIDAR QUE UN CHECKBOX SEA SELECCIONADO /////

function validoCheckbox() {

    elemento = document.getElementById("campo");
    if (!elemento.checked) {
        return false;
    }

}


///////////////////////////////////////////////////////////////////////
//Validar radioButtons

function radioValido() {

    opciones = document.getElementsByName("opciones");

    var seleccionado = false;
    for (var i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            seleccionado = true;
            break;
        }
    }

    if (!seleccionado) {
        return false;
    }

}

////////////////////////////////////////////////////

function validaNumericos(event) {
    if (event.charCode >= 48 && event.charCode <= 57) {
        return true;
    }
    return false;
}

//VALIDACIONES DE REGISTRO USUARIO//

function validarUsuario() {

    valor = document.getElementById("correo").value;
    valor2 = document.getElementById("contraseña").value;
    valor3 = document.getElementById("nombre").value;
    valor4 = document.getElementById("user").value;

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var re2 = /^([0-9])$/;

    if (valor == null || valor.length == 0 || /^\s+$/.test(valor) || valor2 == null || valor2.length == 0 || /^\s+$/.test(valor2)) {
        alert("Debe Rellenar todos los campos");
        return false;
    } else if (valor4.length > 10) {
        alert("Usuario Demasiado Largo");
        return false;
    } else if (valor2.length > 8 || valor2.length < 4) {
        alert("Contraseña debe tener entre 4-8 caracteres");
        return false;
    } else if (!(re.test(valor))) {
        alert("Correo No  tiene formato  Valido ");
        return false;
    } else {
        alert("Datos Correctos");
        nuevoUsuario();
        return true
    }


}


//VALIDACIONES REGISTRO EMPRESAS

function validarEmpresa() {

    var nombreEmpresa = document.getElementById('nombre').value;
    var logo = document.getElementById('imgInp').value;
    var correo = document.getElementById('correo').value;
    var contraseña = document.getElementById('contraseña').value;
    var descripcion = document.getElementById('descripcion').value;
    var mision = document.getElementById('mision').value;
    var vision = document.getElementById('vision').value;
    var telefono = document.getElementById('telefono').value;
    var pais = document.getElementById('pais').value;
    var ciudad = document.getElementById('ciudad').value;


    var nombreRed1 = document.getElementById('red1').value;
    var url1 = document.getElementById('url1').value;
    var banner1 = document.getElementById('logo1').value;
    var nombreRed2 = document.getElementById('red2').value;
    var url2 = document.getElementById('url2').value;
    var banner2 = document.getElementById('logo2').value;
    var nombreRed3 = document.getElementById('red3').value;
    var url3 = document.getElementById('url3').value;
    var banner3 = document.getElementById('logo3').value;



    var plan = document.getElementById('plan').value;

    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    var regex2 = /^([0-9])$/;

    var regex3 = /^(ftp|http|https):\/\/[^ "]+$/;

    var regex4 = /^\d{2}\/\d{2}$/;

    if (nombreEmpresa.length > 20) {
        alert("Usuario Demasiado Largo");
        return false;
    } else if (!(regex.test(correo))) {
        alert("Correo No  tiene formato  Valido ");
        return false;
    } else if (contraseña.length > 8 || contraseña.length < 4) {
        alert("Contraseña debe tener entre 4-8 caracteres");
        return false;
    } else if (descripcion.length > 100 || descripcion.length < 10) {
        alert("La descripcion debe tener entre 10-100 caracteres");
        return false;
    } else if (mision.length > 100 || mision.length < 10) {
        alert("La mision debe tener entre 10-100 caracteres");
        return false;
    } else if (vision.length > 100 || vision.length < 10) {
        alert("La vision debe tener entre 10-100 caracteres");
        return false;
    } else if (telefono.length > 8 || telefono.length < 8) {
        alert("este campo solo admite 8 digitos");
        return false;
    } else if (!(regex3.test(url1))) {
        alert("La URL no es valida");
        return false;
    } else if (!(regex3.test(url2))) {
        alert("La URL no es valida");
        return false;
    } else if (!(regex3.test(url3))) {
        alert("La URL no es valida");
        return false;

    } else {
        alert("Datos Correctos");

        nuevaEmpresa();
        return true
    }


}

function updateEmpresa() {

    var nombreEmpresa = document.getElementById('nombre').value;
    var logo = document.getElementById('imgInp').value;
    var correo = document.getElementById('correo').value;
    var contraseña = document.getElementById('contraseña').value;
    var descripcion = document.getElementById('descripcion').value;
    var mision = document.getElementById('mision').value;
    var vision = document.getElementById('vision').value;
    var telefono = document.getElementById('telefono').value;
    var pais = document.getElementById('pais').value;
    var ciudad = document.getElementById('ciudad').value;


    var nombreRed1 = document.getElementById('red1').value;
    var url1 = document.getElementById('url1').value;
    var banner1 = document.getElementById('logo1').value;
    var nombreRed2 = document.getElementById('red2').value;
    var url2 = document.getElementById('url2').value;
    var banner2 = document.getElementById('logo2').value;
    var nombreRed3 = document.getElementById('red3').value;
    var url3 = document.getElementById('url3').value;
    var banner3 = document.getElementById('logo3').value;



    var plan = document.getElementById('plan').value;

    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    var regex2 = /^([0-9])$/;

    var regex3 = /^(ftp|http|https):\/\/[^ "]+$/;

    var regex4 = /^\d{2}\/\d{2}$/;

    if (nombreEmpresa.length > 20) {
        alert("Usuario Demasiado Largo");
        return false;
    } else if (!(regex.test(correo))) {
        alert("Correo No  tiene formato  Valido ");
        return false;
    } else if (contraseña.length > 8 || contraseña.length < 4) {
        alert("Contraseña debe tener entre 4-8 caracteres");
        return false;
    } else if (descripcion.length > 100 || descripcion.length < 10) {
        alert("La descripcion debe tener entre 10-100 caracteres");
        return false;
    } else if (mision.length > 100 || mision.length < 10) {
        alert("La mision debe tener entre 10-100 caracteres");
        return false;
    } else if (vision.length > 100 || vision.length < 10) {
        alert("La vision debe tener entre 10-100 caracteres");
        return false;
    } else if (telefono.length > 8 || telefono.length < 8) {
        alert("este campo solo admite 8 digitos");
        return false;
    } else if (!(regex3.test(url1))) {
        alert("La URL no es valida");
        return false;
    } else if (!(regex3.test(url2))) {
        alert("La URL no es valida");
        return false;
    } else if (!(regex3.test(url3))) {
        alert("La URL no es valida");
        return false;

    } else {
        alert("Datos Correctos");

        updateEmp()
        return true
    }


}

function validarPago() {

    var formaDePago = document.getElementById('formaPago').value;
    var nombrePropietario = document.getElementById('propietario').value;
    var numeroTarjeta = document.getElementById('numeroTarjeta').value;
    var vencimiento = document.getElementById('Vencimiento').value;
    var CCV = document.getElementById('CCV').value;


    var regex2 = /^([0-9])$/;


    var regex4 = /^\d{2}\/\d{2}$/;

    if (nombrePropietario.length > 20) {
        alert("Usuario Demasiado Largo");
        return false;
    } else if (!(regex4.test(vencimiento))) {
        alert(" No  tiene formato  Valido ");
        return false;
    } else {
        alert("Datos Correctos");
        agregarPago();
        return true
    }






}

////////////////////////////////////////

//VALIDACIONES REGISTRO PROMOCION 

function validarPromocion() {

    var inicio = document.getElementById("fechainicio").value;
    var final = document.getElementById("fechalimite").value;


    if (Date.parse(final) < Date.parse(inicio)) {
        alert("Fecha de termino de promocion no valida");
        return false;
    } else {
        alert("Datos correctos");
        nuevaPromocion();
        return true;
    }

}

//CONTROLADOR REGISTRO SUCURSAL

function validarSucursal() {

    var nombreSucursal = document.getElementById('nombreSucursal').value;
    var correo = document.getElementById('correoSucursal').value;
    var telefono = document.getElementById('telefono').value;



    var direccion = document.getElementById('direccionSucursal').value;


    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    var regex3 = /^(ftp|http|https):\/\/[^ "]+$/;

    var regex4 = /^\d*\.?\d*$/;



    if (nombreSucursal.length > 20) {
        alert("Nombre Demasiado Largo");
        return false;
    } else if (!(regex.test(correo))) {
        alert("Correo No  tiene formato  Valido ");
        return false;
    } else if (telefono.length > 8 || telefono.length < 8) {
        alert("este campo solo admite 8 digitos");
        return false;
    } else if (direccion.length > 50) {
        alert("Direccion demasiado larga");
        return false;
    } else {
        alert("Datos Correctos");
        nuevaSucursal();
        return true
    }


}

//////////////////////////////


function validarProducto() {

    var categoria = document.getElementById('categorias').value;
    var nombre = document.getElementById('nombreProducto').value;
    var precio = document.getElementById('precioproducto').value;
    var cantida = document.getElementById('cantidad').value;
    var descripcion = document.getElementById('descripcion').value;


    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    var regex3 = /^(ftp|http|https):\/\/[^ "]+$/;

    var regex4 = /^\d*\.?\d*$/;



    if (nombreProducto.length > 20) {
        alert("Nombre Demasiado Largo");
        return false;
    } else if (descripcion.length > 100 || descripcion.length < 10) {
        alert("Descripcion demasiado larga");
        return false;
    } else {
        alert("Datos Correctos");
        nuevoProducto();
        return true
    }


}

//////////////////////////////


//FUNCIONES EDITAR USUARIO

function editar() {

    valor = document.getElementById("correo").value;
    valor2 = document.getElementById("contraseña").value;
    valor3 = document.getElementById("telefono").value;
    valor4 = document.getElementById("user").value;

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var re2 = /^([0-9])$/;

    if (valor == null || valor.length == 0 || /^\s+$/.test(valor) || valor2 == null || valor2.length == 0 || /^\s+$/.test(valor2)) {
        alert("Debe Rellenar todos los campos");
        return false;
    } else if (valor4.length > 10) {
        alert("Usuario Demasiado Largo");
        return false;
    } else if (valor2.length > 8 || valor2.length < 4) {
        alert("Contraseña debe tener entre 4-8 caracteres");
        return false;
    } else if (!(re.test(valor))) {
        alert("Correo No  tiene formato  Valido ");
        return false;
    } else {
        alert("Datos Correctos");
        update();
        return true
    }


}


////////////////////////////////////////////////////////////////

function esNum(ev, el) {
    /* ev: evento; el: elemento; */
    tecla = (document.all) ? ev.keyCode : ev.which;

    // Permite un solo punto decimal
    if (el.value.indexOf('.') == -1 ? tecla == 46 : false) { return true; }

    // Permite números negativos (después de escribir un número)
    if (tecla == 45 && el.value !== '') { el.value = (-1) * el.value; }

    // Permite tecla de retroceso (borrar)
    if (tecla == 8) { return true; }

    // Permite tecla Tab
    if (tecla == 9) { return true; }

    // Patrón de entrada: solo acepta numeros positivos
    patron = /[0-9]/;
    tecla_fin = String.fromCharCode(tecla);
    return patron.test(tecla_fin);
}

//////////////////////////////////////////////////////////////

function validarPlan() {

    var nombrePlan = document.getElementById("nombre").value;
    var precio = document.getElementById("precio").value;
    var promos = document.getElementById("promos").value;
    var almacenamiento = document.getElementById("almacenamiento").value;
    var soporte = document.getElementById("soporte").value;
    var centroDeAyuda = document.getElementById("ayuda").value;
    var duracion = document.getElementById("duracion").value;
    var panpallaPrincipal = document.getElementById("principal").value;



    var regex2 = /^([0-9])$/;

    var regex3 = /^(ftp|http|https):\/\/[^ "]+$/;

    var regex4 = /^\d{2}\/\d{2}$/;

    if (nombrePlan.length > 15) {
        alert("Nombre Demasiado Largo");
        return false;
    } else {
        alert("Datos Correctos");
        guardarPlan();
        return true
    }


}

//////////////////////////////////////////////////////////////////

function validarPlan2(r) {

    var nombrePlan = document.getElementById("nombre2").value;
    var precio = document.getElementById("precio2").value;
    var promos = document.getElementById("promos2").value;
    var almacenamiento = document.getElementById("almacenamiento2").value;
    var soporte = document.getElementById("soporte2").value;
    var centroDeAyuda = document.getElementById("ayuda2").value;
    var duracion = document.getElementById("duracion2").value;
    var panpallaPrincipal = document.getElementById("principal2").value;

    var regex2 = /^([0-9])$/;
    var regex3 = /^(ftp|http|https):\/\/[^ "]+$/;
    var regex4 = /^\d{2}\/\d{2}$/;

    if (nombrePlan.length > 15) {
        alert("Nombre Demasiado Largo");
        return false;
    } else {
        alert("Datos Correctos");
        editarPlan(r);
        return true
    }


}