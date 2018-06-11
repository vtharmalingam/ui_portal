import React,{Fragment} from "react";
import { render } from "react-dom";
import {
  Row,
  Col,
  Icon,
  Card,
  Tabs,
  Table,
  Radio,
  DatePicker,

  Menu,
  Dropdown,
} from 'antd';


// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class TableComp extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          "order_no": "ol1046657",
          "res_country": "india",

          "col1": "xxx",
          "col2": "ccc",
          "col3": "ccc",

        },
        {
          "order_no": "ol1490632",
          "res_country": "india",
          "col1": "xxx",
          "col2": "ccc",
          "col3": "ccc",

        },
        {
          "order_no": "ol1242833",
          "res_country": "india",
          "col1": "xxx",
          "col2": "ccc",
          "col3": "ccc",
        }
      ],
      columns: [
        {
          Header: "Order#",
          accessor: "order_no",
          title: "Order#",
          dataIndex: 'order_no'
        },
        {
          Header: "ResCountry",
          accessor: "res_country",
          title: "Order#",
          dataIndex: 'order_no'
        },
        {
          Header: "col1",
          accessor: "col1",
          title: "Col1#",
          dataIndex: 'col1'
        },
        {
          Header: "col2",
          accessor: "col2",
          title: "Col2",
          dataIndex: 'col2'
        },
        {
          Header: "col3",
          accessor: "col3",
          title: "Col3",
          dataIndex: 'col3'
        }
      ]
    };
  }

  render() {
    const { data, columns } = this.state;
    return (
      <Fragment>
        <Row gutter={24}>
          <Col>
            <Card
              bordered={false}
              title="Table Components"
              style={{ marginTop: 24 }} >
              ----React Table-----
        <ReactTable
                data={data}
                columns={columns}
                defaultPageSize={10}
                className="-striped -highlight"
              />
              -----AntD Table------
        <Table columns={columns} dataSource={data} />

            </Card>
          </Col>
        </Row>
      </Fragment>

    );
  }
}
export default TableComp;

