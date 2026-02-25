function darkModeToggle() {
   document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) console.log("Dark mode toggled");
    else console.log("Light mode toggled");
}

const darkModeButton = document.getElementById("dark-mode-toggle");
darkModeButton.addEventListener('click', function (event) {
    event.preventDefault();
    darkModeToggle();
});