export async function makePostRequest(__id, __average, __type, __aws, __period, __stat, __startTime, __endtime)
{
  const response = await fetch('http://localhost/dva313/backend/src/MetricsCollectors/getMetricData.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      id: __id,
      average: __average,
      name: __type,
      aws: __aws,
      period: __period,
      stat: __stat,
      starttime: __startTime,
      endtime: __endtime,
    }),
  })

  const data = await response.json();

  return data;
}
