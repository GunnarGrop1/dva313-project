<?php
require '../../AWSSDK/aws-autoloader.php';
require_once '../credentials.php';
use AWSSDK\Aws\CloudWatch\CloudWatchClient;
use AWSSDK\Aws\Exception\AwsException;

function getMetricData($id, $label, $metricname, $namespace, $period, $stat, $starttime, $endtime) {

    $cloudWatchClient = new Aws\CloudWatch\CloudWatchClient([
        'region' => $GLOBALS['location'], //eu-north-1
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
              'DataPoints' => [
                'Unit' => 'Percent'
              ],
              'MetricStat' => [
                  'Metric' => [ // REQUIRED
                      'Dimensions' => [
                          [
                              'Name' => 'InstanceId', // REQUIRED
                              'Value' => $GLOBALS['instance_id'], // REQUIRED //i-02f04280dd243c3ae <- the previous value
                          ],
                      ],
                      'MetricName' => $metricname, // CPUUtilization
                      'Namespace' => $namespace, // AWS/EC2
                  ],
                  'Period' => $period, // REQUIRED // 300
                  'Stat' => $stat, // REQUIRED
              ],
              'ReturnData' => true,
          ],
      ],
      'StartTime' => strtotime($starttime), // REQUIRED
      'EndTime' => strtotime($endtime),
  ]);
  return $result;
}
 ?>
