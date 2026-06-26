<div align="center">
  <h1>@rc-component/checkbox</h1>
  <p>☑️ A small, accessible checkbox primitive for React.</p>

  <a href="https://ant.design">
    <img width="32" height="32" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="Ant Design" />
  </a>

  <p>Part of the Ant Design ecosystem.</p>
</div>

<div align="center">

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]
[![build status][github-actions-image]][github-actions-url]
[![Codecov][codecov-image]][codecov-url]
[![bundle size][bundlephobia-image]][bundlephobia-url]
[![dumi][dumi-image]][dumi-url]

</div>

[npm-image]: https://img.shields.io/npm/v/@rc-component/checkbox.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@rc-component/checkbox
[github-actions-image]: https://github.com/react-component/checkbox/actions/workflows/main.yml/badge.svg
[github-actions-url]: https://github.com/react-component/checkbox/actions/workflows/main.yml
[codecov-image]: https://img.shields.io/codecov/c/github/react-component/checkbox/master.svg?style=flat-square
[codecov-url]: https://app.codecov.io/gh/react-component/checkbox
[download-image]: https://img.shields.io/npm/dm/@rc-component/checkbox.svg?style=flat-square
[download-url]: https://npmjs.org/package/@rc-component/checkbox
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/%40rc-component%2Fcheckbox?style=flat-square
[bundlephobia-url]: https://bundlephobia.com/package/@rc-component/checkbox
[dumi-image]: https://img.shields.io/badge/docs%20by-dumi-blue?style=flat-square
[dumi-url]: https://github.com/umijs/dumi

## Highlights

- Works as a controlled or uncontrolled checkbox.
- Exposes an imperative ref for focus, blur, and DOM access.
- Keeps native input attributes available while normalizing the change event.
- Ships compiled JavaScript, TypeScript definitions, and a standalone CSS asset.

## Install

```bash
npm install @rc-component/checkbox
```

## Usage

```tsx
import Checkbox from '@rc-component/checkbox';
import '@rc-component/checkbox/assets/index.css';

export default function App() {
  return (
    <Checkbox
      defaultChecked
      onChange={(event) => {
        console.log(event.target.checked);
      }}
    />
  );
}
```

## Examples

```bash
npm install
npm start
```

Then open `http://localhost:8000`.

Online demo: https://react-component.github.io/checkbox/

## API

### Checkbox

| Property       | Description                                | Type                                   | Default       |
| -------------- | ------------------------------------------ | -------------------------------------- | ------------- |
| checked        | Whether the checkbox is checked            | boolean                                | -             |
| className      | Additional class name                      | string                                 | -             |
| defaultChecked | Whether the checkbox is checked by default | boolean                                | false         |
| disabled       | Whether the checkbox is disabled           | boolean                                | false         |
| name           | Same as native checkbox input `name`       | string                                 | -             |
| prefixCls      | Component class name prefix                | string                                 | `rc-checkbox` |
| style          | Inline style for the wrapper               | `React.CSSProperties`                  | -             |
| type           | Native input type                          | string                                 | `checkbox`    |
| value          | Same as native checkbox input `value`      | string \| number \| readonly string[]  | -             |
| onChange       | Callback when checked state changes        | `(event: CheckboxChangeEvent) => void` | -             |

Other native input attributes are also supported.

### Ref

| Property      | Description                    | Type                               |
| ------------- | ------------------------------ | ---------------------------------- |
| blur          | Remove focus from the checkbox | `() => void`                       |
| focus         | Focus the checkbox             | `(options?: FocusOptions) => void` |
| input         | Native input element           | `HTMLInputElement \| null`         |
| nativeElement | Wrapper element                | `HTMLElement \| null`              |

## Development

```bash
npm install
npm start
```

```bash
npm test
npm run tsc
npm run lint
npm run compile
npm run build
```

## Release

```bash
npm run prepublishOnly
```

The release flow is handled by `@rc-component/np` through the `rc-np` command after the package build.

## License

@rc-component/checkbox is released under the [MIT](./LICENSE.md) license.
