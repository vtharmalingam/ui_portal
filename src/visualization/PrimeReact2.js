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
import styles from './visualization.less';


class BarComp extends React.Component {

    constructor() {
        super();
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
       var nestedData = [
        {
            
            "children": [
                {
                    "key": "bu",
                    "doc_count": 1,
                    "#M#orders#acv_usd": 0,
                    "children": [
                        {
                            "key": "per machine/per server",
                            "doc_count": 1,
                            "#M#orders#acv_usd": 0,
                            "data": {
                                "key": "per machine/per server",
                                "doc_count": 1,
                                "#M#orders#acv_usd": 0
                            }
                        }
                    ],
                    "data": {
                        "key": "bu",
                        "doc_count": 1,
                        "#M#orders#acv_usd": 0
                    }
                }
            ],
            "data": {
                "key": 2008,
                "doc_count": 1,
                "#M#orders#acv_usd": 0
            }
        },
        {
            "#M#orders#acv_usd": 0,
            "children": [
                {
                    "key": "bu",
                    "doc_count": 5,
                    "#M#orders#acv_usd": 0,
                    "children": [
                        {
                            "key": "per machine/per server",
                            "doc_count": 5,
                            "#M#orders#acv_usd": 0,
                            "data": {
                                "key": "per machine/per server",
                                "doc_count": 5,
                                "#M#orders#acv_usd": 0
                            }
                        }
                    ],
                    "data": {
                        "key": "bu",
                        "doc_count": 5,
                        "#M#orders#acv_usd": 0
                    }
                }
            ],
            "data": {
                "key": 2009,
                "doc_count": 5,
                "#M#orders#acv_usd": 0
            }
        },
        {
            "children": [
                {
                    "key": "bu",
                    "doc_count": 11,
                    "#M#orders#acv_usd": 35107.60070800781,
                    "children": [
                        {
                            "key": "per machine/per server",
                            "doc_count": 11,
                            "#M#orders#acv_usd": 35107.60070800781,
                            "data": {
                                "key": "per machine/per server",
                                "doc_count": 11,
                                "#M#orders#acv_usd": 35107.60070800781
                            }
                        }
                    ],
                    "data": {
                        "key": "bu",
                        "doc_count": 11,
                        "#M#orders#acv_usd": 35107.60070800781
                    }
                }
            ],
            "data": {
                "key": 2010,
                "doc_count": 11,
                "#M#orders#acv_usd": 35107.60070800781
            }
        },
        {
           
            "children": [
                {
                    "key": "bu",
                    "doc_count": 10,
                    "#M#orders#acv_usd": 38042,
                    "children": [
                        {
                            "key": "per machine/per server",
                            "doc_count": 10,
                            "#M#orders#acv_usd": 38042,
                            "data": {
                                "key": "per machine/per server",
                                "doc_count": 10,
                                "#M#orders#acv_usd": 38042
                            }
                        }
                    ],
                    "data": {
                        "key": "bu",
                        "doc_count": 10,
                        "#M#orders#acv_usd": 38042
                    }
                }
            ],
            "data": {
                "key": 2011,
                "doc_count": 10,
                "#M#orders#acv_usd": 38042
            }
        },
        {
            "children": [
                {
                    "key": "bu",
                    "doc_count": 14,
                    "#M#orders#acv_usd": 33024.14990234375,
                    "children": [
                        {
                            "key": "per machine/per server",
                            "doc_count": 14,
                            "#M#orders#acv_usd": 33024.14990234375,
                            "data": {
                                "key": "per machine/per server",
                                "doc_count": 14,
                                "#M#orders#acv_usd": 33024.14990234375
                            }
                        }
                    ],
                    "data": {
                        "key": "bu",
                        "doc_count": 14,
                        "#M#orders#acv_usd": 33024.14990234375
                    }
                }
            ],
            "data": {
                "key": 2012,
                "doc_count": 14,
                "#M#orders#acv_usd": 33024.14990234375
            }
        },
        {
           
            "children": [
                {
                    "key": "bu",
                    "doc_count": 9,
                    "#M#orders#acv_usd": 29222.200073242188,
                    "children": [
                        {
                            "key": "per machine/per server",
                            "doc_count": 9,
                            "#M#orders#acv_usd": 29222.200073242188,
                            "data": {
                                "key": "per machine/per server",
                                "doc_count": 9,
                                "#M#orders#acv_usd": 29222.200073242188
                            }
                        }
                    ],
                    "data": {
                        "key": "bu",
                        "doc_count": 9,
                        "#M#orders#acv_usd": 29222.200073242188
                    }
                },
                {
                    "key": "udp",
                    "doc_count": 2,
                    "#M#orders#acv_usd": 910.1400146484375,
                    "children": [
                        {
                            "key": "per machine/per server",
                            "doc_count": 2,
                            "#M#orders#acv_usd": 910.1400146484375,
                            "data": {
                                "key": "per machine/per server",
                                "doc_count": 2,
                                "#M#orders#acv_usd": 910.1400146484375
                            }
                        }
                    ],
                    "data": {
                        "key": "udp",
                        "doc_count": 2,
                        "#M#orders#acv_usd": 910.1400146484375
                    }
                }
            ],
            "data": {
                "key": 2013,
                "doc_count": 11,
                "#M#orders#acv_usd": 30132.340087890625
            }
        },
        {
            "key": 2014,
            "doc_count": 12,
            "#M#orders#acv_usd": 39246.55047607422,
            "children": [
                {
                    "key": "bu",
                    "doc_count": 12,
                    "#M#orders#acv_usd": 39246.55047607422,
                    "children": [
                        {
                            "key": "per machine/per server",
                            "doc_count": 12,
                            "#M#orders#acv_usd": 39246.55047607422,
                            "data": {
                                "key": "per machine/per server",
                                "doc_count": 12,
                                "#M#orders#acv_usd": 39246.55047607422
                            }
                        }
                    ],
                    "data": {
                        "key": "bu",
                        "doc_count": 12,
                        "#M#orders#acv_usd": 39246.55047607422
                    }
                }
            ],
            "data": {
                "key": 2014,
                "doc_count": 12,
                "#M#orders#acv_usd": 39246.55047607422
            }
        }
    ]
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
       
        
        return (
            <Fragment>

                <Row>

                <div className={styles.container}>
                    <div className={styles.image} style={{ width: '100%' }}>
                    helllooooooooo
                    </div>
                    <div className={styles.middle}>
                        <div className ={styles.text}>John Doe</div>
                    </div>
               </div>
                   
                </Row>
            </Fragment>

        );
    }
}
export default BarComp;

