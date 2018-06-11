import React, { Fragment } from "react";
import { render } from "react-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Brush, ReferenceLine, AreaChart, PieChart, Pie,Sector } from 'recharts';
import { Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Menu, Dropdown } from 'antd';

class PieComp extends React.Component {

    constructor() {
        super();
        this.state = {
            data01: [{ name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
            { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 }],
            data02: [{ name: 'A1', value: 100 },
            { name: 'A2', value: 300 },
            { name: 'B1', value: 100 },
            { name: 'B2', value: 80 },
            { name: 'B3', value: 40 },
            { name: 'B4', value: 30 },
            { name: 'B5', value: 50 },
            { name: 'C1', value: 100 },
            { name: 'C2', value: 200 },
            { name: 'D1', value: 150 },
            { name: 'D2', value: 50 }],
            activeIndex:0,
            data:[{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
            {name: 'Group C', value: 300}, {name: 'Group D', value: 200}]
        }
    }

    renderActiveShape = (props) => {
        const RADIAN = Math.PI / 180;
        const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
            fill, payload, percent, value } = props;
        const sin = Math.sin(-RADIAN * midAngle);
        const cos = Math.cos(-RADIAN * midAngle);
        const sx = cx + (outerRadius + 10) * cos;
        const sy = cy + (outerRadius + 10) * sin;
        const mx = cx + (outerRadius + 30) * cos;
        const my = cy + (outerRadius + 30) * sin;
        const ex = mx + (cos >= 0 ? 1 : -1) * 22;
        const ey = my;
        const textAnchor = cos >= 0 ? 'start' : 'end';

        return (
            <g>
                <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
                <Sector
                    cx={cx}
                    cy={cy}
                    innerRadius={innerRadius}
                    outerRadius={outerRadius}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    fill={fill}
                />
                <Sector
                    cx={cx}
                    cy={cy}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    innerRadius={outerRadius + 6}
                    outerRadius={outerRadius + 10}
                    fill={fill}
                />
                <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
                <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
                <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
                <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                    {`(Rate ${(percent * 100).toFixed(2)}%)`}
                </text>
            </g>
        );
    };


        onPieEnter=(data, index)=> {
            const { activeIndex } = this.state;
            this.setState({
                activeIndex: index,
            });
        }

        render() {
            const { data01,data02,data,activeIndex } = this.state;
            return (

                <Fragment>
                    <Row>
                        <Card title="TWO Level Pie">
                            <PieChart width={800} height={400}>
                                <Pie data={data01} cx={200} cy={200} outerRadius={60} fill="#8884d8" />
                                <Pie data={data02} cx={200} cy={200} innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                            </PieChart>
                        </Card>
                    </Row>
                    <Row>
                        <Card title="Custom Active Pie">
                            <PieChart width={800} height={400}>
                                <Pie
                                    activeIndex={activeIndex}
                                    activeShape={this.renderActiveShape}
                                    data={data}
                                    cx={300}
                                    cy={200}
                                    innerRadius={60}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    onMouseEnter={this.onPieEnter}
                                />
                            </PieChart>

                        </Card>

                    </Row>

                    

                </Fragment>

            );
        }
    }
export default PieComp;

