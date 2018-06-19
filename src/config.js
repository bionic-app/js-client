export class BionicConfig {
  constructor() {
    this._settings = Object.create(null);
  }

  get settings() {
    return this._settings;
  }

  set reporting_user(user) {
    this._settings = {
      ...this._settings,
      reporting_user: user
    };
  }

  set flagged_user(user) {
    this.settings = {
      ...this._settings,
      flagged_user: user
    };
  }

  set metadata(md) {
    this.settings = {
      ...this._settings,
      metadata: {
        ...this._settings.metadata,
        ...md
      }
    };
  }

  set 

  initialize(key, user, options = {}) {
    this._settings = {
      client_key: key,
      reporting_user: user,
      metadata: options.metadata,
      ...this._settings
    };
  }
}

const config = new BionicConfig();

export const initialize = (key, user, options = {}) => {
  config.initialize(key, user, options);
};
export default config;
