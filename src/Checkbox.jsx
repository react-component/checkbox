import React from 'react';
import classnames from 'classnames';

export default class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    let checked = false;
    if ('checked' in props) {
      checked = props.checked;
    } else {
      checked = props.defaultChecked;
    }
    this.state = {
      checked,
    };
  }

  componentWillReceiveProps(nextProps) {
    if ('checked' in nextProps) {
      this.setState({
        checked: nextProps.checked,
      });
    }
  }

  handleChange(e) {
    const checked = e.target.checked;
    if (!('checked' in this.props)) {
      this.setState({
        checked: checked ? 1 : 0,
      });
    }
    this.props.onChange({
      target: {
        ...this.props,
        checked,
      },
      stopPropagation() {
        e.stopPropagation();
      },
      preventDefault() {
        e.preventDefault();
      },
    });
  }

  render() {
    const props = { ...this.props };
    // Remove React warning.
    // Warning: Input elements must be either controlled or uncontrolled
    // (specify either the value prop, or the defaultValue prop, but not both).
    delete props.defaultChecked;

    const prefixCls = props.prefixCls;
    let checked = this.state.checked;
    if (typeof checked === 'boolean') {
      checked = checked ? 1 : 0;
    }
    const className = classnames({
      [props.className]: !!props.className,
      [prefixCls]: 1,
      [`${prefixCls}-checked`]: checked,
      [`${prefixCls}-checked-${checked}`]: !!checked,
      [`${prefixCls}-disabled`]: props.disabled,
    });
    return (
      <span
        className={className}
        style={props.style}
      >
          <span className={`${prefixCls}-inner`} />
          <input
            {...props}
            className={`${prefixCls}-input`}
            checked={checked}
            onChange={this.handleChange}
          />
        </span>
    );
  }
}

Checkbox.propTypes = {
  prefixCls: React.PropTypes.string,
  style: React.PropTypes.object,
  type: React.PropTypes.string,
  className: React.PropTypes.string,
  defaultChecked: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.bool]),
  checked: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.bool]),
  onChange: React.PropTypes.func,
};

Checkbox.defaultProps = {
  prefixCls: 'rc-checkbox',
  style: {},
  type: 'checkbox',
  className: '',
  defaultChecked: false,
  onChange: () => {
  },
};
