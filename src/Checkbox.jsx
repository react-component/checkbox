import React from 'react';
import PureRenderMixin from 'rc-util/lib/PureRenderMixin';
import classNames from 'classnames';

export default class Checkbox extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
    prefixCls: React.PropTypes.string,
    style: React.PropTypes.object,
    type: React.PropTypes.string,
    className: React.PropTypes.string,
    defaultChecked: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.bool]),
    disabled: React.PropTypes.bool,
    checked: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.bool]),
    onFocus: React.PropTypes.func,
    onBlur: React.PropTypes.func,
    onChange: React.PropTypes.func,
    onClick: React.PropTypes.func,
  };
  static defaultProps = {
    prefixCls: 'rc-checkbox',
    style: {},
    type: 'checkbox',
    className: '',
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
      focus: false
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
    if (this.props.disabled) {
      return;
    }
    if (!('checked' in this.props)) {
      this.setState({
        checked: e.target.checked,
      });
    }
    this.props.onChange({
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
    });
  };

  render() {
    const props = { ...this.props };
    // Remove React warning.
    // Warning: Input elements must be either controlled or uncontrolled
    // (specify either the value prop, or the defaultValue prop, but not both).
    delete props.defaultChecked;

    const state = this.state;
    const prefixCls = props.prefixCls;
    let checked = state.checked;

    const className = classNames([prefixCls], {
      [props.className]: props.className,
      [`${prefixCls}-checked`]: checked,
      [`${prefixCls}-focused`]: state.focus,
      [`${prefixCls}-disabled`]: props.disabled,
    });
    return (
      <span className={className} style={props.style}>
          <span className={`${prefixCls}-inner`} />

          <input
            name={props.name}
            type={props.type}
            readOnly={props.readOnly}
            disabled={props.disabled}
            tabIndex={props.tabIndex}
            className={`${prefixCls}-input`}
            checked={!!checked}
            onClick={this.props.onClick}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onChange={this.handleChange}
          />
      </span>
    );
  }
}
