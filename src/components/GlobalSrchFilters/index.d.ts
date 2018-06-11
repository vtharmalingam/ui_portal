import * as React from 'react';
export interface GlobalSrchFiltersProps {
  data?: Object;
  perspectives?: Array<any>;
  searchModes?: Array<any>;
  onFieldChanged?:(value:Object) =>void;
  onSearchModeChanged?:(value:Object) =>void;
  onCountryAdded?:(value:Object) =>void;
  onAdditionalInfoAdded?:(value:Object) =>void;
  style?: React.CSSProperties;
  field?: String,
  mode?:String
}

export default class GlobalSrchFilters extends React.Component<
GlobalSrchFiltersProps,
  any
> {}
