import React, { Component, Fragment } from 'react';
import * as actionTypes from '../../actions/actionTypes'
import { Chart, Axis, Geom, Legend, Tooltip } from 'bizcharts';
import { connect } from 'dva';
import styles from './DatamartSearch.less';
import { List, Avatar } from 'antd';
import { Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Menu, Dropdown, } from 'antd';
import InsightLookup from './../InsightLookup/InsightLookup';
import SortableTreeComp from './../SortableTreeCont/SortableTreeCont'
import DataMartShortcuts from '../../components/DataMartShortcuts'
import 'react-sortable-tree/style.css'; // This only needs to be imported once in your app
// component gets wired to the model
// i.e., from 'search_org' namespace of model, import 'search_org'
@connect(({ datamartsrch,search_model, loading }) => ({ datamartsrch,search_model }))
export default class DatamartSearch extends Component {
  componentDidMount() {
    const { datamartsrch, loading,urlparams } = this.props;

    this.props.dispatch({
      type: 'datamartsrch/UPDATE_PERSPECTIVE',
      payload:urlparams['datamart']
    });
    this.props.dispatch({
      type: 'datamartsrch/fetchDBReports',
    });
  }

  /**
   * Function prepares list to show global search results..
   * 
   */
  showMatchedCompanies(data) {
    if (data) {
      const listItems = data.map((company) =>
        <ul width="100px" height="100px" style={{ "cursor": "pointer" }}
          key={company.class_id}
          onClick={this.init_datamart_shortcuts.bind(this, company)}
          value={company.primary_name}
          id={company.class_id} data={company}
          active={true} >
          {company.primary_name}
        </ul>
      );

      return (
        <div>
          {listItems}
        </div>
      )
    }
  }


  //When user clicks on list item(mathes from list)
  init_datamart_shortcuts(data) {
    this.props.dispatch(
      {
        type: actionTypes.INIT_DATAMART_SHORTCUTS,//Action is constant defined in actionTypes.js
        payload: {
          class_id: data.class_id, master_doc_id: data.master_doc_id, perspectives: data['datamarts'],
          shortcuts: this.props.inslkpShortcuts,
          request_scope: ""
        }
      }
    );
  }

  //When user clicks on Shortcut..
  shortcutSelelcted = (e) => {
    //console.log("clciked----" + e.item.props.perspective);
    //Lets prepare the post resquest with clas id,perspective and lookup id
    var data = e.item.props.data;
    data['perspective'] = e.item.props.perspective;
    data['id'] = e.item.props.id;

    //For view all insights option we need to shwo allthe lookup options
    //for shortcut no need to shwo options only visuals.if user wants he can expand and can see option
    if( data['id'] === 'all_insights' ){
      data['defaultExpandAll'] = true;
    }else{
      data['defaultExpandAll'] = false;
    }
    //When ever shortcut clickes we have to pass required params to the insightlookup comp by initiating it
    //like classId,masterdocID and paerspective etc..
    this.init_insight_lookup(data);
    //console.log("ShortcutSelected is::::"+JSON.stringify(data));
    //Now fire the request to get the selected inisght lookup for results..
    //NOTE:If selected insightlookup is view AllInsights then we no need to fire for lookup
    //justshow the lookup options thats enough..
    if( data['id'] !== 'all_insights' ){
      this.props.dispatch({
        type: actionTypes.FETCH_INSIGHT_LOOKUP,
        payload: data,
      });
    }
  }

  //When user clicks on shortcts we have to initialize lookup component withe default settings like
  //class_id,master_doc_id,perspective and etc.
  init_insight_lookup(data) {
    this.props.dispatch(
      {
        type: 'search_org/initInsightLookup',
        payload: {
          class_id: data.class_id, master_doc_id: data.master_doc_id, perspectives: data['datamarts'],
          request_scope: "", perspective: data.perspective,defaultExpandAll:data.defaultExpandAll
        }
      });
  }

  toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

