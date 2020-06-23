import { UserFilterByNamePipe } from './user-filter-by-name.pipe';

describe('UserFilterByNamePipe', () => {
  it('create an instance', () => {
    const pipe = new UserFilterByNamePipe();
    expect(pipe).toBeTruthy();
  });
});
