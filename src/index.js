import Requester from './requester';

export class Bionic {
  constructor() {
    this._settings = Object.create(null);
    this._data = Object.create(null);
    this.requestor = new Requester();
  }

  // GETTERS AND SETTERS

  get clientKey() {
    return this._data.client_key;
  }

  set settings(data) {
    const { debug, endpoint = 'https://stream.bionic-app.com/flags' } = data;
    this._settings = {
      debug,
      endpoint,
    };
  }

  get settings() {
    return this._settings;
  }

  get data() {
    return this.precleanData(this._data);
  }

  set content(data) {
    const {
      id,
      contentType: content_type,
      content,
      reporterComments: reporter_comments,
    } = data;
    this._data = {
      ...this._data,
      content: {
        id,
        content_type,
        content,
        reporter_comments,
      },
    };
  }

  set categoryId(id) {
    this._data = {
      ...this._data,
      category_id: id,
    };
  }

  set context(data) {
    const { id, content, link } = data;
    this._data = {
      ...this._data,
      context: {
        id,
        content,
        link,
      },
    };
  }

  set reportingUser(data) {
    const { id, name, email, avatar } = data;
    this._data = {
      ...this._data,
      reporting_user: {
        id,
        name,
        email,
        avatar,
      },
    };
  }

  get reportingUser() {
    return this._data.reporting_user;
  }

  set flaggedUser(data) {
    const { id, name, email, avatar } = data;
    this._data = {
      ...this._data,
      flagged_user: {
        id,
        name,
        email,
        avatar,
      },
    };
  }

  set metadata(data = {}) {
    const objLength = Object.keys(data).length;
    if (objLength > 10) {
      throw new Error('metadata must not have more than 10 attributes');
    }
    for (var key in data) {
      this.addToMetadata(key, data[key]);
    }
  }

  get metadata() {
    return this._data.metadata;
  }

  addToMetadata(key, val) {
    if (['boolean', 'string', 'number'].indexOf(typeof val) === -1) {
      throw new Error(
        `value in metadata must be a string, number, or boolean. ${typeof val} not allowed`
      );
    }
    if (Object.keys(this._data.metadata).length >= 10) {
      throw new Error('metadata must not have more than 10 attributes');
    }
    this._data.metadata[key] = val;
  }

  resetMetadata() {
    this._data.metadata = {};
  }

  removeFromMetadata(key) {
    if (this._data.metadata[key] !== undefined) {
      delete this._data.metadata[key];
    } else {
      console.info(`${key} does not exist in metadata`);
    }
  }

  // PRIMARY METHODS
  initialize(key, user = {}, metadata = {}, options = {}) {
    this._data = {
      ...this._data,
      client_key: key,
      reporting_user: user,
      metadata: metadata,
    };
    this.settings = options;
  }

  flag() {
    return this.requestor.postJSON(this.settings.endpoint, this.data);
  }

  // HELPERS

  // This strips any undefined key/val pairs
  precleanData(data) {
    const output = {};
    const keys = Object.keys(data);
    if (keys.length === 0) {
      return data;
    } else {
      keys.forEach(e => {
        if (typeof data[e] === 'object') {
          output[e] = this.precleanData(data[e]);
        } else if (data[e] !== undefined) {
          output[e] = data[e];
        }
      });
    }
    return output;
  }
}

//creates a singleton
const singleton = new Bionic();
export default singleton;
