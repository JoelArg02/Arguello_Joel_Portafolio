function loadProyectosContent() {
    var proyectosContent = `
        <div class="bg-light pad-js rounded">
            <div class="container mt-4 p-4">
                <div class="row mt-4">
                    <div class="col-md-12">
                        <h4 class="text-center text-dark">Mis Proyectos en Git</h4>
                    </div>
                    <div class="list-group">
                        <a href="https://github.com/prowessagricolaweb/prowessAGR---Node-js" class="list-group-item list-group-item-action" target="_blank">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">Proyecto en Desarrollo - Prowess Agricola - Web</h5>
                            </div>
                            <p class="mb-1">
                                Desarrollo de frontend para Prowess Agrícola, una plataforma agrícola integral. Mi enfoque principal es crear páginas para realizar compras, ventas, registro de productos, gestión de usuarios y la implementación de APIs para mejorar la funcionalidad del sistema.
                            </p>
                        </a>

                        <a href="https://github.com/JoelArg02/7158_G5" class="list-group-item list-group-item-action" target="_blank">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">Proyecto 1 - Depresive Media</h5>
                            </div>
                            <p class="mb-1">
                                Depresive Media es un proyecto desarrollado en C++ que utiliza una aproximación imaginativa para medir niveles de depresión. Esto se logra mediante la lectura y reconocimiento de palabras o frases alarmantes en un texto dado.
                            </p>
                        </a>
                        
                        <a href="https://github.com/JoelArg02/Translate-with-hash-and-binary-tree" class="list-group-item list-group-item-action" target="_blank">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">Proyecto 2 - Traductor</h5>
                            </div>
                            <p class="mb-1">
                                Este proyecto consiste en un traductor que utiliza la traducción de palabras mediante keys hash y árboles binarios para realizar comparaciones y ordenaciones. Proporciona una solución eficiente para la traducción de textos.
                            </p>
                        </a>
                        
                        <a href="https://github.com/JoelArg02/homework" class="list-group-item list-group-item-action" target="_blank">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">Proyecto 3 - Código Radix</h5>
                            </div>
                            <p class="mb-1">
                                Desarrollé un código radix como proyecto para el segundo semestre. La aplicación ordena números al aplastar la tecla 'y', proporcionando una herramienta simple pero efectiva para ordenar datos numéricos.
                            </p>
                        </a>

                        <a href="https://github.com/JoelArg02/Inmobiliaria" class="list-group-item list-group-item-action" target="_blank">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">Proyecto 4 - Inmobiliaria</h5>
                            </div>
                            <p class="mb-1">
                                La Inmobiliaria es una página estática diseñada para la venta de casas y propiedades. Aunque tiene funcionalidad limitada, proporciona una interfaz intuitiva para explorar propiedades disponibles.
                            </p>
                        </a>

                        <a href="https://github.com/JoelArg02/PC_DIGITAL" class="list-group-item list-group-item-action" target="_blank">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">Proyecto 5 - Tienda de Madera</h5>
                            </div>
                            <p class="mb-1">
                                Esta aplicación de gestión de stock y órdenes de producción está diseñada para una tienda de madera. Desarrollada en PHP, JS, HTML y CSS, está conectada a una base de datos SQL. Adapté la aplicación para generar proformas y mejorar la eficiencia del negocio.
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;

    $('#proyectos').html(proyectosContent);
}
