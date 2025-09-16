/* eslint no-console:0, jsx-a11y/label-has-for: 0, jsx-a11y/label-has-associated-control: 0 */
import Checkbox from '@rc-component/checkbox';
import React from 'react';
import '../../assets/index.less';

import type { CheckboxProps } from '@rc-component/checkbox';

const onChange = (e: any) => {
  console.log('Checkbox checked:', e.target.checked);
};

const onKeyDown: CheckboxProps['onKeyDown'] = (e) => {
  console.log('Checkbox key down:', e.key);
};

const onKeyPress: CheckboxProps['onKeyPress'] = (e) => {
  console.log('Checkbox key press:', e.key);
};

const onKeyUp: CheckboxProps['onKeyUp'] = (e) => {
  console.log('Checkbox key up:', e.key);
};

export default () => {
  const [disabled, setDisabled] = React.useState(false);

  const toggle = () => {
    setDisabled((disabled) => !disabled);
  };

  return (
    <div style={{ margin: 20 }}>
      <div>
        <p>
          <label>
            <Checkbox checked onChange={onChange} disabled={disabled} />
            &nbsp; controlled checked rc-checkbox
          </label>
          &nbsp;&nbsp;
        </p>
        <p>
          <label>
            <input checked type="checkbox" onChange={onChange} disabled={disabled} />
            &nbsp; controlled checked native
          </label>
          &nbsp;&nbsp;
        </p>
      </div>

      <div>
        <p>
          <label>
            <Checkbox defaultChecked onChange={onChange} disabled={disabled} />
            &nbsp; defaultChecked rc-checkbox
          </label>
          &nbsp;&nbsp;
        </p>
        <p>
          <label>
            <input type="checkbox" defaultChecked onChange={onChange} disabled={disabled} />
            &nbsp; defaultChecked native
          </label>
          &nbsp;&nbsp;
        </p>
      </div>

      <div>
        <p>
          <label>
            <Checkbox name="my-checkbox" defaultChecked onChange={onChange} disabled={disabled} />
            &nbsp; defaultChecked rc-checkbox with name
          </label>
          &nbsp;&nbsp;
        </p>
        <p>
          <label>
            <input
              name="my-checkbox"
              type="checkbox"
              defaultChecked
              onChange={onChange}
              disabled={disabled}
            />
            &nbsp; defaultChecked native with name
          </label>
          &nbsp;&nbsp;
        </p>
      </div>

      <div>
        <p>
          <label>
            <Checkbox
              onChange={onChange}
              onKeyDown={onKeyDown}
              onKeyPress={onKeyPress}
              onKeyUp={onKeyUp}
              disabled={disabled}
            />
            &nbsp; rc-checkbox with key events
          </label>
          &nbsp;&nbsp;
        </p>
        <p>
          <label>
            <input
              type="checkbox"
              onChange={onChange}
              onKeyDown={onKeyDown}
              onKeyPress={onKeyPress}
              onKeyUp={onKeyUp}
              disabled={disabled}
            />
            &nbsp; native checkbox with key events
          </label>
          &nbsp;&nbsp;
        </p>
      </div>

      <button type="button" onClick={toggle}>
        toggle disabled
      </button>
    </div>
  );
};
