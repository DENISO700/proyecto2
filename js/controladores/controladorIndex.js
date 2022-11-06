////////CONTROLADOR  DEL INDEX/////////////////////////


var url = "../TIENDA/php/API/Administrador/API-planes.php";
var planes = [];

function obtenerPlanes() {

    axios({

        method: 'GET', //metodo de solicitud
        url: url, //url del API
        responseType: 'json', //tipo de respuesta

    }).then(res => { //inicia la promesa



        document.getElementById("planes").innerHTML = "";


        for (const k in res.data) {

            document.getElementById("planes").innerHTML += `
            
                <div class="card mb-4 shadow-sm col-4">
                <div class="card-h">
                    <p class="titulo ">${res.data[k].nombrePlan}</p>
                </div>
                <div class="card-b">
                    <p class="precio">${res.data[k].precio} </p>
                    <ul class="beneficios mt-1 mb-1">
                        <li><i class="fa fa-lightbulb-o"></i> &nbsp;${res.data[k].promos} espacios para promos.</li>
                        <li><i class="fa fa-lightbulb-o"></i> &nbsp;${res.data[k].almacenamiento} GB de Almacenamiento</li>
                        <li><i class="fa fa-lightbulb-o"></i> &nbsp;Soporte por Email</li>
                        <li><i class="fa fa-lightbulb-o"></i> &nbsp;Acceso al centro de ayuda</li>
                        <li><i class="fa fa-lightbulb-o"></i> &nbsp;${res.data[k].duracion} Mes de duracion.</li>
                        <li><i class="fa fa-lightbulb-o"></i> &nbsp;Banners en pantalla principal</li>
                    
                    </ul>
                    <a class=" ir btn hvr-hover" href="loginEmpresa.html">INICIAR</a>
                </div>

            </div>
        `;
        }




    }).catch(error => { //captura de errores
        console.error(error); //imprime un erro en caso de existir

    });


}



//Funcuon genera Categorias

function Categorias() {


    document.getElementById("categorias").innerHTML = ` `;

    for (let j = 0; j < 4; j++) {
        document.getElementById("categorias").innerHTML += ` 

     <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 col-xl-3">
    <div class="shop-cat-box">
        <img class="img-fluid" src="images/categories_img_01.jpg" />
        <a class="btn hvr-hover" href="#">Lorem ipsum dolor</a>
    </div>
</div>`;

    }



}

////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////

//Funcion Generar Slider

function Slider() {

    document.getElementById("slider").innerHTML = "";

    document.getElementById("slider").innerHTML = `  <div class="carousel-item active">
    <img src="images/banner-01.jpg" class="d-block w-100" alt="...">
</div>`;

    for (let m = 0; m < 3; m++) {

        document.getElementById("slider").innerHTML += `
        <div class="carousel-item ">
        <img src="images/banner-01.jpg" class="d-block w-100" alt="...">
    </div>
`;

    }


    document.getElementById("slider").innerHTML += `
    
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
`;

}