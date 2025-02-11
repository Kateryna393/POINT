const magnifier = document.querySelector('.magnifier');
const background = document.querySelector('.background img');

background.addEventListener('mousemove', (event)) => {
    const { left, top, width, height } = background.getBoundingClientRect();

    // Позиція курсора відносно зображення
    const mouseX = event.clientX - left;
    const mouseY = event.clientY - top;

    // Відсоткові координати для фонового зображення в лупі
    const percentX = (mouseX / width) * 100;
    const percentY = (mouseY / height) * 100;

    // Оновлення чіткого зображення всередині лупи
    magnifier.style.backgroundImage = `url(${background.src})`;
    magnifier.style.backgroundSize = `${width}px ${height}px`;
    magnifier.style.backgroundPosition = `${percentX}% ${percentY}%`;

    //
}
