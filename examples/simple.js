/* eslint no-console:0 */

import 'rc-checkbox/assets/index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import Checkbox from 'rc-checkbox';

function onChange(e) {
  console.log('checkbox checked:', (e.target.checked));
}

const Test = React.createClass({
  getInitialState() {
    return {
      disabled: false,
    };
  },
  toggle() {
    this.setState({
      disabled: !this.state.disabled,
    });
  },
  render() {
    return (<div style={{ margin: 20 }}>
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

    </div>);
  },
});

ReactDOM.render(<Test />, document.getElementById('__react-content'));
