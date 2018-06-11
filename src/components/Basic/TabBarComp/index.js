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



export default class TabBarComp extends PureComponent {

  static defaultProps = {
    data: [],
    onTabSelected:() =>{},
    mode:"left"
  };

  static propTypes = {
    data: PropTypes.array,
    onTabSelected: PropTypes.func,
    mode:PropTypes.string,
  };

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  
generateTabs(data){

    var tabs = [];
  data.forEach(object => {
    
    tabs.push(
  <TabPane tab={<span><img src={countryImge} alt="Smiley face" /></span>} key="1">
    Tab 1
  </TabPane>
              );
  });
}
  


  render() {
    const { data,mode} = this.props;
    return (
      <Tabs defaultActiveKey="1" tabPosition={mode} onChange={this.onChange} style={{ width: '80px' }} >
     {this.generateTabs(data)}
    </Tabs>
   
    

    );
  }
}
