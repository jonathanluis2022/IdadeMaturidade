const infoIdades = document.querySelector('#informe');
const resultados = document.querySelector('.resultados')

infoIdades.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputIdade = e.target.querySelector('#idade');
    const valorIdade = Number(inputIdade.value);

    const gene = generoIdade(valorIdade);

    mostraIdade(gene)
    
})

function mostraIdade(msg) {
    const p = document.createElement('p');
    p.innerHTML = msg;
    resultados.appendChild(p)
}

function generoIdade(valorIdade) {
    
    const generos = ['Bebê', 'Criança', 'Adolecente', 'Adulto', 'Idoso'];
    
    if (valorIdade <= 5) return generos[0];
    if (valorIdade <= 13) return generos[1];
    if (valorIdade <= 18) return generos[2];
    if (valorIdade <= 50) return generos[3];
    if (valorIdade > 50) return generos[4];
    
}