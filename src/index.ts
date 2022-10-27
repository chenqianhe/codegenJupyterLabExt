import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the codegen-paddle extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'codegen-paddle:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension codegen-paddle is activated!');
  }
};

export default plugin;
