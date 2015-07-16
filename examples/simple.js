require('rc-checkbox/assets/index.css');
var React = require('react');
var Checkbox = require('rc-checkbox');

function onChange(value) {
  console.log('checkbox checked:' + value);
}


var Test = React.createClass({
  getInitialState() {
    return {
      disabled: false
    }
  },
  toggle() {
    this.setState({
      disabled: !this.state.disabled
    });
  },
  render() {
    return <div style={{margin: 20}}>
      <p>
        <label>
          <Checkbox onChange={onChange}
            disabled={this.state.disabled}/>

        &nbsp; rc-checkbox
        </label> &nbsp;&nbsp;
        <button onClick={this.toggle}>toggle disabled</button>
      </p>
    </div>;
  }
});

React.render(<Test />, document.getElementById("__react-content"));
