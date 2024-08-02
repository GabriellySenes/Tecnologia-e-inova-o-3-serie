const countdownDate = new Date("November 04, 2024 19:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("dias0").innerText = days;
    document.getElementById("horas0").innerText = hours;
    document.getElementById("min0").innerText = minutes;
    document.getElementById("seg0").innerText = seconds;

    if (distance < 0) {
        clearInterval(interval);
        document.querySelector(".contador").innerHTML = "EXPIRED";
    }
}

const interval = setInterval(updateCountdown, 1000);

updateCountdown();
