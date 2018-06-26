import config from './config';

export default class BionicRequests {
  constructor(server) {
    this._server = 'https://stream.bionic-app.net';
    if (!!server) {
      this._server = 'https://stream.${server}';
    }
    this._url = `${this._server}/flags`;
  }

  sendFlag() {
    return new Promise((resolve, reject) => {
      const xhttp = new XMLHttpRequest();

      xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status >= 299) {
          if (this.status >= 299) {
            console.error('failed to report content to bionic');
            reject(JSON.parse(this.responseText));
          } else if (this.status === 204) {
            resolve();
          }
        }
      };

      xhttp.open('POST', this._url, true);
      xhttp.setRequestHeader('Content-Type', 'application/json');
      xhttp.send(JSON.stringify(config.data));
    });
  }
}
