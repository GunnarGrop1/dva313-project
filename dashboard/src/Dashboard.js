import Chart from './components/chart';
import {Line, Bar, Pie} from 'react-chartjs-2';
import DashboardMenu from './components/dashboardMenu';

const chartData1 = {
    labels: ['13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30'],
    datasets: [
        {
            label: 'MB',
            data: [
                0,
                12,
                20,
                47,
                5,
                18,
                36
            ],
            backgroundColor: [
                '#54ffdd'
            ]
        }
    ]
};

const chartData2 = {
    labels: ['13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30'],
    datasets: [
        {
            label: 'Core 1',
            data: [
                99,
                87,
                86,
                67,
                55,
                23,
                28
            ],
            backgroundColor: [
                '#54ffdd',
            ]
        },
        {
            label: 'Core 2',
            data: [
                0,
                12,
                20,
                47,
                5,
                18,
                36
            ],
            backgroundColor: [
                '#ebb'
            ]
        }
    ]
};

const chartData3 = {
    labels: ['13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30'],
    datasets: [
        {
            label: 'Mb/s',
            data: [
                99,
                87,
                86,
                67,
                55,
                23,
                28
            ],
            backgroundColor: [
                '#54ffdd',
                '#6cffa9',
                '#fdff78',
                '#ff8742',
                '#ff7ef2',
                '#ffc0c6',
                '#c7d6ff'
            ]
        }
    ]
};

/**
 * The Dashboard component.
 * This component takes care of creating the dashboard from it's sub-components.
 */
function Dashboard() {
    return (
        <div className="Dashboard">
          <DashboardMenu />
          <div className="ChartContainer">
            <Chart chartData={chartData1} type={Line} titleText='RAM Usage' />
            <Chart chartData={chartData2} type={Line} />
            <Chart chartData={chartData3} type={Bar} titleText='Network throughput'/>
            <Chart chartData={chartData1} type={Line} titleText='RAM Usage' />
            <Chart chartData={chartData2} type={Line} />
            <Chart chartData={chartData3} type={Bar} titleText='Network throughput'/>
            <Chart chartData={chartData1} type={Line} titleText='RAM Usage' />
            <Chart chartData={chartData2} type={Line} />
            <Chart chartData={chartData3} type={Bar} titleText='Network throughput'/>
            </div>
        </div>
    );
}

export default Dashboard;
