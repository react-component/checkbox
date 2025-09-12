import type { CheckboxRef } from '@rc-component/checkbox';
import Checkbox from '@rc-component/checkbox';
import { useLayoutEffect, useRef, useState } from 'react';
import '../../assets/index.less';

const MyCheckbox = () => {
  const ref = useRef<CheckboxRef>(null);
  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.focus({ preventScroll: true });
    }
  }, []);
  return (
    <div>
      <Checkbox ref={ref} />
    </div>
  );
};

const Demo = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div style={{ height: '50vh' }} />
      <a onClick={() => setOpen(!open)}>{`${open}`}</a>
      <div style={{ height: '80vh' }} />
      {open && <MyCheckbox />}
      <div style={{ height: '30vh' }} />
    </div>
  );
};

export default Demo;
