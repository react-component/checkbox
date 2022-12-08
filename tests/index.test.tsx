import * as React from 'react';
import KeyCode from 'rc-util/lib/KeyCode';
import { fireEvent, render } from '@testing-library/react';
import Checkbox from '../src';

import type { CheckboxRef } from '../src';

describe('rc-checkbox', () => {
  it('works', () => {
    const { container } = render(<Checkbox />);
    const inputEl = container.querySelector('input')!;

    expect(inputEl.checked).toBe(false);

    fireEvent.change(inputEl, { target: { checked: true } });
    expect(inputEl.checked).toBe(true);

    fireEvent.change(inputEl, { target: { checked: false } });
    expect(inputEl.checked).toBe(false);
  });

  it('click radio', () => {
    const { container } = render(<Checkbox type="radio" />);
    const inputEl = container.querySelector('input')!;

    expect(inputEl.checked).toBe(false);

    fireEvent.click(inputEl);
    expect(inputEl.checked).toBe(true);

    fireEvent.click(inputEl);
    expect(inputEl.checked).toBe(true);
  });

  it('click checkbox', () => {
    const { container } = render(<Checkbox type="checkbox" />);
    const inputEl = container.querySelector('input')!;

    expect(inputEl.checked).toBe(false);

    fireEvent.click(inputEl);
    expect(inputEl.checked).toBe(true);

    fireEvent.click(inputEl);
    expect(inputEl.checked).toBe(false);
  });

  // TODO: 解决
  it('control mode', () => {
    const { container } = render(<Checkbox checked />);
    const inputEl = container.querySelector('input')!;

    expect(inputEl.checked).toBe(true);

    fireEvent.change(inputEl, { target: { checked: true } });
    expect(inputEl.checked).toBe(true);

    fireEvent.change(inputEl, { target: { checked: false } });
    expect(inputEl.checked).toBe(false);
  });

  it('stopPropagation and preventDefault', () => {
    const onChange = jest.fn();

    const { container } = render(
      <div onChange={onChange}>
        <Checkbox
          onChange={(e) => {
            e.stopPropagation();
            e.preventDefault();
          }}
        />
      </div>,
    );

    const inputEl = container.querySelector('input')!;

    fireEvent.change(inputEl, { target: { checked: true } });
    expect(onChange).not.toHaveBeenCalled();
  });

  it('passes data-* props to input', () => {
    const { container } = render(<Checkbox data-type="my-data-type" />);
    const inputEl = container.querySelector('input')!;

    expect(inputEl.getAttribute('data-type')).toEqual('my-data-type');
  });

  it('passes aria-* props to input', () => {
    const { container } = render(<Checkbox aria-label="my-aria-label" />);
    const inputEl = container.querySelector('input')!;

    expect(inputEl.getAttribute('aria-label')).toEqual('my-aria-label');
  });

  it('passes role prop to input', () => {
    // eslint-disable-next-line jsx-a11y/aria-role
    const { container } = render(<Checkbox role="my-role" />);
    const inputEl = container.querySelector('input')!;

    // @ts-ignore
    expect(inputEl.attributes.role.value).toEqual('my-role');
  });

  it('passes value prop to input', () => {
    const { container } = render(<Checkbox value="my-custom-value" />);
    const inputEl = container.querySelector('input')!;

    // @ts-ignore
    expect(inputEl.attributes.value.value).toEqual('my-custom-value');
  });

  it('passes number value prop to input', () => {
    const { container } = render(<Checkbox value={6} />);
    const inputEl = container.querySelector('input')!;

    // @ts-ignore
    expect(inputEl.attributes.value.value).toEqual('6');
  });

  it('passes title prop to input', () => {
    const { container } = render(<Checkbox title="my-custom-title" />);
    const inputEl = container.querySelector('input')!;

    // @ts-ignore
    expect(inputEl.attributes.title.value).toEqual('my-custom-title');
  });

  it('focus()', () => {
    const checkboxRef = React.createRef<CheckboxRef>();
    const onFocus = jest.fn();

    render(<Checkbox ref={checkboxRef} onFocus={onFocus} />);

    checkboxRef.current!.focus();

    expect(onFocus).toHaveBeenCalledTimes(1);
  });

  it('onFocus', () => {
    const onFocus = jest.fn();

    const { container } = render(<Checkbox onFocus={onFocus} />);
    const inputEl = container.querySelector('input')!;

    fireEvent.focus(inputEl);

    expect(onFocus).toHaveBeenCalledTimes(1);
  });

  it('onBlur', () => {
    const onBlur = jest.fn();

    const { container } = render(<Checkbox onBlur={onBlur} />);
    const inputEl = container.querySelector('input')!;

    fireEvent.focus(inputEl);
    fireEvent.blur(inputEl);

    expect(onBlur).toHaveBeenCalledTimes(1);
  });

  it('autoFocus', () => {
    const handleFocus = jest.fn();

    render(<Checkbox autoFocus onFocus={handleFocus} />);

    expect(handleFocus).toHaveBeenCalledTimes(1);
  });

  // TODO: 解决
  // it('onChange', () => {
  //   const onChange = jest.fn();

  //   const { container } = render(<Checkbox onChange={onChange} />);
  //   const inputEl =container.querySelector('input')!;

  //   fireEvent.change(input, { target: { checked: true } });

  //   expect(onChange).toHaveBeenCalled();
  //   expect(input.checked).toBe(true);
  // });

  it('onChange disabled', () => {
    const onChange = jest.fn();

    const { container } = render(<Checkbox onChange={onChange} disabled />);
    const input = container.querySelector('input')!;

    fireEvent.change(input, { target: { checked: true } });

    expect(onChange).not.toHaveBeenCalled();
  });

  it('passes required prop to input', () => {
    const { container } = render(<Checkbox required />);

    const inputEl = container.querySelector('input')!;
    expect(inputEl.hasAttribute('required')).toBe(true);
  });

  it('onKeyDown', () => {
    const onKeyDown = jest.fn();

    const { container } = render(<Checkbox onKeyDown={onKeyDown} />);
    const inputEl = container.querySelector('input')!;

    fireEvent.keyDown(inputEl, { which: KeyCode.TAB });

    expect(onKeyDown).toHaveBeenCalledTimes(1);
  });

  it('onKeyPress', () => {
    const onKeyPress = jest.fn();

    const { container } = render(<Checkbox onKeyPress={onKeyPress} />);
    const inputEl = container.querySelector('input')!;

    // https://github.com/testing-library/react-testing-library/issues/269
    fireEvent.keyPress(inputEl, { key: 'Enter', code: 13, charCode: 13 });

    expect(onKeyPress).toHaveBeenCalledTimes(1);
  });

  it('onKeyUp', () => {
    const onKeyUp = jest.fn();

    const { container } = render(<Checkbox onKeyUp={onKeyUp} />);
    const inputEl = container.querySelector('input')!;

    fireEvent.keyUp(inputEl, { which: KeyCode.TAB });

    expect(onKeyUp).toHaveBeenCalledTimes(1);
  });

  it('has default keyboard events handler', () => {
    const onKeyDown = jest.fn();
    const onKeyPress = jest.fn();
    const onKeyUp = jest.fn();

    const { container } = render(
      <div onKeyDown={onKeyDown} onKeyPress={onKeyPress} onKeyUp={onKeyUp}>
        <Checkbox />
      </div>,
    );
    const inputEl = container.querySelector('input')!;

    fireEvent.keyDown(inputEl, { which: KeyCode.TAB });
    expect(onKeyDown).toHaveBeenCalledTimes(1);

    fireEvent.keyPress(inputEl, { key: 'Enter', code: 13, charCode: 13 });
    expect(onKeyPress).toHaveBeenCalledTimes(1);

    fireEvent.keyUp(inputEl, { which: KeyCode.TAB });
    expect(onKeyUp).toHaveBeenCalledTimes(1);
  });
});

describe('Checkbox ref', () => {
  it('focus and blur should work', () => {
    const ref = React.createRef<CheckboxRef>();

    const { container } = render(<Checkbox ref={ref} />);
    const inputEl = container.querySelector('input')!;

    ref.current?.focus();
    expect(document.activeElement).toBe(inputEl);

    ref.current?.blur();
    expect(document.activeElement).not.toBe(inputEl);
  });

  it('input should work', () => {
    const ref = React.createRef<CheckboxRef>();

    const { container } = render(<Checkbox ref={ref} />);
    const inputEl = container.querySelector('input')!;

    expect(ref.current?.input).toBe(inputEl);
  });
});
