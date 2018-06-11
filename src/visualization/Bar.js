import React, { Fragment } from "react";
import { render } from "react-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,Brush, ReferenceLine } from 'recharts';
import { Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Menu, Dropdown } from 'antd';

class BarComp extends React.Component {

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
        const { data,brushData } = this.state;
        return (

            <Fragment>
                <Row>
                    <Card title="Simple Barchart">
                        <BarChart width={600} height={300} data={data}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="pv" fill="#8884d8" />
                            <Bar dataKey="uv" fill="#82ca9d" />
                        </BarChart>
                    </Card>
                </Row>
                <Row>
                    <Card title="Stacked Bar Chart">
                        <BarChart width={600} height={300} data={data}
                            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                            <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
                        </BarChart>

                    </Card>

                </Row>

                <Row>
                    <Card title="Brush Bar Chart">
                        <BarChart width={600} height={300} data={brushData}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
                            <ReferenceLine y={0} stroke='#000' />
                            <Brush dataKey='name' height={30} stroke="#8884d8" />
                            <Bar dataKey="pv" fill="#8884d8" />
                            <Bar dataKey="uv" fill="#82ca9d" />
                        </BarChart>

                    </Card>

                </Row>

            </Fragment>

        );
    }
}
export default BarComp;

