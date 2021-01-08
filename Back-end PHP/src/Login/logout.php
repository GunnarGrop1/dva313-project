<?php
session_start();
setcookie('PHPSESSID', '', 0, '/');
session_destroy();

header('Location: ' . $_SERVER['HTTP_REFERER']);
?>