[įŽäŊä¸­æđ](./README_cn.md) |  **English**đ
# CodeGen JupyterLab Extension

<!--  [![Github Actions Status](https://github.com/chenqianhe/codegenJupyterLabExt/workflows/Build/badge.svg)](https://github.com/chenqianhe/codegenJupyterLabExt/actions/workflows/build.yml)  --> 

[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/chenqianhe/codegenJupyterLabExt/main?urlpath=lab)

A code generation JupyterLab extension based on [CodeGen model](https://github.com/PaddlePaddle/PaddleNLP/tree/develop/examples/code_generation/codegen) and [PaddlePaddle](https://www.paddlepaddle.org.cn/en), which provides **Python code fragment generation**, **Python code generation based on comments**, and other functions.

## Modification and validation of parameter settings

CodeGen extension provides parameter modification directly on the setting page of JupyterLab. **However, please note that after parameter modification, restart JupyterLab to make the modification effective.**

This is because the update after parameter modification involves the reload of the backend model.

## Requirements

- JupyterLab >= 3.0

## Install

To install the extension, you need to install PaddlePaddle and PaddleNLP according to your own hardware type. 

Please refer to [PaddlePaddle Installation](https://www.paddlepaddle.org.cn/en/install/quick?docurl=/documentation/docs/en/install/pip/windows-pip_en.html) and [PaddleNLP Installation](https://github.com/PaddlePaddle/PaddleNLP/blob/develop/README_en.md#installation)

Next, please refer to [Development install](https://github.com/chenqianhe/codegenJupyterLabExt/edit/main/README.md#development-install) to complete the installation

> About why we cannot provide RELEASE installation mode
>
> We develop based on PaddlePaddle AI framework, but various AI frameworks have different installation packages when installed on different hardware machines, so we cannot provide a common installation method or package.

## Contributing

### Development install

Note: You will need NodeJS to build the extension package.

The `jlpm` command is JupyterLab's pinned version of
[yarn](https://yarnpkg.com/) that is installed with JupyterLab. You may use
`yarn` or `npm` in lieu of `jlpm` below.

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

You can watch the source directory and run JupyterLab at the same time in different terminals to watch for changes in the extension's source and automatically rebuild the extension.

```bash
# Watch the source directory in one terminal, automatically rebuilding when needed
jlpm watch
# Run JupyterLab in another terminal
jupyter lab
```

With the watch command running, every saved change will immediately be built locally and available in your running JupyterLab. Refresh JupyterLab to load the change in your browser (you may need to wait several seconds for the extension to be rebuilt).

By default, the `jlpm build` command generates the source maps for this extension to make it easier to debug using the browser dev tools. To also generate source maps for the JupyterLab core extensions, you can run the following command:

```bash
jupyter lab build --minimize=False
```

### Development uninstall

```bash
pip uninstall codegen_paddle
```

In development mode, you will also need to remove the symlink created by `jupyter labextension develop`
command. To find its location, you can run `jupyter labextension list` to figure out where the `labextensions`
folder is located. Then you can remove the symlink named `codegen-paddle` within that folder.

### Testing the extension

#### Frontend tests

This extension is using [Jest](https://jestjs.io/) for JavaScript code testing.

To execute them, execute:

```sh
jlpm
jlpm test
```

#### Integration tests

This extension uses [Playwright](https://playwright.dev/docs/intro/) for the integration tests (aka user level tests).
More precisely, the JupyterLab helper [Galata](https://github.com/jupyterlab/jupyterlab/tree/master/galata) is used to handle testing the extension in JupyterLab.

More information are provided within the [ui-tests](./ui-tests/README.md) README.
