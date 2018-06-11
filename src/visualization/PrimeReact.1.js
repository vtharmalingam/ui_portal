import React, { Fragment } from "react";
import { render } from "react-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,Brush, ReferenceLine } from 'recharts';
import { Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Menu, Dropdown } from 'antd';
import {OverlayPanel} from 'primereact/components/overlaypanel/OverlayPanel';
import {Dialog} from 'primereact/components/dialog/Dialog';
import { Button } from "antd/lib/radio";
import { TreeTable } from 'primereact/components/treetable/TreeTable';
import { Column } from 'primereact/components/column/Column';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';


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
            <Fragment>
                <Row>
                    <TreeTable value={data} header="Basic">
                        <Column field="name" header="Name" expander="true"></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>
                </Row>
            </Fragment>
        );
    }
}
export default NestedTable;

