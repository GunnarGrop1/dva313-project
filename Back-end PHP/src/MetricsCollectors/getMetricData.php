<?php
//require '..\\Login\\validateLogin.php'; <- This has been commented as it causes issues with
// the ability to access this page for frontend. Will take a look at it later.
require 'functions.php';
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

// This is unsafe. We need to remove this / fix this before actually turning this in. It opens up for
// CSRF exploit


$id = 'cpuid';
$average = 'average metrics';
$cpuut = 'CPUUtilization';
$aws = 'AWS/EC2';
$period = 300;
$stat = 'Average';
$starttime = '-20 minutes';
$endtime = 'now';

if (!empty($_POST['id']) and !empty($_POST['average']) and !empty($_POST['cpuut']) and
!empty($_POST['aws']) and !empty($_POST['period']) and !empty($_POST['stat']) and
!empty($_POST['starttime']) and !empty($_POST['endtime']))
{
  $id = $_POST['id'];
  $average = $_POST['average'];
  $cpuut = $_POST['cpuut'];
  $aws = $_POST['aws'];
  $period = $_POST['period'];
  $stat = $_POST['stat'];
  $starttime = $_POST['starttime'];
  $endtime = $_POST['endtime'];
}

$result = getMetricData($id, $average, $cpuut, $aws, $period, $stat, $starttime, $endtime);

$result = substr(strstr($result, '{'), strlen('{'));
$a = "{ ";
$result = $a . $result;

$data = json_decode($result);

echo $result;

//echo $data->MetricDataResults[0]->Id;

//echo $data->MetricDataResults[0]->Timestamps[0];

?>
