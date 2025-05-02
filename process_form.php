<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Collect form data
  $firstName = $_POST['first-name'];
  $lastName = $_POST['last-name'];
  $gender = $_POST['gender'];
  $email = $_POST['email'];
  $phoneNumber = $_POST['phone-number'];
  $message = $_POST['message'];

  // Send email notification
  $to = 'mjd@climateaction.ac.Uganda'; // the enterprise email email address
  $subject = 'New Contact Form Submission';
  $body = "First Name: $firstName\n"
    . "Last Name: $lastName\n"
    . "Gender: $gender\n"
    . "Email: $email\n"
    . "Phone Number: $phoneNumber\n"
    . "Message: $message\n";
  $headers = 'From: ' . $email;

  if (mail($to, $subject, $body, $headers)) {
    // Email sent successfully
    echo 'Thank you for your message!';
  } else {
    // Failed to send email
    echo 'Sorry, there was an error. Please try again later.';
  }
}
?>