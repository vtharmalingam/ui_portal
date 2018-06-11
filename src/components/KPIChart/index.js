import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './index.less';

export default class KPIChart extends PureComponent {

  static defaultProps = {
    title: "",
     value: "",
  };

  static propTypes = {
    title: PropTypes.string,
    value: PropTypes.string,
  };

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }



  render() {
    const { title, value } = this.props;
    return (
            <div className={styles.container}>
            <div className={styles.subContainer}>
              <span className={styles.valueStyle}>{value}</span>
                <span className={styles.titleStyle}>{title}</span>
            </div>
</div>  
            );
  }
}
