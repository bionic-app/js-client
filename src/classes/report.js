import { precleanData } from './../utils/data';
import ContextConsumer from './contextConsumer';

export default class Report extends ContextConsumer {
  constructor(user, comments, tags, context) {
    super(context);
    this.user = user;
    this.comments = comments;
    this.tags = tags;
  }

  get data() {
    const { user, comments, tags, context } = this;
    return precleanData({
      ...user,
      comments,
      tags,
      context,
    });
  }

  get user() {
    return this._user;
  }

  set user(user = {}) {
    const { id, email, avatar, name } = user;
    this._user = {
      customer_user_id: id,
      email,
      avatar,
      name
    };
  }

  get comments() {
    return this._comments;
  }

  set comments(comments) {
    this._comments = comments;
  }

  get tags() {
    return this._tags;
  }

  set tags(tags = []) {
    this._tags = [];
    tags.forEach(tag => {
      this.addToTags(tag);
    });
  }

  addToTags(val) {
    if (this._tags.length > 5) {
      console.error('cannot exceed 5 tags');
    }
    if (typeof val !== 'string') {
      console.error(
        `values in tags must be strings. ${typeof val} not allowed`
      );
      return;
    }
    this._tags.push(val);
  }

  removeFromTags(val) {
    const indexOfVal = this._tags.indexOf(val);
    if (indexOfVal === -1) {
      console.info(
        `the value, "${val}" cannot be removed from the tags array, as it does not exist `
      );
      return;
    }
    this._tags.splice(indexOfVal, 1);
  }
}
