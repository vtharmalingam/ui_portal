import * as React from 'react';
export interface InsightMenuProps {
  data?: Object;
  selectedItemData:Object;
  perspective:String;
  onLkpOptionSelected?:(info:Object) =>void;
  style?: React.CSSProperties;
}

export default class InsightMenu extends React.Component<
InsightMenuProps,
  any
> {}
