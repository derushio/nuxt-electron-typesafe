# electron-quasar-typesafe3

このプロジェクトはプロトタイプなど、開発速度が最も重要とするプロジェクトに使用することを想定しているため、クリーンアーキテクチャを採用していません。
クリーンアーキテクチャのような外殻を持ちますが、それぞれが自由に依存関係を作ります。

MEMO

```
src/main の整理完了 (appもindex.tsから分離する？)
TODO: src/renderer の整理
```

An Electron application with Vue and TypeScript

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Project Setup

### Install

```bash
$ npm install
```

### Development

```bash
$ npm run dev
```

### Build

```bash
# For windows
$ npm run build:win

# For macOS
$ npm run build:mac

# For Linux
$ npm run build:linux
```
