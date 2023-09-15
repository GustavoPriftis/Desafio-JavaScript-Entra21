const nota1 = document.getElementById("nota1")
const nota2 = document.getElementById("nota2")
const nota3 = document.getElementById("nota3")
const frequencia = document.getElementById("frequencia")
const mensagem = document.getElementById("mensagem")

function media(){
    event.preventDefault();
    var resultadoMedia = parseFloat(nota1.value + nota2.value + nota3) / 3
    alert(resultadoMedia)
    if (frequencia > 75)
        if (resultadoMedia >= 7.5){
        mensagem.innerHTML() = "Aprovado"
    }
    else mensagem.innerHTML() = "Reprovado"; 
    media.addEventListener("click", function() { media()});
}