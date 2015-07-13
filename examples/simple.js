require('../assets/checkbox.css');
var React = require('react');
var Checkbox = require('../src/index');

function onChange(value) {
  console.log('checkbox checked:' + value);
}


var Test = React.createClass({
  getInitialState() {
    return {
      disabled: false
    }
  },
  toggle(){
    this.setState({
      disabled:!this.state.disabled
    });
  },
  render() {
    return <div style={{margin: 20}}>
      <Checkbox onChange={onChange}
        disabled={this.state.disabled}
      />
      <div>
        <button onClick={this.toggle}>toggle disabled</button>
      </div>
    </div>;
  }
});

React.render(<Test />, document.getElementById("__react-content"));
