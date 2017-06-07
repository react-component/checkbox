/* eslint no-console:0 */

import React from 'react';
import ReactDOM from 'react-dom';
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.less';

function onChange(e) {
  console.log('Checkbox checked:', (e.target.checked));
}

class SimpleDemo extends React.Component {
  state = {
    disabled: false,
  };

  toggle = () => {
    this.setState((state) => ({
      disabled: !state.disabled,
    }));
  }

  render() {
    return (
      <div style={{ margin: 20 }}>
        <div>
          <p>
            <label>
              <Checkbox
                checked
                onChange={onChange}
                disabled={this.state.disabled}
              />
              &nbsp; controlled checked rc-checkbox
            </label>
            &nbsp;&nbsp;
          </p>
          <p>
            <label>
              <input
                checked
                type="checkbox"
                onChange={onChange}
                disabled={this.state.disabled}
              />
              &nbsp; controlled checked native
            </label>
            &nbsp;&nbsp;
          </p>
        </div>

        <div>
          <p>
            <label>
              <Checkbox
                defaultChecked
                onChange={onChange}
                disabled={this.state.disabled}
              />
              &nbsp; defaultChecked rc-checkbox
            </label>
            &nbsp;&nbsp;
          </p>
          <p>
            <label>
              <input
                type="checkbox"
                defaultChecked
                onChange={onChange}
                disabled={this.state.disabled}
              />
              &nbsp; defaultChecked native
            </label>
            &nbsp;&nbsp;
          </p>
        </div>

        <div>
          <p>
            <label>
              <Checkbox
                name="my-checkbox"
                defaultChecked
                onChange={onChange}
                disabled={this.state.disabled}
              />
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
                disabled={this.state.disabled}
              />
              &nbsp; defaultChecked native with name
            </label>
            &nbsp;&nbsp;
          </p>
        </div>

        <button onClick={this.toggle}>toggle disabled</button>
      </div>
    );
  }
}

ReactDOM.render(<SimpleDemo />, document.getElementById('__react-content'));
