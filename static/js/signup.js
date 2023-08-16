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

  indicator.innerHTML = `Password Strength: ${strength.score}/4`;

  if (strength.score === 4) {
    indicator.style.color = "green";
  } else if (strength.score >= 2) { 
    indicator.style.color = "orange";
  } else {
    indicator.style.color = "red";
  }

}