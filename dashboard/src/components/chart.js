// @ts-check

// @ts-ignore
import React, {Component} from 'react';
import {Line, Pie, Bar} from 'react-chartjs-2';
import {AiOutlineMenu, AiOutlineClose, AiOutlineBorder, AiOutlineCheckSquare} from 'react-icons/ai';

/**
 * Class to create charts of diffrent types.
 */
class Chart extends Component {
    /**
     * @param {Object} args - Properties passed from caller.
     * @param {Object} type - The type of chart to create (Line, Pie, Bar, etc). Chart types are those exposed from react-chartjs-2.
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
            type: Line,
            chartData: args.chartData,
            hidden: false,
        };
        
        //ugly but works, they are used to check so that if we click on certain items inside the menu it shouldn't close. In case of missclicks and such.
        this.dropDownRef = React.createRef();
        this.pRef = React.createRef();
        this.ulRef = React.createRef();
    }

    static defaultProps = {
        titleDisplay: true,
        titleText: 'CPU Utilization',
        titleSize: 18,
        titleColor: '#FFF',
        legendDisplay: true,
        legendPosition: 'bottom'
    };

    /**
     * Used to change the type of chart that will be displayed
     * @param {Object} type - The type of chart (Line, Pie, Bar, etc)
     */
    changeType(type) {
        this.setState({type: type});
    }

    toggleHidden() {
        this.setState(state => ({hidden: !state.hidden}));
    }

    componentWillReceiveProps(props) {
        this.setState({ chartData: props.chartData })
    }

    toggleFunc = this.toggleVisibility.bind(this);

    toggleVisibility(event) {
        if(event.target !== this.dropDownRef.current && event.target !== this.pRef.current && event.target !== this.ulRef.current) {
          this.setState(state => ({showMenu: !state.showMenu}))
        }

        if(!this.state.showMenu) {
          document.removeEventListener("click", this.toggleFunc);
        }
    }
    /**
     * Renders chart to the screen.
     */
    render() {
        return(
            !this.state.hidden ? (
            <div className="ChartItem">
              <button onClick={() => {document.addEventListener("click", this.toggleFunc);}}> {this.state.showMenu ? <AiOutlineClose/> : <AiOutlineMenu/> }</button>
              {
                  this.state.showMenu ? (
                    <div ref={this.dropDownRef} className="Dropdown">
                    <ul ref={this.ulRef}>
                    <p ref={this.pRef}>Type</p>
                          <li onClick={() => this.changeType(Line)}>
                            {this.state.type === Line ? <AiOutlineCheckSquare/> : <AiOutlineBorder/>} Line
                          </li>
                          <li onClick={() => this.changeType(Pie)}>
                            {this.state.type === Pie ? <AiOutlineCheckSquare/> : <AiOutlineBorder/>} Pie
                          </li>
                          <li onClick={() => this.changeType(Bar)}>
                            {this.state.type === Bar ? <AiOutlineCheckSquare/> : <AiOutlineBorder/>} Bar
                          </li>
                          <p>Options</p>
                          <li onClick={() => this.toggleHidden()}>
                            {this.state.hidden ? <AiOutlineCheckSquare/> : <AiOutlineBorder/>} Hide
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
            ) : (
                null
            )
        );
    }
}
export default Chart;
