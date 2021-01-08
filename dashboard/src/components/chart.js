// @ts-check

// @ts-ignore
import React, {Component} from 'react';
import {Line, Pie, Bar} from 'react-chartjs-2';
import {AiOutlineMenu, AiOutlineClose, AiOutlineBorder, AiOutlineCheckSquare} from 'react-icons/ai';
import { makePostRequest } from '../ajax.js';

/**
 * Class to create charts of diffrent types.
 */
class Chart extends Component {
    /**
     * @param {Object} args - Properties passed from caller.
     * @param {Object} args.type - The type of chart to create (Line, Pie, Bar, etc). Chart types are those exposed from react-chartjs-2.
     * @param {Object} args.chartData - Data used to construct the chart.
     * @param {string[]} args.chartData.labels - Labels for the x-axis.
     * @param {Object[]} args.chartData.datasets - The diffrent datasets to display on the chart (can contain several datasets).
     * @param {string} args.chartData.datasets[].label - Label to use for the dataset.
     * @param {number[]} args.chartData.datasets[].data - Literal data of the dataset.
     * @param {string[]} args.chartData.datasets[].backgroundColor - Colors to use for the dataset (can contain several colors).
     */
    constructor(args) {
        super(args);
        this.state = {
            showMenu: false,
            type: args.type,
            chartData: args.chartData
        };
    }

    /**
     * Deafult properties. These can be overridden.
     * @type {{titleDisplay: boolean, titleText: string, titleSize: number, titleColor: string, legendDisplay: boolean, legendPosition: string}}
     */
    static defaultProps = {
        titleDisplay: true,
        titleText: 'CPU Utilization',
        titleSize: 18,
        titleColor: '#FFF',
        legendDisplay: true,
        legendPosition: 'bottom',
    };

    /**
     * Used to change the type of chart that will be displayed
     * @param {Object} type - The type of chart (Line, Pie, Bar, etc)
     */
    changeType(type) {
        this.setState({type: type});
    }

    updateGraph() {

      makePostRequest().then(result =>{
        var temp = JSON.parse(result.data);
        var time = temp["MetricDataResults"][0]["Timestamps"];
        let timeFinal = [];

        for (var i = 0; i < time.length; i++)
        {
          var timeAsString = time[i];
          var tPos = timeAsString.indexOf("T");
          timeFinal[i] = timeAsString.substring(tPos+1, tPos+6);
        }

        this.setState({
            chartData:  {
                labels: timeFinal,
                datasets: [
                    {
                        label: 'Mb/s',
                        data: temp["MetricDataResults"][0]["Values"],
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
            }
        });
        console.log("Chartupdate:", temp["MetricDataResults"][0])
      });
}

  testUpdateGraph()
  {
    console.log("Updating every th second");
  }



    /**
     * Renders chart to the screen.
     */
    render() {
        return(
            <div className="ChartItem">
              <button onClick={(e) => this.setState({showMenu: !this.state.showMenu})}>
                {this.state.showMenu ? <AiOutlineClose/> : <AiOutlineMenu/> }
              </button>
              {
                  this.state.showMenu ? (
                      <div className="Dropdown">
                        <ul>
                          <p>Type</p>
                          <li onClick={(e) => this.changeType(Line)}>
                            {this.state.type == Line ? <AiOutlineCheckSquare/> : <AiOutlineBorder/>} Line
                          </li>
                          <li onClick={(e) => this.changeType(Pie)}>
                            {this.state.type == Pie ? <AiOutlineCheckSquare/> : <AiOutlineBorder/>} Pie
                          </li>
                          <li onClick={(e) => this.changeType(Bar)}>
                            {this.state.type == Bar ? <AiOutlineCheckSquare/> : <AiOutlineBorder/>} Bar
                          </li>
                          <p>Temp</p>
                          <li onClick={(e) => this.updateGraph()}>
                            Update
                            </li>
                        </ul>
                      </div>
                  ) : (
                      null
                  )
              }
              <this.state.type
                data = {this.state.chartData}
                options = {{
                    title: {
                        display: this.props.titleDisplay,
                        text: this.props.titleText,
                        fontSize: this.props.titleSize,
                        fontColor: this.props.titleColor
                    },
                    legend: {
                        display: this.props.legendDisplay,
                        position: this.props.legendPosition
                    }
                }}
              />
            </div>
        );
    }
}
export default Chart;
