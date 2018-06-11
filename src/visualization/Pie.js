import React, { Fragment } from "react";
import { render } from "react-dom";
import { Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Menu, Dropdown } from 'antd';
import * as ChartDataPrpeProc from '../utils/ChartsDataPreprocessor'
import Bar from '../components/Charts/Bar'
class PieComp extends React.Component {

    constructor() {
        super();
        this.state = {
            data:{
                "query": {
                    "is_query_response": "false",
                    "segmentation": {
                        "queries": {
                            "Q1": {
                                "value": "{{scope_doc_id_value}}",
                                "node_id": "doc_id",
                                "field": "{{scope_doc_id}}",
                                "search_type": "E"
                            }
                        },
                        "search_scheme": {
                            "key": "( Q1 )"
                        }
                    },
                    "aggregation": {
                        "orders": {
                            "measures": [
                                {
                                    "agg_type": "sum",
                                    "ref_id": "2",
                                    "node_id": "acv_usd",
                                    "value_format": {
                                        "symbol": "$",
                                        "symbol align": "left",
                                        "desc": "Total ACV",
                                        "thousands sep": "true",
                                        "short-num format": "true",
                                        "precision": 0
                                    },
                                    "field": "acv_usd"
                                },
                                {
                                    "agg_type": "sum",
                                    "ref_id": "1",
                                    "node_id": "bookings_usd",
                                    "value_format": {
                                        "symbol": "$",
                                        "symbol align": "left",
                                        "desc": "Bookings",
                                        "thousands sep": "true",
                                        "short-num format": "true",
                                        "precision": 0
                                    },
                                    "field": "bookings_usd"
                                }
                            ],
                            "group_by": [
                                {
                                    "field": "order_fy",
                                    "node_id": "order_fy",
                                    "agg_type": "terms",
                                    "ref_id": "1",
                                    "clause": "group_by",
                                    "section": "orders",
                                    "size": "10"
                                }
                            ]
                        }
                    }
                },
                "config": {
                    "index_name": "enduser",
                    "ui_group_name": "Order Stats",
                    "ui_ww_scope": "ww",
                    "ui_label": "Total ACV and Bookings by Fiscal Year",
                    "ui_tooltip": "Total ACV and Bookings by Fiscal Year",
                    "ui_perspective_srch_tooltip": "Total ACV and Bookings by Fiscal Year",
                    "ui_chart_title": "Total ACV and Bookings by Fiscal Year",
                    "ui_order": 2,
                    "ui_icon": "four",
                    "ui_visualization": {
                        "theme": "nestedgrid,bar,column,line"
                    }
                },
                "_id": "order_history",
                "cache_metadata": {
                    "cache_id": null,
                    "cache_context": null
                },
                "data": {
                    "aggs_data": {
                        "doc_count": 64,
                        "#G#orders#order_fy": [
                            {
                                "key": 2008,
                                "doc_count": 1,
                                "#M#orders#bookings_usd": 575,
                                "#M#orders#acv_usd": 0
                            },
                            {
                                "key": 2009,
                                "doc_count": 5,
                                "#M#orders#bookings_usd": 10576.420043945312,
                                "#M#orders#acv_usd": 0
                            },
                            {
                                "key": 2010,
                                "doc_count": 11,
                                "#M#orders#bookings_usd": 35107.60070800781,
                                "#M#orders#acv_usd": 35107.60070800781
                            },
                            {
                                "key": 2011,
                                "doc_count": 10,
                                "#M#orders#bookings_usd": 38042,
                                "#M#orders#acv_usd": 38042
                            },
                            {
                                "key": 2012,
                                "doc_count": 14,
                                "#M#orders#bookings_usd": 33024.14990234375,
                                "#M#orders#acv_usd": 33024.14990234375
                            },
                            {
                                "key": 2013,
                                "doc_count": 11,
                                "#M#orders#bookings_usd": 30132.340087890625,
                                "#M#orders#acv_usd": 30132.340087890625
                            },
                            {
                                "key": 2014,
                                "doc_count": 12,
                                "#M#orders#bookings_usd": 39246.55047607422,
                                "#M#orders#acv_usd": 39246.55047607422
                            }
                        ]
                    },
                    "view": {
                        "ui": "",
                        "dimensions": [
                            "#G#orders#order_fy"
                        ],
                        "measures": [
                            {
                                "name": "#M#orders#acv_usd",
                                "agg_type": "sum"
                            },
                            {
                                "name": "#M#orders#bookings_usd",
                                "agg_type": "sum"
                            }
                        ],
                        "measures_value_formats": {
                            "acv_usd": {
                                "value_format": {
                                    "symbol": "$",
                                    "symbol align": "left",
                                    "desc": "Total ACV",
                                    "thousands sep": "true",
                                    "short-num format": "true",
                                    "precision": 0
                                }
                            },
                            "bookings_usd": {
                                "value_format": {
                                    "symbol": "$",
                                    "symbol align": "left",
                                    "desc": "Bookings",
                                    "thousands sep": "true",
                                    "short-num format": "true",
                                    "precision": 0
                                }
                            }
                        },
                        "group_by": [
                            {
                                "field": "order_fy",
                                "node_id": "order_fy",
                                "agg_type": "terms",
                                "ref_id": "1",
                                "clause": "group_by",
                                "section": "orders",
                                "size": "10"
                            }
                        ],
                        "groupby_include": []
                    }
                },
                "logger_trans_id": 0
            }
        }
    }

    render() {

        const formattedData = ChartDataPrpeProc.getPreProcessData(this.state.data);
        return (
            <Bar data={formattedData['chartData']}
            measures={formattedData['measures']}
            dimensions={formattedData['dimensions']}
            measureValFormats={formattedData['measures_value_formats']}
        />
        );
    }

}
export default PieComp;

