function submitForm() {
    const nume = document.getElementById("name").value;
    const mail = document.getElementById("email").value;
    const mesaj = document.getElementById("message").value;
    console.log(`Nume: ${nume}\nEmail: ${mail}\nMesaj: ${mesaj}`);
    console.warn("Functia submitForm a fost apelata");
}