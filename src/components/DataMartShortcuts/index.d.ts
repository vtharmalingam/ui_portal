import * as React from 'react';
export interface DataMartShortcutsProps {
  data?: Object;
  perspectives?: Array<any>;
  onMenuClick?:(value:Object) =>void;
  style?: React.CSSProperties;
  shortcuts?:Object;
}

export default class DataMartShortcuts extends React.Component<
DataMartShortcutsProps,
  any
> {}
