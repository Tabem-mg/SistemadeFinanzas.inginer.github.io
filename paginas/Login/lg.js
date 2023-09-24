function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var defaultUsername = "CTPA"; // usuario predeterminado
  var defaultPassword = "12345"; // contraseña predeterminada

  // Verifica si el nombre de usuario y la contraseña coinciden con los valores predeterminados
  if (username === defaultUsername && password === defaultPassword) {
    alert("Inicio de sesión exitoso!");
    // Cambiar la ubicación de la página a index.html si las credenciales son correctas
    window.location.href = "D:\Pagina WEB\Web\index.1html";
  } else {
    alert("Nombre de usuario o contraseña incorrectos.");
  }
}

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  login();
});
