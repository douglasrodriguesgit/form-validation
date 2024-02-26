const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextArea = document.querySelector("#message");

const errorName = document.querySelector(".errorName");
const errorEmail = document.querySelector(".errorEmail");
const errorPassword = document.querySelector(".errorPassword");
const errorJob = document.querySelector(".errorJob");
const errorMessage = document.querySelector(".errorMessage");

function shippingForm(event) {
  event.preventDefault();
  if (nameInput.value === "") {
    errorName.textContent = "Por favor insira seu nome";
    nameInput.classList = "errorInput";
    setTimeout(() => {
      errorName.textContent = "";
      nameInput.classList = "";
    }, 3000);
    return;
  }
  if (emailInput.value === "" || !isValidEmail(emailInput.value)) {
    errorEmail.textContent = "Por favor insira seu e-mail";
    emailInput.classList = "errorEmail";
    setTimeout(() => {
      errorEmail.textContent = "";
      emailInput.classList = "";
    }, 3000);
    return;
  }
  if (!isValidPassword(passwordInput.value, 8)) {
    errorPassword.textContent = "A senha precisa ser no minimo 8 digitos";
    passwordInput.classList = "errorPassword";
    setTimeout(() => {
      errorPassword.textContent = "";
      passwordInput.classList = "";
    }, 3000);
    return;
  }
  if (jobSelect.value === "") {
    errorJob.textContent = "Por favor selecione a sua situção";
    jobSelect.classList = "errorJob";
    setTimeout(() => {
      errorJob.textContent = "";
      jobSelect.classList = "";
    }, 3000);
    return;
  }
  if (messageTextArea.value === "") {
    errorMessage.textContent = "Por Favor, digite sua mensagem";
    messageTextArea.classList = "errorMessage";
    setTimeout(() => {
      errorMessage.textContent = "";
      messageTextArea.classList = "";
    }, 3000);
    return;
  }
  form.submit();
}
form.addEventListener("submit", shippingForm);

function isValidEmail(email) {
  const emailRegex = new RegExp(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  if (emailRegex.test(email)) {
    return true;
  }
  return false;
}
function isValidPassword(password, minDigits) {
  if (password.length >= minDigits) {
    return true;
  }
  return false;
}
