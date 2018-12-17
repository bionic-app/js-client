export default class ContextConsumer {
    constructor(context) {
        this._context = Object.create(null);
        this.context = context;
    }
    get context() {
        return this._context;
      }
    
      set context(context = {}) {
        const objLength = Object.keys(context).length;
        if (objLength > 10) {
          console.error('context must not have more than 10 attributes');
        } else {
          for (var key in context) {
            this.addToContext(key, context[key]);
          }
        }
      }
    
      addToContext(key, val) {
        if (['boolean', 'string', 'number'].indexOf(typeof val) === -1) {
          console.error(
            `value in context must be a string, number, or boolean. ${typeof val} not allowed`
          );
          return;
        } else if (this._context && Object.keys(this._context).length >= 10) {
          console.error(
            `context must not have more than 10 attributes. '${key}' key not added`
          );
        } else {
          this._context[key] = val;
        }
      }
    
      resetContext() {
        delete this._context;
      }
    
      removeFromContext(key) {
        if (this._context[key] !== undefined) {
          delete this._context[key];
        } else {
          console.info(`${key} does not exist in context`);
        }
      }
}