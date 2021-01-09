import Chart from './components/chart';
import {Line, Bar, Pie} from 'react-chartjs-2';
import DashboardMenu from './components/dashboardMenu';
import { makePostRequest } from './ajax.js';
import { Component } from 'react';
/**
 * The Dashboard component.
 * This component takes care of creating the dashboard from it's sub-components.
 */
class Dashboard extends Component {
    constructor(args) {
        super(args);
        this.state = {
          chartData: [],
          timeSpan: "-30 minutes",
        };

        this.forceUpdate2 = this.forceUpdate2.bind(this);
    }

    async componentDidMount() { 
        await this.updateDashboard();
        setInterval(() => this.updateDashboard(), 3000000);
    }

    forceUpdate2(time) {
        this.setState({timeSpan: time});
        this.updateDashboard();
    }

    async updateDashboard() {
         await fetch('http://localhost/Back-end%20PHP/src/GetSetAPI/getMetricCollectionStatus.php', {credentials: 'include'})
        .then(response => response.json())
            .then(data => {
                data.forEach(async (element, index) => {
                    if(Number(element['collection_status'])) {
                        let response = await makePostRequest('meow', element['display_name'], element['name'], 'AWS/EC2', 300, 'Average', this.state.timeSpan, 'now');
                        
                        let time = response.MetricDataResults[0]['Timestamps'];
                        let timeFinal = [];

                        for (var i = 0; i < time.length; i++)
                        {
                            var timeAsString = time[i];
                            var tPos = timeAsString.indexOf("T");
                            timeFinal[i] = timeAsString.substring(tPos+1, tPos+6);
                        }

                        let newData = {
                            title: element['display_name'],
                            labels: timeFinal.reverse(),
                            datasets: [
                                {
                                    label: element['display_name'],
                                    data: response.MetricDataResults[0]['Values'].reverse(),
                                    backgroundColor: '#54ffdd'
                                }
                            ]
                        };
                        let clone = this.state.chartData.slice();
                        clone[index] = newData;

                        this.setState({chartData: clone});
                    }
                })
            })
    }

    render() {
        return (
            <div className="Dashboard">
              <DashboardMenu method={this.forceUpdate2} timespan={this.state.timeSpan} />
              <div className="ChartContainer">
                  {this.state.chartData.map((value, index) => <Chart key={index} chartData={value} titleText={value.title} />)}
              </div>
            </div>
        );
    }

}

export default Dashboard;
