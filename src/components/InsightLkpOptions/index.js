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



export default class InsightLkpOptions extends PureComponent {

  static defaultProps = {
    data: {},
    onLkpOptionSelected:() =>{},
  };
  static propTypes = {
    className: PropTypes.string,
    data: PropTypes.object,
    onLkpOptionSelected: PropTypes.func,
  };

  componentWillUnmount() {
    clearTimeout(this.timeout);
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

  //Here lookupsInfo will be like this:{"orders":[{lkpObj},{lkpObj}],"Maintenance":[{lkpObj},{lkpObj}]}
  //Each group name is the Card title and respective lookups are its Actions...
  showInsightlookupOptions(lookupsInfo) {
    var groupNames = Object.keys(lookupsInfo);
   // console.log("keys are here11" + groupNames);
    var finalTreeNodes = [];
    var allCards = [];
    //Looping group names...
    groupNames.forEach(grpName => {
      //console.log("group name is " + grpName);
      allCards.push(
        // this is required to get styles applied in materialui
        <MuiThemeProvider>
          <MaterialCard >
            <CardHeader style={this.style} titleStyle={this.style.title} subtitleStyle={this.style.subtitle}
              subtitle={grpName}
              actAsExpander={true}
              showExpandableButton={false}
            />
            {/* <CardText expandable={false}>
             TODO: some Description comes here
            </CardText> */}
            <CardActions>
              {this.getAllActions(lookupsInfo[grpName])}
            </CardActions>
          </MaterialCard>
        </MuiThemeProvider>
      )
    })
    return allCards;
  };


  /**
   * Once user selects a lookup from actions on card,we use actions up principle here
   * that is firing callback function to the parent
   */
  onLkpOptionSelected=(data)=>(e)=>{
  //   e.stopPropagation();
  // e.nativeEvent.stopImmediatePropagation();
    const { onLkpOptionSelected} = this.props;
   // e.prevenetDefault();
   // console.log("lookup option selected"+JSON.stringify(data));
    this.props.onLkpOptionSelected(data)
  }
  

//This will return actions that is lookup names
  getAllActions(lookups) {
    var actions = [];
    // for(var i=0;i<lookups.length;i++){
    //   var lookupObj = lookups[i];
    // }
    lookups.forEach(lookupObj => {
      actions.push(
        <a onClick={this.onLkpOptionSelected(lookupObj)} data={lookupObj} className={styles.lookupLinks}
        >{lookupObj['label'] }</a>
      )
  })
  return actions;
}



  render() {
    const { data,onLkpOptionSelected} = this.props;
    return (
      <div>
          {this.showInsightlookupOptions(data)}
      </div>

    );
  }
}
