function timeGreeting({
    morning = "Good morning, welcome to my webpage",
    afternoon = "Good afternoon, welcome to my webpage",
    evening = "Good evening, welcome to my webpage",
    night = "Good night, welcome to my webpage",
} = {}) {
    const hours = new Date().getHours();
    let greeting;
    if (hours >= 5 && hours < 12) {
        greeting = morning;
    }
    else if (hours >= 12 && hours < 17) {
        greeting = afternoon;
    }
    else if (hours >= 17 && hours < 21) {
        greeting = evening;
    }
    else {
        greeting = night;
    }
    document.querySelector("#greeting").textContent = greeting;
}