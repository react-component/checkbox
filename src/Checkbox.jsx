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
        onChange: noop
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
        <span className={classnames({
          [props.className]: !!props.className,
          [prefixCls]: 1,
          [`${prefixCls}-checked`]: this.state.checked,
          [`${prefixCls}-disabled`]: props.disabled
        })}
          style={props.style}
        >
          <span className={`${prefixCls}-inner`}></span>

          <input type="checkbox"
            className={`${prefixCls}-input`}
            name={props.name}
            disabled={props.disabled}
            checked={this.state.checked}
            onChange={this.handleChange}
          />
        </span>
      );
    },
    handleChange(e) {
      var checked = e.target.checked;
      if (!('checked' in this.props)) {
        this.setState({
          checked: checked
        });
      }
      this.props.onChange(e);
    }
  }
);

module.exports = Checkbox;
