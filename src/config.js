export class Bionic {
  constructor() {
    this._settings = Object.create(null);
    this._data = Object.create(null);
  }

  get settings() {
    return this._settings;
  }

  get data() {
    return this._data;
  }

  set flagged_content(_content) {
    this._data = {
      ...this._data,
      flagged_data: _content
    };
  }

  set category(_category) {
    this._data = {
      ...this._data,
      category: _category
    };
  }

  set context(_context) {
    this._data = {
      ...this._data,
      context: _context
    };
  }

  set reporting_user(_user) {
    this._data = {
      ...this._data,
      reporting_user: _user
    };
  }

  set flagged_user(_user) {
    this._data = {
      ...this._data,
      flagged_user: _user
    };
  }

  set metadata(_metadata) {
    this._data = {
      ...this._data,
      metadata: {
        ...this._data.metadata,
        ..._metadata
      }
    };
  }

  initialize(key, user, metadata = {}, options = {}) {
    this._data = {
      ...this._data,
      client_key: key,
      reporting_user: user,
      metadata: metadata
    };
    this._settings = {
      env: options.environment || "production"
    };
  }
}

const bionic = new Bionic();
export const initialize = (key, user, metadata, options) =>
  bionic.initialize(key, user, metadata, options);

export default bionic;
