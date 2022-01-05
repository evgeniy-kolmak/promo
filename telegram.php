<?php

/* https://api.telegram.org/bot5006130607:AAEa6S-01f4GgL-TOymchCQgfQsFI10y2UM/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$comment = $_POST['user_comment'];
$token = "5006130607:AAEa6S-01f4GgL-TOymchCQgfQsFI10y2UM";
$chat_id = "-715944511";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Коментарий пользователя ' => $comment,
  
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

?>