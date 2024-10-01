<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "hglover@iesebre.com";
    $subject = "Nou missatge de contacte de $name";
    $body = "Nom: $name\nCorreu Electrònic: $email\nMissatge:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Missatge enviat amb èxit!";
    } else {
        echo "Error en enviar el missatge.";
    }
}
?>