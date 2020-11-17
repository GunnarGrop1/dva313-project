<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Resource Logger</title>
    <link rel="stylesheet" href="/style.css" type="text/css">
  </head>
  <body>
    <img src="/bgbg.jpg" id="bg" alt="">
  </body>
</html>

<?php
  require_once "dbconn.php";
  if ($_GET['CPU'])
  {
    $receivedData = htmlspecialchars($_GET['CPU']);
    echo $receivedData;
    echo "\n";

    $sql = "call cpu_update('$receivedData')";

    if ($conn->query($sql) === true)
    {
      echo "added to DB yay :D\n";
    }
    else {
      echo mysqli_error($conn) . "\n";
    }
  }
  // Get values from DB

  $sql = "call get_cpu_metrics";

  if ($response = mysqli_query($conn, $sql))
  {
    while ($each_value = $response->fetch_assoc())
    {
      //echo $each_value["cpu_average"];
      printEcho($each_value["cpu_average"]);
      echo "\n";
    }
    mysqli_free_result($response);
    $conn->close();
  }

  function printEcho($print)
  {
    echo "<div style='display: block; color:red;'>" . $print . "</div>";
  }

?>
