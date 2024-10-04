$(document).ready(function () {
    $('#tel').mask('(00) 00000-0000', { placeholder: '(00) 00000-0000' });

    $('form').validate({
        rules: {
            nome: {
                required: true,
            },
            email: {
                required: true,
                email: true,
            },
            tel: {
                required: true,
            },
        },
        messages: {
            nome: 'Digite o seu nome',
            email: 'Digite seu E-mail',
            tel: 'Digite seu Telefone',
        },
        submitHandler: function (form) {
            alert('Você se cadastrou com sucesso!');
        },
    });
});
