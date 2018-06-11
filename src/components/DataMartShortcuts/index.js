import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Input, Icon, AutoComplete } from 'antd';
import classNames from 'classnames';
import styles from './index.less';
import {
  Row,
  Col,
  Card,
  Tabs,
  Table,
  Radio,
  DatePicker,
  Menu,
  Dropdown,
} from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class DataMartShortcuts extends PureComponent {

  static defaultProps = {
    defaultActiveFirstOption: false,
    data: {},
    perspectives: [],
    onMenuClick: () => { },
    shortcuts:{}
  };
  static propTypes = {
    className: PropTypes.string,
    data: PropTypes.object,
    onMenuClick: PropTypes.func,
    defaultActiveFirstOption: PropTypes.bool,
    perspectives: PropTypes.array,
    shortcuts:PropTypes.object
  };
  state = {
    searchMode: false,
    value: '',
  };
  componentWillUnmount() {
    clearTimeout(this.timeout);
  }



  //Creates sub menu  items....like enduser,reseller these goes to menu in horizontal direction
  renderSubMenu(perspectives) {
    if (perspectives.length > 0) {
      var subMenus = [];
      for (var i = 0; i < perspectives.length; i++) {
        subMenus.push(
          <SubMenu key={perspectives[i] + "sub"}
           title={<span><Icon type="mail" /><span>{perspectives[i]}</span></span>}>
            {this.renderSubMenuItems(perspectives[i])}
          </SubMenu>
        );
      }
      return subMenus;
    }
    else return [];
  }


  //Renders sub menu --Menu items..like orders,maintenance and etc under given perspective
  renderSubMenuItems = (perspective) =>{
    var arr=[];
    //console.log("Shortcusts are here---"+JSON.stringify(this.props.shortcuts));
    var shrtcuts = this.props.shortcuts;
    if(shrtcuts && shrtcuts.hasOwnProperty(perspective)){
      for(var i=0;i<shrtcuts[perspective].length;i++){
        var currentShortCut = shrtcuts[perspective][i];
        arr.push(
          <Menu.Item 
          key={currentShortCut['id']+perspective}  id={currentShortCut['id']} perspective={perspective}
          data={this.props.data}>
          {currentShortCut['ui_shortcut_label']}
          </Menu.Item>,
        );
      }
    }
    return arr;
  }

  handleClick(e) {
    // onMenuClick(e.item.props);
    //console.log('click', e.item.props);
  }

  render() {
    const { data, perspectives, onMenuClick,shortcuts, ...restProps } = this.props;
    return (
      <div>

        <Menu mode="horizontal" onClick={onMenuClick}>
          {this.renderSubMenu(this.props.perspectives)}
        </Menu>

      </div>

    );
  }
}
