import { Project } from '../src/project-class';

describe('Check if its an instance of a class', () => {
  const obj = new Project('clean', 2);
  expect(obj.a).toBe('clean');
  expect(obj.b).toBe(2);

  // it('should return a default project Array', () => {
  //     expect(Project()).toStrictEqual();
  // })
});