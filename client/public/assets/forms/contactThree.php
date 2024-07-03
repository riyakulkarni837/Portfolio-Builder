<?php
// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form fields
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];
    
    // Set the recipient email address
    $to = "riyamk@uci.edu"; // Replace with your email address
    
    // Compose the email message
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n\n";
    $email_message .= "Subject: $subject\n\n";
    $email_message .= "Message:\n$message\n";
    
    // Set the email headers
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    
    // Attempt to send the email
    if (mail($to, $subject, $email_message, $headers)) {
        // Email sent successfully
        echo json_encode(array("success" => true, "message" => "Your message has been sent. Thank you!"));
    } else {
        // Failed to send email
        echo json_encode(array("success" => false, "message" => "Sorry, there was an error sending your message."));
    }
} else {
    // If the request method is not POST, return an error
    echo json_encode(array("success" => false, "message" => "Invalid request method."));
}
?>
