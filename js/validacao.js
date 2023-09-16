

function validar() {
    const dataNascimento = document.getElementById("data_nascimento");
    const mensagemContainer = document.querySelector(".mensagemContainer");
    const mensagem = document.querySelector(".mensagem");
    const validarBtn = document.getElementById("validar");
    event.preventDefault();
    if (dataNascimento.value != "") {
        var hoje = new Date();
        var dataNasc = new Date(dataNascimento.value);

        var idade = hoje.getFullYear() - dataNasc.getFullYear();
        var mes = hoje.getMonth() - dataNasc.getMonth();

        if (mes < 0 || (mes === 0 && hoje.getDate() < dataNasc.getDate())) {
            idade--;
        }
        if (idade >= 18) {
            mensagem.innerHTML = "Você tem: " + idade + " Anos! Obrigado por informar a idade, prossiga aos outros desafios :)";
        } else {
            mensagem.innerHTML = "Infelizmente você é menor de idade, você tem somente: " + idade + " anos :)";
        }
    }
}