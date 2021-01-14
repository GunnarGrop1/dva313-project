<?php
require_once '../DbConn/dbConn.php';
require '../../AWSSDK/aws-autoloader.php';
require_once '../credentials.php';
use AWSSDK\Aws\CloudWatch\CloudWatchClient;
use AWSSDK\Aws\Exception\AwsException;



$username = mysqli_real_escape_string($conn, $_POST['username']);
$email = mysqli_real_escape_string($conn, $_POST['email']);
$password = mysqli_real_escape_string($conn, $_POST['password']);

// create a new user
$result1 = mysqli_query($conn, "INSERT INTO user (username, password) VALUES ($username, $password)");


// delete a user
$result2 = mysqli_query($conn, "DELETE FROM user WHERE username = $username");

 ?>
