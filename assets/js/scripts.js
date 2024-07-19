$(document).ready(function() {
    $('#enviar').click(function() {
        Swal.fire({
            icon: 'success',
            title: '¡Mensaje enviado!',
            text: 'Genial,tu mensaje ha sido enviado correctamente.',
            confirmButtonText: 'Aceptar'
        });
    });
});