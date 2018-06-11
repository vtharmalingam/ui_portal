import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Input, Icon, AutoComplete } from 'antd';
import classNames from 'classnames';
import styles from './index.less';
import Tree, { TreeNode } from 'rc-tree';
import 'rc-tree/assets/index.css';


export default class TreeComp extends PureComponent {

  static defaultProps = {
    defaultActiveFirstOption: false,
    data: {},
    perspectives: [],
    onCheck: () => { },
    onExpand: () => { },
    defaultCheckedKeys:[],
    defaultExpandAll:Boolean
  };
  static propTypes = {
    className: PropTypes.string,
    data: PropTypes.object,
    onCheck: PropTypes.func,
    onExpand: PropTypes.func,
    defaultActiveFirstOption: PropTypes.bool,
    defaultExpandAll: PropTypes.bool,
    perspectives: PropTypes.array,
    defaultCheckedKeys:PropTypes.Array,
    shortcuts: PropTypes.object
  };

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  //Here lookupsInfo will be like this:{"orders":[{lkpObj},{lkpObj}],"Maintenance":[{lkpObj},{lkpObj}]}
  //Each group name is the parent and respective lookups are its children nodes
  showInsightlookupOptions(lookupsInfo) {
    var groupNames = Object.keys(lookupsInfo);
   // console.log("keys are here11" + groupNames);
    var finalTreeNodes = [];
    var allNodes = [];
    //Looping group names...
    groupNames.forEach(grpName => {
      //console.log("group name is " + grpName);
      allNodes.push(
        <TreeNode title={grpName} key={"parent"+grpName} >
          {this.getTreeNodesByGrp(lookupsInfo[grpName])}
        </TreeNode>
      )
    })
    //Preparing final tree nodes by inserting all unders Insight Lookups node..
    finalTreeNodes.push(
      <TreeNode title="Insight Lookup">
        {allNodes}
      </TreeNode>
    )
    return finalTreeNodes;
  };

  getTreeNodesByGrp(lookups) {
    var nodes = [];
    lookups.forEach(lookupObj => {
      nodes.push(<TreeNode title={lookupObj['label']} key={lookupObj['id']} data={lookupObj} />);
    });
    return nodes;
  }

  onCheck(checkedKeys, info) {
    console.log('onCheck',checkedKeys);

    var filteredCheckedKey=[];
    for( var i=checkedKeys.length-1;i>=0;i--){
      if(checkedKeys[i].indexOf("parent") > -1){
        continue;
      }else{
          filteredCheckedKey.push(checkedKeys[i]);
         break;
      }
    }
    defaultCheckedKeys = filteredCheckedKey;
   // console.log("Won the race......"+filteredCheckedKey);
  }


  render() {
    const { data, perspectives, onCheck, onExpand,defaultCheckedKeys,defaultExpandAll, ...restProps } = this.props;
    return (
      <div>
        <Tree
          className="myCls" showLine checkable
           defaultExpandAll={defaultExpandAll}
          // defaultExpandedKeys={this.state.defaultExpandedKeys}
          onExpand={this.onExpand}
         // defaultSelectedKeys={defaultSelectedKeys}
          defaultCheckedKeys={defaultCheckedKeys}
          // onSelect={this.onSelect}
          onCheck={onCheck}
        >
        {/*Here we are dynamically constructing lookup options in tree*/}
          {this.showInsightlookupOptions(data)}
        </Tree>
      </div>

    );
  }
}
