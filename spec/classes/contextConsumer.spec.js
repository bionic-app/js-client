import ContextConsumer from '../../src/classes/contextConsumer';

describe('ContextConsumer', () => {
  
    
    it('should allow val in (key, val) of context to be a string, bool, or number', () => {
      const consumer = new ContextConsumer({
        test: 'one',
        test2: 1,
        test3: false,
      });

      expect(Object.keys(consumer._context).length).toBe(3);
    });
  
    it('should dissallow val in (key, val) of metadata to be object, function, or undefined/null', () => {
      console.error = jest.fn();
      const consumer = new ContextConsumer({ test: { hello: 'world' } });
      expect(console.error).toHaveBeenCalled();
      expect(Object.keys(consumer._context).length).toEqual(0);
      consumer.addToContext('test', {'test': 'test'});
      expect(console.error).toHaveBeenCalledTimes(2);
      expect(Object.keys(consumer._context).length).toEqual(0);
    });
  
  });
