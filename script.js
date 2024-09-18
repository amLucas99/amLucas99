// Seleciona as divs da formação
const Educacao = document.querySelector('.educacao');
const graduacao = document.querySelector('.graduacao');
const posGraduacao = document.querySelector('.pos_graduacao');

// Seleciona as divs de texto correspondentes
const textoEducacao = document.querySelector('.texto_educacao');
const textoGraduacao = document.querySelector('.texto_graduacao');
const textoPos = document.querySelector('.texto_pos');

// Função para mostrar uma div e esconder as outras
function mostrarTexto(textoParaMostrar) {
    // Reseta todas as divs de texto para display none
    textoEducacao.style.display='none';
    textoGraduacao.style.display = 'none';
    textoPos.style.display = 'none';

    // Mostra apenas a div correspondente
    textoParaMostrar.style.display = 'flex';
}
Educacao.addEventListener('mouseover', () => {
    mostrarTexto(textoEducacao);
});
// Evento para a div "graduacao"
graduacao.addEventListener('mouseover', () => {
    mostrarTexto(textoGraduacao);
});

// Evento para a div "pos_graduacao"
posGraduacao.addEventListener('mouseover', () => {
    mostrarTexto(textoPos);
});
Educacao.addEventListener('mouseout', () => {
    textoEducacao.style.display = 'none';
});
// Adiciona evento para esconder o texto ao mover o mouse para fora
graduacao.addEventListener('mouseout', () => {
    textoGraduacao.style.display = 'none';
});

posGraduacao.addEventListener('mouseout', () => {
    textoPos.style.display = 'none';
});



document.addEventListener('DOMContentLoaded', function () {
    const radios = document.querySelectorAll('.radio input');
    const caixaImg = document.querySelector('.caixa_img');

    radios.forEach((radio, index) => {
        radio.addEventListener('change', function () {
            caixaImg.style.marginLeft = `-${index * 100}%`;
        });
    });

    let contador = 1;
    const totalSlides = radios.length;

    setInterval(() => {
        document.getElementById('slide' + contador).checked = true;
        caixaImg.style.marginLeft = `-${(contador - 1) * 100}%`;

        contador++;
        if (contador > totalSlides) {
            contador = 1;
        }
    }, 3000);
});