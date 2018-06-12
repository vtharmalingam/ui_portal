import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
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
import globalImg from '../../assets/inslookup/global.png';
import countryImge from '../../assets/inslookup/country.png';
import styles from './index.less';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';


export default class InsightVisuals extends PureComponent {

  static defaultProps = {
    insightLookupData: {},
    onWorldwideClick: () => { },
    onCountrywideClick: () => { },
    showWWByDefault: Boolean,
    showDefaultVisual: Boolean,
    insightLkpTitle: "",
  };

  static propTypes = {
    className: PropTypes.string,
    showWWByDefault: PropTypes.bool,
    showDefaultVisual: PropTypes.bool,
    insightLookupData: PropTypes.object,
    selectedItemData: PropTypes.object,
    onWorldwideClick: PropTypes.func,
    onCountrywideClick: PropTypes.func,
    insightLkpTitle: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      componentsToShow: [], multivisuals: [],
      showWW: true, showCountry: false, currentVisual: ""
    };
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }


  // So why do we need componentWillReceiveProps? This is the first hook that allows us to look into the
  //  upcoming Update. Here we could extract the new props and update our internal state.
  //   If we have a state that is a calculation of multiple props,
  //    we can safely apply the logic here and store the result using this.setState()

  //If the data is new,then we calculate the visuals and shows the visuals..
  componentWillReceiveProps(nextProps) {
    const { insightLookupData, showWWByDefault, showDefaultVisual } = this.props;
    //This showWWByDefault is to revert back to worldwide incase new search is happening
    //TODO:some times our json is unable to read by javascript hence using circula-json..any other solution??
    const JSON = require('circular-json');

    if (JSON.stringify(insightLookupData) !== JSON.stringify(nextProps.insightLookupData)) {//TODO: Can be better to compare
      if (showWWByDefault) {//This means user has opted for new search,hence resetting to ww by default
        this.setState({ showWW: true, showCountry: false });
      }
      var compToShow = [];

      //showDefaultVisual true..this means  component receiving new data,so no need to show previous visual
      if (!showDefaultVisual && this.state.currentVisual.length > 0) {
        compToShow = getUiCompbyTypeNData(this.state.currentVisual, nextProps.insightLookupData);
      } else {
        compToShow = getUiComp(nextProps.insightLookupData);
      }
      var multivis = this.addMultipleVisuals(nextProps.insightLookupData);
      this.setState({
        multivisuals: multivis,
        componentsToShow: compToShow,
      });
    }
  }


  //When user changes the visual type...
  onChange = (value) => {
    const { insightLookupData } = this.props;
    var visual = value;
    // console.log("clicked item value is" + value);
    //Important:
    /**
     * Store the visual,which user has selected,so that we can show the same
     * visual when user press worldwide or country
     */
    var comp = getUiCompbyTypeNData(visual, insightLookupData);
    this.setState({
      componentsToShow: comp, currentVisual: visual
    })
  }



  //function checks and creates tabbar for shoiwng multiple visuals
  addMultipleVisuals(data) {
    if (data && data.hasOwnProperty('config')) {
      var visual = data.config.ui_visualization.theme;
      var visuals = [];
      var tabs = [];
      var finalComp = [];

      if (visual.indexOf(",") > -1) {
        visuals = visual.split(",");
      }
      if (visuals.length > 0) {
        visuals.forEach(element => {
          tabs.push(
            <TabPane tab={
              <img src={'src/assets/visualcharts/' + element + '.png'}
                alt={element} title={element} />} key={element} />
          )
        }
        );
        console.log(JSON.stringify("Visuals:::;" + visuals));
        return (
          <Tabs defaultActiveKey="1" tabPosition="right" onChange={this.onChange} style={{ width: '70px' }} >
            {tabs}
          </Tabs>
        )
      }
    }
    return [];
  }



  // buttonLCick = () => {
  //   //console.log("button clicked");
  //   const { insightLookupData } = this.props;
  //   this.setState({
  //     componentsToShow: getUiCompbyTypeNData("area", insightLookupData),
  //   });
  // }


  //when user clicks on worldwide...pass callback function to parent..
  // update only the request scope value and fir the request
  worldwideClick = () => {
    this.setState({ showCountry: true, showWW: false });
    this.props.onWorldwideClick();
  }

  //when user clicks on country wide click
  countrywideClick = () => {
    this.setState({ showCountry: false, showWW: true });
    this.props.onCountrywideClick();
  }

  render() {
    const { insightLkpTitle } = this.props;
    return (

      <div className={styles.container}>

        <Row>
          <Col span={18}>
            <small style={{fontWeight:'bold'}}>{insightLkpTitle}  </small>
          </Col>
          <Row type="flex" justify="end">
            <Col style={{ backgroundColor: "red", color: "aliceblue" }}>
              <small style={{fontWeight:'bold'}}>{this.state.showCountry ? "Worldwide Information" : "Country Specific Information"}  </small>
            </Col>
          </Row>
        </Row>
        {/* <div className={styles.resultScope}>
          <div className={styles.resultScopeHeading}>
          <small>{insightLkpTitle}  </small>
            <small>{this.state.showCountry ? "Worldwide Information" : "Country Specific Information"}  </small>
          </div>
        </div> */}

        <div className={[styles.horizontalContainer, styles.visualOptionsContainer].join(' ')}>
          <img className={this.state.showWW ? styles.show : styles.hide} style={{ cursor: "pointer" }}
            src={globalImg} onClick={this.worldwideClick} title="To see worldwide information"
          />
          <img className={this.state.showCountry ? styles.show : styles.hide} style={{ cursor: "pointer" }}
            src={countryImge} onClick={this.countrywideClick} title="To see countrywide information"
          />
          {this.state.multivisuals}
        </div>
        <div className={[styles.horizontalContainer, styles.visualsContainer].join(' ')}>
          {this.state.componentsToShow}
        </div>
      </div>

    );
  }
}
