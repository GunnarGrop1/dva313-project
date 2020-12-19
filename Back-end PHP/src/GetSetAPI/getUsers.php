<?php
require '..\\Login\\validateLogin.php';
require_once '..\\dbconn\\dbConn.php';

$result = mysqli_query($conn, "SELECT UserName FROM user");

$rows = mysqli_fetch_all($result, MYSQLI_ASSOC);

#output example: [{"UserName":"U456"},{"UserName":"U457"}]
#data can be accessed as such: $rows[1]["UserName"] = "U457", but I think we should leave the parsing to client side.
echo json_encode($rows);

mysqli_free_result($result);
mysqli_close($conn)
?>