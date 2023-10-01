function calcularSalario() {
    const salario = document.getElementById("salario");
    const cargo = document.getElementById("cargo");
    const mensagemContainer = document.querySelector(".mensagem-container");
    const mensagem = document.querySelector(".mensagem");
    const calcularSalarioBtn = document.getElementById("calcularSalario");
    event.preventDefault();
    const salarioAtual = parseFloat(salario.value);
    var novoSalario = 0;
    var aumentoPercentual = 0;

    switch (cargo.value) {
        case "gerente":
            aumentoPercentual = 5;
            novoSalario = salarioAtual + (0.05 * salarioAtual);
            break;
        case "supervisor":
            aumentoPercentual = 8;
            novoSalario = salarioAtual + (0.08 * salarioAtual);
            break;
        case "operador":
            aumentoPercentual = 9;
            novoSalario = salarioAtual + (0.09 * salarioAtual);
            break;
        case "demaisColaborador":
            aumentoPercentual = 10;
            novoSalario = salarioAtual + (0.10 * salarioAtual);
            break;
        default:
            mensagem.innerHTML = "Cargo não encontrado";
            return;
    }
    mensagem.innerHTML = "Esse é o seu salário atual: " + salarioAtual;
    mensagem.innerHTML += "<br>O seu aumento: " + aumentoPercentual + "%";
    mensagem.innerHTML += "<br>O seu novo salário será: " + novoSalario;
}
