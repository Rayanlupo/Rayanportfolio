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
