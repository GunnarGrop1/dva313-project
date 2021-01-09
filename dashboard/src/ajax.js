
const axios = require('axios');

export async function makePostRequest(__id, __average, __type, __aws, __period, __stat, __startTime, __endtime)
{
  let params = {
    id: __id,
    average: __average,
    cpuut: __type,
    aws: __aws,
    period: __period,
    stat: __stat,
    starttime: __startTime,
    endtime:__endtime,
  }
  let result = await axios.post('http://localhost/MetricsCollectors/getMetricData.php', params);
  console.log("Axois result:", result);
  return result;
}
/*
export async function makePostRequest(__id, __average, __type, __aws, __period, __stat, __startTime, __endtime)
{
  const resp = await fetch('http://localhost/MetricsCollectors/getMetricData.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      id: __id,
      average: __average,
      cpuut: __type,
      aws: __aws,
      period: __period,
      stat: __stat,
      starttime: __startTime,
      endtime:__endtime,
    }),
  });
  return resp.json();
}
*/
