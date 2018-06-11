import { Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Menu, Dropdown, } from 'antd';
const TabPane = Tabs.TabPane;
// connect to be imported
import { connect } from 'dva';
import * as actionTypes from '../../actions/actionTypes'
import TreeComp from '../../components/TreeComp';
import InsLkupOptionsComp from '../../components/InsightLkpOptions';
import { getUiComp, getUiCompbyTypeNData } from '../../utils/UICompGen';
import { Card as MaterialCard, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// component gets wired to the model
// i.e., from 'search_org' namespace of model, import 'search_org'
@connect(({ search_org, loading }) => ({ search_org }))
class InsightLookup extends React.Component {

  constructor(props) {
    super(props);
    this.state = { componentsToShow: [], multivisuals: [] };//TODO:Can this be moved to model???
  }

  // So why do we need componentWillReceiveProps? This is the first hook that allows us to look into the
  //  upcoming Update. Here we could extract the new props and update our internal state.
  //   If we have a state that is a calculation of multiple props,
  //    we can safely apply the logic here and store the result using this.setState()
  componentWillReceiveProps(nextProps) {
    const { search_org } = this.props;
    const { insight_lookup_data } = search_org;
    if (JSON.stringify(insight_lookup_data) !== JSON.stringify(nextProps.search_org.insight_lookup_data)) {//TODO: Can be better to compare
      this.setState({
        multivisuals: this.addMultipleVisuals(nextProps.search_org.insight_lookup_data),
        componentsToShow: getUiComp(nextProps.search_org.insight_lookup_data),
      });
    }
  }

  //When user checks the node to view insight lookup,we collects the respective
  //lookup id and accordingly prepares POST req and fires request
  //From state get class id and master docid and etc..
  onCheck = (checkedKeys, info) => {
    const { search_org } = this.props;
    const { master_doc_id, class_id, perspective, request_scope, id } = search_org;

    var filteredCheckedKey = [];
    //console.log("chekcedKeys00000000000000000"+checkedKeys);
    for (var i = checkedKeys.length - 1; i >= 0; i--) {
      if (checkedKeys[i].indexOf("parent") > -1) {
        continue;
      } else {
        filteredCheckedKey.push(checkedKeys[i]);
        break;
      }
    }
    //console.log('onCheckinsight', checkedKeys, info);
    if (filteredCheckedKey.length > 0) {
      var data = {};
      data['perspective'] = perspective;
      data['class_id'] = class_id;
      data['master_doc_id'] = master_doc_id;
      data['id'] = filteredCheckedKey[filteredCheckedKey.length - 1];
      data['request_scope'] = request_scope;
      data['defaultCheckedKeys'] = filteredCheckedKey;
      //console.log(JSON.stringify(data));
      this.props.dispatch({
        type: actionTypes.FETCH_INSIGHT_LOOKUP,
        payload: data,
      });
    }

  }

  onChange = (e) => {
    const { search_org } = this.props;
    const { insight_lookup_data } = search_org;

    var visual = e.target.value;
    console.log("clicked item value is" + e.target.value);
    this.setState({
      componentsToShow: getUiCompbyTypeNData(visual, insight_lookup_data),
    })
  }

  //function checks and creates tabbar for shoiwng multiple visuals
  addMultipleVisuals(data) {
    if (data && data.hasOwnProperty('config')) {
      var visual = data.config.ui_visualization.theme;
      var visuals = [];
      var radioButtons = [];
      var finalComp = [];
      //TODO: we need to add visual bars for showing different ui options
      if (visual.indexOf(",") > -1) {
        visuals = visual.split(",");
      }
      if (visuals.length > 0) {
        visuals.forEach(element => {
          radioButtons.push(
            <Radio.Button value={element}>{element}</Radio.Button>
          )
        }
        );
        console.log(JSON.stringify("Visuals:::;" + visuals));
        return (
          <Radio.Group value="small" onChange={this.onChange} style={{ marginBottom: 16 }}>
            {radioButtons}
          </Radio.Group>
        )
      }
    }
    return [];
  }



  buttonLCick = () => {
    console.log("button clicked");
    const { search_org } = this.props;
    const { insight_lookup_data } = search_org;

    this.setState({
      componentsToShow: getUiCompbyTypeNData("area", insight_lookup_data),
    });
  }
  
  //When user expands the all insight lookup options..
  handleExpandChange = (expanded) => {
    const { search_org } = this.props;
    const {defaultExpandAll } = search_org;

    this.props.dispatch({
      type: actionTypes.EXPAND_ALL_LKUP_OPTIONS,
      payload: expanded,
    });
    
  };

  //When user selelcts an option from insight lookup options component..
  onLkpOptionSelected = (lookupObj) => {
    const { search_org } = this.props;
    const { master_doc_id, class_id, perspective, request_scope, id } = search_org;

    var data = {};
    data['perspective'] = perspective;
    data['class_id'] = class_id;
    data['master_doc_id'] = master_doc_id;
    data['id'] = lookupObj['id'];
    data['request_scope'] = request_scope;
    //console.log(JSON.stringify(data));
    this.props.dispatch({
      type: actionTypes.FETCH_INSIGHT_LOOKUP,
      payload: data,
    });
  }

  style={
    padding: 1,
    paddingLeft:1,
    title:{
      fontSize: 1,
      fontWeight: 'bold',
      display:'none',
      padding:1
    },
    subtitle:{
      fontSize: 11,
      
    }
  }

  render() {
    const { search_org, loading } = this.props;
    const { master_doc_id, class_id, perspective, request_scope, id, insight_lookup_data,
      inslkupMetadata, defaultCheckedKeys, defaultExpandAll } = search_org;
    return (
      <div>
        {/* IN row we have two Rows one for insight lookup options
        and other for visualization..in future one more for other options */}
        <Row gutter={16}>
          <Card loading={loading}
            bordered={false}
            title="Insights & Business Information"
            style={{ marginTop: 4 }}>
            {/* First Row is for Insight lookup options..*/}
            <Row gutter={16}>
              {/* <TreeComp data={inslkupMetadata[perspective]} onCheck={this.onCheck}
                defaultCheckedKeys={defaultCheckedKeys}
                defaultExpandAll={defaultExpandAll} /> */}
              <MuiThemeProvider>
                <MaterialCard expanded={defaultExpandAll} onExpandChange={this.handleExpandChange}>
                  <CardHeader style={this.style} titleStyle={this.style.title} subtitleStyle={this.style.subtitle}
                    subtitle="All Insights"
                    actAsExpander={true}
                    showExpandableButton={true}/>
                  <CardText expandable={true}>
                    <InsLkupOptionsComp data={inslkupMetadata[perspective]}
                      onLkpOptionSelected={this.onLkpOptionSelected} />
                  </CardText>
                </MaterialCard>
                
              </MuiThemeProvider>

            </Row>

            {/* Second Row for visualization */}
            <Row gutter={24}>
              <Col>
                <Card
                  loading={loading}
                  bordered={false}
                  title="Lookup Data"
                  style={{ marginTop: 24 }} >
                  {this.state.componentsToShow}
                  {/* {getUiComp(insight_lookup_data)} */}
                </Card>
              </Col>

              <Col>
                multi visuals are here: {this.state.multivisuals}
                {<button onClick={this.buttonLCick}>Area</button>}
              </Col>

            </Row>


          </Card>
        </Row>

      </div>

    );
  }
}

export default InsightLookup;