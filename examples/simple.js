/* eslint no-console:0 */

import 'rc-checkbox/assets/index.css';
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
    return (<div style={{margin: 20}}>
      <div>
        <p>
          <label>
            <Checkbox onChange={onChange}
              disabled={this.state.disabled}/>

          &nbsp; rc-checkbox
          </label>
        &nbsp;&nbsp;

        </p>

        <p>
          <label>
            <input type="checkbox" onChange={onChange}
              disabled={this.state.disabled}/>

          &nbsp; native
          </label>
        &nbsp;&nbsp;
        </p>
      </div>

      <div>
        <p>
          <label>
            <Checkbox checked onChange={onChange}
              disabled={this.state.disabled}/>

          &nbsp; rc-checkbox
          </label>
        &nbsp;&nbsp;

        </p>

        <p>
          <label>
            <input type="checkbox" checked onChange={onChange}
              disabled={this.state.disabled}/>

          &nbsp; native
          </label>
        &nbsp;&nbsp;
        </p>
      </div>

      <button onClick={this.toggle}>toggle disabled</button>

    </div>);
  },
});

ReactDOM.render(<Test />, document.getElementById('__react-content'));
