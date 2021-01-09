<?php
require '..\..\AWSSDK\aws-autoloader.php';
require_once '..\credentials.php';
use AWSSDK\Aws\CloudWatch\CloudWatchClient;
use AWSSDK\Aws\Exception\AwsException;

function getMetricData($id, $label, $metricname, $namespace, $period, $stat, $starttime, $endtime){

  $cloudWatchClient = new Aws\CloudWatch\CloudWatchClient([
  'region' => 'eu-north-1',
  'version' => 'latest',
  'credentials' => [
  'key' => $GLOBALS['credentials_Key'],
  'secret' => $GLOBALS['credentials_Secret']
  ]
   ]);

  $result = $cloudWatchClient->getMetricData([
      'MetricDataQueries' => [ // REQUIRED
          [
              'Id' => $id, // REQUIRED // 'mCpu'
              'Label' => $label, // 'Average CPU Metrics'
              'MetricStat' => [
                  'Metric' => [ // REQUIRED
                      'Dimensions' => [
                          [
                              'Name' => 'InstanceId', // REQUIRED
                              'Value' => 'i-02f04280dd243c3ae', // REQUIRED
                          ],
                          // ...
                      ],
                      'MetricName' => $metricname, // CPUUtilization
                      'Namespace' => $namespace, // AWS/EC2
                  ],
                  'Period' => $period, // REQUIRED // 300
                  'Stat' => $stat, // REQUIRED
              ],
              'ReturnData' => true,
          ],
          // ...
      ],
      'StartTime' => strtotime($starttime), // REQUIRED
      'EndTime' => strtotime($endtime),
  ]);
  return $result;
}
 ?>
