
function Slider() {

    document.getElementById("slider").innerHTML = "";

    document.getElementById("slider").innerHTML = `  <div class="carousel-item active">
    <img src="images/banner-01.jpg" class="d-block w-100" alt="...">
</div>`;

    for (let m = 1; m <= 3; m++) {

        document.getElementById("slider").innerHTML += `
        <div class="carousel-item ">
        <img src="images/banner-0${m}.jpg" class="d-block w-100" alt="...">
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