
function regresar() {

    document.getElementById("navbar-menu").innerHTML +=

        `
    
        <ul class="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp" style="color: white;">

        <li class="nav-item"><a class="nav-link" href="#" onclick=" window.history.back();"><i class="fa fa-undo" ></i>&nbsp;&nbsp;Regresar</a></li>

    </ul>
    
    `

}

regresar()