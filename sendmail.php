<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

// Allow CORS and JSON POST
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Get POST data
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "No data received"]);
    exit;
}

// Load PHPMailer
require __DIR__ . '/vendor/autoload.php';

// Fallback: manually load PHPMailer classes if autoloader failed
if (!class_exists('PHPMailer\PHPMailer\PHPMailer')) {
    require __DIR__ . '/vendor/phpmailer/phpmailer/src/Exception.php';
    require __DIR__ . '/vendor/phpmailer/phpmailer/src/PHPMailer.php';
    require __DIR__ . '/vendor/phpmailer/phpmailer/src/SMTP.php';
}

// PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);

try {
    // SMTP Settings for Gmail
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'inquiryservicefirstau@gmail.com';
    $mail->Password   = 'ualrphismhfjdcam';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    $mail->setFrom('inquiryservicefirstau@gmail.com', 'Service First Website');
    $mail->addAddress('nihaanexpertise@gmail.com');

    $mail->isHTML(true);
    $mail->Subject = 'New Appointment Request';
    $mail->Body    = "
        <h2>New Appointment Request</h2>
        <p><strong>Name:</strong> {$data['name']}</p>
        <p><strong>Email:</strong> {$data['email']}</p>
        <p><strong>Phone:</strong> {$data['phone']}</p>
        <p><strong>Address:</strong> {$data['address']}</p>
        <p><strong>Services:</strong> " . implode(", ", $data['services']) . "</p>
        <p><strong>Service Type:</strong> {$data['serviceType']}</p>
        <p><strong>Date:</strong> {$data['date']}</p>
        <p><strong>Additional Info:</strong> {$data['additionalInfo']}</p>
    ";

    $mail->send();
    echo json_encode(["success" => true, "message" => "Email sent"]);
} catch (Exception $e) {
    // Remove error status to always return 200 OK
    // http_response_code(500);
    echo json_encode(["success" => false, "message" => "Mailer Error: {$mail->ErrorInfo}"]);
}
