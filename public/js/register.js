let but = document.getElementById("registerButton");
let nombre = document.getElementById("registerInputNombre");
let apellido = document.getElementById("registerInputApellido");
let direccion = document.getElementById("registerInputDireccion");
let telefono = document.getElementById("registerInputTelefono");
let password = document.getElementById("registerInputPassword");
let rePassword = document.getElementById("registerInputRePassword");
let correo = document.getElementById("registerInputEmail");
let checkedClient = document.getElementById("checkedClient");
let message = document.getElementById("registerMessage");

function setMessage(msg) {
  message.innerHTML = `<p>${msg}</p>`
}

function validateInputs() {
  if (!nombre.value || !apellido.value || !direccion.value || !telefono.value || !password.value || !rePassword.value || !correo.value) {
    setMessage("complete todos los campos");
    return false;
  }
  if (password.value !== rePassword.value) {
    setMessage("Las contraseñas no coinciden");
    return false;
  }
  return true;
}

function sendData(data = {}) {
  fetch("../register", {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}

const handleClick = (e) => {
  e.preventDefault();
  let data ={
    correo: correo.value,
    contrasenia: password.value,
    nombre: nombre.value,
    apellido: apellido.value,
    direccion: direccion.value,
    telefono: telefono.value,
    idTienda: null
  }
  if (!validateInputs()) {
    return
  }
  if(checkedClient.checked){
    data={
      ...data,
      esAdmin:0
    }
  }else{
    data={
      ...data,
      esAdmin:1
    }
  }
  sendData(data);
  location.href = "login";
}

but.addEventListener("click", handleClick);
