const footerContent = `
    <div class="footer">
        <footer>
            <p>Desenvolvido por &copy;Gustavo Priftis.</p>
            <a href="https://github.com/GustavoPriftis" target="_blank"><img src="../assets/logotipo-do-github.png" class="logotipo-do-github"></a>
            <a href="https://www.linkedin.com/in/gustavo-biazus-priftis-1a76a2131" target="_blank"><img src="../assets/linkedin.png" class="logotipo-do-linkedin"></a>
        </footer>
    </div>
`;

const footerElement = document.createElement("footer");
footerElement.innerHTML = footerContent;

document.body.appendChild(footerElement);