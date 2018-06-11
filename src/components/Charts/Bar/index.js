import React, { Component } from 'react';
import { Chart, Axis, Tooltip, Geom, Legend, Coord } from 'bizcharts';
import Debounce from 'lodash-decorators/debounce';
import Bind from 'lodash-decorators/bind';
import DataSet from '@antv/data-set';
import autoHeight from '../autoHeight';
import styles from '../index.less';
import * as chartDataPreprocessor from '../../../utils/ChartsDataPreprocessor';
import * as utils from '../../../utils/utils';

@autoHeight()
export default class Bar extends Component {

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
    const { data = [], autoLabel = true, dimensions = [], measures = [], measuresInfo = [], measureValFormats = {} } = this.props;
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
//This prepares AliasNames and formatting and etc...
getMsrFormatLable = (text) => {
  const { dimensions, measures, measureValFormats } = this.props;
  var formatsObj = chartDataPreprocessor.getMeasureformats(measureValFormats, measures[0]);
  console.log("formatsObj" + JSON.stringify(formatsObj));
  //date format....
  if (formatsObj['type'] == "date") {
    text = utils.convertStringToDate(text);
    return text;
  }
  //Currency symbol..
  else if (formatsObj['symbol'].length > 0) {
    text = chartDataPreprocessor.shortenLargeNumber(text);
    console.log("formatsObjPassed case:" + JSON.stringify(text));
    return formatsObj['symbol'] + text;
  }//normal number format..
  else {
    return chartDataPreprocessor.shortenLargeNumber(text);
  }
  return text

}


//This prepares AliasNames and formatting and etc...
getDimFormatLable = (text) => {
    return chartDataPreprocessor.getDimFormatLable(text);
}


measuresAxisformatter = (text, item, index) => {
 return this.getMsrFormatLable(text);
}


dimAxisformatter = (text, item, index) => {
  return this.getDimFormatLable(text);
 }




  //This generates the Bar chart dynamically by using the data and config we passed...
  generateBarChart = (data) => {
    //get the properties from this use dims and measures and form columns and etc, conigurations...
    const { dimensions, measures, measureValFormats } = this.props;

    if (data) {
     // console.log("Bar data is" + JSON.stringify(data));

      const ds = new DataSet();
      const dv = ds.createView().source(data);

      dv.transform({
        type: 'fold',
        fields: measures,
        key: 'key',
        value: 'value',
      });

      const scale = this.getScale();
      console.log("scale props are" + JSON.stringify(scale));
      //NOw lets pass the above to chart and construct the chart...
      return (
        <div>
          <Chart height={window.innerHeight / 1.5} data={dv} scale={scale} forceFit>
            <Legend />
            <Coord transpose scale={[1, -1]} />
            <Axis name="key" label={{ formatter: this.dimAxisformatter }} />
          <Axis name="value" position={'right'} label={{ formatter: this.measuresAxisformatter }} />
            
            <Tooltip />
            <Geom type="interval" position="key*value" color={'key'} adjust={[{
              type: 'dodge',
              marginRatio: 1 / 32
            }]} />
          </Chart>
        </div>
      );
    }
  }


  //This prepares AliasNames and formatting and etc...
  getScale = () => {
    const { dimensions, measures, measureValFormats } = this.props;
    var scaleProps = chartDataPreprocessor.getScaleProps(measures, dimensions, measureValFormats);
    scaleProps['percent'] = { "nice": false };
    return scaleProps;

  }

  render() {

    const { data } = this.props;
    return (
      <div>
        {this.generateBarChart(data)}
      </div>
    )
  }
}