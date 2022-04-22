import React, { Component } from 'react';
import classNames from 'classnames';

class Checkbox extends Component {
  static defaultProps = {
    prefixCls: 'rc-checkbox',
    className: '',
    style: {},
    type: 'checkbox',
    title: '',
    defaultChecked: false,
    onFocus() {},
    onBlur() {},
    onChange() {},
    onKeyDown() {},
    onKeyPress() {},
    onKeyUp() {},
  };

  constructor(props) {
    super(props);

    const checked =
      'checked' in props && !(props.checked === undefined || props.checked === null)
        ? props.checked
        : props.defaultChecked;

    this.state = {
      checked,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if ('checked' in props && !(props.checked === undefined || props.checked === null)) {
      return {
        ...state,
        checked: props.checked,
      };
    }
    return null;
  }

  focus() {
    this.input.focus();
  }

  blur() {
    this.input.blur();
  }

  handleChange = (e) => {
    const { disabled, onChange, checked } = this.props;
    if (disabled) {
      return;
    }
    if (
      !('checked' in this.props) ||
      ('checked' in this.props && (checked === undefined || checked === null))
    ) {
      this.setState({
        checked: e.target.checked,
      });
    }
    if (onChange) {
      onChange({
        target: {
          ...this.props,
          checked: e.target.checked,
        },
        stopPropagation() {
          e.stopPropagation();
        },
        preventDefault() {
          e.preventDefault();
        },
        nativeEvent: e.nativeEvent,
      });
    }
  };

  saveInput = (node) => {
    this.input = node;
  };

  render() {
    const {
      prefixCls,
      className,
      style,
      name,
      id,
      type,
      title,
      disabled,
      readOnly,
      tabIndex,
      onClick,
      onFocus,
      onBlur,
      onKeyDown,
      onKeyPress,
      onKeyUp,
      autoFocus,
      value,
      required,
      ...others
    } = this.props;

    const globalProps = Object.keys(others).reduce((prev, key) => {
      if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {
        // eslint-disable-next-line no-param-reassign
        prev[key] = others[key];
      }
      return prev;
    }, {});

    const { checked } = this.state;
    const classString = classNames(prefixCls, className, {
      [`${prefixCls}-checked`]: checked,
      [`${prefixCls}-disabled`]: disabled,
    });

    return (
      <span className={classString} style={style}>
        <input
          name={name}
          id={id}
          type={type}
          title={title}
          required={required}
          readOnly={readOnly}
          disabled={disabled}
          tabIndex={tabIndex}
          className={`${prefixCls}-input`}
          checked={!!checked}
          onClick={onClick}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyUp={onKeyUp}
          onKeyDown={onKeyDown}
          onKeyPress={onKeyPress}
          onChange={this.handleChange}
          autoFocus={autoFocus}
          ref={this.saveInput}
          value={value}
          {...globalProps}
        />
        <span className={`${prefixCls}-inner`} />
      </span>
    );
  }
}

export default Checkbox;