 columns = [
  {
    title: 'Id',
    dataIndex: '_id',
    key: '_id',
  },
  {
    title: 'Name',
    dataIndex: 'userdef_name',
    key: 'userdef_name',

  }
];

srchRsltscolumns = [
  {
    title: 'Class Id',
    dataIndex: 'class_id',
    key: 'class_id',
  },
  {
    title: 'Primary Name',
    dataIndex: 'primary_name',
    key: 'primary_name',
  },
  {
    title: 'Country',
    dataIndex: 'country',
    key: 'country',
  },
  {
    title: 'Ins Lookups',
    dataIndex: 'lookups',
    key: 'lookups',
  }
];
//When user changes the selection on filter/criteria search grid then thi catches request..
rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    const { datamartsrch } = this.props; //Making search_org model as property
    const { criteriaSearchSrc,filterSrchSrc,dataMartShortcutsInfo,datamartSrchResults,perspective } = datamartsrch;
   
   if(selectedRows.length > 0){
    console.log('selectedRows: ', selectedRows.length);
      var newSelectedRow = selectedRows[selectedRows.length -1]
      this.props.dispatch({
        type: actionTypes.GET_REPORT_QUERY_BY_ID,
        payload: newSelectedRow['_id'],
        perspective:perspective
      });

   }
   // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};

//When user changes the selection on lookup results search grid, then this func catches request..
resultsRowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    const { datamartsrch } = this.props; //Making search_org model as property
    const { criteriaSearchSrc,filterSrchSrc,dataMartShortcutsInfo,datamartSrchResults,perspective } = datamartsrch;
   
   if(selectedRows.length > 0){
      var newSelectedRow = selectedRows[selectedRows.length -1]
      //lets add perspective and expand all to the object and initiate inslookup component
      newSelectedRow['perspective'] = perspective;
      newSelectedRow['defaultExpandAll'] = true;
      this.init_insight_lookup(newSelectedRow);
   }
 
  },
};
  render() {

    const { datamartsrch, loading,urlparams } = this.props; //Making search_org model as property
    const { criteriaSearchSrc,filterSrchSrc,dataMartShortcutsInfo,datamartSrchResults } = datamartsrch;//we need only few props from state
    return (
      <Fragment>
        <Row gutter={16}>
          {/* col 1 is for showing global search results */}
          <Col span={4}>
            <Card loading={loading}
              bordered={false}
              title={this.toTitleCase(urlparams['mode'].toUpperCase() +' Search')}
              style={{ marginTop: 4 }}>

              <div className={styles.salesCard}>
              <Table rowSelection={this.rowSelection} 
                rowKey={record => record.index}
                columns={this.columns}
                dataSource={urlparams['mode'] == 'criteria'?criteriaSearchSrc:filterSrchSrc}
                pagination={{
                  style: { marginBottom: 0 },
                  pageSize: 5,
                }}
              />
              </div>

            <div>
                <Row>
                    <button>Sort</button>
                    <button>Run</button>
                    <button>Save</button>
                </Row>
                </div>
            </Card>
          </Col>

          {/* col 2 is for showing REsults of searches that we made-filter,criteria,profile search, */}
          <Col span={8}>
          <Card loading={loading}
          bordered={false}
          title="Search Results"
          style={{ marginTop: 4 }}>

          <div className={styles.salesCard}>
          <Table rowSelection={this.resultsRowSelection} 
          rowKey={record => record.index}
          columns={this.srchRsltscolumns}
          dataSource={datamartSrchResults}
          pagination={{
            style: { marginBottom: 0 },
            pageSize: 5,
          }}
        />
          </div>
        
        </Card>
          </Col>

 {/* col 3 is for showing Insight lookup component */}
            <Col span={12}>
            <Row gutter={16}>
            {/* Insightlookup component will sit here this automatically initializes 
            whenever user selects shortcuts*/}
            <Col>
            <InsightLookup style={{width:'500px'}} />
            </Col>
            </Row>
          </Col>

        </Row>
      </Fragment>




    );
  }
}
