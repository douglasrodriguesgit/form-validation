const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextArea = document.querySelector("#message");

function shippingForm(event) {
  event.preventDefault();
  // verifica se o nome está vazio
  if (nameInput.value === "") {
    alert("Por favor insira seu nome");
    return;
  }

  // verifica se o email esta vazio e está preenchido corretamente
  if (emailInput.value === "" || !isValidEmail(emailInput.value)) {
    alert("Por favor insira seu email");
    return;
  }

  // verifica senha está preenchida
  if (!isValidPassword(passwordInput.value, 8)) {
    alert("A senha precisa ser no minimo 8 digitos");
    return;
  }

  // verifica se a situação foi selecionada
  if (jobSelect.value === "") {
    alert("Por favor selecione a sua situção");
    return;
  }

  //verifica se a mensagem está preenchida

  if (messageTextArea.value === "") {
    alert(" Por Favor, digite sua mensagem");
    return;
  }
  // se os inputs forem preenchidos corretamente realizar o submit
  form.submit();
}

form.addEventListener("submit", shippingForm);

// função que valida email
function isValidEmail(email) {
  // criar uma regexp para fazer validação de email
  const emailRegex = new RegExp(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  if (emailRegex.test(email)) {
    return true;
  }
  return false;
}

// função que valida senha
function isValidPassword(password, minDigits) {
  if (password.length >= minDigits) {
    // senha valida
    return true;
  }
  return false;
}
