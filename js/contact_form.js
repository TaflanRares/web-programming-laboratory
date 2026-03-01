function notifTrimitere(message) {
    const feedbackElement = document.querySelector("#form-feedback");
    feedbackElement.textContent = message;
}

function submitForm() {
    const name = document.getElementById("name").value;
    const mail = document.getElementById("email").value;
    const mesaj = document.getElementById("message").value;

    const feedbackElement = document.querySelector("#form-feedback");
    const isDarkMode = document.body.classList.contains("dark-mode");

    feedbackElement.style.color = isDarkMode ? "rgb(255, 120, 120)" : "red";

    if (!mail.includes("@") || !mail.includes(".")) {
        notifTrimitere("Email not valid!");
        return;
    }
    if (mesaj.length < 10) {
        notifTrimitere("Message must be at least 10 characters long!");
        return;
    }
    if (name.trim().length < 2) {
        notifTrimitere("Name must be at least 2 characters long!");
        return;
    }

    feedbackElement.style.color = isDarkMode ? "rgb(112, 228, 143)" : "green";
    notifTrimitere(`Thank you ${name}, I will contact you soon!`);
    console.log(`Name: ${name}\nEmail: ${mail}\nMesaj: ${mesaj}`);
}

const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    submitForm();
});