import React, { Fragment } from "react";
import { render } from "react-dom";
import { Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Menu, Dropdown } from 'antd';
import { ReactDataGrid, ReactDataGridColumn } from 'flexicious-react-datagrid'
import { CssStyles, ApiStyles } from 'flexicious-react-datagrid-styles'


class NestedTable extends React.Component {

    constructor() {
        super();
        //Data which supposed to be in this structure then only it supports
        var data = [
            {
                "data": {
                    "name": "Documents",
                    "size": "75kb",
                    "type": "Folder"
                },
                "children": [
                    {
                        "data": {
                            "name": "Work",
                            "size": "55kb",
                            "type": "Folder"
                        },
                        "children": [
                            {
                                "data": {
                                    "name": "Expenses.doc",
                                    "size": "30kb",
                                    "type": "Document"
                                }
                            },
                            {
                                "data": {
                                    "name": "Resume.doc",
                                    "size": "25kb",
                                    "type": "Resume"
                                }
                            }
                        ]
                    },
                    {
                        "data": {
                            "name": "Home",
                            "size": "20kb",
                            "type": "Folder"
                        },
                        "children": [
                            {
                                "data": {
                                    "name": "Invoices",
                                    "size": "20kb",
                                    "type": "Text"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "data": {
                    "name": "Pictures",
                    "size": "150kb",
                    "type": "Folder"
                },
                "children": [
                    {
                        "data": {
                            "name": "barcelona.jpg",
                            "size": "90kb",
                            "type": "Picture"
                        }
                    },
                    {
                        "data": {
                            "name": "primeui.png",
                            "size": "30kb",
                            "type": "Picture"
                        }
                    },
                    {
                        "data": {
                            "name": "optimus.jpg",
                            "size": "30kb",
                            "type": "Picture"
                        }
                    }
                ]
            }
        ];
      
        this.state = {Dialogvisible: false,data:data};
        this.onDialogClick = this.onDialogClick.bind(this);
        this.onDialogHide = this.onDialogHide.bind(this);
    
        this.onOverlayPanelClick = this.onOverlayPanelClick.bind(this);
        
    }

    onDialogClick(event) {
        this.setState({Dialogvisible: true});
    }
    
    onDialogHide(event) {
        this.setState({Dialogvisible: false});
    }

    onOverlayPanelClick(event) {
        this.op.toggle(event);
    }

    render() {
        const { data } = this.state;
        
        return (

            <div>
         
              <ReactDataGrid id={(grid) => {this.grid = grid}} enablePrint={true}  enableExport={true}  

enablePreferencePersistence={true} preferencePersistenceKey={"simpleGrid"} useCompactPreferences={true}  

horizontalScrollPolicy={"auto"}  footerDrawTopBorder={true} 

 enablePaging={true}  pageSize={50}  enableFilters={true}

    enableFooters={true}  initialSortField={"legalName"}  initialSortAscending={true}
              
              dataProvider={[{ label: "Company A", state: "NJ", rank: "1.11" },
         
              { label: "Company B", state: "PA", rank: "11.1" },
         
              { label: "Company C", state: "CT", rank: "-111" },
         
              { label: "Company D", state: "NY", rank: "2.34" },
         
              { label: "Company E", state: "NJ", rank: "22.2" }]}>
         
         <ReactDataGridColumn dataField="label" headerText="ID"  filterControl="TextInput" filterOperation="Contains" footerOperation="sum"/>

       <ReactDataGridColumn dataField="state" headerText="Type" filterControl="TextInput" filterOperation="Contains" footerOperation="count"/>
         
              </ReactDataGrid>
         
            </div>
         
          );
        
    }
}
export default NestedTable;

