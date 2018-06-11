import * as React from 'react';
export interface InsightVisualsProps {
  title?: String;
  value?: String;
  style?: React.CSSProperties;
}

export default class KPIChart extends React.Component<
InsightVisualsProps,
  any
> {}
