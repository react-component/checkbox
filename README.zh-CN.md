<div align="center">
  <h1>@rc-component/checkbox</h1>
  <p><sub><a href="https://ant.design"><img alt="Ant Design" height="14" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" style="vertical-align: -0.125em;" /></a> Ant Design 生态的一部分。</sub></p>
  <p>☑️ 轻量、可访问的 React 复选框基础组件。</p>

  <p>
    <a href="https://npmjs.org/package/@rc-component/checkbox"><img alt="NPM version" src="https://img.shields.io/npm/v/@rc-component/checkbox.svg?style=flat-square"></a>
    <a href="https://npmjs.org/package/@rc-component/checkbox"><img alt="npm downloads" src="https://img.shields.io/npm/dm/@rc-component/checkbox.svg?style=flat-square"></a>
    <a href="https://github.com/react-component/checkbox/actions/workflows/main.yml"><img alt="build status" src="https://github.com/react-component/checkbox/actions/workflows/main.yml/badge.svg"></a>
    <a href="https://app.codecov.io/gh/react-component/checkbox"><img alt="Codecov" src="https://img.shields.io/codecov/c/github/react-component/checkbox/master.svg?style=flat-square"></a>
    <a href="https://bundlephobia.com/package/@rc-component/checkbox"><img alt="bundle size" src="https://img.shields.io/bundlephobia/minzip/@rc-component/checkbox?style=flat-square"></a>
    <a href="https://github.com/umijs/dumi"><img alt="dumi" src="https://img.shields.io/badge/docs%20by-dumi-blue?style=flat-square"></a>
  </p>
</div>

<p align="center"><a href="./README.md">English</a> | 简体中文</p>

## 特性

- 可作为受控或非受控复选框。
- 引入用于焦点、模糊和 DOM 访问的命令式引用。
- 在规范化变更事件时保留可用的原生 input 属性。
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

| 参数           | 说明                               | 类型                                   | 默认值        |
| -------------- | ---------------------------------- | -------------------------------------- | ------------- |
| checked        | 复选框是否被选中                   | boolean                                | -             |
| className      | 附加 className                     | string                                 | -             |
| defaultChecked | 复选框是否默认选中                 | boolean                                | false         |
| disabled       | 复选框是否禁用                     | boolean                                | false         |
| name           | 与原生 checkbox input 一致 `name`  | string                                 | -             |
| prefixCls      | 组件 className 前缀                | string                                 | `rc-checkbox` |
| style          | 包装器的内联样式                   | `React.CSSProperties`                  | -             |
| type           | 原生输入类型                       | string                                 | `checkbox`    |
| value          | 与原生 checkbox input 一致 `value` | string \| number \| readonly string[]  | -             |
| onChange       | 勾选状态改变时回调                 | `(event: CheckboxChangeEvent) => void` | -             |

还支持其他原生 input 属性。

### Ref

| 参数          | 说明               | 类型                               |
| ------------- | ------------------ | ---------------------------------- |
| blur          | 从复选框中移除焦点 | `() => void`                       |
| focus         | 聚焦复选框         | `(options?: FocusOptions) => void` |
| input         | 原生输入元素       | `HTMLInputElement \| null`         |
| nativeElement | 包装元素           | `HTMLElement \| null`              |

## 本地开发

```bash
npm install
npm start
```

dumi 站点默认运行在 `http://localhost:8000`。

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

@rc-component/checkbox 基于 [MIT](./LICENSE) 许可证发布。
