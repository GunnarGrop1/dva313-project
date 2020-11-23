import boto3
from datetime import datetime, timedelta

# Create CloudWatch client
cloudwatch = boto3.client('cloudwatch', region_name='us-east-2', aws_access_key_id='', aws_secret_access_key='')

#Make a request for data
response = cloudwatch.get_metric_data(
    MetricDataQueries=[
        {
            'Id': 'mCpu',
            'MetricStat': {
                'Metric': {
                    'Namespace': 'AWS/EC2',
                    'MetricName': 'CPUUtilization',
                    'Dimensions': [
                        {
                            'Name': 'InstanceId',
                            'Value': 'i-01b184865c2c063f2'
                        },
                    ]
                },
                'Period': 300,
                'Stat': 'Average',
            },
            'Label': 'Average CPU Metrics',
            'ReturnData': True,
        },
    ],
    StartTime=datetime(2020, 11 , 23, 11),
    EndTime=datetime.now(),
    #MaxDatapoints=10
)

print(response)

timestamp = str(response['MetricDataResults'][0]['Timestamps'][1])
cpu_usage = str(response['MetricDataResults'][0]['Values'][1])

print(f"at {timestamp} the cpu usage was: {cpu_usage}%")
