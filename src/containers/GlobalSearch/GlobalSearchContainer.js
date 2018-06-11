import React, { Component, Fragment } from 'react';
import * as actionTypes from '../../actions/actionTypes'
import { Chart, Axis, Geom, Legend, Tooltip } from 'bizcharts';
import { connect } from 'dva';
import styles from './GlobalSearchContainer.less';
import { List, Avatar, Popover } from 'antd';
import GlobalSrchFilters from '../../components/GlobalSrchFilters'
import GlobalSrchSearchResults from '../../components/GlobalSrchSearchResults'
import SearchInput from './../../containers/SearchInput/SearchInput'
import * as utils from '../../utils/utils';
import Debounce from 'lodash-decorators/debounce';
import InsightVisualComponent from '../../components/InsightVisuals';
import { getNestedFormattedData } from '../../utils/UICompGen';

/**
 * This is the global search container component.
 * This handles all the communications like,bringing search results,
 * handling lookup selections and getting rspective results
 * passing results to chid components to show the results..
 */

// component gets wired to the model
// i.e., from 'search_org' namespace of model, import 'search_org'
@connect(({ search_org, loading }) => ({ search_org }))
export default class GlobalSearchContainer extends Component {

  //internal state to show hide few internal controls
  state = {
    visible: false, showGlobalSearch: true,
    showWWByDefault: true, placeholderText: ""
  };


  //TODO:We are bringing the insight lookup metadata,ideally we should move this to localstorage
  //and load it in the initial stage of the application...
  componentDidMount() {
    this.props.dispatch({
      type: actionTypes.GET_GLOBAL_SEARCH_CONFIG,
    });

    showGlobalSearch: true,
      this.props.dispatch({
        type: 'search_org/fetchInsLkpMetaData',
      });

    //check and load the uilayouts,if not exists in localstorage.. 
    var perspectives = ['enduser', 'reseller', 'lead', 'support']
    if (!window.localStorage.hasOwnProperty('uilayouts')) {
      perspectives.forEach(element => {
        this.props.dispatch({
          type: actionTypes.GET_PERSPECTIVE_CONFIG_XML,
          payload: element
        });
      })
    }

  }

  @Debounce(600)
  triggerResizeEvent() { // eslint-disable-line
    const event = document.createEvent('HTMLEvents');
    event.initEvent('resize', true, false);
    window.dispatchEvent(event);
  }


  //User entered search item in global search search box, and interested to see details...
  handleSearch = (value) => {
    const { search_org, loading } = this.props; //Making search_org model as property
    const { globalSrchFilter_field, globalSrchFilter_perspectives, globalSrchFilter_searchModes,
      globalSrchFilter_additional_filter, globalSrchFilter_countries, perspectiveConfigs } = search_org;
    //TODO:We need to update loclstorage in separate place.Keep moving for now
    if (!window.localStorage.hasOwnProperty('uilayouts')) {
      window.localStorage.uilayouts = JSON.stringify(perspectiveConfigs);
    }

    if (value) {
      var additionFilers = {};
      var searchReq = {
        "enable_recommender": "true", "additional_filter": globalSrchFilter_additional_filter,
        "search_criteria": {
          "country": "any",
          "field": globalSrchFilter_field,
          "value": value,
          "search_mode": globalSrchFilter_searchModes
        },
        "skip": 0,
        "perspectives": globalSrchFilter_perspectives,
        "size": 50
      }
      //console.log("Globalsearch request is" + JSON.stringify(searchReq));
      this.props.dispatch({
        type: actionTypes.FETCH_GLOBAL_SEARCH_RESULT,
        payload: searchReq,
      });

    }
  }


  //******************************************************* */
  // Function realted to GlobalSearchFilters compnent
  //
  //******************************************************* */


  /**
   * Important: For Global search filter updates we need to pass respetcive
   * Filtername along with value to the store for updation
   * Examle: globalSrchFilter_field:"n"
   * then in store we acess respective filed and directly update the value
   * instead of having multiple methods for updation
   */
  //when user adds filer to searhcby
  onFieldChanged = (data) => {
    this.props.dispatch(
      {
        type: actionTypes.UPDATE_GLOBAL_SEARCH_FILTERS,
        payload: {
          "globalSrchFilter_field": data
        }
      });
    // console.log("props"+globalSrchFilter_field);
  }

  //when user adds filer to perspective
  onPerspectiveChanged = (data) => {
    //console.log("Perspective Changed" + JSON.stringify(data));
    this.props.dispatch(
      {
        type: actionTypes.UPDATE_GLOBAL_SEARCH_FILTERS,
        payload: {
          "globalSrchFilter_perspectives": data
        }
      });
  }

  //when user changes search by we need to show respective tooltip on search input as prompt
  onTooltipChanged = (data) => {
    this.setState({ placeholderText: data });
  }


  //when user adds filer to SearchMode
  onSearchModeChanged = (data) => {
    // console.log("SrchMode Changed" + data);
    this.props.dispatch(
      {
        type: actionTypes.UPDATE_GLOBAL_SEARCH_FILTERS,
        payload: {
          "globalSrchFilter_searchModes": data
        }
      });
  }

  //when user adds additional informaton..
  onAdditionalInfoAdded = (data) => {
    console.log("Additionalinfo" + JSON.stringify(data));
    //Making search_org model as property
    this.props.dispatch(
      {
        type: actionTypes.UPDATE_GLOBAL_SEARCH_FILTERS,
        payload: {
          "globalSrchFilter_additional_filter": data
        }
      });
  }

