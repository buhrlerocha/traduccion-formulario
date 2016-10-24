function trabajo(){
var uno = document.getElementById("form-signin-heading");
uno.innerHTML = "Por favor inicia sesion";

var correo = document.getElementById("inputEmail").placeholder="Correo Electronico";

var contraseña = document.getElementById("inputPassword").placeholder="Contraseña";

var datos = document.getElementsByTagName("SPAN")[0];
datos.textContent = "Recordar datos";

var boton= document.getElementsByTagName("BUTTON")[0];
boton.textContent = "Iniciar Sesión";
}
trabajo();