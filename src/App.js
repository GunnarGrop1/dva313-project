import './App.css';
import ChartLine from './charts/LineChart.js';

function App() {
    return (
        <div className="App">
          <div className="MenuBar" id="left">
          </div>
          <div className="MenuBar" id="top">
            <div className="Button">Time span</div>
            <div className="Button">Virtual machine</div>
          </div>
          <div className="ChartContainer">
            <ChartLine />
            <ChartLine />
            <ChartLine />
          </div>
        </div>
    );
}

export default App;
