import React, { Fragment } from "react";
import { render } from "react-dom";
import { Row, Col, Icon, Card, Tabs,Table, Radio, DatePicker, Menu, Dropdown } from 'antd';
import { ReactDataGrid, ReactDataGridColumn } from 'flexicious-react-datagrid'
import { CssStyles, ApiStyles } from 'flexicious-react-datagrid-styles'
const TabPane = Tabs.TabPane;
import countryImge from '../assets/inslookup/country.png';

class NestedTable extends React.Component {

    constructor() {
        super();
        //Data which supposed to be in this structure then only it supports
      
       
        this.onChange = this.onChange.bind(this);
        this.onDialogHide = this.onDialogHide.bind(this);
    
        this.onOverlayPanelClick = this.onOverlayPanelClick.bind(this);
        
    }

    onChange(event) {
        console.log(event);
    }
    
    onDialogHide(event) {
        this.setState({Dialogvisible: false});
    }

    onOverlayPanelClick(event) {
        this.op.toggle(event);
    }

    render() {
        
        
        return (

            <Tabs defaultActiveKey="2" tabPosition="left" onChange={this.onChange} style={{ width: '100px' }} >
            <TabPane tab={<span><img src={countryImge} alt="Smiley face" /></span>} key="1">
              Tab 1
            </TabPane>
            <TabPane tab={<span><img src={countryImge} alt="Smiley face" /></span>} key="2">
              Tab 2
            </TabPane>
          </Tabs>
         
          );
        
    }
}
export default NestedTable;

