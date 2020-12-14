// @ts-check

// @ts-ignore
import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

/**
 * Class to create charts of diffrent types.
 */
class Chart extends Component {
    /**
     * @param {Object} args - Properties passed from caller.
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
            chartData: args.chartData
        };
    }

    /**
     * Deafult properties. These can be overridden.
     * @type {{type: Object, titleDisplay: boolean, titleText: string, titleSize: number, titleColor: string, legendDisplay: boolean, legendPosition: string}}
     */
    static defaultProps = {
        type: Line,
        titleDisplay: true,
        titleText: 'CPU Utilization',
        titleSize: 18,
        titleColor: '#FFF',
        legendDisplay: true,
        legendPosition: 'bottom',
    };

    /**
     * Renders chart to the screen.
     */
    render() {
        return(
            <div className="ChartItem">
              <this.props.type
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
