import Requester from "./classes/requester";
import ContextConsumer from "./classes/contextConsumer";

export default class BionicClient {
  constructor(clientId, options = {}) {
    if (!clientId) {
      console.error('Please pass a client id when initializing BionicClient')
    }

    this.options = { clientId, ...options };
    this.requester = new Requester();
  }

  // General options related to the client, this cascades into every 
  // supporting class as a first param for DI Injection (simple module, simple DI!)
  set options(options) {
    const { debug = false, clientId, endpoint = 'https://stream.bionic-app.com/flags' } = options;
    this._options = {
      debug,
      clientId,
      endpoint,
    };
  }

  get options() {
    return this._options;
  }

  _flag(flaggedItem, report, cb) {
    const data = {
      ...flaggedItem.data,
      report: report.data
    }
    return this.requester.postJSON(this.options, data, cb);
  }

  flagSync(flaggedItem, report, cb) {
    return this._flag(flaggedItem, report, cb)
  }

  flag(flaggedItem, report) {
    return new Promise((resolve, reject) => {
      const cb = error => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      };
      this._flag(flaggedItem, report, cb);
    });
  }

}
