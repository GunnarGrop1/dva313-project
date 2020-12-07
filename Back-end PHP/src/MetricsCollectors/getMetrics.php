<?php
require 'C:\Users\Ville\Desktop\Skola\HT2020\DVA313\React\Back-end PHP\aws-autoloader.php';
use Aws\CloudWatch\CloudWatchClient;
use Aws\Exception\AwsException;

function getMetricStatistics($cloudWatchClient, $namespace, $metricName,
 $dimensions, $startTime, $endTime, $period, $statistics, $unit = '')
{
 try {
   echo "asd";
 $result = $cloudWatchClient->getMetricStatistics([
 'Namespace' => $namespace,
 'MetricName' => $metricName,
 'Dimensions' => $dimensions,
 'StartTime' => $startTime,
 'EndTime' => $endTime,
 'Period' => $period,
 'Statistics' => $statistics,
 //'Unit' => $unit
 ]);
    echo "dfg";
 $message = '';
 if (isset($result['@metadata']['effectiveUri']))
 {
 $message .= 'For the effective URI at ' .
 $result['@metadata']['effectiveUri'] . "\n\n";

 if ((isset($result['Datapoints'])) and
 (count($result['Datapoints']) > 0))
 {
 $message .= "Datapoints found:\n\n";
 foreach($result['Datapoints'] as $datapoint)
 {
 foreach ($datapoint as $key => $value)
 {
 $message .= $key . ' = ' . $value . "\n";
 }
 $message .= "\n";
 }
 } else {
 $message .= 'No datapoints found.';
 }
 } else {
 $message .= 'No datapoints found.';
 }
 return $message;

 } catch (AwsException $e) {
 return 'Error: ' . $e->getAwsErrorMessage();
 }
}
function getTheMetricStatistics()
{
 // Average number of Amazon EC2 vCPUs every 5 minutes within
 // the past 3 hours.
 $namespace = 'AWS/EC2';
 $metricName = 'CPUUtilization';
 $dimensions = [
 [
 'Name' => 'InstanceId',
 'Value' => 'i-02f04280dd243c3ae'
 ],
 [
    'Name' => 'Service',
    'Value' => 'EC2'
],
[
    'Name' => 'Resource',
    'Value'=> 'vCPU'
],
[
    'Name' => 'Type',
    'Value' => 'Resource'
],
[
    'Name' => 'Class',
    'Value'=> 'Standard/OnDemand'
]
 ];
 $startTime = strtotime('-3 hours');
 $endTime = strtotime('now');
 $period = 300; // Seconds. (5 minutes = 300 seconds.)
 $statistics = array('Average');
 //$unit = 'seconds';
 $cloudWatchClient = new CloudWatchClient([
 'region' => 'eu-north-1c',
 'version' => 'latest',
 'credentials' => [
 'key' => 'AKIAXWO6QK46RXX7345M',
 'secret' => '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'
]

 ]);
 echo getMetricStatistics($cloudWatchClient, $namespace, $metricName,
$dimensions, $startTime, $endTime, $period, $statistics);
}

// Uncomment the following line to run this code in an AWS account.
getTheMetricStatistics();

?>
