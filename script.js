const magnifier = document.querySelector('.magnifier');
const galleryImages = document.querySelectorAll('.gallery-item img'); 

galleryImages.forEach(image => {
    
    image.addEventListener('mousemove', (event) => {
        const { left, top, width, height } = image.getBoundingClientRect();

        
        const mouseX = event.clientX - left;
        const mouseY = event.clientY - top;

        
        magnifier.style.left = `${event.clientX}px`;
        magnifier.style.top = `${event.clientY}px`;
        magnifier.style.display = 'block';

        
        const percentX = (mouseX / width) * 100;
        const percentY = (mouseY / height) * 100;

        
        magnifier.style.backgroundImage = `url(${image.src})`;
        magnifier.style.backgroundSize = `${width * 2}px ${height * 2}px`;
        magnifier.style.backgroundPosition = `${percentX}% ${percentY}%`;
    });

    
    image.addEventListener('mouseleave', () => {
        magnifier.style.display = 'none';
    });
});
const contactLink = document.getElementById('contact-link');
const modal = document.getElementById('contact-modal');
const closeModal = document.getElementById('close-modal');


contactLink.addEventListener('click', (event) => {
    event.preventDefault(); 
    modal.style.display = 'block';
});


closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});


window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

