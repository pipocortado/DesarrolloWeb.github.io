fetch("https://randomuser.me/api/")
        .then(res => res.json())
        .then(datos => {
            let author = datos.results;
            let datosPersonales = "<h2>Datos personales.</h2>";
            author.map(function (datos) {
                datosPersonales += `
                <div class="d-p">
                <a name="perfil"></a>
                    <ul>
                        <li><center><img src="${datos.picture.large}"></center></li>
                        <li><h3>Nombre: ${datos.name.first}</h3></li>
                        <li><h3>Apellido: ${datos.name.last}</h3></li>
                        <li><h3>Numero: ${datos.cell}</h3></li>
                        <li><h3>Fecha de nacimiento: ${datos.dob.date}</h3></li>
                        <li><h3>Edad: ${datos.dob.age}</h3></li>
                        <li><h3>Correo: ${datos.email}</h3></li>
                        <li><h3>Ciudad: ${datos.location.city}</h3></li>
                        <li><h3>Lugar de nacimiento: ${datos.location.country}</h3></li>
                        <li><h3>Codigo postal: ${datos.location.postcode}</h3></li>
                    </ul>
                </div> `;
            });
            document.getElementById('datos-personales').innerHTML = datosPersonales;

        });



