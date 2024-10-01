const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const scrollToTop = document.getElementById('scroll-to-top');

// Funció per mostrar/ocultar la fletxa de tornar a dalt
const toggleScrollToTopButton = () => {
    if (window.scrollY > 300) {
        scrollToTop.classList.remove('hidden');
    } else {
        scrollToTop.classList.add('hidden');
    }
};

// Mostrar/ocultar el menú
menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    scrollToTop.classList.add('hidden'); // Desapareix la fletxa si el menú és visible

    // Canviar l'icona del botó
    const icon = menuToggle.querySelector('svg');
    if (mobileMenu.classList.contains('hidden')) {
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>'; // Icona de menú
    } else {
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>'; // Icona de X
    }
});

// Afegir un event listener a cada enllaç del menú mòbil per tancar-lo quan es fa clic
const mobileMenuLinks = document.querySelectorAll('#mobile-menu a');

mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden'); // Tanca el menú
        const icon = menuToggle.querySelector('svg'); // Canvia l'icona del botó
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>'; // Icona de menú
    });
});

// Event listener per fer aparèixer la fletxa en fer scroll
window.addEventListener('scroll', toggleScrollToTopButton);

// Funció per tornar a dalt
scrollToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

function toggleFAQ(id) {
    const answer = document.getElementById(id);
    const icon = document.getElementById(id + '-icon');
    answer.classList.toggle('hidden');
    icon.textContent = answer.classList.contains('hidden') ? '+' : '-';
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    // Collect form data
    let formData = new FormData(this);

    // Send the form data using fetch to send_email.php
    fetch('send_email.php', {
        method: 'POST',
        body: formData
    })
        .then(response => response.text()) // Expect a plain text response
        .then(data => {
            // Show a success message or handle error
            document.getElementById("responseMessage").textContent = "Missatge enviat amb èxit!";

            // Clear the form fields
            document.getElementById("contactForm").reset();
        })
        .catch(error => {
            console.error("Error en enviar el missatge:", error);
            document.getElementById("responseMessage").textContent = "Error en enviar el missatge. Si us plau, prova-ho de nou.";
        });
});
