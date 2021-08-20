<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Importování nutných závislostí
require './PHPMailer/PHPMailer.php';
require './PHPMailer/SMTP.php';
require './PHPMailer/Exception.php';

$mail = new PHPMailer(true);

// Podpora diakritiky
$mail->CharSet = 'UTF-8';
$mail->Encoding = 'base64';


try {
    // DEBUG: Vypsání všech POST proměnných
    //die(print_r($_POST));

    //Z jaké jazykové mutace webu je na mail.php přistupováno
    $lang = $_POST['lang'] ?? 'cz';

    //Ověření validity e-mailu a jména
    if ($mail->addReplyTo($_POST['email'], $_POST['forname'])) 
    {
        //Ověření existence captchy
        if (isset($_POST['g-recaptcha-response'])) {
            $recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
            $recaptcha_secret = 'REDACTED';
            $recaptcha_response = $_POST['g-recaptcha-response'];
            //Verifikace
            $recaptcha = file_get_contents($recaptcha_url . '?secret=' . $recaptcha_secret . '&response=' . $recaptcha_response);
            $recaptcha = json_decode($recaptcha);
        
            if ($recaptcha->success == true) {
                //TODO: Vybrat optimální hodnotu mezi 0-1
                if ($recaptcha->score >= 0.5) {
                    //Nastavení
                    $mail->isSMTP();                                                                        //Aktivování SMTP
                    $mail->Host       = 'smtp.seznam.cz';                                                   //Nastavení SMTP serveru
                    $mail->SMTPAuth   = true;                                                               //Povolení SMTP autentifikace
                    $mail->Username   = 'formular@kyberfestival.eu';                                        //SMTP login
                    $mail->Password   = base64_decode('REDACTED');  //SMTP heslo
                    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;                                     //TLS šifrování
                    $mail->Port       = 587;                                                                //Port pro STARTTLS
                    
                    //Kontakt
                    $mail->setFrom('formular@kyberfestival.eu', 'Webový formulář');
                    $mail->addAddress('info@kyberfestival.eu');  
                    $forname = $_POST['forname'] ?? 'Jan';
                    $surname = $_POST['surname']  ?? 'Novák';
                    $fullname = $forname. " " . $surname;  
                    $mail->addReplyTo($_POST['email'], $fullname);
                    
                    //Obsah
                    $mail->isHTML(false);                                  
                    $mail->Subject = $_POST['subject'] ?? 'Dotaz přes webový formulář';
                    $mail->Body    = $_POST['body'] ?? '';

                    //Odeslání
                    $mail->send();
                    //echo "E-mail odeslán";
                    header("Location: ../lang/$lang/contact.html?mail=success");
                } else {
                    //echo "reCAPTCHA nesplněna";
                    header("Location: ../lang/$lang/contact.html?mail=captcha");
                }
                
            } else {
                //echo "reCAPTCHA nesplněna";
                header("Location: ../lang/$lang/contact.html?mail=captcha");
            }
        
        } 
        
    } else {
        // echo "E-mail nemohl být odeslán";
        header("Location: ../lang/$lang/contact.html?mail=fail");
    }
} 
catch (Exception $e) {
    echo "Chyba, zpráva nebyla odeslána: {$mail->ErrorInfo}";
    echo "\n<a href=\"../lang/$lang/index.html\">Zpět na hlavní web</a>";
}

?>
