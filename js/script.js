document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript is running');
})
;// js/script.js
document.addEventListener('DOMContentLoaded', function() {
    const h3Element = document.getElementById('zoomable');

    h3Element.addEventListener('mouseover', function() {
        h3Element.style.transform = 'scale(1.2)';
    });

    h3Element.addEventListener('mouseout', function() {
        h3Element.style.transform = 'scale(1)';
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navigation a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default link behavior
            const targetId = this.getAttribute('href').substring(1); // Get the target section ID
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});