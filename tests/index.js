/**
 * only require other specs here
 */
const expect = require('expect.js');
const Checkbox = require('../index');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');

describe('rc-checkbox', () => {
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

  it('passes data-* props to input', () => {
    ReactDOM.render(<Checkbox data-type="my-data-type" />, container, function init() {
      inst = this;
    });
    const renderedInput = TestUtils.scryRenderedDOMComponentsWithTag(inst, 'input')[0];
    expect(renderedInput.attributes['data-type'].value).to.equal('my-data-type');
  });

  it('passes aria-* props to input', () => {
    ReactDOM.render(<Checkbox aria-label="my-aria-label" />, container, function init() {
      inst = this;
    });
    const renderedInput = TestUtils.scryRenderedDOMComponentsWithTag(inst, 'input')[0];
    expect(renderedInput.attributes['aria-label'].value).to.equal('my-aria-label');
  });

  it('passes role prop to input', () => {
    ReactDOM.render(<Checkbox role="my-role" />, container, function init() {
      inst = this;
    });
    const renderedInput = TestUtils.scryRenderedDOMComponentsWithTag(inst, 'input')[0];
    expect(renderedInput.attributes.role.value).to.equal('my-role');
  });
});
