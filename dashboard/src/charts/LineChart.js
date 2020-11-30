import React, { PureComponent } from 'react';
import '../App.css';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
    {name: '13:00', CPU: 24},
    {name: '13:05', CPU: 14},
    {name: '13:10', CPU: 98},
    {name: '13:15', CPU: 39},
    {name: '13:20', CPU: 48},
    {name: '13:25', CPU: 48},
    {name: '13:30', CPU: 43},
];

export default class ChartLine extends PureComponent {
    render() {
        return (
            <div className="Chart">
              <LineChart
                width={500}
                height={300}
                data={data}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="CPU" stroke="#1ed6ff" activeDot={{ r: 8 }} />
                {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
              </LineChart>
            </div>
        );
    }
}
