function loadHomeContent() {
    var homeContent = `
        <div class="bg-light pad-js rounded">
            <div class="container mt-4 p-4">
                <div class="row">
                    <div class="col-md-5">
                        <div style="width: 534px; height: 266px; overflow: hidden;">
                            <img src="img/my-image.jpg" alt="Mi Imagen" class="img-fluid rounded" style="width: 80%; height: 100%; object-fit: cover;">
                        </div>
                    </div>
                    <div class="col-md-6 mt-4">
                        <h2 class="text-dark">¡Hola, soy Joel Daniel Arguello Espinosa!</h2>
                        <p class="text-muted">
                            Bienvenido a mi página de inicio. Aquí puedes conocer más sobre mí y mis proyectos. Soy un entusiasta de la programación y la tecnología, estudiante de Ingeniería de Software en la Universidad de las Fuerzas Armadas (ESPE). Me apasiona el desarrollo de software, la resolución de problemas y la creación de soluciones innovadoras.
                        </p>
                        <p class="text-muted">
                            En este espacio, compartiré mis experiencias, habilidades y proyectos. Explora las secciones de habilidades, sobre mí y contacto para obtener más detalles. ¡Gracias por visitar!
                        </p>
                    </div>
              
                </div>
            </div>
        </div>
    `;

    $('#inicio').html(homeContent);
}
