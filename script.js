let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelecto('section');
let sections = document.querySelecto('.navbar');
let navLinks = document.querySelecto('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute;

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            
            });
        }
    
    })
}

menuIcon.onclick =  () => {
    menuIcon.classList.toggle('bx-x');
    navBar.classlist.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
    const name1 = "Rayane";
    const name2 = "Guebre";

    const typingElement1 = document.getElementById('name1');
    const typingElement2 = document.getElementById('name2');

    function typeWriter(text, element, delay = 100, callback) {
        let index = 0;
        function type() {
            if (index < text.length) {
                element.innerHTML += text.charAt(index);
                index++;
                setTimeout(type, delay);
            } else if (callback) {
                callback();
            }
        }
        type();
    }

    typeWriter(name1, typingElement1, 300, function() { // Aumenta la velocità di scrittura a 300ms per carattere
        setTimeout(() => typeWriter(name2, typingElement2, 300), 500); // Aggiungi un ritardo di 500ms prima di iniziare a scrivere il secondo nome
    });
});
