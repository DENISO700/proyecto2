
var clases=['Sistemas Dinamicos I',
'Programacion Comercial',
'Teoria de Bases de Datos',
'Sistemas de Informacion',
'Redes Computacionales',
'Admon de Centros de Computo',
'Lenguajes Formales',
'Programacion Matematica II',
'Algebra Booleana']

function generarSelect() {


    for (let i = 0; i < clases.length; i++) {



        document.getElementById("categorias").innerHTML +=

            `  <option value="${clases[i]}">${clases[i]}</option>`;


    }
}

generarSelect();


function regresar() {

    document.getElementById("navbar-menu").innerHTML +=

        `
    
        <ul class="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp" style="color: white;">

        <li class="nav-item"><a class="nav-link" href="#" onclick=" window.history.back();"><i class="fa fa-undo" ></i>&nbsp;&nbsp;Regresar</a></li>

    </ul>
    
    `

}

regresar()