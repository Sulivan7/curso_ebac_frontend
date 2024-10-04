$(document).ready(function () {
    $('#telefone').mask('00-00000-0000', { placeholder: '00-00000-0000' });

    $('form').validate({
        rules: {
            nome: {
                required: true,
            },
            email: {
                required: true,
                email: true,
            },
            telefone: {
                required: true,
            },
        },
        messages: {
            nome: 'Digite o seu nome',
            email: 'Digite seu E-mail',
            telefone: 'Digite seu Telefone',
        },
    });
});
