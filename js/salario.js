const salario = document.getElementById("salario");
const cargo = document.getElementById("cargo");
const mensagem = document.getElementById("mensagem");

function calcularSalario(){
    event.preventDefault();
    switch(cargo){
        case cargo.value = "gerente":
            var salarioGerente = parseFloat(salario.value + (0.05 * salario));
            mensagem.innerHTML() = ("Esse é o seu salário atual: " + salario);
            mensagem.innerHTML() = ("O seu aumento: " + 0.05 * 100 + "%");
            mensagem.innerHTML() = ("O seu novo salário será: " + salarioGerente);
        case cargo.value = "supervisor":
            var salarioSupervisor = parseFloat(salario.value + (0.08 * salario));
            mensagem.innerHTML() = ("Esse é o seu salário atual: " + salario);
            mensagem.innerHTML() = ("O seu aumento: " + 0.08 * 100 + "%");
            mensagem.innerHTML() = ("O seu novo salário será: " + salarioSupervisor);
        case cargo.value = "operador":
            var salarioOperador = salario + (0.09 * salario);
            mensagem.innerHTML() = ("Esse é o seu salário atual: " + salario);
            mensagem.innerHTML() = ("O seu aumento: " + 0.09 * 100 + "%");
            mensagem.innerHTML() = ("O seu novo salário será: " + salarioOperador);
        case cargo.value = "demaisColaborador":
            var salarioColaborador = salario + (0.10 * salario);
            mensagem.innerHTML() = ("Esse é o seu salário atual: " + salario);
            mensagem.innerHTML() = ("O seu aumento: " + 0.10 * 100 + "%");
            mensagem.innerHTML() = ("O seu novo salário será: " + salarioColaborador);
    }
}
calcularSalario.addEventListener("click", function (){calcularSalario()})