// Crear otros js (login, resgister) para modularizar el cambio de contenido (formulario)

const element = document.querySelector('.iconito');

element.addEventListener('mouseover', () => {

    element.classList.add('fa-bounce')
});

element.addEventListener('mouseout', () => {
    element.classList.remove('fa-bounce');
});