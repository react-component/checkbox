import * as React from "react";

export interface Props {
  prefixCls: string,
  className: string,
  style: object,
  name: string,
  id: string,
  type: string,
  defaultChecked: number | boolean,
  checked: number | boolean,
  disabled: boolean,
  onFocus: (e: any) => void,
  onBlur: (e: any) => void,
  onChange: (e: any) => void,
  onClick: (e: any) => void,
  tabIndex: string | number,
  readOnly: boolean,
  autoFocus: boolean,
  value: any,
}

export default class CheckBox extends React.Component<Props> {}