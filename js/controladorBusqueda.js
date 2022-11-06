const personas = [{
    "nombre": "Luis",
    "Apellido": "Gomez",
    "edad": 25
}, {
    "nombre": "Mario",
    "Apellido": "Perdomo",
    "edad": 25
}, {
    "nombre": "Miguel",
    "Apellido": "Herrera",
    "edad": 25
}];

const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton');

const resultado = document.querySelector('#browsers');

const filtrar = () => {

    resultado.innerHTML = "";

    const text = formulario.value.toLowerCase();
    for (let user of personas) {

        let valor = user.nombre.toLowerCase();

        if (valor.indexOf(text) !== -1) {

            resultado.innerHTML +=
                `
                <option value="${user.nombre}  ${user.Apellido}">
                        
        `;

        };

    };

    if (resultado.innerHTML === "") {

        resultado.innerHTML +=

            `
    <li>Persona No encontrada</li>
    
    
    `;

    };

};

const limpiar = () => {

    console.log(document.getElementById('formulario').value);
    resultado.value += "";
    formulario.value = "";

    /* document.getElementById('temp').innerHTML =

    `
        <h1>Buscador con IndexOf</h1>

    <input list="browsers" type="text" id="formulario" class="my-2">

    <button class="btn btn-info md-2" id="boton">Buscar</button>

    <datalist id="browsers">
   
    </datalist>


        `*/



};

boton.addEventListener('click', limpiar);
formulario.addEventListener('keyup', filtrar);