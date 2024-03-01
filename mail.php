<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Ensure path to autoload.php is correct

$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->isSMTP();                                           
    $mail->Host       = 'smtp.gmail.com';                     
    $mail->SMTPAuth   = true;                                   
    $mail->Username   = 'majidsakr86@gmail.com'; // Your Gmail address
    $mail->Password   = '135790521Mm@02468'; // Your Gmail App Password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            
    $mail->Port       = 465;                                    

    //Recipients
    $mail->setFrom('majidsakr86@gmail.com', 'Mailer');
    $mail->addAddress('majidsakr86@gmail.com', 'Majid Sakr'); // Recipient

    // Content
    $mail->isHTML(true);
    $mail->Subject = 'New Form Submission';
    $mail->Body    = 'Full Name: ' . $_POST['fullname'] . '<br>' .
                    'Phone: ' . $_POST['phone'] . '<br>' .
                    'Address: ' . $_POST['address'];

    $mail->send();
    echo json_encode(['message' => 'Message has been sent']);
} catch (Exception $e) {
    echo json_encode(['message' => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"]);
}
?>
