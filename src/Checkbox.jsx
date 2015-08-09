import React from 'react';
import classnames from 'classnames';

export default class Checkbox extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    let checked = false;
    if ('checked' in props) {
      checked = !!props.checked;
    } else if ('defaultChecked' in props) {
      checked = !!props.defaultChecked;
    }
    this.state = {checked};
  }

  componentWillReceiveProps(nextProps) {
    if ('checked' in nextProps) {
      this.setState({
        checked: !!nextProps.checked
      });
    }
  }

  render() {
    let props = this.props;
    let prefixCls = props.prefixCls;
    return <span className={classnames({
          [`props.className`]: !!props.className,
          [`prefixCls`]: 1,
          [`${prefixCls}-checked`]: this.state.checked,
          [`${prefixCls}-disabled`]: props.disabled
        })}
            style={props.style}
        >
          <span className={`${prefixCls}-inner`}></span>
          <input {...props}
            className={`${prefixCls}-input`}
            checked={this.state.checked}
            onChange={this.handleChange}
            />
        </span>;
  }

  handleChange(e) {
    let checked = e.target.checked;
    if (!('checked' in this.props)) {
      this.setState({
        checked: checked
      });
    }
    this.props.onChange(e);
  }
}

Checkbox.propTypes = {
  prefixCls: React.PropTypes.string,
  style: React.PropTypes.object,
  type: React.PropTypes.string,
  className: React.PropTypes.string,
  defaultChecked: React.PropTypes.bool,
  onChange: React.PropTypes.func
};

Checkbox.defaultProps = {
  prefixCls: 'rc-checkbox',
  style: {},
  type: 'checkbox',
  className: '',
  defaultChecked: false,
  onChange: () => {}
};
