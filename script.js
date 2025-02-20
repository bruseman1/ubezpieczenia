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
    document.getElementById("phone-button").addEventListener("click", function () {
        document.getElementById("contact-form").classList.toggle("hidden");
    });

    document.getElementById("callback-form").addEventListener("submit", function (event) {
        event.preventDefault();

        let phone = document.getElementById("phone").value.trim();
        let topic = document.getElementById("topic").value.trim();

        // Walidacja numeru telefonu (min. 9 cyfr, tylko cyfry)
        let phoneRegex = /^[0-9]{9,}$/;
        if (!phoneRegex.test(phone)) {
            alert("Proszę podać poprawny numer telefonu (min. 9 cyfr, bez spacji i znaków).");
            return;
        }

        // Sprawdzenie, czy użytkownik wybrał temat rozmowy
        if (!topic) {
            alert("Proszę wybrać temat rozmowy.");
            return;
        }

        // Przygotowanie danych do wysyłki
        let templateParams = {
            phone: phone,
            topic: topic,
        };

        // Wysyłka e-maila przez EmailJS
        emailjs.send("TWÓJ_SERVICE_ID", "TWÓJ_TEMPLATE_ID", templateParams)
            .then(function (response) {
                alert("Wiadomość została wysłana! 📩");
                document.getElementById("contact-form").classList.add("hidden"); // Ukryj formularz po wysyłce
                document.getElementById("callback-form").reset(); // Wyczyść formularz
            }, function (error) {
                alert("Błąd podczas wysyłania wiadomości: " + error.text);
            });
    });
});
