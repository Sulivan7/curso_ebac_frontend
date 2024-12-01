document
  .getElementById("formulario")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const campoA = Number(document.getElementById("campo-a").value);
    const campoB = Number(document.getElementById("campo-b").value);

    if (campoB > campoA) {
      document.getElementById("mensagem").textContent =
        "Sucesso! Campo B Maior que Campo A";
      document.getElementById("mensagem").style.color = "green";
      document.getElementById("mensagem").style.display = "flex";
    } else {
      document.getElementById("mensagem").textContent =
        "Erro! Campo B Menor que Campo A";
      document.getElementById("mensagem").style.color = "red";
      document.getElementById("mensagem").style.display = "flex";
    }
  });
