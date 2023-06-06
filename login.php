<?php
// Conexión a la base de datos MySQL
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "tarea_001";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Error de conexión a la base de datos: " . $conn->connect_error);
}

// Obtener los datos del formulario
$username = $_POST['username'];
$password = $_POST['password'];

// Consultar si el usuario existe en la base de datos
$sql = "SELECT * FROM tarea_001.usuarios WHERE username = '$username' AND password = '$password'";
$result = $conn->query($sql);

if ($result->num_rows == 1) {
    // Iniciar sesión y redirigir al usuario a la página de inicio
    session_start();
    $_SESSION['username'] = $username;
    header("Location: inicio.php");
} else {
    // Autenticación fallida, mostrar mensaje de error
    echo "Usuario o contraseña incorrectos.";
}

$conn->close();
?>
