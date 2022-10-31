**简体中文**🀄 |  [English🌎](./README.md)

# CodeGen JupyterLab 插件

<!--  [![Github Actions Status](https://github.com/chenqianhe/codegenJupyterLabExt/workflows/Build/badge.svg)](https://github.com/chenqianhe/codegenJupyterLabExt/actions/workflows/build.yml)  --> 

[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/chenqianhe/codegenJupyterLabExt/main?urlpath=lab)

一个基于 [CodeGen model](https://github.com/PaddlePaddle/PaddleNLP/tree/develop/examples/code_generation/codegen) 和 [PaddlePaddle](https://www.paddlepaddle.org.cn/en) 的代码生成 JupyterLab 插件, **提供Python代码生成补全和根据注释生成Python代码等功能。**

## 参数设置修改和生效

CodeGen 扩展提供直接在 JupyterLab 的设置页面进行参数的修改，但是请注意，**修改参数后需要重启 JupyterLab 修改才会生效**。

这是由于参数修改后的更新涉及后端模型的重新加载。

## Requirements

- JupyterLab >= 3.0

## 安装

首先需要根据你的电脑硬件安装 PaddlePaddle 和 PaddleNLP。

请参考 [PaddlePaddle Installation]([https://www.paddlepaddle.org.cn/en/install/quick?docurl=/documentation/docs/en/install/pip/windows-pip_en.html](https://www.paddlepaddle.org.cn/install/quick?docurl=/documentation/docs/zh/install/pip/windows-pip.html)) and [PaddleNLP Installation]([https://github.com/PaddlePaddle/PaddleNLP/blob/develop/README_en.md#installation](https://github.com/PaddlePaddle/PaddleNLP#%E5%AE%89%E8%A3%85))

接下来, 请参考 [Development install](https://github.com/chenqianhe/codegenJupyterLabExt/edit/main/README_cn.md#开发安装) 来完成安装。

> 关于我们为什么无法提供 RELEASE 安装方式
>
> 我们是基于PaddlePaddle AI框架进行的开发，但是各种AI框架在不同的硬件机器上安装时都有不同的安装包，因此我们没办法提供一个通用的安装方式或者安装包。

## 参与开发

### 开发安装

提示: 你需要 NodeJS 来构建插件包。

`jlpm` 命令是跟随 JupyterLab 安装的
[yarn](https://yarnpkg.com/) 固定版本。你也可以使用
`yarn` or `npm` 替代 `jlpm` 。

```bash
# Clone the repo to your local environment
# Change directory to the codegen_paddle directory
# Install package in development mode
pip install -e .
# Link your development version of the extension with JupyterLab
jupyter labextension develop . --overwrite
# Rebuild extension Typescript source after making changes
jlpm build
```

您可以在不同的终端中同时查看源目录并运行JupyterLab，以查看扩展源中的更改并自动重建扩展。

```bash
# Watch the source directory in one terminal, automatically rebuilding when needed
jlpm watch
# Run JupyterLab in another terminal
jupyter lab
```

With the watch command running, every saved change will immediately be built locally and available in your running JupyterLab. Refresh JupyterLab to load the change in your browser (you may need to wait several seconds for the extension to be rebuilt).

运行watch命令后，每个保存的更改都将立即在本地构建，并可在运行的JupyterLab中使用。刷新JupyterLab以在浏览器中加载更改（可能需要等待几秒钟才能重建扩展）。

```bash
jupyter lab build --minimize=False
```

### 开发模式下卸载

```bash
pip uninstall codegen_paddle
```

在开发模式下，您可能需要删除由 `jupyter labextension develop`
命令创建的链接。要找到其位置，您可以运行 `jupyter labextension list` 来找到 `labextensions`
文件夹的位置. 然后，您可以在该文件夹中删除名为 `codegen-paddle` 的符号链接。

### 测试扩展

#### 前端测试

扩展使用了 [Jest](https://jestjs.io/) 进行 JS 测试。

执行方式：

```sh
jlpm
jlpm test
```

#### 集成测试

扩展使用了 [Playwright](https://playwright.dev/docs/intro/) 来进行集成测试。
更确切地说， the JupyterLab helper [Galata](https://github.com/jupyterlab/jupyterlab/tree/master/galata) 用于处理Jupyterlab中的测试扩展。

更多信息见 [ui-tests](./ui-tests/README.md) README.
