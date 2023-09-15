const dataNascimento = document.getElementById("data_nascimento");

function validate(item) {
    item.setCustomValidity("");
    item.checkValidity();
 
    if (item == dataNascimento) {
        var hoje = new Date();
        var dataNasc = new Date(dataNascimento.value);

        var idade = hoje.getFullYear() - dataNasc.getFullYear();
        var mes = hoje.getMonth() - dataNasc.getMonth();

        if (mes < 0 || (mes === 0 && hoje.getDate() < dataNasc.getDate())) {
            idade--;
        }
        if (idade >= 18) {
            item.setCustomValidity("Você tem: " + idade + "Obrigado por informar a idade, prossiga aos outros desafios :)");
        } else {
            item.setCustomValidity("Infelizmente você é menor de idade, você tem somente: " + idade + " anos :)");
        }
    }
}
dataNascimento.addEventListener("click", function (){validate(dataNascimento)});