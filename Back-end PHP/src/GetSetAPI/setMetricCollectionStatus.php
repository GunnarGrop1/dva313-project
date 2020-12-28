<?php
header("Access-Control-Allow-Origin: *"); 
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