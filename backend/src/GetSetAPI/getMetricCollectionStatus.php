<?php
header("Access-Control-Allow-Origin: http://localhost:3000"); #this is required in order to fetch() data with JavaScript. Optimally it should be enabled on the server itself for example in Apache. This is just a quick workaround.
header('Access-Control-Allow-Credentials: true'); #same goes for this header. (required in order for it to accept the cookies that are being sent)

//require_once '..\\Login\\validateLogin.php';
require_once '../DbConn/dbConn.php';

$result = mysqli_query($conn, "SELECT * FROM metric ORDER BY collection_status DESC");

$rows = mysqli_fetch_all($result, MYSQLI_ASSOC);

echo json_encode($rows);
?>
