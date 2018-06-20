import config from "./config";

export default class BionicRequests {
  constructor(server) {
    this._server = "https://stream.bionic-app.com";
    if (!!server) {
      this._server = "https://stream.${server}";
    }
    this._url = this._server + "/flags";
  }

  sendFlag() {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status >= 299) {
        console.error("something terrible happened");
      }
    };

    xhttp.open("POST", this._url, true);
    xhttp.setRequestHeader("Content-Type", "application/json");

    xhttp.send(config.model);
  }
}
