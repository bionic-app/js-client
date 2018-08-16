import sinon from 'sinon';
import singleton, { Bionic } from '../src';

describe('requester', () => {
  let server;
  let requests = [];
  let service;

  beforeEach(() => {
    requests = [];
    server = sinon.fakeServer.create();
    server.respondWith([204, { 'Content-Type': 'application/json' }, '']);
    service = new Bionic();
    service.initialize('123', { id: '1' });
  });

  afterEach(() => {
    server.restore();
  });

  it('should pass the proper params with postJSON', () => {
    service.requester.postJSON = jest.fn();
    const cb = jest.fn();
    service.flag(cb);
    expect(service.requester.postJSON).toHaveBeenCalledWith(
      service.settings.endpoint,
      service.data,
      cb
    );
  });

  it('should pass the json stringified version of the data from service to xhttp', () => {
    service.requester.xhr = {
      onreadystatechange: jest.fn(),
      open: jest.fn(),
      setRequestHeader: jest.fn(),
      send: jest.fn(),
    };
    service.flag();
    expect(service.requester.xhr.send).toHaveBeenCalledWith(
      JSON.stringify(service.data)
    );
  });

  it('should call xhr.open and xhr.setRequestHeader with appropriate args', () => {
    service.requester.xhr = {
      onreadystatechange: jest.fn(),
      open: jest.fn(),
      setRequestHeader: jest.fn(),
      send: jest.fn(),
    };
    service.flag();
    expect(service.requester.xhr.open).toHaveBeenLastCalledWith(
      'POST',
      service.settings.endpoint,
      true
    );
    expect(service.requester.xhr.setRequestHeader).toHaveBeenCalledWith(
      'Content-Type',
      'application/json'
    );
  });

  it('should send an http request with proper data', () => {
    const cb = sinon.spy();
    service.flag(cb);
    server.respond();
    expect(server.requests.length).toEqual(1);
    expect(server.requests[0].url).toEqual(
      'https://stream.bionic-app.com/flags'
    );
    expect(server.requests[0].requestHeaders['Content-Type']).toEqual(
      'application/json;charset=utf-8'
    );
    expect(server.requests[0].requestBody).toEqual(
      JSON.stringify(service.data)
    );
  });
});
