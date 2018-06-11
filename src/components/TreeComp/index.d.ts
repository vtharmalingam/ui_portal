import * as React from 'react';
export interface TreeCompProps {
  data?: Object;
  perspectives?: Array<any>;
  defaultCheckedKeys?: Array<any>;
  onCheck?:(checkedKeys:[],info:Object) =>void;
  onExpand?:(keys:[])=>void;
  style?: React.CSSProperties;
  shortcuts?:Object;
  defaultExpandAll?:Boolean;
}

export default class TreeComp extends React.Component<
TreeCompProps,
  any
> {}
