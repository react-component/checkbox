'use strict';

var React = require('react');
var classnames = require('classnames');

function noop() {
}

var Checkbox = React.createClass({
    getInitialState() {
      var props = this.props;
      var checked = false;
      if ('checked' in props) {
        checked = props.checked;
      } else {
        checked = props.defaultChecked;
      }
      return {
        checked: checked
      };
    },
    getDefaultProps() {
      return {
        prefixCls: 'rc-checkbox',
        style: {},
        type: 'checkbox',
        className: '',
        defaultChecked: 0,
        onChange: noop
      };
    },
    componentWillReceiveProps(nextProps) {
      if ('checked' in nextProps) {
        this.setState({
          checked: nextProps.checked
        });
      }
    },
    render() {
      var props = this.props;
      var prefixCls = props.prefixCls;
      var checked = this.state.checked;
      if (typeof checked === 'boolean') {
        checked = checked ? 1 : 0;
      }
      return (
        <span className={classnames({
          [props.className]: !!props.className,
          [prefixCls]: 1,
          [`${prefixCls}-checked`]: checked,
          [`${prefixCls}-checked-${checked}`]: !!checked,
          [`${prefixCls}-disabled`]: props.disabled
        })}
              style={props.style}
          >
          <span className={`${prefixCls}-inner`}></span>

          <input {...props}
            className={`${prefixCls}-input`}
            checked={!!checked}
            onChange={this.handleChange}
            />
        </span>
      );
    },
    handleChange(e) {
      var checked = e.target.checked;
      if (!('checked' in this.props)) {
        this.setState({
          checked: checked ? 1 : 0
        });
      }
      this.props.onChange(e, this.state.checked);
    }
  }
);

module.exports = Checkbox;
