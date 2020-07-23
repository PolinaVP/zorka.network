<?php
$name = $_POST['name'];
$company = $_POST['company'];
$email = $_POST['email'];
$source = $_POST['source'];
$task_msg = $_POST['task_msg'];

$name = htmlspecialchars($name);
$company = htmlspecialchars($company);
$email = htmlspecialchars($email);
$source = htmlspecialchars($source);
$task_msg = htmlspecialchars($task_msg);

$name = urldecode($name);
$company = urldecode($company);
$email = urldecode($email);
$source = urldecode($source);
$task_msg = urldecode($task_msg);

mail("polina_vp@tut.by", "Form from zorka.network", "Name:".$name.". Company:".$company.". e-mail:".$email.". Find us from:".$source.". Task:".$task_msg, "From: polina_vp@tut.by\r\n")

?>