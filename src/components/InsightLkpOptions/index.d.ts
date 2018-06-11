import * as React from 'react';
export interface InsightLkpOptionsProps {
  data?: Object;
  onLkpOptionSelected?:(info:Object) =>void;
  style?: React.CSSProperties;
}

export default class InsightLkpOptions extends React.Component<
InsightLkpOptionsProps,
  any
> {}
