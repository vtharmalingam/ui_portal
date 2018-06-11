import React, { Fragment } from "react";
import { render } from "react-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Brush, ReferenceLine, AreaChart,Area } from 'recharts';
import { Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Menu, Dropdown } from 'antd';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

class GlobalDemo extends React.Component {

    constructor() {
        super();
        }
    onSlideChange(e) {
    console.log('Item`s position during a change: ', e.item);
    console.log('Slide`s position during a change: ', e.slide);
  }

  onSlideChanged(e) {
    console.log('Item`s position after changes: ', e.item);
    console.log('Slide`s position after changes: ', e.slide);
  }

    render() {
        const responsive = {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1024: {
        items: 3
      }
    };
        return (

            <Fragment>
                <Row>
                    <Card title="Search Results can be like this...">
                      <AliceCarousel
        duration={400}
        autoPlay={true}
        startIndex = {1}
        fadeOutAnimation={true}
        mouseDragEnabled={true}
        playButtonEnabled={true}
        responsive={responsive}
        autoPlayInterval={2000}
        autoPlayDirection="rtl"
        autoPlayActionDisabled={true}
        onSlideChange={this.onSlideChange}
        onSlideChanged={this.onSlideChanged}
      >
        <div className="yours-custom-class"><h2>1</h2></div>
        <div className="yours-custom-class"><h2>2</h2></div>
        <div className="yours-custom-class"><h2>3</h2></div>
        <div className="yours-custom-class"><h2>4</h2></div>
        <div className="yours-custom-class"><h2>5</h2></div>
      </AliceCarousel>  
                    </Card>
                </Row>
               

            </Fragment>

        );
    }
}
export default GlobalDemo;