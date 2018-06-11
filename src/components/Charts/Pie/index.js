import React, { Component } from 'react';
import { Chart, Geom, Axis, Tooltip, Coord, Label, Legend, View, Guide, Shape } from 'bizcharts';
import { Divider } from 'antd';
import classNames from 'classnames';
import ReactFitText from 'react-fittext';
import Debounce from 'lodash-decorators/debounce';
import Bind from 'lodash-decorators/bind';
import autoHeight from '../autoHeight';
import { DataSet } from '@antv/data-set';
const { DataView } = DataSet;
const { Html } = Guide;
import styles from './index.less';

/* eslint react/no-danger:0 */
@autoHeight()
export default class Pie extends Component {

  state = {
    autoHideXLabels: false,
  };

  componentDidMount() {
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  @Bind()
  @Debounce(400)
  resize() {
    if (!this.node) {
      return;
    }
    const canvasWidth = this.node.parentNode.clientWidth;
    if (!autoLabel) {
      return;
    }
    const minWidth = data.length * 30;
    const { autoHideXLabels } = this.state;

    if (canvasWidth <= minWidth) {
      if (!autoHideXLabels) {
        this.setState({
          autoHideXLabels: true,
        });
      }
    } else if (autoHideXLabels) {
      this.setState({
        autoHideXLabels: false,
      });
    }
  }

  handleRoot = (n) => {
    this.root = n;
  };

  handleRef = (n) => {
    this.node = n;
  };



  //This generates the pie chart dynamically by using the data and config we passed...
  generatePieChart = (data) => {
    //get the properties from this use dims and measures and form columns and etc, conigurations...
    const { dimensions, measures, measureValFormats } = this.props;

    const dv = new DataView();
    dv.source(data).transform({
      type: 'percent',
      field: measures[0],
      dimension: 'key',
      as: 'percent',
    }
    
  );
  
   //This gives us opportunity to format,alias and many more...
    const scale = {
      percent: {
        formatter: val => {
          val = (val * 100);
          return Number(val).toFixed(2)+ '%';
        }
      } 



    }
    //NOw lets pass the above to chart and construct the chart...

    return (

      <div>

        <Chart height={window.innerHeight/1.5} data={dv} scale={scale} padding={[80, 100, 80, 80]} forceFit>
          <Coord type={'theta'} radius={0.75} innerRadius={0.6} />
          <Axis name="percent"/>
          <Legend position='right' offsetY={-window.innerHeight / 2 + 120} offsetX={-100} />
          <Tooltip
            showTitle={false}
            itemTpl='<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}:{value}</li>'
          />
          <Guide >
            <Html position={['50%', '50%']}
             html='<div style="color:#8c8c8c;font-size:1.16em;text-align: center;width: 10em;">
             <br><span style="color:#262626;font-size:2.5em">200</span></div>' alignX='middle' alignY='middle' />
          </Guide>
          <Geom
            type="intervalStack"
            position="percent"
            color='key'
            tooltip={['key*percent', (key, percent) => {
              percent = Number(percent * 100).toFixed(2) + '%';
              return {
                name: key,
                value: percent
              };
            }]}
            style={{ lineWidth: 1, stroke: '#fff' }}
          >
            <Label content='percent' formatter={(val, key) => {
              return key.point.key + ': ' + val;
            }} />
          </Geom>
        </Chart>


      </div>
    );
  }
  render() {
    const { data } = this.props;
    return (
      <div>
        {this.generatePieChart(data)}
      </div>
    )
  }

}
