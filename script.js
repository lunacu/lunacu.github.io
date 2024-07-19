document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === "admin" && password === "admin" || username === "jmartinez" && password === "jmartinez") {
        window.location.href = "modelos/modelos.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
});
