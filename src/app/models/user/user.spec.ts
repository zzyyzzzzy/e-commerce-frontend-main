import { User } from './user';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User("firstname", "lastname", "testgmail@gmail.com", "testimg.jpg")).toBeTruthy();
  });
});
