/**
 * only require other specs here
 */
var expect = require('expect.js');
var Checkbox = require('../index');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var Simulate = TestUtils.Simulate;

describe('rc-switch', function () {
  var inst;
  var container = document.createElement('div');
  document.body.appendChild(container);

  beforeEach(function (done) {
    ReactDOM.render(<Checkbox/>, container, function () {
      inst = this;
      done();
    });
  });

  afterEach(function () {
    ReactDOM.unmountComponentAtNode(container);
  });

  it('works', function () {
    expect(!!inst.state.checked).to.be(false);
    TestUtils.scryRenderedDOMComponentsWithTag(inst, 'input')[0].click();
    expect(!!inst.state.checked).to.be(true);
  });
});
