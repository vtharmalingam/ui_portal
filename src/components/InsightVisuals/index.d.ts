import * as React from 'react';
export interface InsightVisualsProps {
  insightLookupData?: Object;
  onWorldwideClick?:(info:String) =>void;
  onCountrywideClick?:(info:String) =>void;
  style?: React.CSSProperties;
}

export default class InsightVisuals extends React.Component<
InsightVisualsProps,
  any
> {}
