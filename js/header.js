const header =
    `<div class="header">
        <nav>
            
            <a href="../index.html"><img src="../assets/rede.png" class="logo"></a>
            <ul>
                <li><a href="../index.html">Exercício 1</a></li>
                <li><a href="../pages/idade.html">Exercício 2</a></li>
                <li><a href="../pages/mediaefrequencia.html">Exercício 3</a></li>
                <li><a href="../pages/IMC.html">Exercício 4</a></li>
                <li><a href="../pages/salario.html">Exercício 5</a></li>
            </ul>
        </nav>
    </div>`
var a = document.createElement("header")
document.body.appendChild(a)
a.innerHTML = header