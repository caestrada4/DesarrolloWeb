<?php
// Verificar si hay una sesión iniciada, de lo contrario redirigir al inicio de sesión
session_start();
if (!isset($_SESSION['username'])) {
    header("Location: index.php");
    exit();
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Página de inicio</title>
</head>
<body>
    <h2>Bienvenido, <?php echo $_SESSION['username']; ?></h2>
    <p>Esta es la página de inicio.</p>
    <a href="logout.php">Cerrar sesión</a>
</body>
</html>
