const axios = require('axios');

export async function makePostRequest()
{
    let result = await axios.post('http://localhost/MetricsCollectors/getMetricData.php');
    console.log("Axois result:", result);
    let fixResult = JSON.stringify(result);

    fixResult = fixResult.replace('<', "");
    result = JSON.parse(fixResult);
    return result;
}
export function tempish()
{
  let heh = "hue";
  return heh;
}
