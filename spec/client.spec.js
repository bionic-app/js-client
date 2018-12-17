import { BionicClient } from '../src';

describe('BionicClient', () => {
  const options = { endpoint: 'http://test.com', debug: true };
    it('should export bionic', () => {
      expect(BionicClient).not.toBeUndefined();
    });
  
    it('initialize the client with key and options', () => {
      
      const client = new BionicClient('abc-123');

      expect(client.options.clientId).not.toBeNull();
      expect(client.options.endpoint).not.toBeNull();
    });
  
    it('should allow me to set debug and the endpoint in settings, on init', () => {
      const client = new BionicClient(
        '123',
        options
      );
  
      expect(client.options.debug).toEqual(true);
      expect(client.options.endpoint).toEqual(options.endpoint);
    });
  
    it('should require a clientId on initialize', () => {
      console.error = jest.fn();
      new BionicClient();
      expect(console.error).toHaveBeenCalled();
    });
  
  
    it('should have a default endpoint set', () => {
      const client = new BionicClient();
      expect(client.options.endpoint).toEqual(
        'https://stream.bionic-app.com/flags'
      );
    });
  
    it('should return nothing if resolved with flag', () => {
      const client = new BionicClient();
      client._flag = jest.fn((fake, fake2, cb) => cb());
      return client.flag().then(result => {
        expect(result).toBeUndefined();
      });
    });
  
    it('should return error on fail with flagAsync', () => {
      const client = new BionicClient();
      client._flag = jest.fn((fake, fake2, cb) => cb('fail'));
      return client.flag().catch(result => {
        expect(result).toEqual('fail');
      });
    });
  });
