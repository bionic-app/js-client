import sinon from 'sinon';
import { BionicClient, FlaggedItem, Report } from '../src';

describe('requester', () => {
  let server;
  let requests;
  let client;
  let flaggedItem;
  let report;

  beforeEach(() => {
    requests = [];
    server = sinon.fakeServer.create();
    server.respondWith([204, { 'Content-Type': 'application/json' }, '']);
    client = new BionicClient('abc');
    flaggedItem = new FlaggedItem();
    report = new Report();
  });

  afterEach(() => {
    server.restore();
  });

  it('should pass the proper params with postJSON', () => {
    client.requester.postJSON = jest.fn();
    const cb = jest.fn();
    client.flagSync(flaggedItem, report, cb);
    expect(client.requester.postJSON).toHaveBeenCalledWith(
      client.options,
      {
        ...flaggedItem.data,
        report: report.data
      },
      cb
    );
  });

  it('should pass the json stringified version of the data from client to xhttp', () => {
    client.requester.xhr = {
      onreadystatechange: jest.fn(),
      open: jest.fn(),
      setRequestHeader: jest.fn(),
      send: jest.fn(),
    };
    client.flagSync(flaggedItem, report);
    expect(client.requester.xhr.send).toHaveBeenCalledWith(
      JSON.stringify({
        report: report.data,
        client_id: client.options.clientId,
        ...flaggedItem.data,
      })
    );
  });

  it('should call xhr.open and xhr.setRequestHeader with appropriate args', () => {
    client.requester.xhr = {
      onreadystatechange: jest.fn(),
      open: jest.fn(),
      setRequestHeader: jest.fn(),
      send: jest.fn(),
    };
    client.flag(flaggedItem, report);
    expect(client.requester.xhr.open).toHaveBeenLastCalledWith(
      'POST',
      client.options.endpoint,
      true
    );
    expect(client.requester.xhr.setRequestHeader).toHaveBeenCalledWith(
      'Content-Type',
      'application/json'
    );
  });

  it('should send an http request with proper data', () => {
    const cb = sinon.spy();
    client.flag(flaggedItem, report, cb);
    server.respond();
    expect(server.requests.length).toEqual(1);
    expect(server.requests[0].url).toEqual(
      'https://stream.bionic-app.com/flags'
    );
    expect(server.requests[0].requestHeaders['Content-Type']).toEqual(
      'application/json;charset=utf-8'
    );
    expect(server.requests[0].requestBody).toEqual(
      JSON.stringify({
        report: report.data,
        client_id: client.options.clientId,
        ...flaggedItem.data,
      })
    );
  });
});
