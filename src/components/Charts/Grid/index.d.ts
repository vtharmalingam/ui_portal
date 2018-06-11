import * as React from "react";
export interface GridProps {
  title: React.ReactNode;
  height: number;
  data: Array;
  columns:Array;
  style?: React.CSSProperties;
}

export default class Grid extends React.Component<GridProps, any> {}
