var countdown = 60;
var resendOTP = document.getElementById("resend-otp");
var countdownDisplay = document.getElementById("countdown");

function updateCountdown() {
    if (countdown > 0) {
        resendOTP.style.display = "none";
        countdownDisplay.innerText = countdown;
        countdown--;
        setTimeout(updateCountdown, 1000);
    } else {
        resendOTP.style.display = "inline";
        countdownDisplay.innerText = "";
    }
}

updateCountdown()