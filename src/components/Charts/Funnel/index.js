import React, { Component } from 'react';
import { Chart, Geom, Axis, Tooltip, Coord, Label, Legend, View, Guide, Shape} from 'bizcharts';
const { Text } = Guide;
import Debounce from 'lodash-decorators/debounce';
import Bind from 'lodash-decorators/bind';
import autoHeight from '../autoHeight';
import styles from '../index.less';
import { DataSet } from '@antv/data-set';
import * as ChartDataPrpeProc from '../../../utils/ChartsDataPreprocessor'
const { DataView } = DataSet;
@autoHeight()
class Funnel extends Component {
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
    const { data = [], autoLabel = true,dimensions = [],measures = [],measureValFormats = {} } = this.props;
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
  generateFunnelChart = (data) =>{
    //get the properties from this use dims and measures and form columns and etc, conigurations...
    const { dimensions,measures,measureValFormats } = this.props; 

    //Get the cols/scale
    let cols = this.getCols();
    //console.log("funnel data is"+JSON.stringify(data));
    const dv = new DataView().source(data);
    dv.transform({
      type: 'percent',
      field: measures[0],//as pyramid is one dim and 1 measure pass first measure as field..
      dimension: 'key',
      value:'value',
      as: 'percent'
    });

    //For funnel we show the highest value at the begining slowly decrease ie..Descending
    dv.transform({
      type: 'sort-by',
      field: measures[0],
      order: 'DESC'        // default is ASC,DESC is reversed order.
  })

    
   let dataProvider = dv.rows;

   console.log("DataProvider:"+ JSON.stringify(dataProvider));
    let measure = measures[0];
    //NOw lets pass the above to chart and construct the chart...
 
    return (
     
      <div>
        
          <Chart height={window.innerHeight} data={dataProvider} scale={cols} padding={[ 20, 120, 95 ]} forceFit>
          <Tooltip showTitle={false}
          
          itemTpl='<li data-index={index} style="margin-bottom:4px;">
           <span style="background-color:{color};" 
           class="g2-tooltip-marker"></span>{name}<br/>
           <span style="padding-left: 16px">{value}</span><br/>
           <span style="padding-left: 16px">proportion：{percent}</span><br/></li>'/>
         
        

          <Coord type='rect' transpose scale={[1,-1]} />
          <Legend />
          <Guide >
          {dataProvider.map((obj) => {
              return  (
            <Text 
              top={true} 
              position={{
              key: obj.key,
              percent: 'median'}}
              content={Number(obj.percent * 100).toFixed(2) + '%'}
              style={{
              fill: '#fff',
              fontSize: '12',
              textAlign: 'center',
              shadowBlur: 2,
              shadowColor: 'rgba(0, 0, 0, .45)'}}
            />
            )
          })}
          </Guide>
          <Geom type="intervalSymmetric" position="key*percent" shape='funnel'
           color={['key', [ '#0050B3', '#1890FF', '#40A9FF', '#69C0FF', '#BAE7FF' ]]}
          tooltip={['key*value*percent', (key, value, percent) => {
            return {
              name: key,
              percent : Number(percent * 100).toFixed(2) + '%',
              value: value
            };
          }]} 
            >
          <Label content={['key*value',(key, value) => {
            return key + ' ' + Number(value).toFixed(2);
          }]}
          offset={35}
          labeLine={{lineWidth: 1,
              stroke: 'rgba(0, 0, 0, 0.15)'}}
            />
          </Geom>
        </Chart>
      )

          

        </div>
    );


    




  }

  //This prepares cols and returns...
  getCols=()=>{
    const { dimensions, measures, measureValFormats } = this.props;
    var scaleProps = ChartDataPrpeProc.getScaleProps(measures, dimensions, measureValFormats);
    scaleProps['percent'] = { "nice": false };
    console.log("sclae propes"+JSON.stringify(scaleProps));
    return scaleProps;
  }

  



  render() {
  
    const { data } = this.props; 
    return(
      <div>
      { this.generateFunnelChart (data)}
      </div>
    )
  }
}

export default Funnel;
