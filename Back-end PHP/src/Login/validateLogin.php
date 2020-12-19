<?php
session_start();

if(!isset($_SESSION['loggedIn']) || $_SESSION['loggedIn'] != true) {
    echo "You are not logged in."; //placeholder
    #header("Location: login.html"); //redirect
    die();
}
?>