import * as React from "react";
export interface FunnelProps {
  title: React.ReactNode;
  color?: string;
  padding?: [number, number, number, number];
  height: number;
  data: Array;
  dimensions:Array;
  measures:Array;
  measuresInfo:Array;
  measureValFormats:object;
  autoLabel?: boolean;
  style?: React.CSSProperties;
}

export default class Funnel extends React.Component<FunnelProps, any> {}
