# rc-checkbox
---

checkbox ui component for react

[![NPM version][npm-image]][npm-url]
[![SPM version](http://spmjs.io/badge/rc-switch)](http://spmjs.io/package/rc-checkbox)
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![gemnasium deps][gemnasium-image]][gemnasium-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/rc-checkbox.svg?style=flat-square
[npm-url]: http://npmjs.org/package/rc-checkbox
[travis-image]: https://img.shields.io/travis/react-component/checkbox.svg?style=flat-square
[travis-url]: https://travis-ci.org/react-component/checkbox
[coveralls-image]: https://img.shields.io/coveralls/react-component/checkbox.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/react-component/checkbox?branch=master
[gemnasium-image]: http://img.shields.io/gemnasium/react-component/checkbox.svg?style=flat-square
[gemnasium-url]: https://gemnasium.com/react-component/checkbox
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/rc-checkbox.svg?style=flat-square
[download-url]: https://npmjs.org/package/rc-checkbox

## Screenshots


## Feature

* support ie8,ie8+,chrome,firefox,safari


## install

[![rc-switch](https://nodei.co/npm/rc-switch.png)](https://npmjs.org/package/rc-switch)

## Usage

```js
var Switch = require('rc-switch');
var React = require('react');
React.render(<Switch />, container);
```

## API

### props

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th style="width: 50px;">default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>prefixCls</td>
          <td>String</td>
          <td>rc-switch</td>
          <td></td>
        </tr>
        <tr>
          <td>className</td>
          <td>String</td>
          <td>''</td>
          <td>additional class name of root node</td>
        </tr>
        <tr>
          <td>checked</td>
          <td>boolean</td>
          <td>false</td>
          <td>whether switch is checked</td>
        </tr>
        <tr>
          <td>defaultChecked</td>
          <td>boolean</td>
          <td>false</td>
          <td>whether switch is checked on init</td>
        <tr>
          <td>onChange</td>
          <td>Function</td>
          <td></td>
          <td>called when switch is checked or unchecked</td>
        </tr>
    </tbody>
</table>

## Development

```
npm install
npm start
```

## Example

http://localhost:8001/examples/

online example: http://react-component.github.io/switch/examples/

## Test Case

http://localhost:8001/tests/runner.html?coverage

## Coverage

http://localhost:8001/node_modules/rc-server/node_modules/node-jscover/lib/front-end/jscoverage.html?w=http://localhost:8001/tests/runner.html?coverage

## License

rc-switch is released under the MIT license.
