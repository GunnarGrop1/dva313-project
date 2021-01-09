<?php
header("Access-Control-Allow-Origin: http://localhost:3000"); #this is required in order to fetch() data with JavaScript. Optimally it should be enabled on the server itself for example in Apache. This is just a quick workaround.
header('Access-Control-Allow-Credentials: true'); #same goes for this header. (required in order for it to accept the cookies that are being sent)

require_once '..\\Login\\validateLogin.php';
require_once '..\\dbconn\\dbConn.php';

if(!isset($_POST['metric']) || !isset($_POST['status'])) {
    http_response_code(400);
    die();
}

$stmt = $conn->prepare("UPDATE metric SET collection_status = ? WHERE name = ?");
$stmt->bind_param("is", $status, $metric);

$status = $_POST['status']; //the status we should change to (1 = enable collection, 0 = disable collection)
$metric = $_POST['metric']; //the name of metric to change status of

$stmt->execute();

$stmt->close();
$conn->close();
?>