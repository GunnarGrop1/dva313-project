<?php
#this is required in order to fetch() the data with JavaScript. Optimally it should be enabled on the server itself for example in Apache. This is just a quick workaround.
header("Access-Control-Allow-Origin: *"); 

require_once '..\\dbconn\\dbConn.php';

$result = mysqli_query($conn, "SELECT * FROM metric");

$rows = mysqli_fetch_all($result, MYSQLI_ASSOC);

echo json_encode($rows);
?>