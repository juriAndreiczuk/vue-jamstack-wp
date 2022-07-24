<?php

require 'phpmailer/PHPMailer.php';
require 'phpmailer/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$admin_email = $_POST['admin_email'];
$form_subject = $_POST['form_subject'];
$project_name = $_POST['project_name'];
$message = "";

foreach ( $_POST as $key => $value ) {
    if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" && $key != "file") {
        $message .= "
        <tr>
            <td style='padding: 5px; border: #ccc 1px solid;'><b>$key</b></td>
            <td style='padding: 5px; border: #ccc 1px solid;'>$value</td>
        </tr>
        ";
    }
}

$email = new PHPMailer();
$email->SetFrom($admin_email, $project_name);
$email->Subject = $form_subject;
$email->IsHTML(true);

if (isset($_FILES['file']) && $_FILES['file']['error'] == UPLOAD_ERR_OK) {
  $email->AddAttachment($_FILES['file']['tmp_name'], $_FILES['file']['name']);
}

$email->Body = "<table>".$message."</table>";
$email->AddAddress( $admin_email );

$email->Send();