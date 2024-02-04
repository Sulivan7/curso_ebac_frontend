$(document).ready(function () {
  $("#telefone").mask("(00) 00000-0000", { placeholder: "(00) 00000-0000" });
  $("#cpf").mask("000-000-000-00", { placeholder: "000-000-000-00" });
  $("#cep").mask("00000-000", { placeholder: "00000-000" });

  $("form").validate({
    rules: {
      nomeCompleto: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      telefone: {
        required: true,
      },
      cpf: {
        required: true,
      },
      cep: {
        required: true,
      },
      mensagem: {
        required: true,
      },
    },
    messages: {
      nomeCompleto: "Digite o seu nome",
      email: "Digite seu E-mail",
      telefone: "Digite seu Telefone",
      cpf: "Digite seu CPF",
      cep: "Digite seu CEP",
    },
  });
});
