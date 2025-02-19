// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("phone-button").addEventListener("click", function() {
        document.getElementById("contact-form").classList.toggle("hidden");
    });

    document.getElementById("callback-form").addEventListener("submit", function(event) {
        event.preventDefault();

        let phone = document.getElementById("phone").value;
        let topic = document.getElementById("topic").value;

        if (!phone || !topic) {
            alert("Proszę wypełnić wszystkie pola.");
            return;
        }

        let mailtoLink = `mailto:test@wp.pl?subject=Prośba o kontakt&body=Numer telefonu: ${phone}%0D%0ATemat: ${topic}`;
        window.location.href = mailtoLink;
    });
});
