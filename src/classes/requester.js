export default class Requester {
  constructor() {
    this.xhr = new XMLHttpRequest();
  }

  postJSON(settings, body, cb) {
    const { endpoint, clientId: client_id } = settings;
    this.xhr.onreadystatechange = function () {
      if (this.readyState === 4 && this.status >= 299) {
        if (this.status >= 299) {
          console.error('failed to report content to bionic');
          if (cb) {
            cb(this.responseText);
          }
        } else if (this.status === 204) {
          if (cb) {
            cb(null);
          }
        }
      }
    };
    this.xhr.open('POST', endpoint, true);
    this.xhr.setRequestHeader('Content-Type', 'application/json');
    this.xhr.send(JSON.stringify({ ...body, client_id }));

    return this._xhr;
  }
}
