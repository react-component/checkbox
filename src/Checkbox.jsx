'use strict';

var React = require('react');
var rcUtil = require('rc-util');

function noop() {
}

var Checkbox = React.createClass({
    getInitialState() {
      var props = this.props;
      var checked = false;
      if ('checked' in props) {
        checked = !!props.checked;
      } else {
        checked = !!props.defaultChecked;
      }
      return {
        checked: checked
      };
    },
    getDefaultProps() {
      return {
        prefixCls: 'rc-checkbox',
        style: {},
        className: '',
        defaultChecked: false,
        onChange: noop,
        label: '你好'
      };
    },
    componentWillReceiveProps(nextProps) {
      if ('checked' in nextProps) {
        this.setState({
          checked: !!nextProps.checked
        });
      }
    },
    render() {
      var props = this.props;
      var prefixCls = props.prefixCls;
      return (
        <span className={rcUtil.classSet({
          [props.className]: !!props.className,
          [prefixCls]: 1,
          [`${prefixCls}-checked`]: this.state.checked,
          [`${prefixCls}-disabled`]: props.disabled
        })}
          onClick = {props.disabled ? noop : this.toggle}
          style={props.style}
        >
          <span className={`${prefixCls}-checkbox`}></span>

          {this.props.label ? <label className={`${prefixCls}-label`}>{this.props.label}</label> : null }
        </span>
      );
    },
    toggle() {
      var checked = !this.state.checked;
      this.setState({
        checked: checked
      });
      this.props.onChange(checked);
    }
  }
);

module.exports = Checkbox;
