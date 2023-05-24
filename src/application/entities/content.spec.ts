import { Content } from "./content.value-object";

describe('Notification content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('You have received a new friend request');

    expect(content).toBeTruthy();
  });

  it('should be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('bbb')).toThrow();
  });

  it('should be able to create a notification content with more than 5 characters', () => {
    expect(() => new Content('bbb'.repeat(250))).toThrow();
  });
});
