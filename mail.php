<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['fullname'];
    $email = $_POST['phone'];
    $message = $_POST['address'];
    $to = 'majidsakr86@gmail.com'; // Specify your email address
    $subject = 'Message from Website';
    
    // Construct the email content
    $body = "From: $name\nE-Mail: $email\nMessage:\n$message";
    
    // Set the header
    $headers = 'From: smagedmohamed@gmail.com' . "\r\n" .
            'Reply-To: smagedmohamed@gmail.com' . "\r\n" .
            'X-Mailer: PHP/' . phpversion();

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Message successfully sent!";
    } else {
        echo "Message sending failed.";
    }
}
?>
