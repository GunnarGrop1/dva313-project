<?php
$servername = "localhost";
$username = "root";
$password = "";
$port = 3306;
$dbname = "justAhome";
$conn = mysqli_connect($servername, $username, $password, $dbname, $port);

if (mysqli_connect_errno())
{
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
?>
