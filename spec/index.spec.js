import * as bionic from '../src';

describe('exports', () => {
  it('should export config', () => {
    expect(bionic.config).not.toBeUndefined();
  });

  it('should export requestor', () => {
    expect(bionic.requestor).not.toBeUndefined();
  });

  it('should export inititialize', () => {
    expect(bionic.initialize).not.toBeUndefined();
  });
});
