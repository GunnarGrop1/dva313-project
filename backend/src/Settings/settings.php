<?php
require_once '..\\dbconn\\dbConn.php';

$username = mysqli_real_escape_string($conn, $_POST['username']);
$password = mysqli_real_escape_string($conn, $_POST['password']);


//creates a cookie
setcookie('username', $username, time()+60*60*10); // the cookie will be available for 10 days

// accessing the cookie
if(isset($_COOKIE['cookiename']))
{
    echo $_COOKIE['cookiename'];
}

session_start();
$_SESSION['username'] = $username;

?>

