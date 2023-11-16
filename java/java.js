document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('carousel');
    let currentIndex = 0;

    function showImage(index) {
        const images = carousel.querySelectorAll('img');
        images.forEach((img, i) => {
            img.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % carousel.childElementCount;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + carousel.childElementCount) % carousel.childElementCount;
        showImage(currentIndex);
    }

    // Inicializar mostrando la primera imagen
    showImage(currentIndex);

    // Agregar botones de navegación con identificadores
    const nextButton = document.createElement('button');
    nextButton.id = 'nextButton';  // Identificador para el botón "Siguiente"
    nextButton.innerText = 'Siguiente';
    nextButton.addEventListener('click', nextImage);

    const prevButton = document.createElement('button');
    prevButton.id = 'prevButton';  // Identificador para el botón "Anterior"
    prevButton.innerText = 'Anterior';
    prevButton.addEventListener('click', prevImage);

    // Insertar los botones en el documento
    carousel.insertAdjacentElement('afterend', nextButton);
    carousel.insertAdjacentElement('afterend', prevButton);
});