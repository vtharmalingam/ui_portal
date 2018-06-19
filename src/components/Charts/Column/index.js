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
export default class Column extends Component {

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

  /**
   * 
   * Methods related to tooltip,legends and axis formatters
   *
   */


  //Formatter for Legend....
  legnedFormatter = (text) => {
    const { measures, measureValFormats } = this.props;
    var formatsObj = chartDataPreprocessor.getMeasureformats(measureValFormats, text);
    return formatsObj['desc'];
  };


  /**
   * Tooltip formatting:
   * We take Dimension name,measure name and measure value
   * and format them using measure formats description returned by back-end
   */
  tooltipFormat = [
    'key*measurekey*measurevalue',
    (dim, msr, msrval) => ({
      title: dim,
      name: this.getToolTipFormat(msr, msrval, "label"),
      value: this.getToolTipFormat(msr, msrval, "value"),
    }),

  ];

  //This prepares Tooltip format for the given measure...
  /**
   * Based on mode,we return measures formatted label or its value
   */
  getToolTipFormat = (measure, measureValue, mode) => {

    const { dimensions, measures, measureValFormats } = this.props;
    var formatsObj = chartDataPreprocessor.getMeasureformats(measureValFormats, measure);
    // console.log("formatsObj" + JSON.stringify(formatsObj));
    if (mode == 'label') {//we need only measure label....
      return formatsObj['desc']
    }
    else {//we need formatted measures value....
      //date format....
      if (formatsObj['type'] == "date") {
        measureValue = utils.convertStringToDate(measureValue);
        return measureValue;
      }
      //Currency symbol..
      else if (formatsObj['symbol'].length > 0) {
        measureValue = chartDataPreprocessor.shortenLargeNumber(measureValue);
        console.log("formatsObjPassed case:" + JSON.stringify(measureValue));
        return formatsObj['symbol'] + measureValue;
      }//normal number format..
      else {
        return chartDataPreprocessor.shortenLargeNumber(measureValue);
      }
      return measureValue
    }

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


  /*************************************************************************** */



  //This generates the Funnel chart dynamically by using the data and config we passed...
  generateColumnChart = (data) => {
    //get the properties from this use dims and measures and form columns and etc, conigurations...
    const { dimensions, measures, measureValFormats } = this.props;

    const ds = new DataSet();
    const dv = ds.createView().source(data);

    dv.transform({
      type: 'fold',
      fields: measures,
      key: 'measurekey',
      value: 'measurevalue',
    });

   // const scale = this.getScale();
    return (
      <div>
        <Chart height={window.innerHeight / 1.5} data={dv} forceFit>
          <Axis name="key" label={{ formatter: this.dimAxisformatter }} />
          <Axis name="measurevalue" label={{ formatter: this.measuresAxisformatter }} />
          <Legend itemFormatter={this.legnedFormatter} />
          <Tooltip crosshairs={{ type: "y" }} />
          <Geom type="interval" position="key*measurevalue"
            color={'measurekey'} tooltip={this.tooltipFormat}
            adjust={[{ type: ['stack'], marginRatio: 1 / 32 }]} />
        </Chart>
      </div>
    );

  }

  render() {

    const { data } = this.props;
    return (
      <div>
        {this.generateColumnChart(data)}
      </div>
    )
  }
}