  //************************************************************* */

  //******************************************************* */
  // Function realted to InsightVisual component
  //
  //******************************************************* */

  //when user clicks on worldwide...access current lookup details from model 
  // update only the request scope value and fir the request.
  //Importnat: update state showWWByDefault to false..so that
  //css swapping happens internally,if new search is happening then
  //make showWWByDefault true so that worlwide icon appear by default,
  //else ifthe user seen countrywide then that appears by default
  //This is ike initial reset to ww then interanl css swapping
  worldwideClick = () => {
    this.fireInsLookupRequest("ww");
    this.setState({ showWWByDefault: false });
  }

  //when user clicks on country wide click
  countrywideClick = () => {
    this.fireInsLookupRequest("");
  }

  fireInsLookupRequest = (mode) => {
    const { search_org } = this.props;
    const { master_doc_id, class_id, perspective, request_scope, id, ww_scope } = search_org;

    var data = {};
    data['perspective'] = perspective;
    data['class_id'] = class_id;
    data['master_doc_id'] = master_doc_id;
    data['id'] = id;
    data['request_scope'] = mode;
    //Update the selcted inslkup title
    this.props.dispatch({
      type: actionTypes.FETCH_INSIGHT_LOOKUP,
      payload: data,
    });
  }



  //******************************************************* */
  // Function realted to GlobalSrchSearchResults component...
  //
  //******************************************************* */

  //When user selelcts an option from insight lookup options component..
  //we get object like this: {{lookupData:data,selectedItemData:itemData,perspective:perspective}}.
  //lookupData is lookup option he selected and selectedItemData is on which search item he choosen(popover) lookups.
  //perspective is on which perspective user has selected lookup options.

  onLkpOptionSelected = (selectionItem) => {
    const { search_org } = this.props;

    var lookupObj = selectionItem['lookupData'];
    console.log("lOOKUP OBJECT IS " + JSON.stringify(lookupObj));
    var onHoverItem = selectionItem['selectedItemData'];
    var data = {};
    data['perspective'] = selectionItem['perspective'];
    data['class_id'] = onHoverItem['class_id'];
    data['master_doc_id'] = onHoverItem['master_doc_id'];
    data['id'] = lookupObj['id'];
    data['request_scope'] = "";
    data['ww_scope'] = lookupObj['ww_scope'];

    //It is important to update the class id,perspective,masterdocid and details in model
    //so that if we click on worlwide we can easily access respective values and get the worlwide results
    this.init_insight_lookup(data);
    //as user is opted for new lookup convert icon to worldwide
    this.setState({ showWWByDefault: true });
    //fetch now
    this.props.dispatch({
      type: actionTypes.FETCH_INSIGHT_LOOKUP,
      payload: data,
    });
  }


  //When user selects insight lookup we have to initialize
  // lookup component withe default settings like
  //class_id,master_doc_id,perspective and etc.
  init_insight_lookup(data) {
    this.props.dispatch(
      {
        type: 'search_org/initInsightLookup',
        payload: {
          class_id: data.class_id, master_doc_id: data.master_doc_id,
          request_scope: "", perspective: data.perspective, id: data.id,
          ww_scope: data['ww_scope']
        }
      });
  }

  //************************************************* */
  //  This component renders method...to display html....
  //******************************************************** */

  render() {

    const { search_org, loading } = this.props; //Making search_org model as property
    const { globalSrchResults, tree_data,
      inslkpShortcuts, globalSrchFilter_field,
      globalSrchFilter_perspectives, globalSrchFilter_searchModes,
      globalSrchFilter_countries, collapseInsLkups,
      insight_lookup_data, globalSearchConfig, inslkupMetadata } = search_org;//we need only few props from state

    return (
      <div className={styles.globalParentContainer}>
        <div className={styles.searchContainer}>
          {/* This is to make sure filter component related configuration is ready-whenever config is ready
        Then this component will be shown ..*/}
          {globalSearchConfig['global_search'] != null &&
            <div className={styles.centerContainer}>
              <GlobalSrchFilters
                data={globalSearchConfig}
                field={globalSrchFilter_field}
                perspectives={globalSrchFilter_perspectives}
                searchModes={globalSrchFilter_searchModes}
                countries={globalSrchFilter_countries}
                onFieldChanged={this.onFieldChanged}
                onPerspectiveChanged={this.onPerspectiveChanged}
                onTooltipChanged={this.onTooltipChanged}
                onSearchModeChanged={this.onSearchModeChanged}
                onCountryAdded={this.onCountryAdded}
                onAdditionalInfoAdded={this.onAdditionalInfoAdded}
                mode="horizontal" />
            </div>}

          <div className={styles.centerContainer}>
            <SearchInput
              onSelect={this.handleSearch}
              onBtnClick={this.handleSearch}
              placeholderText={this.state.placeholderText}
            />
          </div>

        </div>

        <div className={styles.searchResultsContainer}>
          <GlobalSrchSearchResults inslkupMetadata={inslkupMetadata} data={globalSrchResults}
            onLkpOptionSelected={this.onLkpOptionSelected} />
        </div>

        <div className={styles.visualsContainer}>
          <div className={utils.isObjectEmpty(insight_lookup_data) ? styles.hide : styles.show}>
            <InsightVisualComponent
              insightLookupData={insight_lookup_data} showWWByDefault={this.state.showWWByDefault}
              onWorldwideClick={this.worldwideClick} onCountrywideClick={this.countrywideClick} />
          </div>
        </div>

      </div>

    );
  }
}