import React, { Component } from 'react';
import { Chart, Axis, Tooltip, Geom, Legend, Coord } from 'bizcharts';
import Debounce from 'lodash-decorators/debounce';
import Bind from 'lodash-decorators/bind';
import DataSet from '@antv/data-set';
import autoHeight from '../autoHeight';
import styles from '../index.less';
import * as chartDataPreprocessor from '../../../utils/ChartsDataPreprocessor';
import * as utils from '../../../utils/utils';
import TreeMapp from "react-d3-treemap";
// Include its styles in you build process as well
import "react-d3-treemap/dist/react.d3.treemap.css";

@autoHeight()
export default class TreeMap extends Component {

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
   * As treemap doesnot recognize our data,we need to format the way it accepts..
   * 
   * Our data is like below:
   * 
   * {
    "doc_count": 17,
    "#G#orders#order_fy": [
      {
        "#M#orders#acv_usd": 577.9000244140625,
        "key": 2010,
        "#G#orders#product_solutions2": [
          {
            "#G#orders#product_class": [
              {
                "#M#orders#acv_usd": 577.9000244140625,
                "key": "module (suite)",
                "doc_count": 1
              }
            ],
            "#M#orders#acv_usd": 577.9000244140625,
            "key": "bu",
            "doc_count": 1
          }
        ],
        "doc_count": 1
      },
      {} ]
  }
  /////////////////////////////////
  
  This to be converted to belwo format...
   * 
   * {
      "name": "flare",
      "children": [
        {
          "name": "analytics",
          "value":"xx",
          "children": [
            {
              "name": "cluster",
              "children": [
                {
                "name":"",
                "value":""
                }
              ]
            }
          ]
        }
      }
   * 
   *
   */

  /**
   * Steps for transformation:
   * Convert dimensions as "children"
   * Convert measure as "vlaue"
   * Convert key as "name"
   * 
   */
  transformData = (data) => {
    const { dimensions } = this.props;
    //step1:convert dim as children:

    data = this.transformDimAsChildren(data)

    //Step2: Convert measure as "value".

    data = this.transformMeasreAsValue(data)

    //Step3: Convert key as "name".

    data = this.transformKeyAsName(data);

    //Importanthere dat is first dimension child data..
    //this does nothave dimension name in it,as tree map need object along with name and then children
    //lets add it now

    var transformedData = {};
    transformedData['name'] = chartDataPreprocessor.getDimFormatLable(dimensions[0]);
    transformedData['children'] = data;
    return transformedData;

  }


  transformDimAsChildren = (data) => {
    const { dimensions } = this.props;
    for (var i = 0; i < dimensions.length; i++) {
      var pattern = new RegExp(dimensions[i], "ig");
      var json_str = JSON.stringify(data);
      json_str = json_str.replace(pattern, "children");
      var obj = JSON.parse(json_str);
      data = obj;
    }
    return data;
  }


  transformMeasreAsValue = (data) => {
    const { measures } = this.props;
    // console.log("Measures:" + JSON.stringify(measures));
    for (var i = 0; i < measures.length; i++) {
      var pattern = new RegExp(measures[i], "ig");
      var json_str = JSON.stringify(data);
      json_str = json_str.replace(pattern, "value");
      var obj = JSON.parse(json_str);
      data = obj;
    }
    return data;

  }

  transformKeyAsName = (data) => {
    var pattern = new RegExp("key", "ig");
    var json_str = JSON.stringify(data);
    json_str = json_str.replace(pattern, "name");
    var obj = JSON.parse(json_str);
    data = obj;
    return data
  }

  //This generates the Treempa chart dynamically by using the data and config we passed...
  /**
   * Steps:
   * Convert the given data tothe required format..
   * Then pass the data to the chart
   * 
   * 
   */
  generateTreeMap = (data) => {
    //get the properties from this use dims and measures and form columns and etc, conigurations...
    const { dimensions, measures, measureValFormats } = this.props;
    if (data) {

      data = this.transformData(data);
     // console.log("Transformed Data" + JSON.stringify(data));
      //NOw lets pass the above to chart and construct the chart...
      return (
        <div>
          <TreeMapp
            height={window.innerHeight / 1.5}
             forceFit
            data={data}
            valueUnit={""}
          />
        </div>
      );
    }
  }




  render() {

    const { data } = this.props;
    return (
      <div>
        {this.generateTreeMap(data)}
      </div>
    )
  }
}