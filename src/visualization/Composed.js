import React, { Fragment } from "react";
import { render } from "react-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Brush, ReferenceLine, AreaChart, ComposedChart,Area,Line } from 'recharts';
import { Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Menu, Dropdown } from 'antd';

class ComposedChartComp extends React.Component {

    constructor() {
        super();
        this.state = {
            data: [
                { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
                { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
                { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
                { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
                { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
                { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
                { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
            ],
            brushData: [
                { name: '1', uv: 300, pv: 456 },
                { name: '2', uv: -145, pv: 230 },
                { name: '3', uv: -100, pv: 345 },
                { name: '4', uv: -8, pv: 450 },
                { name: '5', uv: 100, pv: 321 },
                { name: '6', uv: 9, pv: 235 },
                { name: '7', uv: 53, pv: 267 },
                { name: '8', uv: 252, pv: -378 },
                { name: '9', uv: 79, pv: -210 },
                { name: '10', uv: 294, pv: -23 },
                { name: '12', uv: 43, pv: 45 },
                { name: '13', uv: -74, pv: 90 },
                { name: '14', uv: -71, pv: 130 },
                { name: '15', uv: -117, pv: 11 },
                { name: '16', uv: -186, pv: 107 },
                { name: '17', uv: -16, pv: 926 },
                { name: '18', uv: -125, pv: 653 },
                { name: '19', uv: 222, pv: 366 },
                { name: '20', uv: 372, pv: 486 },
                { name: '21', uv: 182, pv: 512 },
                { name: '22', uv: 164, pv: 302 },
                { name: '23', uv: 316, pv: 425 },
                { name: '24', uv: 131, pv: 467 },
                { name: '25', uv: 291, pv: -190 },
                { name: '26', uv: -47, pv: 194 },
                { name: '27', uv: -415, pv: 371 },
                { name: '28', uv: -182, pv: 376 },
                { name: '29', uv: -93, pv: 295 },
                { name: '30', uv: -99, pv: 322 },
                { name: '31', uv: -52, pv: 246 },
                { name: '32', uv: 154, pv: 33 },
                { name: '33', uv: 205, pv: 354 },
                { name: '34', uv: 70, pv: 258 },
                { name: '35', uv: -25, pv: 359 },
                { name: '36', uv: -59, pv: 192 },
                { name: '37', uv: -63, pv: 464 },
                { name: '38', uv: -91, pv: -2 },
                { name: '39', uv: -66, pv: 154 },
                { name: '40', uv: -50, pv: 186 }
            ]
        }
    }

    render() {
        const { data, brushData } = this.state;
        return (

            <Fragment>
                <Row>
                    <Card title="LineBarAreaComposedChart">
                        <ComposedChart width={600} height={400} data={data}
                            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <CartesianGrid stroke='#f5f5f5' />
                            <Area type='monotone' dataKey='amt' fill='#8884d8' stroke='#8884d8' />
                            <Bar dataKey='pv' barSize={20} fill='#413ea0' />
                            <Line type='monotone' dataKey='uv' stroke='#ff7300' />
                        </ComposedChart>
                    </Card>
                </Row>
                <Row>
                    <Card title="SameDataComposedChart">
                        <ComposedChart width={600} height={400} data={data}
                            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <CartesianGrid stroke='#f5f5f5' />
                            <Bar dataKey='uv' barSize={20} fill='#413ea0' />
                            <Line type='monotone' dataKey='uv' stroke='#ff7300' />
                        </ComposedChart>

                    </Card>

                </Row>

                <Row>
                    <Card title="VerticalComposedChart">
                        <ComposedChart width={600} height={400} data={data}
                            margin={{ top: 20, right: 80, bottom: 20, left: 20 }}>
                            <XAxis dataKey="name" label="Pages" />
                            <YAxis label="Index" />
                            <Tooltip />
                            <Legend />
                            <CartesianGrid stroke='#f5f5f5' />
                            <Area type='monotone' dataKey='amt' fill='#8884d8' stroke='#8884d8' />
                            <Bar dataKey='pv' barSize={20} fill='#413ea0' />
                            <Line type='monotone' dataKey='uv' stroke='#ff7300' />
                        </ComposedChart>

                    </Card>

                </Row>
                <Row>
                    <Card title="ComposedChartWithAxisLabels">
                        <ComposedChart width={600} height={400} data={data}
                            margin={{ top: 20, right: 80, bottom: 20, left: 20 }}>
                            <XAxis dataKey="name" label="Pages" />
                            <YAxis label="Index" />
                            <Tooltip />
                            <Legend />
                            <CartesianGrid stroke='#f5f5f5' />
                            <Area type='monotone' dataKey='amt' fill='#8884d8' stroke='#8884d8' />
                            <Bar dataKey='pv' barSize={20} fill='#413ea0' />
                            <Line type='monotone' dataKey='uv' stroke='#ff7300' />
                        </ComposedChart>

                    </Card>

                </Row>

            </Fragment>

        );
    }
}
export default ComposedChartComp;

