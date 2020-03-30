# rc-checkbox
---

React Checkbox component.

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![Dependencies](https://img.shields.io/david/react-component/checkbox.svg?style=flat-square)](https://david-dm.org/react-component/checkbox)
[![DevDependencies](https://img.shields.io/david/dev/react-component/checkbox.svg?style=flat-square)](https://david-dm.org/react-component/checkbox?type=dev)

[npm-image]: http://img.shields.io/npm/v/rc-checkbox.svg?style=flat-square
[npm-url]: http://npmjs.org/package/rc-checkbox
[travis-image]: https://img.shields.io/travis/react-component/checkbox.svg?style=flat-square
[travis-url]: https://travis-ci.org/react-component/checkbox
[codecov-image]: https://img.shields.io/codecov/react-component/checkbox.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/react-component/checkbox
[download-image]: https://img.shields.io/npm/dm/rc-checkbox.svg?style=flat-square
[download-url]: https://npmjs.org/package/rc-checkbox

## Install

[![rc-checkbox](https://nodei.co/npm/rc-checkbox.png)](https://npmjs.org/package/rc-checkbox)

## Usage

```js
import 'rc-checkbox/assets/index.css';
import Checkbox from 'rc-checkbox';

ReactDOM.render(<Checkbox />, container);
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
          <td>rc-checkbox</td>
          <td></td>
        </tr>
        <tr>
          <td>className</td>
          <td>String</td>
          <td>''</td>
          <td>additional class name of root node</td>
        </tr>
         <tr>
          <td>name</td>
          <td>String</td>
          <td></td>
          <td>same with native input checkbox</td>
        </tr>
        <tr>
          <td>checked</td>
          <td>enum: 0,1,2</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>defaultChecked</td>
          <td>enum: 0,1,2</td>
          <td>0</td>
          <td>same with native input checkbox</td>
        <tr>
          <td>onChange</td>
          <td>Function(e:Event, checked:Number)</td>
          <td></td>
          <td>called when checkbox is changed. e is native event, checked is original checked state.</td>
        </tr>
    </tbody>
</table>

## Development

```
npm install
npm start
```

## Examples

http://localhost:8001/examples/

online example: http://react-component.github.io/checkbox/examples/simple.html

## Test Case

```
npm test
```

## Coverage

```
npm run coverage
open coverage
```

## License

rc-checkbox is released under the MIT license.
