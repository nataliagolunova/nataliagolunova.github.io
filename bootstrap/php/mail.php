<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['name'];
$email = $_POST['user_email'];
$phone = $_POST['user_phone'];
$radio = $_POST['radios'];
$check = $_POST['check'];
$comment = $_POST['comment'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'yurlova.97@inbox.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'JRcL9NncPRYVfrcsDzUx'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('yurlova.97@inbox.ru'); // от кого будет уходить письмо?
$mail->addAddress('yatojil913@cupbest.com');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с тестового сайта';
$mail->Body    = 'Пользователь оставил заявку!<br> 
                    Имя: ' .$name .
                    ';<br> Email: ' .$email .
                    ';<br> Телефон: ' .$phone .
                    ';<br> Комментарий: ' .$comment ;
$mail->AltBody = '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}
?>