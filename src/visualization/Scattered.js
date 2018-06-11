import React, { Fragment } from "react";
import { render } from "react-dom";
import { BarChart, Bar, XAxis, YAxis,ZAxis, CartesianGrid, Tooltip, Legend, Brush, ReferenceLine, AreaChart, ComposedChart, Scatter,ScatterChart } from 'recharts';
import { Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Menu, Dropdown } from 'antd';

class ScatteredComp extends React.Component {

    parseDomain = () => {
        const { data1, data01, data2, data02, brushData } = this.state;
        return [
            0,
            Math.max.apply(null, [
                data01.map(entry => entry.value),
                data02.map(entry => entry.value)
            ])
        ];
    };

    constructor() {
        super();
        this.state = {
            data1: [{ x: 100, y: 200, z: 200 }, { x: 120, y: 100, z: 260 },
            { x: 170, y: 300, z: 400 }, { x: 140, y: 250, z: 280 },
            { x: 150, y: 400, z: 500 }, { x: 110, y: 280, z: 200 }],
            data2: [{ x: 200, y: 260, z: 240 }, { x: 240, y: 290, z: 220 },
            { x: 190, y: 290, z: 250 }, { x: 198, y: 250, z: 210 },
            { x: 180, y: 280, z: 260 }, { x: 210, y: 220, z: 230 }],
            data01: [
                { hour: '12a', index: 1, value: 170 },
                { hour: '1a', index: 1, value: 180 },
                { hour: '2a', index: 1, value: 150 },
                { hour: '3a', index: 1, value: 120 },
                { hour: '4a', index: 1, value: 200 },
                { hour: '5a', index: 1, value: 300 },
                { hour: '6a', index: 1, value: 400 },
                { hour: '7a', index: 1, value: 200 },
                { hour: '8a', index: 1, value: 100 },
                { hour: '9a', index: 1, value: 150 },
                { hour: '10a', index: 1, value: 160 },
                { hour: '11a', index: 1, value: 170 },
                { hour: '12a', index: 1, value: 180 },
                { hour: '1p', index: 1, value: 144 },
                { hour: '2p', index: 1, value: 166 },
                { hour: '3p', index: 1, value: 145 },
                { hour: '4p', index: 1, value: 150 },
                { hour: '5p', index: 1, value: 170 },
                { hour: '6p', index: 1, value: 180 },
                { hour: '7p', index: 1, value: 165 },
                { hour: '8p', index: 1, value: 130 },
                { hour: '9p', index: 1, value: 140 },
                { hour: '10p', index: 1, value: 170 },
                { hour: '11p', index: 1, value: 180 },
            ],
            data02: [
                { hour: '12a', index: 1, value: 160 },
                { hour: '1a', index: 1, value: 180 },
                { hour: '2a', index: 1, value: 150 },
                { hour: '3a', index: 1, value: 120 },
                { hour: '4a', index: 1, value: 200 },
                { hour: '5a', index: 1, value: 300 },
                { hour: '6a', index: 1, value: 100 },
                { hour: '7a', index: 1, value: 200 },
                { hour: '8a', index: 1, value: 100 },
                { hour: '9a', index: 1, value: 150 },
                { hour: '10a', index: 1, value: 160 },
                { hour: '11a', index: 1, value: 160 },
                { hour: '12a', index: 1, value: 180 },
                { hour: '1p', index: 1, value: 144 },
                { hour: '2p', index: 1, value: 166 },
                { hour: '3p', index: 1, value: 145 },
                { hour: '4p', index: 1, value: 150 },
                { hour: '5p', index: 1, value: 160 },
                { hour: '6p', index: 1, value: 180 },
                { hour: '7p', index: 1, value: 165 },
                { hour: '8p', index: 1, value: 130 },
                { hour: '9p', index: 1, value: 140 },
                { hour: '10p', index: 1, value: 160 },
                { hour: '11p', index: 1, value: 180 },
            ]

        }
    }

