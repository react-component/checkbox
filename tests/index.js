/**
 * only require other specs here
 */
const expect = require('expect.js');
const Checkbox = require('../index');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');

describe('rc-switch', () => {
  let inst;
  const container = document.createElement('div');
  document.body.appendChild(container);

  beforeEach((done) => {
    ReactDOM.render(<Checkbox />, container, function init() {
      inst = this;
      done();
    });
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
  });

  it('works', () => {
    expect(!!inst.state.checked).to.be(false);
    TestUtils.scryRenderedDOMComponentsWithTag(inst, 'input')[0].click();
    expect(!!inst.state.checked).to.be(true);
    TestUtils.scryRenderedDOMComponentsWithTag(inst, 'input')[0].click();
    expect(!!inst.state.checked).to.be(false);
  });

  it('click radio', () => {
    ReactDOM.render(<Checkbox type="radio" />, container, function init() {
      inst = this;
    });
    expect(!!inst.state.checked).to.be(false);
    TestUtils.scryRenderedDOMComponentsWithTag(inst, 'input')[0].click();
    expect(!!inst.state.checked).to.be(true);
    TestUtils.scryRenderedDOMComponentsWithTag(inst, 'input')[0].click();
    expect(!!inst.state.checked).to.be(true);
  });
});
