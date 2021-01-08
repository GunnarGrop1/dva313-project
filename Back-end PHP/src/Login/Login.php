<?php
require_once '..\\dbconn\\dbConn.php';

if(!empty($_POST['submit']))
{
  die(); //This is temporary
}

$username = mysqli_real_escape_string($conn, $_POST['username']);
$password = mysqli_real_escape_string($conn, $_POST['password']);

$result = mysqli_query($conn, "SELECT password FROM user WHERE username = '".$username."'");

//if there was no result
if($result == null || $result->num_rows == 0) {
  //give an error somehow
  die();
}

$hashedPassword = mysqli_fetch_object($result);

if (password_verify($password, $hashedPassword->password))
{
  session_start();
  $_SESSION['loggedIn'] = true;
  $_SESSION['username'] = $username;
}

header('Location: ' . $_SERVER['HTTP_REFERER']);
?>