    render() {
        const { data1, data01, data2, data02, brushData } = this.state;
        const domain = this.parseDomain();
        const range = [16, 225];
        return (

            <Fragment>
                <Row>
                    <Card title="SimpleScatterChart">
                        <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                            <XAxis dataKey={'x'} type="number" name='stature' unit='cm' />
                            <YAxis dataKey={'y'} type="number" name='weight' unit='kg' />
                            <CartesianGrid />
                            <Scatter name='A school' data={data1} fill='#8884d8' />
                            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                        </ScatterChart>
                    </Card>
                </Row>
                <Row>
                    <Card title="ThreeDimScatterChart">
                        <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                            <XAxis type="number" dataKey={'x'} name='stature' unit='cm' />
                            <YAxis type="number" dataKey={'y'} name='weight' unit='kg' />
                            <ZAxis dataKey={'z'} range={[60, 400]} name='score' unit='km' />
                            <CartesianGrid />
                            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                            <Legend />
                            <Scatter name='A school' data={data1} fill='#8884d8' shape="star" />
                            <Scatter name='B school' data={data2} fill='#82ca9d' shape="triangle" />
                        </ScatterChart>

                    </Card>

                </Row>

                <Row>
                    <Card title="JointLineScatterChart">
                        <ScatterChart width={600} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                            <XAxis type="number" dataKey={'x'} name='stature' unit='cm' />
                            <YAxis type="number" dataKey={'y'} name='weight' unit='kg' />
                            <ZAxis range={[100]} />
                            <CartesianGrid />
                            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                            <Legend />
                            <Scatter name='A school' data={data1} fill='#8884d8' line shape="cross" />
                            <Scatter name='B school' data={data2} fill='#82ca9d' line shape="diamond" />
                        </ScatterChart>

                    </Card>

                </Row>
                <Row>
                    <Card title="BubbleChart">
                        <div>
                            <ScatterChart width={800} height={60} margin={{ top: 10, right: 0, bottom: 0, left: 0 }}>
                                <XAxis type="category" dataKey="hour" interval={0} tick={{ fontSize: 0 }} tickLine={{ transform: 'translate(0, -6)' }} />
                                <YAxis type="number" dataKey="index" name="sunday" height={10} width={80} tick={false} tickLine={false} axisLine={false} label={{ value: 'Sunday', position: 'insideRight' }} />
                                <ZAxis type="number" dataKey="value" domain={domain} range={range} />
                                <Tooltip cursor={{ strokeDasharray: '3 3' }} wrapperStyle={{ zIndex: 100 }} content={this.renderTooltip} />
                                <Scatter data={data01} fill='#8884d8' />
                            </ScatterChart>

                            <ScatterChart width={800} height={60} margin={{ top: 10, right: 0, bottom: 0, left: 0 }}>
                                <XAxis type="category" dataKey="hour" name="hour" interval={0} tick={{ fontSize: 0 }} tickLine={{ transform: 'translate(0, -6)' }} />
                                <YAxis type="number" dataKey="index" height={10} width={80} tick={false} tickLine={false} axisLine={false} label={{ value: 'Monday', position: 'insideRight' }} />
                                <ZAxis type="number" dataKey="value" domain={domain} range={range} />
                                <Tooltip cursor={{ strokeDasharray: '3 3' }} wrapperStyle={{ zIndex: 100 }} content={this.renderTooltip} />
                                <Scatter data={data02} fill='#8884d8' />
                            </ScatterChart>

                            <ScatterChart width={800} height={60} margin={{ top: 10, right: 0, bottom: 0, left: 0 }}>
                                <XAxis type="category" dataKey="hour" name="hour" interval={0} tick={{ fontSize: 0 }} tickLine={{ transform: 'translate(0, -6)' }} />
                                <YAxis type="number" dataKey="index" height={10} width={80} tick={false} tickLine={false} axisLine={false} label={{ value: 'Tuesday', position: 'insideRight' }} />
                                <ZAxis type="number" dataKey="value" domain={domain} range={range} />
                                <Tooltip cursor={{ strokeDasharray: '3 3' }} wrapperStyle={{ zIndex: 100 }} content={this.renderTooltip} />
                                <Scatter data={data01} fill='#8884d8' />
                            </ScatterChart>

                            <ScatterChart width={800} height={60} margin={{ top: 10, right: 0, bottom: 0, left: 0 }}>
                                <XAxis type="category" dataKey="hour" name="hour" interval={0} tick={{ fontSize: 0 }} tickLine={{ transform: 'translate(0, -6)' }} />
                                <YAxis type="number" dataKey="index" height={10} width={80} tick={false} tickLine={false} axisLine={false} label={{ value: 'Wednesday', position: 'insideRight' }} />
                                <ZAxis type="number" dataKey="value" domain={domain} range={range} />
                                <Tooltip cursor={{ strokeDasharray: '3 3' }} wrapperStyle={{ zIndex: 100 }} content={this.renderTooltip} />
                                <Scatter data={data02} fill='#8884d8' />
                            </ScatterChart>

                            <ScatterChart width={800} height={60} margin={{ top: 10, right: 0, bottom: 0, left: 0 }}>
                                <XAxis type="category" dataKey="hour" name="hour" interval={0} tick={{ fontSize: 0 }} tickLine={{ transform: 'translate(0, -6)' }} />
                                <YAxis type="number" dataKey="index" height={10} width={80} tick={false} tickLine={false} axisLine={false} label={{ value: 'Thursday', position: 'insideRight' }} />
                                <ZAxis type="number" dataKey="value" domain={domain} range={range} />
                                <Tooltip cursor={{ strokeDasharray: '3 3' }} wrapperStyle={{ zIndex: 100 }} content={this.renderTooltip} />
                                <Scatter data={data01} fill='#8884d8' />
                            </ScatterChart>

                            <ScatterChart width={800} height={60} margin={{ top: 10, right: 0, bottom: 0, left: 0 }}>
                                <XAxis type="category" dataKey="hour" name="hour" interval={0} tick={{ fontSize: 0 }} tickLine={{ transform: 'translate(0, -6)' }} />
                                <YAxis type="number" dataKey="index" height={10} width={80} tick={false} tickLine={false} axisLine={false} label={{ value: 'Friday', position: 'insideRight' }} />
                                <ZAxis type="number" dataKey="value" domain={domain} range={range} />
                                <Tooltip cursor={{ strokeDasharray: '3 3' }} wrapperStyle={{ zIndex: 100 }} content={this.renderTooltip} />
                                <Scatter data={data02} fill='#8884d8' />
                            </ScatterChart>

                            <ScatterChart width={800} height={60} margin={{ top: 10, right: 0, bottom: 0, left: 0 }}>
                                <XAxis type="category" dataKey="hour" name="hour" interval={0} tickLine={{ transform: 'translate(0, -6)' }} />
                                <YAxis type="number" dataKey="index" height={10} width={80} tick={false} tickLine={false} axisLine={false} label={{ value: 'Saturday', position: 'insideRight' }} />
                                <ZAxis type="number" dataKey="value" domain={domain} range={range} />
                                <Tooltip cursor={{ strokeDasharray: '3 3' }} wrapperStyle={{ zIndex: 100 }} content={this.renderTooltip} />
                                <Scatter data={data01} fill='#8884d8' />
                            </ScatterChart>
                        </div>

                    </Card>

                </Row>

            </Fragment>

        );
    }
}
export default ScatteredComp;

