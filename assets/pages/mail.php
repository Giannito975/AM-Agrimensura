<?php

    $nombreCompleto = $_POST['fullname'];
    $email = $_POST['email'];
    $telefono = $_POST['phone'];
    $servicio = $_POST['list'];
    $mensaje = $_POST['message'];
    $asunto = "Mensaje Sitio Web";

    $header = "De: " . $mail . "\r\n";
    $header = "X-Mailer: PHP/". phpversion();

    $receptor = "amestudioagrimensura@gmail.com";
    $mensajeCompleto = "Nombre: " . $nombreCompleto;
    $mensajeCompleto = "Email: " . $email;
    $mensajeCompleto = "Telefono: " . $telefono;
    $mensajeCompleto = "Servicio solicitado: " . $servicio;
    $mensajeCompleto = "Mensaje: " . $mensaje;

    $mail = mail($receptor, $asunto, utf8_decode($mensajeCompleto), $header);

    header("Location:index.html");

?>