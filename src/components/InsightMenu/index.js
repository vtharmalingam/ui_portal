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



export default class InsightMenu extends PureComponent {

  static defaultProps = {
    data: {},
    selectedItemData: {},
    perspective:"",
    onLkpOptionSelected:() =>{},
  };
  static propTypes = {
    className: PropTypes.string,
    perspective: PropTypes.string,
    data: PropTypes.object,
    selectedItemData: PropTypes.object,
    onLkpOptionSelected: PropTypes.func,
  };

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  
  //Here lookupsInfo will be like this:{"orders":[{lkpObj},{lkpObj}],"Maintenance":[{lkpObj},{lkpObj}]}
  //Each group name is the Card title and respective lookups are its Actions...
  showInsightlookupOptions(lookupsInfo) {
    var groupNames = Object.keys(lookupsInfo);
    var allGroups = [];
    groupNames.forEach(grpName => {
      //console.log("group name is " + grpName);
      //we need to generate like vertical component with ordered list
      //where group names are like header(with slight bigger heading) and lookups are non bold with responsive
      // on lcik actions.
      //For each group create ul(undorder list) with bold font.
      allGroups.push(
        <ul style={{listStyleType:'none',fontSize:10}}><b>{grpName.toUpperCase()}</b>
          {this.getChildLookups(lookupsInfo[grpName])}
        </ul>
      );
    })
    return allGroups;
  };


  /**
   * Once user selects a lookup from actions on card,we use actions up principle here
   * that is firing callback function to the parent
   * Important:itemData(which is from parent) is the item onwhich user is looking for inisghts,from this we collect classid,masterdocis etc...
   */
  onLkpOptionSelected=(data)=>(e)=>{
    const { onLkpOptionSelected,selectedItemData,perspective} = this.props;
    this.props.onLkpOptionSelected({lookupData:data,selectedItemData:selectedItemData,perspective:perspective})
  }
  

//This will return actions that is lookup names
  getChildLookups(lookups) {
    var actions = [];
    lookups.forEach(lookupObj => {
      actions.push(
        <li onClick={this.onLkpOptionSelected(lookupObj)}
         data={lookupObj} style={{color:'blue',fontSize:10,cursor:'pointer'}}
          >{lookupObj['label'] }
        </li>
      )
  })
  return actions;
}



  render() {
    const { data,onLkpOptionSelected,itemData} = this.props;
    return (
      <div>
          {this.showInsightlookupOptions(data)}
      </div>

    );
  }
}
