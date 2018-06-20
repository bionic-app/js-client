export class BionicConfig {
  constructor() {
    this._settings = Object.create(null);
  }

  get settings() {
    return this._settings;
  }

  set flagged_content(_content) {
    this._settings = {
      ...this._settings,
      flagged_data: _content
    };
  }

  set category(_category) {
    this._settings = {
      ...this._settings,
      category: _category
    };
  }

  set context(_context) {
    this._settings = {
      ...this._settings,
      context: _context
    };
  }

  set reporting_user(_user) {
    this._settings = {
      ...this._settings,
      reporting_user: _user
    };
  }

  set flagged_user(_user) {
    this._settings = {
      ...this._settings,
      flagged_user: _user
    };
  }

  set metadata(_metadata) {
    this._settings = {
      ...this._settings,
      metadata: {
        ...this._settings.metadata,
        ..._metadata
      }
    };
  }

  initialize(key, user, options = {}) {
    this._settings = {
      ...this._settings,
      client_key: key,
      reporting_user: user,
      metadata: options.metadata,
      env: options.environment || "production"
    };
  }
}

const config = new BionicConfig();

export const initialize = (key, user, options = {}) => {
  config.initialize(key, user, options);
};
export default config;
