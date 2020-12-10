<?php

if(!empty($_POST['submit'))
{
  die(); //This is temporary
}

$username = mysqli_real_escape_string($conn, $_POST['username']);
$password = mysqli_real_escape_string($conn, $_POST['password']);

$result = mysqli_query($conn, "SELECT password FROM users WHERE username = '".$username."'");

$hashedPassword = mysqli_fetch_object(mysqli_fetch_object($result));

if (password_verify($password, $hashedPassword->password))
{
  $_SESSION['loggedIn'] = true;
  $_SESSION['username'] = $username;
}

?>
