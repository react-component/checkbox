require('../assets/index.css');
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

      <ul>
          <li style={{
          padding: "7px 0",
          "margin-bottom": "20px",
          background: "url(https://t.alipayobjects.com/images/T15CNeXb0lXXXXXXXX.jpg) repeat 0 0",
        }}>
          <Checkbox onChange={onChange}
                    disabled={true}
                    label={"不可用,不选中"}/>
        </li>
        <li>
          <Checkbox onChange={onChange}
                    disabled={true}
                    checked={true}
                    label={"不可用,选中"}/>
        </li>
        <li>
          <Checkbox onChange={onChange}
                    label={"可用"}/>
        </li>
        <li>
          <Checkbox onChange={onChange}
                    disabled={this.state.disabled}
                    label={"可用,动态控制"}/>
          <button onClick={this.toggle}>toggle disabled</button>
        </li>
        <li>

        </li>
      </ul>


    </div>;
  }
});

React.render(<Test />, document.getElementById("__react-content"));
