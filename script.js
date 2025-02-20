// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("callback-form");
    let phoneInput = document.getElementById("phone");
    let topicSelect = document.getElementById("topic");

    // Sprawdzenie, czy elementy istnieją
    if (!form || !phoneInput || !topicSelect) {
        console.error("Błąd: Formularz lub pola wejściowe nie zostały znalezione.");
        return;
    }

    document.getElementById("phone-button").addEventListener("click", function () {
        document.getElementById("contact-form").classList.toggle("hidden");
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let phone = phoneInput.value.trim();
        let topic = topicSelect.value.trim();

        // Walidacja numeru telefonu (min. 9 cyfr, tylko cyfry)
        let phoneRegex = /^[0-9]{9,}$/;
        if (!phoneRegex.test(phone)) {
            alert("Proszę podać poprawny numer telefonu (min. 9 cyfr, bez spacji i znaków).");
            return;
        }

        if (!topic) {
            alert("Proszę wybrać temat rozmowy.");
            return;
        }

        let templateParams = {
            phone: phone,
            topic: topic,
        };

        emailjs.send("service_qettnq8", "template_ujiip6l", templateParams, "TWÓJ_PUBLIC_KEY")
            .then(function (response) {
                alert("Wiadomość została wysłana! 📩");
                document.getElementById("contact-form").classList.add("hidden");
                form.reset();
            }, function (error) {
                alert("Błąd podczas wysyłania wiadomości: " + error.text);
            });
    });
});
