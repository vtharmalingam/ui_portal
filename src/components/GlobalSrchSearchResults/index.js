import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Input, Icon, AutoComplete } from 'antd';
import classNames from 'classnames';
import styles from './index.less';
import Tree, { TreeNode } from 'rc-tree';
import 'rc-tree/assets/index.css';
import { Card as MaterialCard, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import * as utils from '../../utils/utils'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Slider from "react-slick";
import { List, Avatar, Popover } from 'antd';
import InsLkupOptionsComp from '../../components/InsightLkpOptions';
import InsightMenu from '../../components/InsightMenu';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class GlobalSrchSearchResults extends PureComponent {

  static defaultProps = {
    inslkupMetadata: {},
    data: [],
    selectedItemData: {},
    perspective: "",
    onLkpOptionSelected: () => { },
  };
  static propTypes = {
    className: PropTypes.string,
    perspective: PropTypes.string,
    data: PropTypes.array,
    inslkupMetadata: PropTypes.object,
    selectedItemData: PropTypes.object,
    onLkpOptionSelected: PropTypes.func,
  };

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  /**
   * Styles to control title and sub titles of material card component 
   * TODO: we can even  move below styles to the CSS also
   * TODO: We can create carousel as separate comp..
   */

  materialCardstyle = {
    padding: 1,
    paddingLeft: 1,
    title: {
      fontSize: 1,
      fontWeight: 'bold',
      display: 'none',
      padding: 1
    },
    subtitle: {
      fontSize: 11,

    }
  }
  /**
   * Styles related to carousel
   */

  carouselSettings = {
    dots: true,
    focusOnSelect: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <this.SampleNextArrow />,
    prevArrow: <this.SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  //carousel left and right arrows to move..its styles
  SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }

  SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }
  ///////////////////////////////////////////////////////////////////

  /**
   * This function prepares about details like classid:123  MasterDocId:235
   */
  getAboutDetails = (item) => {

    //In obejct take all the keys..to diaply left hand side along with its values..like classId:xxx
    var keys = Object.keys(item);
    //console.log("keys are" + keys);
    var aboutSectionDetaiils = [];
    //Loop each key and place like key:value
    for (var j = 0; j < keys.length; j++) {

      if (typeof item[keys[j]] === 'string') {//Todo:we will show all the types
        var val = item[keys[j]];
        aboutSectionDetaiils.push(
          <div >
            <ul style={{ listStyleType: 'none', fontSize: 10 }}><b>{utils.toTitleCase(keys[j])}</b>
              <li style={{ color: 'blue', fontSize: 10, }}>{utils.toTitleCase(val)}</li>

            </ul>
          </div>);
      }
    }
    return aboutSectionDetaiils;
  }


  //This will read all perspectives and put popover for each perspective
  //along with their inisght lookups
  preparePerspectivePopOvers = (item) => {
    var perspectives = item['datamarts']
    var allPopOvers = [];
    //Loop each perspective
    for (var i = 0; i < perspectives.length; i++) {
      var perspective = perspectives[i];
      var title = perspective == 'support' ? "TICKETS" : 'AS  ' + perspective;
      allPopOvers.push(
        <Popover content={this.generateOntheFlyLookupOPtions(item, perspective)}
          title={perspective.toUpperCase() + ' Insights -[' + item['primary_name'] + ']'}
          onVisibleChange={this.handleVisibleChange}>
          <FlatButton label={utils.toTitleCase(title)}
            labelStyle={{ fontSize: '10px' }} primary={true} />
        </Popover>
      );
    }
    return allPopOvers;
  }

  /**
   * Optimization:Here we read the insight lookup data of each perspective from cache...
   * This Function return the dom elemenet dynamically based on the perspective cache data that we  pass
   * it will construct all insight lookup options of all the perspective and retuns them all
   */
  generateOntheFlyLookupOPtions(selectedItemData, perspective) {
    //inslkupMetadat is cached insightindex data that we store in cache for each perspective..
    const { inslkupMetadata } = this.props;
    return (
      <div >
        <InsightMenu data={inslkupMetadata[perspective]}
          selectedItemData={selectedItemData} perspective={perspective}
          onLkpOptionSelected={this.props.onLkpOptionSelected} />
      </div>
    )
  }


  /**
   * Ths function will return the card which contains ABout and perspective links to show the insights on pophover
   */
  getResultItemCard = (item) => {

    return (

      <MuiThemeProvider>
        <MaterialCard>
          <CardHeader
            title={utils.toTitleCase(item.primary_name)}
            style={this.materialCardstyle} titleStyle={this.materialCardstyle.title}
            subtitleStyle={this.materialCardstyle.subtitle}
            subtitle={utils.toTitleCase(item.country)}
            actAsExpander={false}
            showExpandableButton={false}
            avatar={'src/assets/countries/' + item['country_code'] + '.png'}
          />

          <CardActions>
            <Popover content={this.getAboutDetails(item)} title="ABOUT">

              <FlatButton label="ABOUT" labelStyle={{ fontSize: '10px' }} primary={true} />
            </Popover>

            {/* Form here perspective links will construct.. */}
            {this.preparePerspectivePopOvers(item)}
          </CardActions>
        </MaterialCard>
      </MuiThemeProvider>
    )

  }


  /**
    * Function prepares list to show global search results..
    * Important:Here we are using MAterialui Card to display- details in collapse section and
    * actions in the card.
    * 
    * Each action conatins -about and the perspectives which are qualified for each item
    * 
    */
  showMatchedCompanies(data) {

    if (data) {

      console.log("search results are" + data);
      var allCards = [];
      //Lets loop all the objects in array to display list of results...
      for (var i = 0; i < data.length; i++) {
        //take each object
        var item = data[i];

        allCards.push(//Now lets push all the cards and actions to the material card...
          // this is required to get styles applied in materialui
          <MuiThemeProvider>
            <MaterialCard>
              <CardHeader
                title={utils.toTitleCase(item.primary_name)}
                style={this.materialCardstyle} titleStyle={this.materialCardstyle.title}
                subtitleStyle={this.materialCardstyle.subtitle}
                subtitle={utils.toTitleCase(item.country)}
                actAsExpander={false}
                showExpandableButton={false}
                avatar={'src/assets/countries/' + item['country_code'] + '.png'}
              />

              <CardActions>
                <Popover content={this.getAboutDetails(item)} title="ABOUT">
                  {/* <img src={about} /> */}
                  <FlatButton label="ABOUT" labelStyle={{ fontSize: '10px' }} primary={true} />
                </Popover>

                {/* Form here perspective links will construct.. */}
                {this.preparePerspectivePopOvers(item)}
              </CardActions>
            </MaterialCard>
          </MuiThemeProvider>
        )
      }


      // Here we are using Carousel component to display search result items,once user clicks on right or left arrows
      //     remaning items will be shown..Below component supports multile items visibility at given point of time aswell
      return (
        <div style={{ padding: '10px' }}>
          <Slider {...this.carouselSettings}>
            {allCards}
          </Slider>
        </div>)
    }
  }


  //This component renders method...
  render() {
    const { data } = this.props;
    return (
      <div className={styles.searchResultsContainer}>
        {this.showMatchedCompanies(data)}
      </div>

    );
  }
}
