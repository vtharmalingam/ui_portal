import React, { Component, Fragment } from 'react';
import { Chart, Axis, Geom, Legend,Tooltip } from 'bizcharts';
import { connect } from 'dva';
import {
  Row,
  Col,
  Icon,
  Card,
  Tabs,
  Table,
  Radio,
  DatePicker,
  
  Menu,
  Dropdown,
} from 'antd';

import numeral from 'numeral';

import {
  ChartCard,
  yuan,
  MiniArea,
  MiniBar,
  MiniProgress,
  Field,
  Bar,
  Pie,
  TimelineChart,
} from '../../components/Charts';

import NumberInfo from '../../components/NumberInfo';
import { getTimeDistance } from '../../utils/utils';
import styles from './Analysis.less';

const { TabPane } = Tabs;
const { RangePicker } = DatePicker;


const rankingListData = [];
for (let i = 0; i < 7; i += 1) {
  rankingListData.push({
    title: `工专路 ${i} 号店`,
    total: 323234,
  });
}

@connect(({ chart, loading }) => ({
  chart,
  loading: loading.effects['chart/fetch'],
}))


export default class Analysis extends Component {
  state = {
    salesType: 'all',
    currentTabKey: '',
    rangePickerValue: getTimeDistance('year'),
  };

  componentDidMount() {
    this.props.dispatch({
      type: 'chart/fetch',
    });
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'chart/clear',
    });
  }

  handleChangeSalesType = (e) => {
    this.setState({
      salesType: e.target.value,
    });
  };

  handleTabChange = (key) => {
    this.setState({
      currentTabKey: key,
    });
  };

  handleRangePickerChange = (rangePickerValue) => {
    this.setState({
      rangePickerValue,
    });

    this.props.dispatch({
      type: 'chart/fetchSalesData',
    });
  };

  selectDate = (type) => {
    this.setState({
      rangePickerValue: getTimeDistance(type),
    });

    this.props.dispatch({
      type: 'chart/fetchSalesData',
    });
  };

  isActive(type) {
    const { rangePickerValue } = this.state;
    const value = getTimeDistance(type);
    if (!rangePickerValue[0] || !rangePickerValue[1]) {
      return;
    }
    if (
      rangePickerValue[0].isSame(value[0], 'day') &&
      rangePickerValue[1].isSame(value[1], 'day')
    ) {
      return styles.currentDate;
    }
  }

  render() {
    const { rangePickerValue, salesType, currentTabKey } = this.state;
    const { chart, loading } = this.props;
    const {
      visitData,
      visitData2,
      salesData,
      searchData,
      offlineData,
      offlineChartData,
      salesTypeData,
      salesTypeDataOnline,
      salesTypeDataOffline,
    } = chart;

    const salesPieData =
      salesType === 'all'
        ? salesTypeData
        : salesType === 'online' ? salesTypeDataOnline : salesTypeDataOffline;

    const menu = (
      <Menu>
        <Menu.Item>Operation - 1 </Menu.Item>
        <Menu.Item>Operation - 2 </Menu.Item>
      </Menu>
    );

   



    // Here is where you control what css classes are to be appled
    //ThisCardclassNames.push ("A" === "B" ? "iconGroup" : "abs")
    // classNames = ["iconGroup"]

    // classNames = ["iconGroup", "abc"]


    const iconGroup = (
      <span className="iconGroup">
        <Dropdown overlay={menu} placement="bottomRight">
          <Icon type="ellipsis" />
        </Dropdown>
      </span>
    );

    // const iconGroup = (
    //   <span className={classNames.join(" ")} {globalClassNames.join(" ")} >
    //     <Dropdown overlay={menu} placement="bottomRight">
    //       <Icon type="ellipsis" />
    //     </Dropdown>
    //   </span>
    // );


    const columns = [
      {
        title: 'Year',
        dataIndex: 'x',
        key: 'x',
      },
      {
        title: 'Frequency',
        dataIndex: 'y',
        key: 'y',

      }
    ];

    const cols = {
      x: { alias: 'Year' },
      y: { alias: 'Frequency' }
    };


    const activeKey = currentTabKey || (offlineData[0] && offlineData[0].name);

    return (
      <Fragment>
        <Row gutter={24}>
          <Col xl={16} lg={12} md={12} sm={24} xs={24}>
          <Card  loading={loading}
              bordered={false}
              title="Lookup Data"
              extra={iconGroup}
              style={{ marginTop: 24 }}>
               <div className={styles.salesCard}>
               <div className={styles.salesBar}>
              
              
              {/* <Bar height={395} title="Lookup Data" data={salesData} /> */}

 


            </div>

               </div>
            
            </Card>
          </Col>

        
          <Col xl={6} lg={12} md={12} sm={12} xs={12}>
            <Card
              loading={loading}
              bordered={false}
              title="Lookup Data"
              extra={iconGroup}
              style={{ marginTop: 24 }} >

              <Table
                rowKey={record => record.index}
                size="small"
                columns={columns}
                dataSource={salesData}
                pagination={{
                  style: { marginBottom: 0 },
                  pageSize: 5,
                }}
              />

            </Card>

          </Col>


          <Col xl={6} lg={12} md={12} sm={12} xs={12}>
            <Card
              loading={loading}
              bordered={false}
              title="Lookup Data"
              extra={iconGroup}
              style={{ marginTop: 24 }} >

              <MiniArea line  data={salesData} />

            </Card>

          </Col>


          <Col xl={6} lg={12} md={12} sm={12} xs={12}>
            <Card
              loading={loading}
              bordered={false}
              title="Lookup Data"
              extra={iconGroup}
              style={{ marginTop: 24 }} >
              />

            </Card>

          </Col>


          <Col xl={12} lg={24} md={24} sm={24} xs={24}>
            <Card
              loading={loading}
              bordered={false}
              title="Lookup Data"
              extra={iconGroup}
              style={{ marginTop: 24 }} >

           <Chart height={400} data={salesData} scale={cols} forceFit>
            <Axis name="x" />
            <Axis name="y" />
            <Tooltip crosshairs={{type : "y"}}/>
            <Geom type="line" position="x*y" size={2} />
            <Geom type='point' position="xy*value" size={4} shape={'circle'} style={{ stroke: '#fff', lineWidth: 1}} />
          </Chart>

            </Card>

          </Col>



        </Row>
      </Fragment>
    );
  }
}
