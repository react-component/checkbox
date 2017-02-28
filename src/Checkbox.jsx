import React, { PropTypes } from 'react';
import PureRenderMixin from 'rc-util/lib/PureRenderMixin';
import classNames from 'classnames';

export default class Checkbox extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    name: PropTypes.string,
    type: PropTypes.string,
    defaultChecked: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    checked: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    disabled: PropTypes.bool,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    tabIndex: PropTypes.string,
    readOnly: PropTypes.bool,
  };
  static defaultProps = {
    prefixCls: 'rc-checkbox',
    className: '',
    style: {},
    type: 'checkbox',
    defaultChecked: false,
    onFocus() {},
    onBlur() {},
    onChange() {},
  };
  constructor(props) {
    super(props);

    const checked = 'checked' in props ? props.checked : props.defaultChecked;

    this.state = {
      checked,
      focus: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if ('checked' in nextProps) {
      this.setState({
        checked: nextProps.checked,
      });
    }
  }

  shouldComponentUpdate(...args) {
    return PureRenderMixin.shouldComponentUpdate.apply(this, args);
  }

  handleFocus = (e) => {
    this.setState({ focus: true });
    this.props.onFocus(e);
  };

  handleBlur = (e) => {
    this.setState({ focus: false });
    this.props.onBlur(e);
  };

  handleChange = (e) => {
    const { props } = this;
    if (props.disabled) {
      return;
    }
    if (!('checked' in props)) {
      this.setState({
        checked: e.target.checked,
      });
    }
    props.onChange({
      target: {
        ...props,
        checked: e.target.checked,
      },
      stopPropagation() {
        e.stopPropagation();
      },
      preventDefault() {
        e.preventDefault();
      },
    });
  };

  render() {
    const {
      prefixCls, className, style, name, type, disabled, readOnly, tabIndex, onClick,
    } = this.props;
    const { checked, focus } = this.state;
    const classString = classNames(prefixCls, className, {
      [`${prefixCls}-checked`]: checked,
      [`${prefixCls}-focused`]: focus,
      [`${prefixCls}-disabled`]: disabled,
    });

    return (
      <span className={classString} style={style}>
        <span className={`${prefixCls}-inner`} />
        <input
          name={name}
          type={type}
          readOnly={readOnly}
          disabled={disabled}
          tabIndex={tabIndex}
          className={`${prefixCls}-input`}
          checked={!!checked}
          onClick={onClick}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
        />
      </span>
    );
  }
}
