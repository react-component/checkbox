import { useControlledState } from '@rc-component/util';
import { clsx } from 'clsx';
import * as React from 'react';
import { forwardRef, useImperativeHandle, useRef } from 'react';

export interface CheckboxChangeEvent {
  target: CheckboxChangeEventTarget;
  stopPropagation: () => void;
  preventDefault: () => void;
  nativeEvent: React.ChangeEvent<HTMLInputElement>['nativeEvent'];
}

export interface CheckboxChangeEventTarget extends CheckboxProps {
  checked: boolean;
}

export interface CheckboxRef {
  focus: (options?: FocusOptions) => void;
  blur: () => void;
  input: HTMLInputElement | null;
  nativeElement: HTMLElement | null;
}

export type SemanticName = 'root' | 'input';

export type CheckboxClassNames = Partial<Record<SemanticName, string>>;
export type CheckboxStyles = Partial<Record<SemanticName, React.CSSProperties>>;

export interface CheckboxProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> {
  prefixCls?: string;
  classNames?: CheckboxClassNames;
  styles?: CheckboxStyles;
  onChange?: (e: CheckboxChangeEvent) => void;
}

export const Checkbox = forwardRef<CheckboxRef, CheckboxProps>((props, ref) => {
  const {
    prefixCls = 'rc-checkbox',
    className,
    style,
    classNames: checkboxClassNames,
    styles: checkboxStyles,
    checked,
    disabled,
    defaultChecked = false,
    type = 'checkbox',
    title,
    onChange,
    ...inputProps
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const holderRef = useRef<HTMLElement>(null);

  const [rawValue, setRawValue] = useControlledState(defaultChecked, checked);

  useImperativeHandle(ref, () => ({
    focus: (options) => {
      inputRef.current?.focus(options);
    },
    blur: () => {
      inputRef.current?.blur();
    },
    input: inputRef.current,
    nativeElement: holderRef.current,
  }));

  const classString = clsx(prefixCls, className, checkboxClassNames?.root, {
    [`${prefixCls}-checked`]: rawValue,
    [`${prefixCls}-disabled`]: disabled,
  });

  const rootStyle = { ...style, ...checkboxStyles?.root };
  const inputClassString = clsx(`${prefixCls}-input`, checkboxClassNames?.input);
  const inputStyle = checkboxStyles?.input;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) {
      return;
    }

    if (!('checked' in props)) {
      setRawValue(e.target.checked);
    }

    onChange?.({
      target: {
        ...props,
        type,
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
  };

  return (
    <span className={classString} title={title} style={rootStyle} ref={holderRef}>
      <input
        {...inputProps}
        className={inputClassString}
        style={inputStyle}
        ref={inputRef}
        onChange={handleChange}
        disabled={disabled}
        checked={!!rawValue}
        type={type}
      />
    </span>
  );
});

export default Checkbox;
