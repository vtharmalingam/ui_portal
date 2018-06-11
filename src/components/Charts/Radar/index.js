import React, { Component } from 'react';
import { Chart, Tooltip, Axis, Legend, Coord, Line, Point, Area } from 'bizcharts';
import { Row, Col } from 'antd';
import autoHeight from '../autoHeight';
import styles from './index.less';
import Debounce from 'lodash-decorators/debounce';
import Bind from 'lodash-decorators/bind';
import DataSet from '@antv/data-set';

/* eslint react/no-danger:0 */
@autoHeight()
export default class Radar extends Component {
  
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



  //This generates the Funnel chart dynamically by using the data and config we passed...
  generateRadarChart = (data) =>{
    //get the properties from this use dims and measures and form columns and etc, conigurations...
    const { dimensions,measures,measureValFormats } = this.props; 

    //Get the cols
    let cols = this.getCols();
    console.log("funnel data is"+JSON.stringify(data));
    const dv = new DataSet.View().source(data);

    dv.transform({
      type: 'fold',
      fields: measures,
      key: 'key',
      value: 'value',//this is lookup name for measures..
    });

  
   let dataProvider = dv.rows;


   console.log("DataProvider:"+ JSON.stringify(dataProvider));
    let measure = measures[0]
    //NOw lets pass the above to chart and construct the chart...
 

      //Lets define the top level and inner level stufff..top level is dimension inner is measures

      const axis1Opts = {
        dataKey: 'key',
        line: null,
        tickLine: null,
        grid: {
          lineStyle: {
            lineDash: null
          },
          hideFirstLine: false,
        },
      };
  
      const axis2Opts = {
        dataKey: 'value',
        line: null,
        tickLine: null,
        grid: {
          type: 'polygon',
          lineStyle: {
            lineDash: null,
          },
        },
      };
  
      const coordOpts = {
        type: 'polar',
        radius: '0.8',
      };




    return (
     
      <div>
        
        <Chart forceFit height={500} data={dataProvider} padding={[20, 20, 95, 20]} scale={cols}>
        <Tooltip />
        <Axis {...axis1Opts} />
        <Axis {...axis2Opts} />
        <Legend dataKey="key" marker="circle" offset={30} />
        <Coord {...coordOpts} />
        <Line position="key*value" color="key" size={2} />
        <Point position="key*value" color="key" size={4} shape="circle"/>
      </Chart>

          

        </div>
    );


    




  }

  //This prepares cols and returns...
  getCols=()=>{
    const scale = [{
      dataKey: 'value',
      min: 0,//TODO:This to be calculated dynamicallly....
      max: 80,
    }];
    return scale;
  }




  render() {
  
    const { data } = this.props; 
    return(
      <div>
      { this.generateRadarChart (data)}
      </div>
    )
  }
}

