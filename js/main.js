$(document).ready(function () {

    $('body').scrollspy({ target: '#navbarCollapse', offset: 50 });

    var navLinks = $('#navList a');
    $(document).ready(function () {
        $('[data-target="inicio"]').click();
        $('[data-target="about"]').click();
        $('[data-target="proyectos"]').click();
        $('[data-target="contact"]').click();
        $('[data-target="skills"]').click();
    });
});
