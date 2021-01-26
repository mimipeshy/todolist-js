import { getProjects } from '../src/storage';

describe('Check local storage methods', () => {
  const defaultProj = [{ title: 'Default Project', todos: [] }];
  it('should return a default project Array', () => {
    expect(getProjects()).toStrictEqual(defaultProj);
  });
});