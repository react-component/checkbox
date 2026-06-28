<div align="center">
  <h1>@rc-component/checkbox</h1>
  <p><sub><img alt="Ant Design" height="14" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" style="vertical-align: -0.125em;" /> Part of the Ant Design ecosystem.</sub></p>
  <p>☑️ A small, accessible checkbox primitive for React.</p>

  <p>
    <a href="https://npmjs.org/package/@rc-component/checkbox"><img alt="NPM version" src="https://img.shields.io/npm/v/@rc-component/checkbox.svg?style=flat-square"></a>
    <a href="https://npmjs.org/package/@rc-component/checkbox"><img alt="npm downloads" src="https://img.shields.io/npm/dm/@rc-component/checkbox.svg?style=flat-square"></a>
    <a href="https://github.com/react-component/checkbox/actions/workflows/main.yml"><img alt="build status" src="https://github.com/react-component/checkbox/actions/workflows/main.yml/badge.svg"></a>
    <a href="https://app.codecov.io/gh/react-component/checkbox"><img alt="Codecov" src="https://img.shields.io/codecov/c/github/react-component/checkbox/master.svg?style=flat-square"></a>
    <a href="https://bundlephobia.com/package/@rc-component/checkbox"><img alt="bundle size" src="https://img.shields.io/bundlephobia/minzip/@rc-component/checkbox?style=flat-square"></a>
    <a href="https://github.com/umijs/dumi"><img alt="dumi" src="https://img.shields.io/badge/docs%20by-dumi-blue?style=flat-square"></a>
  </p>
</div>

<p align="center">English | <a href="./README.zh-CN.md">简体中文</a></p>

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

Run the local dumi site:

```bash
npm install
npm start
```

Then open `http://localhost:8000`.

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

The dumi site runs at `http://localhost:8000` by default.

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

@rc-component/checkbox is released under the [MIT](./LICENSE) license.
