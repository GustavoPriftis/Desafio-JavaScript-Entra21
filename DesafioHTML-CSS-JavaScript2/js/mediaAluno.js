function calcularMedia() {
    event.preventDefault();
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    const frequencia = parseFloat(document.getElementById("frequencia").value);
    const mensagemContainer = document.querySelector(".mensagemContainer");
    const mensagem = document.querySelector(".mensagem");

    const resultadoMedia = (nota1 + nota2 + nota3) / 3;

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(frequencia)) {
        mensagem.innerHTML = "Por favor, preencha todas as notas e a frequência.";
    } else if (frequencia > 75) {
        if (resultadoMedia >= 7.5) {
            mensagem.innerHTML = "Resultado: Aprovado";
        } else {
            mensagem.innerHTML = "Resultado: Reprovado";
        }
    } else {
        mensagem.innerHTML = "Resultado: Reprovado por frequência insuficiente";
    }
}
