export default class Requester {
  postJSON(endpoint, body) {
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

      xhttp.open('POST', endpoint, true);
      xhttp.setRequestHeader('Content-Type', 'application/json');
      xhttp.send(JSON.stringify(body));
    });
  }
}
