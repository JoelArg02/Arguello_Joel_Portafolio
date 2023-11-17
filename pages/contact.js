function loadContactContent() {
    var contactContent = `
        <div class="bg-light pad-js rounded">
            <div class="container mt-4 p-4">
                <div class="row mt-4">
                    <div class="col-md-12">
                        <h2 class="text-dark">Contacto</h2>
                        <p class="text-muted">¡Gracias por visitar mi portafolio! Si deseas ponerte en contacto conmigo, no dudes en hacerlo:</p>
                        
                        <ul class="list-unstyled">
                            <li><strong>Correo Personal:</strong> <a href="mailto:Joel.darguello@gmail.com" class="contact-link">Joel.darguello@gmail.com</a></li>
                            <li><strong>Correo Educativo:</strong> <a href="mailto:jdarguello1@espe.edu.ec" class="contact-link">jdarguello1@espe.edu.ec</a></li>
                            <li><strong>WhatsApp:</strong> <a href="tel:+593998500498" class="contact-link">0998500498</a></li>
                            <li><strong>GitHub:</strong> <a href="https://github.com/JoelArg02" target="_blank" class="contact-link">JoelArg02</a></li>
                            <li><strong>Location:</strong> Ecuador &rarr; Quito &rarr; Calderon</li>
                        </ul>
                        
                        <p class="text-muted">Espero con interés cualquier mensaje o colaboración. ¡Conéctate pronto!</p>

                        <p class="text-dark">¡Hasta pronto! Si tienes alguna pregunta o necesitas más información, no dudes en decirlo. Estoy aquí para ayudarte. ¡Adiós!</p>
                    </div>
                </div>
            </div>
        </div>
    `;

    $('#contact').html(contactContent);
}
