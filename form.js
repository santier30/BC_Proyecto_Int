let [nameEr, priceEr, categoryEr, brandEr, stockEr,imgEr,shortDesEr,longDesEr] = ["", "", "" , "","","","",""];
let selected;
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
const nameValidationHandler = (event) => {
  const content = typeof event === "string" ? event : event.target.value
  let message = [];

  if (content === "") {
    message.push("El nombre es obligatiorio.");
  } else {
    if (content.length < 3 || content.length > 30) {
      message.push("El nombre debe tener entre 3 y 30 caracteres.");
    }
    if (!/^[0-9a-zA-ZáéíóúüñÁÉÍÓÚÜÑ \-'.]+$/.test(content)) {
      message.push("Caracteres especiales no permitidos, solo letras, números, espacios, guiones y comillas.");
    }

  }

  firstNameError.innerHTML = message.length ? message.join("<br>") : "";
  nameEr = message.join("<br>");
};

  
  const nameFocusHandler = () => {
    firstNameError.style.right = 0;
    firstNameError.style.visibility = "visible";
  };
  const nameBlurHandler = () => {
    firstNameError.style.right = "10%";
    firstNameError.style.visibility = "hidden";
  };
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const priceValidationHandler = (event) => {
    const content = typeof event === "string" ? event : event.target.value;
    let message = [];
  
    if (content === "") {
      message.push("Se requiere un precio valido.");
    } else {
      const stockValue = parseInt(content);
      if (isNaN(stockValue) || stockValue < 0) {
        message.push("El precio no puede ser negativo y debe ser un número válido.");
      }
    }
  
    priceError.innerHTML = message.length ? message.join("<br>") : "";
    priceEr = message.join("<br>");
  };
  const priceFocusHandler = () => {
    priceError.style.right = 0;
    priceError.style.visibility = "visible";
  };
  
  const priceBlurHandler = () => {
    priceError.style.right = "10%";
    priceError.style.visibility = "hidden";
  };
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const marcaValidationHandler = (event) => {
    const content = typeof event === "string" ? event : event.target.value;
    let message = [];
  
    if (content === "") {
      message.push("La marca de vino es obligatoria.");
    } else {
      if (!/^[0-9a-zA-ZáéíóúüñÁÉÍÓÚÜÑ \-'.]+$/.test(content)) {
        message.push("Caracteres especiales no permitidos, solo letras, números, espacios, guiones y comillas.");
      }
      if (content.toLowerCase().includes("marca")) {
        message.push("Evita incluir la palabra 'marca' en la marca de vino.");
      }
    }
  
    brandError.innerHTML = message.length ? message.join("<br>") : "";
    brandEr = message.join("<br>");
  };
  
  const marcaFocusHandler = () => {
    brandError.style.right = 0;
    brandError.style.visibility = "visible";
  };
  
  const marcaBlurHandler = () => {
    brandError.style.right = "10%";
    brandError.style.visibility = "hidden";
  };
  


  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const stockValidationHandler = (event) => {
    const content = typeof event === "string" ? event : event.target.value;
    let message = [];
  
    if (content === "") {
      message.push("Se requiere una cantidad válida en stock.");
    } else {
      const stockValue = parseInt(content);
      if (isNaN(stockValue) || stockValue < 0) {
        message.push("La cantidad en stock no puede ser negativa y debe ser un número válido.");
      }
      if(stockValue != parseFloat(content)){
        message.push("La cantidad en stock no puede ser una fraccion.");
      }
    }
  
    stockError.innerHTML = message.length ? message.join("<br>") : "";
    stockEr= message.join("<br>");
  };
  
  const stockFocusHandler = () => {
    stockError.style.right = 0;
    stockError.style.visibility = "visible";
  };
  
  const stockBlurHandler = () => {
    stockError.style.right = "10%";
    stockError.style.visibility = "hidden";
  };
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const imgUrlValidationHandler = (event) => {
    const content = typeof event === "string" ? event : event.target.value;
    let message = [];
  
    if (content === "") {
      message.push("Se requiere una URL válida de la imagen.");
    } else {
      const urlPattern = /^https?:\/\/[^\s/$.?#].[^\s]*$/i;
      if (!/^https?:\/\/[^\s/$.?#].[^\s]*$/i.test(content)) {
        message.push("La URL no es válida.");
      } else {
        const imageExtensions = ["jpg", "jpeg", "png", "gif"]; 
        const extension = content.split(".").pop().toLowerCase();
        if (!imageExtensions.includes(extension)) {
          message.push("La URL no apunta a una imagen válida.");
        }
      }
    }
  
    imgUrlError.innerHTML = message.length ? message.join("<br>") : "";
    imgEr = message.join("<br>");
  };
  
  const imgUrlFocusHandler = () => {
    imgUrlError.style.right = 0;
    imgUrlError.style.visibility = "visible";
  };
  
  const imgUrlBlurHandler = () => {
    imgUrlError.style.right = "10%";
    imgUrlError.style.visibility = "hidden";
  };
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const shortDescriptionValidationHandler = (event) => {
    const content = typeof event === "string" ? event : event.target.value;
    let message = [];
  
    if (content === "") {
      message.push("Se requiere una descripción corta.");
    } else {
      if (content.length < 10) {
        message.push("La descripción corta debe tener entre 10 y 50 caracteres.");
      }
      if (!/^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ0-9\s.,;:!?"'-]*$/.test(content)) {
        message.push("La descripción corta contiene caracteres no válidos.");
      }
    }
  
    shortDescriptionError.innerHTML = message.length ? message.join("<br>") : "";
    shortDesEr= message.join("<br>");
  };
  
  const shortDescriptionFocusHandler = () => {
    shortDescriptionError.style.right = 0;
    shortDescriptionError.style.visibility = "visible";
  };
  
  const shortDescriptionBlurHandler = () => {
    shortDescriptionError.style.right = "10%";
    shortDescriptionError.style.visibility = "hidden";
  };
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const longDescriptionValidationHandler = (event) => {
    const content = typeof event === "string" ? event : event.target.value;
    let message = [];
  
    if (content === "") {
      message.push("Se requiere una descripción larga.");
    } else {
      if (content.length < 30) {
        message.push("La descripción larga debe tener entre 30 y 200 caracteres.");
      }

      if (!/^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ0-9\s.,;:!?"'-]*$/.test(content)) {
        message.push("La descripción larga contiene caracteres no válidos.");
      }
    }
  
    longDescriptionError.innerHTML = message.length ? message.join("<br>") : "";
  };
  
  const longDescriptionFocusHandler = () => {
    longDescriptionError.style.right = 0;
    longDescriptionError.style.visibility = "visible";
  };
  
  const longDescriptionBlurHandler = () => {
    longDescriptionError.style.right = "10%";
    longDescriptionError.style.visibility = "hidden";
  };
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const resetHandler = () => {

    firstNameInput.value = "";
    priceInput.value = "";
    wineBrandInput.value = "";
    stockInput.value = "";
    imgUrlInput.value = "";
    shortDescriptionInput.value = "";
    longDescriptionInput.value = "";
  
    firstNameError.textContent = "";
    priceError.textContent = "";
    categoriaError.textContent = "";
    brandError.textContent = "";
    stockError.textContent = "";
    imgUrlError.textContent = "";
    shortDescriptionError.textContent = "";
    longDescriptionError.textContent = "";
    formError.textContent = "";
  
    tinto.checked = false;
    espumante.checked = false;
    rose.checked = false;
    blanco.checked = false;
    otros.checked = false;
  };

  
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const formValidation = () => {
    nameValidationHandler(firstNameInput.value);
    priceValidationHandler(priceInput.value); 
    categoryEr = tinto.checked || espumante.checked || rose.checked || blanco.checked || otros.checked ? "" : "Selecione una categoria de vino.";
    categoriaError.innerHTML = categoryEr;
    marcaValidationHandler(wineBrandInput.value);
    stockValidationHandler(stockInput.value);
    imgUrlValidationHandler(imgUrlInput.value);
    shortDescriptionValidationHandler(shortDescriptionInput.value);
    longDescriptionValidationHandler(longDescriptionInput.value);
  };
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const allErrorsMessage = () => {
    let message = [];

    nameEr ? message.push(`Nombre: <br>${nameEr} <br>`) : "";
    priceEr ? message.push(`Precio: <br>${priceEr} <br>`) : "";
    categoryEr ? message.push(`Categoria: <br>${categoryEr} <br>`) : "";
    brandEr ? message.push(`Marca: <br>${brandEr} <br>`) : "";
    stockEr ? message.push(`Stock: <br>${stockEr} <br>`) : "";
    imgEr ? message.push(`URL de imagen: <br>${imgEr} <br>`) : "";
    shortDesEr ? message.push(`Descripcion corta: <br>${shortDesEr} <br>`) : "";
    longDesEr ? message.push(`Descripcion larga: <br>${longDesEr} <br>`) : "";
    message[0]?message.unshift("Errores: <br>") : "";
    formError.innerHTML = `${message.join("<br>")}`;
  };
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const submitHandler = (event) => {
    event.preventDefault();
    formValidation();
  console.log()
    if (
      !nameEr && !priceEr && !categoryEr && !brandEr && !stockEr && !imgEr && !shortDesEr && !longDesEr
    ) {
      for(i of [tinto, espumante , rose, blanco, otros])
      if(i.checked){selected = i.value;}
      
      const newWine = {
        "name": firstNameInput.value.trim().replace(/\s+/g, ' '),
        "category": selected,
        "brand": wineBrandInput.value.trim().replace(/\s+/g, ' '),
        "image": imgUrlInput.value ,
        "short_description": shortDescriptionInput.value.trim().replace(/\s+/g, ' ') ,
        "long_description":  longDescriptionInput.value.trim().replace(/\s+/g, ' '),
        "price": priceInput.value ,
        "stock": stockInput.value>99?"99+": stockInput.value
      };
      
      

      fetch("https://vinoteca-b57e6-default-rtdb.firebaseio.com/wines.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newWine)
      })
        .then(response => response.json())
        .then(data => {
          console.log("New wine added:", data);
          // You can update the UI or perform any additional actions here
        })
        .catch(error => {
          console.error("Error adding new wine:", error);
        });
        resetHandler()
    } else {
      allErrorsMessage();
    }
  };
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const firstNameInput = document.getElementById("first-name");
  const firstNameError = document.getElementById("first-name-error");
  firstNameInput.addEventListener("input", nameValidationHandler);
  firstNameInput.addEventListener("input", allErrorsMessage);
  firstNameInput.addEventListener("focus", nameFocusHandler);
  firstNameInput.addEventListener("blur", nameBlurHandler);
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const priceInput = document.getElementById("price");
  const priceError = document.getElementById("price-error");
  priceInput.addEventListener("input", priceValidationHandler);
  priceInput.addEventListener("input", allErrorsMessage);
  priceInput.addEventListener("focus", priceFocusHandler);
  priceInput.addEventListener("blur", priceBlurHandler);
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const tinto = document.getElementById("tinto");
  const espumante = document.getElementById("espumante");
  const rose = document.getElementById("rose");
  const blanco = document.getElementById("blanco");
  const otros = document.getElementById("otros");
  const categoriaError = document.getElementById("categoria-error");
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const wineBrandInput = document.getElementById("wine-brand");
  const brandError = document.getElementById("marca-error");
  wineBrandInput.addEventListener("input", marcaValidationHandler);
  wineBrandInput.addEventListener("input", allErrorsMessage);
  wineBrandInput.addEventListener("focus", marcaFocusHandler);
  wineBrandInput.addEventListener("blur", marcaBlurHandler);
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const stockInput = document.getElementById("stock");
  const stockError = document.getElementById("stock-error");
  stockInput.addEventListener("input", stockValidationHandler);
  stockInput.addEventListener("input", allErrorsMessage);
  stockInput.addEventListener("focus", stockFocusHandler);
  stockInput.addEventListener("blur", stockBlurHandler);
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const imgUrlInput = document.getElementById("img-url");
  const imgUrlError = document.getElementById("img-url-error");
  imgUrlInput.addEventListener("input", imgUrlValidationHandler);
  imgUrlInput.addEventListener("input", allErrorsMessage);
  imgUrlInput.addEventListener("focus", imgUrlFocusHandler);
  imgUrlInput.addEventListener("blur", imgUrlBlurHandler);
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const shortDescriptionInput = document.getElementById("short-description");
  const shortDescriptionError = document.getElementById("short-description-error");
  shortDescriptionInput.addEventListener("input", shortDescriptionValidationHandler);
  shortDescriptionInput.addEventListener("input", allErrorsMessage);
  shortDescriptionInput.addEventListener("focus", shortDescriptionFocusHandler);
  shortDescriptionInput.addEventListener("blur", shortDescriptionBlurHandler);
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const longDescriptionInput = document.getElementById("long-description");
  const longDescriptionError = document.getElementById("long-description-error");
  longDescriptionInput.addEventListener("input", longDescriptionValidationHandler);
  longDescriptionInput.addEventListener("input", allErrorsMessage);
  longDescriptionInput.addEventListener("focus", longDescriptionFocusHandler);
  longDescriptionInput.addEventListener("blur", longDescriptionBlurHandler);
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const reset = document.getElementById("reset");
  reset.addEventListener("click", resetHandler);
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const form = document.getElementById("personalInfo");
  const formError = document.getElementById("form-error");
  form.addEventListener("submit", submitHandler);