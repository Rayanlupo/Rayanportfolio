// Inizializza EmailJS con il tuo user_id
(function(){
    emailjs.init("YOUR_USER_ID"); // Sostituisci con il tuo user ID EmailJS
})();

// Aggiungi l'evento di submit al form
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previeni il comportamento predefinito del form
    
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
        .then(function(response) {
            alert('Email sent successfully!');
            console.log('Email sent successfully!', response);
        }, function(error) {
            console.error('Failed to send email:', error);
            alert('Failed to send email. Please try again later.');
        });
});

// Menu toggle per il responsive navbar
let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('header nav');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
};

// Selezione degli elementi della navbar per l'effetto di scroll
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

// Effetto di scrittura per il nome
document.addEventListener('DOMContentLoaded', function() {
    const name1 = "Rayane";
    const name2 = "Guebre";

    const typingElement1 = document.getElementById('name1');
    const typingElement
