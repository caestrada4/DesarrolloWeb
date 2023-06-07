<?php
include 'conexion.php';

$contacto_id = $_POST['contacto_id'];

// Elimina el contacto de la base de datos
$sql = "DELETE FROM contactos WHERE id = $contacto_id";

if ($conn->query($sql) === TRUE) {
    echo "Contacto eliminado correctamente.";
} else {
    echo "Error al eliminar el contacto: " . $conn->error;
}

$conn->close();
?>
