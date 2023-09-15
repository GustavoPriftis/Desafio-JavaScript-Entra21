const altura = document.getElementById("altura")
const peso = document.getElementById("peso")
const calcular = document.getElementById("calcular")
const mensagem = document.getElementById("mensagem")

function resultado() {
    var valorIMC 
    event.preventDefault();
        valorIMC = parseFloat(peso.value / (altura.value * altura.value))
    if (valorIMC < 17) {
        alert(" Você está muito abaixo do peso" + valorIMC);
        mensagem.innerHTML = valorIMC
    } else if (valorIMC >= 17 && valorIMC <= 18.49) {
        alert(" Você está abaixo do peso" + valorIMC);
        mensagem.innerHTML = valorIMC
    } else if (valorIMC >= 18.5 && valorIMC <= 24.99) {
        alert(" Você está com o peso normal" + valorIMC);
        mensagem.innerHTML = valorIMC 
    } else if (valorIMC >= 25 && valorIMC <= 29.99) {
        alert(" Você está acima do peso");
        mensagem.innerHTML = valorIMC
    } else if (valorIMC >= 30 && valorIMC <= 34.44) {
        alert(" Você está com obesidade 1");
        mensagem.innerHTML = valorIMC
    } else if (valorIMC >= 35 && valorIMC <= 39.99) {
        alert(" Você está com obesidade 2(severa)" + valorIMC);
        mensagem.innerHTML = valorIMC
    } else if (valorIMC >= 40) {
        alert(" Você está com obesidade 3(mórbida)" + valorIMC);
        mensagem.innerHTML = valorIMC
    }
}
calcular.addEventListener("click", function() {resultado()});