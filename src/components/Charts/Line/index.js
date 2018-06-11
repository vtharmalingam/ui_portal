import React, { Component } from 'react';
import { Chart, Geom, Axis, Tooltip, Coord, Label, Legend, View, Guide, Shape } from 'bizcharts';
const { Text } = Guide;
import DataSet from '@antv/data-set';
import Debounce from 'lodash-decorators/debounce';
import Bind from 'lodash-decorators/bind';
import autoHeight from '../autoHeight';
import styles from '../index.less';
import * as chartDataPreprocessor from '../../../utils/ChartsDataPreprocessor';
import * as utils from '../../../utils/utils';
@autoHeight()
export default class Line extends Component {

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

  //This prepares AliasNames and formatting and etc...
  getScale = () => {
    const { dimensions, measures, measureValFormats } = this.props;
    var scaleProps = chartDataPreprocessor.getScaleProps(measures, dimensions, measureValFormats);
    return scaleProps;

  }


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

  tooltipFormat = [
    'key*percent',
    (k, p) => ({
      name: k,
      value: `${(p * 100).toFixed(2)}%`,
    }),
  ];
  //This generates the Funnel chart dynamically by using the data and config we passed...
  generateLineChart = (data) => {
    //get the properties from this use dims and measures and form columns and etc, conigurations...
    const { dimensions, measures, measureValFormats } = this.props;

    //Get the cols
    const scale = this.getScale();

    const ds = new DataSet();
    const dv = ds.createView().source(data);

    /**
     * Important:On transform,we mainly deal wwith measures,we can also do dimension aswell
     * 
     * below key is the name that you are giving to measures
     * value is the measures value reference--->by this value reference we can mention the measure values
     */
    dv.transform({
      type: 'fold',
      fields: measures,
      key: 'measurekey',
      value: 'measurevalue',
    });

    const title = {
      autoRotate: { Boolean }, // Automatic rotation is required, default is true. 
      Offset: { Number }, // Set the distance from the title axis to the coordinate axis 
      textStyle: {
        fontSize: ' 12 ',
        textAlign: ' center ',
        Fill: ' #999 ',
        fontWeight: ' bold ',
        Rotate: 30
      }, // Axis text attribute configuration 
      position: ' start ' || ' center ' || ' end ', // Title position, ** Add ** 
    }

    {/* formatter(text, item, index) {}, */ }
    return (
      <div>
        <Chart height={window.innerHeight / 1.5} data={dv} forceFit scale={scale}>
          <Axis name="key" label={{ formatter: this.dimAxisformatter }} />
          <Axis name="measurevalue" label={{ formatter: this.measuresAxisformatter }} />
          <Legend />
          <Tooltip crosshairs={{ type: "y" }} />
          <Geom type="line" position="key*measurevalue" size={2} color={'measurekey'} tooltip={this.tooltipFormat } />
          <Geom type='point' position="key*measurevalue" size={4} shape={'circle'} color={'measurekey'}
            style={{ stroke: '#fff', lineWidth: 1 }} />
        </Chart>
      </div>
    );

  }

  render() {
    const { data } = this.props;
    return (
      <div>
        {this.generateLineChart(data)}
      </div>
    )
  }
}
