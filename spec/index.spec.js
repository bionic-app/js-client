import singleton, { Bionic } from '../src';

describe('exports', () => {
  it('should export bionic', () => {
    expect(singleton).not.toBeUndefined();
  });

  it('initialize the client with key and user', () => {
    const service = new Bionic();
    service.initialize('123', { id: '1' });
    expect(service.reportingUser).not.toBeUndefined();
    expect(service.clientKey).not.toBeNull();
  });

  it('should allow me to set debug and the endpoint in settings, on init', () => {
    const service = new Bionic();
    service.initialize(
      '123',
      { id: '1' },
      {},
      { debug: true, endpoint: 'http://test.test.com' }
    );

    expect(service.settings.debug).toEqual(true);
    expect(service.settings.endpoint).toEqual('http://test.test.com');
  });

  it('should require a client_key on initialize', () => {});

  it('should allow val in (key, val) of metadata to be a string, bool, or number', () => {
    const service = new Bionic();
    service.initialize('123', { id: '1' });
    service.metadata = {
      test: '1',
      test2: 1,
      test3: true,
    };
    expect(Object.keys(service.metadata).length).toBe(3);
  });

  it('should dissallow val in (key, val) of metadata to be object, function, or undefined/null', () => {
    const service = new Bionic();
    service.initialize('123', { id: '1' });
    expect(() => {
      service.metadata = { test: { hello: 'world' } };
    }).toThrowError();
    const exFunc = function () {
      return null;
    };
    expect(() => {
      service.metadata = { test: exFunc };
    }).toThrowError();
  });

  it('should set data in the _data object with each respective setter', () => {
    const service = new Bionic();
    service.initialize('123');
    service.reportingUser = { id: '1' };
    service.flaggedUser = { id: '2' };
    service.context = {
      id: '1',
      content: 'Hello World',
      link: 'https://test.test.com',
    };
    service.categoryId = 'abc1123';
    service.addToMetadata('test', 'test');
    service.content = {
      id: '1',
      contentType: 'text',
      content: 'damn daniel',
      reporterComments: 'bad stuff',
    };
    expect(service.data).toEqual({
      category_id: 'abc1123',
      client_key: '123',
      context: {
        id: '1',
        content: 'Hello World',
        link: 'https://test.test.com',
      },
      metadata: {
        test: 'test',
      },
      content: {
        id: '1',
        content_type: 'text',
        content: 'damn daniel',
        reporter_comments: 'bad stuff',
      },
      flagged_user: {
        id: '2',
      },
      reporting_user: {
        id: '1',
      },
    });
  });

  it('should strip objects of their undefined vals with precleanData', () => {
    var d = {
      test: undefined,
      test1: 'not undefined',
      test2: {
        test3: 'hello',
        test4: undefined,
      },
    };
    expect(singleton.precleanData(d)).toEqual({
      test1: 'not undefined',
      test2: {
        test3: 'hello',
      },
    });
  });

  it('should have a default endpoint set', () => {
    const service = new Bionic();
    service.initialize('123', { id: '1' });
    expect(service.settings.endpoint).toEqual(
      'https://stream.bionic-app.com/flags'
    );
  });

  it('should return nothing if resolved with flagAsync', () => {
    const service = new Bionic();
    service.initialize('123', { id: '1' });
    service.flag = jest.fn(cb => cb());
    return service.flagAsync().then(result => {
      expect(result).toBeUndefined();
    });
  });

  it('should return error on fail with flagAsync', () => {
    const service = new Bionic();
    service.initialize('123', { id: '1' });
    service.flag = jest.fn(cb => cb('fail'));
    return service.flagAsync().catch(result => {
      expect(result).toEqual('fail');
    });
  });
});
