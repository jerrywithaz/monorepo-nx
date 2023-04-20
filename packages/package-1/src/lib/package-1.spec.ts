import { isEven } from './package-1';

describe('package1', () => {
  it('should work', () => {
    expect(isEven(2)).toEqual(true);
  });
});
