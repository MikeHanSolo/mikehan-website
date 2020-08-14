<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/../../secrets.php';
require '../../vendor/autoload.php';

if (isset($_POST['email'])) {
  $mail = new PHPMailer();

  // Mail body content
  $nameFrom = $_POST['name'];
  $addressFrom = $_POST['email'];
  $message = $_POST['message'];
  $mailBody = "You have received mail from " . $nameFrom . " at " . $addressFrom . ".\n\n" . $message;
  $subject = $_POST['subject'];
  $mail->Subject = $subject;
  $mail->Body    = $mailBody;

  // Mail server settings
  $mail->isSMTP();
  $mail->isHTML(false);
  $mail->SMTPDebug  = 0;
  $mail->Host       = 'smtp.gmail.com';
  $mail->Port       = 587;
  $mail->SMTPAuth   = true;
  $mail->SMTPSecure = 'tls';
  $mail->Username   = MAIL_USERNAME;
  $mail->Password   = MAIL_PASSWWORD;
  $mail->setFrom($addressFrom);
  $mail->addReplyTo($addressFrom, $nameFrom);
  $mail->addAddress(MAIL_TO);

  // ReCAPTCHA
  $secretKey = G_RECAPTCHA_SECRET;
  $responseKey = $_POST['g-recaptcha-response'];
  $userIP = $_SERVER['REMOTE_ADDR'];

  $captchaUrl = "https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$responseKey&remoteip=$userIP";
  $captchaResponse = file_get_contents($captchaUrl);
  $captchaResponse = json_decode($captchaResponse);

  // Record final script response
  $submitResponse = array();

  if ($captchaResponse->success) {
    if (!$mail->send()) {
      $submitResponse['message'] = 'Mailer error: ' . $mail->ErrorInfo;
      $submitResponse['success'] = false;
    } else {
      $submitResponse['message'] = 'Message sent successfully.';
      $submitResponse['success'] = true;
    }
  } else {
    $submitResponse['message'] = 'ReCAPTCHA error. Please try again.';
    $submitResponse['success'] = false;
  }

  echo json_encode($submitResponse);
}
