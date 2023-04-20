import { isOdd } from './package-2';

describe('package2', () => {
  it('should work', () => {
    expect(isOdd(3)).toEqual(true);
  });
  it('should work', () => {
    expect(isOdd(4)).toEqual(false);
  });
});
