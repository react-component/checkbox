<div align="center">
  <h1>@rc-component/checkbox</h1>
  <p><sub><img alt="Ant Design" height="14" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" style="vertical-align: -0.125em;" /> Ant Design 生态的一部分。</sub></p>
  <p>☑️ 轻量、可访问的 React 复选框基础组件。</p>
</div>

<p align="center"><a href="./README.md">English</a> | 简体中文</p>


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

## 特性

- 可作为受控或非受控复选框。
- 引入用于焦点、模糊和 DOM 访问的命令式引用。
- 在规范化更改事件时保留可用的本机输入属性。
- 提供编译后的 JavaScript、TypeScript 类型定义和独立 CSS 资源。

## 安装

```bash
npm install @rc-component/checkbox
```

## 使用

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

## 示例

运行本地 dumi 站点：

```bash
npm install
npm start
```

然后打开 `http://localhost:8000`。

## API

### Checkbox

| 参数 | 说明 | 类型 | 默认值 |
| -------------- | ------------------------------------------ | -------------------------------------- | ------------- |
| checked        | 复选框是否被选中            | boolean                                | -             |
| className      | 附加className                      | string                                 | -             |
| defaultChecked | 复选框是否默认选中 | boolean                                | false         |
| disabled       | 复选框是否禁用           | boolean                                | false         |
| name           | 与原生 checkbox input 一致 `name`       | string                                 | -             |
| prefixCls      | 组件className前缀                | string                                 | `rc-checkbox` |
| 风格          | 包装器的内联样式               | `React.CSSProperties`                  | -             |
| type           | 原生输入类型                          | string                                 | `checkbox`    |
| 价值          | 与原生 checkbox input 一致 `value`      | 字符串\|数字\|只读字符串[]  | -             |
| onChange       | 勾选状态改变时回调        | `(event: CheckboxChangeEvent) => void` | -             |

还支持其他本机输入属性。

### Ref

| 参数      | 说明                    | 类型                               |
| ------------- | ------------------------------ | ---------------------------------- |
| 模糊          | 从复选框中移除焦点 | `() => void`                       |
| 重点         | 聚焦复选框             | `(options?: FocusOptions) => void` |
| input         | 原生输入元素           | `HTMLInputElement \| null`         |
| nativeElement | 包装元素                | `HTMLElement \| null`              |

## 本地开发

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

## 发布

```bash
npm run prepublishOnly
```

包构建完成后，发布流程由 `@rc-component/np` 通过 `rc-np` 命令处理。

## 许可证

@rc-component/checkbox 基于 [MIT](./LICENSE.md) 许可证发布。
