const passwordInput = document.querySelector("#pass")
const eye = document.querySelector("#eye")

eye.addEventListener("click", function(){
    this.classList.toggle("fa-eye-slash")
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password"
    passwordInput.setAttribute("type", type)
  })

const password = document.querySelector("#cpass")
const confirm_eye = document.querySelector("#cpeye")

confirm_eye.addEventListener("click", function(){
    this.classList.toggle("fa-eye-slash")
    const type = password.getAttribute("type") === "password" ? "text" : "password"
    password.setAttribute("type", type)
  })

function checkPassStrength(){
  const password = document.getElementById("pass").value;
  const indicator = document.getElementById("passStrength");

  const strength = zxcvbn(password);

  const passRequirements = 
    password.length >= 8 &&
    /[a-z]/.test(password) &&
    /[A-Z]/.test(password) &&
    /[\d]/.test(password) &&
    /[!@#\$%\^&\*\(\)_\+{}\[\]:;<>,.?~\-]/.test(password);

  let message = "";

  if (passRequirements && strength.score === 4) {
    indicator.innerHTML = `Password Strength: ${strength.score}/4`;
    indicator.style.color = "green";
  } else {
    if (password.length < 8) {
      message += "<br> - Password must be at least 8 characters long";
    }
    if (!/[a-z]/.test(password)) {
      message += "<br> - Include at least one lowercase letter";
    }
    if (!/[A-z]/.test(password)) {
      message += "<br> - Include at least one uppercase letter";
    } 
    if (!/[\d]/.test(password)) {
      message += "<br> - Include at least one number";
    } 
    if (!/[!@#\$%\^&\*\(\)_\+{}\[\]:;<>,.?~\-]/.test(password)) {
      message += "<br> - Include at least one special character";
    }

    indicator.innerHTML = `Password Strength: ${strength.score}/4  ${message}`;
    if (strength.score >= 2) {
      indicator.style.color = "orange";
    } else {
      indicator.style.color="red";
    }

  }  
}