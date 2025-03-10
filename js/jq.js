
/* -  CONTROL DE ERRORES LOGIN - */
$(document).ready(function(){
    $("#user-login, #password-login").on("input", function() {
        // Cuando el usuario empieza a escribir, restauramos el color del SVG
        if ($(this).attr("id") === "user-login") {
            $("#user span svg path").css("fill", "#01222F");
        } else if ($(this).attr("id") === "password-login") {
            $("#clave span svg path").css("fill", "#01222F");
        }
    });

    $("#loginForm").submit(function(e){
        e.preventDefault(); // Evita el envío del formulario
        let isValid = true;

        // Validación de CLAVEID
        let claveid = $("#user-login").val().trim();
        if (claveid === "") {
            $("#user").addClass("error");

            // Animación de transición en el placeholder con fadeIn
            $("#user-login").val("").attr("placeholder", "").fadeOut(100, function() {
                $(this).attr("placeholder", "El CLAVEID no es correcto").fadeIn(300);
            });

            // Animar cambio de color del SVG a rojo
            $("#user span svg path").css("transition", "fill 0.3s ease").css("fill", "#AE1916");

            isValid = false;
        } else {
            $("#user").removeClass("error");

            // Animación de transición en el placeholder con fadeIn
            $("#user-login").fadeOut(100, function() {
                $(this).attr("placeholder", "Introduzca su CLAVEID").fadeIn(300);
            });

            // Restaurar color del SVG a azul
            $("#user span svg path").css("transition", "fill 0.3s ease").css("fill", "#01222F");
        }

        // Validación de contraseña
        let password = $("#password-login").val().trim();
        if (password.length < 4) {
            $("#clave").addClass("error");

            // Animación de transición en el placeholder con fadeIn
            $("#password-login").val("").attr("placeholder", "").fadeOut(100, function() {
                $(this).attr("placeholder", "La contraseña no es correcta").fadeIn(300);
            });

            // Animar cambio de color del SVG a rojo
            $("#clave span svg path").css("transition", "fill 0.3s ease").css("fill", "#AE1916");

            isValid = false;
        } else {
            $("#clave").removeClass("error");

            // Animación de transición en el placeholder con fadeIn
            $("#password-login").fadeOut(100, function() {
                $(this).attr("placeholder", "Introduzca su contraseña").fadeIn(300);
            });

            // Restaurar color del SVG a azul
            $("#clave span svg path").css("transition", "fill 0.3s ease").css("fill", "#01222F");
        }

        // Si todo es válido, aplicar transición y redirigir
        if (isValid) {
                window.location.href = "log_in_successful.html";
        }
    });
});


/* -MENU "DESPLEGABLE"- */

function toggleMenu() {
    const menu = $("#contenedor-menu");
    const body = $("body");

    menu.toggleClass("active");

    // Si el menú está activo, añadimos la clase para bloquear el scroll
    if (menu.hasClass("active")) {
        body.addClass("no-scroll");
    } else {
        body.removeClass("no-scroll");
    }
}

/* EFECTOS TRANSICION ENTRE PÁGINAS */

$(document).ready(function () {
    // Fade-in cuando la página carga
    $("body").css("opacity", 0).animate({ opacity: 1 }, 300, "swing");

    // Fade-out cuando se hace clic en un enlace
    $("a").on("click", function (event) {
        let target = $(this).attr("target");
        let href = $(this).attr("href");

        if (!target && href && href !== "#" && !href.startsWith("javascript")) {
            event.preventDefault();
            $("body").animate({ opacity: 0 }, 300, "swing", function () {
                window.location.href = href;
            });
        }
    });
});

/* PAGINAS QUE REDIRIGEN A OTRAS AUTOMATICAMENTE */

function redirigirAutomaticamente(url, tiempo) {
    setTimeout(function(){
        window.location.href = url;
    }, tiempo);
}


/*VALIDACIÓN FORM AÑADIR HOGAR MANUAL*/

$(function() {
    // Validación del campo cuando el valor es inválido
    $("#add_home").submit(function(e) {
        e.preventDefault(); // Evitar el envío del formulario

        let isValid = true;
        let userInput = $("#add_code").val().trim();

        // Regex para validar el formato "1234-56789-1234-XXX"
        let regex = /^\d{4}-\d{5}-\d{4}-[A-Za-z]{3}$/;

        if (!regex.test(userInput)) {
            $(".input-txt").addClass("error");

            // Animación del placeholder
            $("#add_code").fadeOut(100, function() {
                $(this).val("").attr("placeholder", "El código no es válido").fadeIn(300);
            });

            // Animar cambio de color del SVG a rojo
            $("#add_code + span svg path").css("transition", "fill 0.3s ease").css("fill", "#AE1916");

            isValid = false;
        } else {
            $(".input-txt").removeClass("error");

            // Animación para restaurar el placeholder
            $("#add_code").fadeOut(100, function() {
                $(this).attr("placeholder", "1234-56789-1234-XXX").fadeIn(300);
            });

            // Restaurar el color del SVG a azul
            $("#add_code + span svg path").css("transition", "fill 0.3s ease").css("fill", "#01222F");
        }

        // Si es válido, redirigir
        if (isValid) {
                window.location.href = "add_home_successful.html"; // Redirigir después de la validación
        }
    });
});

