let [nameEr, emailEr, phoneEr, messageEr] = ["", "", "" , ""];

const nameValidationHandler = (event) => {
    const content = typeof event === "string" ? event : event.target.value
    let message = [];
  
    if (content === "") {
      message.push("El nombre es obligatorio.");
    } else {
      if (content.length < 3 || content.length > 30) {
        message.push("El nombre debe tener entre 3 y 30 caracteres.");
      }
      if (!/^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ ]+$/.test(content)) {
        message.push("Solo letras.");
      }
      if (/\s{2,}/.test(content)) {
        message.push("No ingrese espacios inesesarios.");
      }

    }
  
    firstNameError.innerHTML = message.length ? message.join("<br>") : "";
    nameEr = message.join("<br>");
  };
  ////////////////////////////////////////////////
  const emailValidationHandler = (event) => {
    const content = typeof event === "string" ? event : event.target.value;
    let message = [];
  
    if (content === "") {
      message.push("Email es obligatorio.");
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/.test(content)
    ) {
      message.push("Email invalido.");
    }

  
    emailError.innerHTML = message.length ? message.join("<br>") : "";
    emailEr = message.join("<br>");
  };
  ////////////////////////////////////////////////
  const phoneNumberValidationHandler = (event) => {
    const content = typeof event === "string" ? event : event.target.value;
    let message = [];
  
    if (content === "") {
      phoneNumberError.innerHTML = '';
      phoneEr = '';
      return
    } else if (!/^\+54\s?(11|15)\s?\d{8}$/.test(content)) {
      message.push(
        "Formato +54 11 or +54 15 +8 digitos."
      );
    }
  
    phoneNumberError.innerHTML = message.join("<br>");
    phoneEr = message.join("<br>");
  };
  ////////////////////////////////////////////////
  const messageValidationHandler = (event) => {
    let message = [];
    const content = typeof event === "string" ? event : event.target.value;
    if (content === "") {
      messageError.innerHTML = ``;
      messageEr = "";
      return;
    }
    if (!content[19]) {
      message.push("minimo 20 digitos.");
    }
    if (
      /[^0-9a-zA-ZáéíóúüñÁÉÍÓÚÜÑãõÃÕâêôÂÊÔàèìòùÀÈÌÒÙçÇ.,() '"°/-]/u.test(content)
    ) {
      message.push(
        `Letras y (-.,()'"°/) simbolos`
      );
    }
  
    messageError.innerHTML = `${message.join("<br>")}`;
    messageEr = message.join("<br>");
  };
  ////////////////////////////////////////////////
const formValidation = () => {
    nameValidationHandler(firstNameInput.value);
    emailValidationHandler(emailInput.value);
    phoneNumberValidationHandler(phoneNumberInput.value);
    messageValidationHandler(messageInput.value);

  };
  const submitHandler = (event) => {
    event.preventDefault();
    formValidation();
  console.log()
    if (
      !nameEr , !emailEr, !phoneEr, !messageEr
    ) {
        form.submit();
    } 
  };
  /////////////////////////////////////////////////
  const resetHandler = () => {

    firstNameInput.value = "";
    firstNameError.textContent = "";
    emailInput.value = "";
    emailError.textContent = "";
    phoneNumberInput.value = "";
    phoneNumberError.textContent = "";
    messageInput.value = "";
    messageError.textContent = "";
  };

const firstNameInput = document.getElementById("name");
const firstNameError = document.getElementById("name-error");
firstNameInput.addEventListener("input", nameValidationHandler);
  ////////////////////////////////////////////////
  const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");
emailInput.addEventListener("input", emailValidationHandler);
  ////////////////////////////////////////////////
  const phoneNumberInput = document.getElementById("phone-number");
const phoneNumberError = document.getElementById("phone-number-error");
phoneNumberInput.addEventListener("input", phoneNumberValidationHandler);
  ////////////////////////////////////////////////
  const messageInput = document.getElementById("message");
const messageError = document.getElementById("message-error");
messageInput.addEventListener("input", messageValidationHandler);
  ////////////////////////////////////////////////
  const form = document.getElementById("sendMail");
  form.addEventListener("submit", submitHandler);
  ////////////////////////////////////////////////
  const reset = document.getElementById("reset");
  reset.addEventListener("click", resetHandler);