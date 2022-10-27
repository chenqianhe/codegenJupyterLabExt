import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { requestAPI } from './handler';

/**
 * Initialization data for the codegen-paddle extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'codegen-paddle:plugin',
  autoStart: true,
  activate: async (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension codegen-paddle is activated!');

    // GET request
    try {
      const data = await requestAPI<any>('hello');
      console.log(data);
    } catch (reason) {
      console.error(`Error on GET /codegen-paddle-backend/hello.\n${reason}`);
    }

    // POST request
    const dataToSend = { name: 'George' };
    try {
      const reply = await requestAPI<any>('hello', {
        body: JSON.stringify(dataToSend),
        method: 'POST'
      });
      console.log(reply);
    } catch (reason) {
      console.error(
        `Error on POST /codegen-paddle-backend/hello ${dataToSend}.\n${reason}`
      );
    }
  }
};

export default plugin;
