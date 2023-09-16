
function resultado() {
    const altura = document.getElementById("altura");
    const peso = document.getElementById("peso");
    const calcular = document.getElementById("calcular");
    const mensagemContainer = document.querySelector(".mensagemContainer");
    const mensagem = document.querySelector(".mensagem");
    const calcularBtn = document.getElementById("resultado");
    var valorIMC
    event.preventDefault();
    valorIMC = parseFloat(peso.value / (altura.value * altura.value))
    if (valorIMC < 17) {
        mensagem.innerHTML = " Você está muito abaixo do peso " + valorIMC
    } else if (valorIMC >= 17 && valorIMC <= 18.49) {
        mensagem.innerHTML = " Você está abaixo do peso " + valorIMC;
    } else if (valorIMC >= 18.5 && valorIMC <= 24.99) {
        mensagem.innerHTML = " Você está com o peso normal " + valorIMC;
    } else if (valorIMC >= 25 && valorIMC <= 29.99) {
        mensagem.innerHTML = " Você está acima do peso " + valorIMC;
    } else if (valorIMC >= 30 && valorIMC <= 34.44) {
        mensagem.innerHTML = " Você está com obesidade 1 " + valorIMC;
    } else if (valorIMC >= 35 && valorIMC <= 39.99) {
        mensagem.innerHTML = " Você está com obesidade 2(severa) " + valorIMC;
    } else if (valorIMC >= 40) {
        mensagem.innerHTML = " Você está com obesidade 3(mórbida) " + valorIMC;
    }
}