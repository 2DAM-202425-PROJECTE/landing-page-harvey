document.addEventListener('DOMContentLoaded', () => {
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
    if (menuToggle && mobileMenu) {
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
    }

    // Afegir un event listener a cada enllaç del menú mòbil per tancar-lo quan es fa clic
    const mobileMenuLinks = document.querySelectorAll('#mobile-menu a');
    if (mobileMenuLinks.length > 0) {
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden'); // Tanca el menú
                const icon = menuToggle.querySelector('svg'); // Canvia l'icona del botó
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>'; // Icona de menú
            });
        });
    }

    // Event listener per fer aparèixer la fletxa en fer scroll
    if (scrollToTop) {
        window.addEventListener('scroll', toggleScrollToTopButton);

        // Funció per tornar a dalt
        scrollToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    document.querySelectorAll('[data-toggle]').forEach(item => {
        item.addEventListener('click', () => {
            const content = item.nextElementSibling; // El següent element (la resposta)
            const icon = item.querySelector('.toggle-icon'); // L'ícona + o -

            if (content.classList.contains('max-h-0')) {
                content.classList.remove('max-h-0'); // Mostrar resposta
                icon.textContent = '-'; // Canviar símbol a -
            } else {
                content.classList.add('max-h-0'); // Ocultar resposta
                icon.textContent = '+'; // Canviar símbol a +
            }
        });
    });

    // Funció per mostrar l'alerta
    function showCookieAlert() {
        const cookieAlert = document.getElementById('cookieAlert');
        const cookieBackdrop = document.getElementById('cookieBackdrop');
        cookieAlert.classList.remove('hidden');
        cookieBackdrop.classList.remove('hidden'); // Mostra el fons borros
    }

    // Gestor d'esdeveniments per acceptar cookies
    document.getElementById('acceptCookies').addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'true');
        document.getElementById('cookieAlert').classList.add('hidden');
        document.getElementById('cookieBackdrop').classList.add('hidden'); // Oculta el fons
    });

    // Gestor d'esdeveniments per rebutjar cookies
    document.getElementById('rejectCookies').addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'false');
        document.getElementById('cookieAlert').classList.add('hidden');
        document.getElementById('cookieBackdrop').classList.add('hidden'); // Oculta el fons
    });

    // Comprovem si ja s'han acceptat les cookies
    if (!localStorage.getItem('cookiesAccepted')) {
        showCookieAlert();
    }
    document.getElementById('cookiePolicyLink').setAttribute('href', 'https://www.privacypolicies.com/public/uploads/2021/06/linkedin-politica-cookies-grafico-para-que-utilizan-cookies-extracto.jpg');

    // Inicialitzar EmailJS amb el teu USER_ID
    (function(){
        emailjs.init("bIKPnY1CSSjaAi1Cg"); // Substitueix amb el teu USER_ID
    })();
    // Funció per enviar el formulari
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Evita l'enviament per defecte del formulari

        // Ocultar missatges anteriors
        document.getElementById("responseMessage").classList.add("hidden");
        document.getElementById("errorMessage").classList.add("hidden");

        // Recollir les dades del formulari
        const userName = this.user_name.value; // Nom
        const userEmail = this.user_email.value; // Correu electrònic
        const message = this.message.value; // Missatge

        // Enviar el formulari amb les dades personalitzades
        emailjs.send("service_ooptksk", "template_1q05rkf", {
            to_name: "Recipient Name", // Especifica aquí el nom del destinatari
            from_name: userName, // Nom de qui envia
            user_email: userEmail, // Correu electrònic de qui envia
            message: message // Missatge enviat
        })
            .then(function(response) {
                console.log("Success!", response.status, response.text);
                document.getElementById("responseMessage").classList.remove("hidden"); // Mostrar missatge d'èxit

                // Netejar els camps del formulari
                document.getElementById("contactForm").reset();
            }, function(error) {
                console.error("Error:", error);
                document.getElementById("errorMessage").classList.remove("hidden"); // Mostrar missatge d'error
            });
    });

});