import { precleanData } from './../utils/data';
import ContextConsumer from './contextConsumer';

export default class FlaggedItem extends ContextConsumer {
  
  /**
   * @param  {} options -- provided by client config
   * @param  {} baseContext -- provided by client config
   * @param  {} sourceId -- id of data source (found in bionic dashboard)
   * @param  {} content -- the data being flagged
   * @param  {} user -- the user who created the flagged content
   * @param  {} parent -- flagged content's parent content for context (e.g. an original post, a comment, etc.)
   */
  constructor(sourceId, content, user, parent, context) {
    super(context);
    this.sourceId = sourceId;
    this.content = content;
    this.user = user;
    this.parent = parent;
    
    this._data = Object.create(null);
  }


  get data() {
    return precleanData(this._data);
  }

  set sourceId(sourceId) {
    this._sourceId = sourceId;
  }

  get sourceId() {
    return this._sourceId;
  }

  set content(data = {}) {
    const {
      id,
      contentType: content_type,
      content,
      timestamp
    } = data;
    this._content = {
      id,
      content_type,
      content,
      timestamp
    }
  }

  get content() {
    return this._content;
  }

  set parent(data = {}) {
    const { 
      id,
      contentType: content_type,
      content,
      link,
      timestamp
    } = data;
    this._parent = {
      id,
      content_type,
      content,
      link,
      timestamp
    };
  }

  get parent() {
    return this._parent;
  }

  set user(data = {}) {
    const { id, name, email, avatar } = data;
    this._user = {
      id,
      name,
      email,
      avatar
    };
  }

  get user() {
    return this._user;
  }
}
