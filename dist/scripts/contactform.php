<?php

if (isset($_POST['submit'])) {
  // Contact form contents
  $name = $_POST['name'];
  $mailFrom = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  $mailTo = 'hey@mikehan.io';
  $headers = "From: ".$emailFrom;
  $mailTxt = "You have received mail from ".$name.".\n\n".$message;

  // ReCAPTCHA
  $username = $_POST['username'];
  $secretKey = '6LeEcbwZAAAAAAYFVcL4Q5r8S_rLJErhR5fMv30r';
  $responseKey = $_POST['g-recaptcha-response'];
  $userIP = $_SERVER['REMOTE_ADDR'];

  $captchaUrl = "https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$responseKey&remoteip=$userIP";
  $response = file_get_contents($captchaUrl);
  $response = json_decode($response);

  if ($response->success) {
    mail($mailTo, $subject, $mailTxt, $headers);
    header("Location: index.html#contact?mail-sent");
  } 
  else {
    echo "<p>Sorry, submit failed CAPTCHA. Your email was not sent.</p>";
  }
}

?>