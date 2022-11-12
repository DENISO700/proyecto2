//Funcion Caegar Empresas

function tablaEmpresas() {

    axios({

        method: 'GET', //metodo de solicitud
        url: url2, //url del API
        responseType: 'json', //tipo de respuesta

    }).then(res => { //inicia la promesa


        document.getElementById("empresas").innerHTML = ``;


        for (const key in res.data) {


            document.getElementById("empresas").innerHTML +=
                `

                    <tr>

                    <td class="thumbnail-img">
                        <a href="#">
                            <img class="${res.data[key].logo}" alt="" />
                        </a>
                    </td>

                    <td class="name-pr">
                        <a href="#">
                        ${res.data[key].nombreEmpresa}
                    </a>
                    </td>

                    <td class="price-pr">
                        <p>${res.data[key].correo}</p>
                    </td>

                    <td class="quantity-box">
                        <input type="text" size="4" value="${res.data[key].contraseña}" min="0" step="1" class="c-input-text qty text">
                    </td>


                    <td class="total-pr">
                        <p>${res.data[key].descripcion}</p>
                    </td>

                    <td class="name-pr">
                        <a href="#">
                        ${res.data[key].mision}
                    </a>
                    </td>
                    <td class="name-pr">
                        <a href="#">
                        ${res.data[key].vision}
                    </a>
                    </td>
                    <td class="name-pr">
                        <a href="#">
                        ${res.data[key].telefono}
                    </a>
                    </td>
                    <td class="name-pr">
                        <a href="#">
                        ${res.data[key].pais}
                    </a>
                    </td>
                    <td class="name-pr">
                        <a href="#">
                        ${res.data[key].ciudad}
                    </a>
                    </td>
                    <td class="name-pr">
                        <a href="#">
                        ${res.data[key].nombreRed1}
                    </a>
                    </td>
                    <td class="name-pr">
                        <a href="#">
                        ${res.data[key].nombreRed2}
                    </a>
                    </td>
                    <td class="name-pr">
                        <a href="#">
                        ${res.data[key].nombreRed3}
                    </a>
                    </td>


                    <td class="name-pr">
                        <a href="#">
                        ${res.data[key].plan}
                    </a>
                    </td>



                    </tr>


    `;
        }


    }).catch(error => { //captura de errores
        console.error(error); //imprime un erro en caso de existir

    });



}


