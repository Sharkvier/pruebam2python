$(document).ready(function() {
    $('#enviar').click(function() {
        Swal.fire({
            icon: 'success',
            title: '¡Mensaje enviado!',
            text: 'Tu mensaje ha sido enviado correctamente.',
            confirmButtonText: 'Aceptar'
        });
    });
});